import { useState } from "react";
import { Form } from "react-bootstrap";
import { TextField, ButtonComponent } from "./elements";
import { IQrTextProps } from "./types";

const Instagram = ({ setQrText }: IQrTextProps) => {
  const [username, setUsername] = useState<string>('');

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    setQrText('https://instagram.com/' + username);
    return false;
  }

  return (
    <Form onSubmit={handleSubmit}>
      <TextField 
        label="Username"
        className="mb-3"
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        onClickIcon={() => setUsername('')}
      />
      <ButtonComponent title="Generate" />
    </Form>
  )
}

export default Instagram