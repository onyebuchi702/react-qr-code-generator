import { Dispatch, SetStateAction, useState } from "react";
import { Button, Form } from "react-bootstrap";

interface IProps {
  setQrText: Dispatch<SetStateAction<string>>
}

const Text = ({ setQrText }: IProps) => {
  const [text, setText] = useState<string>('');

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    setQrText(text);
    return false;
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3">
        <Form.Label>Text or URL</Form.Label>
        <Form.Control 
          type="text" 
          value={text} 
          onChange={(e) => setText(e.target.value)} 
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Generate
      </Button>
    </Form>
  )
}

export default Text