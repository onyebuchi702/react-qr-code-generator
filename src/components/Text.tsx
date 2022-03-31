import { useState } from "react";
import { ButtonComponent, TextField } from "./elements";
import { Form } from "react-bootstrap";
import { IProps } from "./types";

const Text = ({ setQrText }: IProps) => {
  const [text, setText] = useState<string>('');

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    setQrText(text);
    return false;
  }

  return (
    <Form onSubmit={handleSubmit}>
      <TextField 
        label="Text or URL"
        className="mb-3"
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        onClickIcon={() => setText('')}
      />
      <ButtonComponent title="Generate" />
    </Form>
  )
}

export default Text