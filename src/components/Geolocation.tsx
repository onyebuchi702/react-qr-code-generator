import { useState } from "react";
import { Form, Spinner } from "react-bootstrap";
import { ButtonComponent, TextField } from "./elements";
import { IProps } from "./types";

const Geolocation = ({ setQrText }: IProps) => {
  const [lat, setLat] = useState<number | string>('');
  const [long, setLong] = useState<number | string>('');
  const [locationLoading, setLocationLoading] = useState<boolean>(false);

  const getCurrentLocation = () => {
    setLocationLoading(true);
    navigator.geolocation.getCurrentPosition((pos: GeolocationPosition) => {
      setLat(pos.coords.latitude);
      setLong(pos.coords.longitude);
      setLocationLoading(false);
    }, (err: GeolocationPositionError) => {
      alert(err.message);
      setLocationLoading(false);
    }, {
      enableHighAccuracy: true
    });
  }

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    setQrText('http://maps.google.com/maps?q=' + lat + ','+ long);
    return false;
  }

  return (
    <Form onSubmit={handleSubmit}>
      <TextField
        className="mb-3"
        type="text"
        value={lat}
        label="Latitude"
        onChange={(e) => setLat(e.target.value)}
        onClickIcon={() => setLat('')}
      />
      <TextField
        className="mb-3"
        type="text"
        value={long}
        label="Longitude"
        onChange={(e) => setLong(e.target.value)}
        onClickIcon={() => setLong('')}
      />
      <ButtonComponent 
        title="Set Current Location" 
        variant="secondary" 
        type="button" 
        className="me-2" 
        disabled={locationLoading} 
        onClick={getCurrentLocation}
      >
        {locationLoading && 
          <Spinner animation="border" className="me-2 align-middle" />
        }
      </ButtonComponent>
      <ButtonComponent title="Generate" disabled={!lat && !long} />
    </Form>
  )
}

export default Geolocation