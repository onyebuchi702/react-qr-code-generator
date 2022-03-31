import { FC, useState } from "react";
import { Form } from "react-bootstrap";
import { TextField, ButtonComponent } from "./elements";
import { IQrTextProps } from "./types";

const Sms: FC<IQrTextProps> = ({ setQrText }) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    setQrText(`smsto:${phoneNumber}:${message}`);
    return false;
  }

  return (
    <Form onSubmit={handleSubmit}>
      <TextField 
        label="Phone Number"
        className="mb-3"
        type="text"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
        onClickIcon={() => setPhoneNumber('')}
      />
      <TextField 
        label="Message (Optional)"
        className="mb-3"
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onClickIcon={() => setMessage('')}
      />
      <ButtonComponent title="Generate" disabled={!phoneNumber} />
    </Form>
  )
}

export default Sms