import { useState } from "react";
import { Form } from "react-bootstrap";
import { TextField, TextArea, ButtonComponent } from "./elements";
import { IQrTextProps } from "./types";

const Mail = ({ setQrText }: IQrTextProps) => {
  const [to, setTo] = useState<string>('');
  const [subject, setSubject] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    setQrText(`MATMSG:TO:${to};SUB:${subject};BODY:${message};;`);
    return false;
  }

  return (
    <Form onSubmit={handleSubmit}>
      <TextField 
        label="To"
        className="mb-3"
        type="email"
        value={to}
        onChange={(e) => setTo(e.target.value)}
        onClickIcon={() => setTo('')}
      />
      <TextField 
        label="Subject"
        className="mb-3"
        type="text"
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
        onClickIcon={() => setSubject('')}
      />
      <TextArea 
        label="Message"
        className="mb-3"
        as="textarea"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <ButtonComponent 
        title="Generate" 
        disabled={!message || !subject || !to} 
      />
    </Form>
  )
}

export default Mail