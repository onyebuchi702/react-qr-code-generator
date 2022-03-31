import { ChangeEvent, FC } from "react";
import { Form } from "react-bootstrap";

interface IProps {
  label: string;
  className: string;
  type: string;
  value: string | number;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const TextField: FC<IProps> = ({
  label,
  className,
  type,
  value,
  onChange,
}) => {
  return (
    <Form.Group className={className}>
      <Form.Label>{label}</Form.Label>
      <Form.Control 
        type={type}
        value={value} 
        onChange={(e: ChangeEvent<HTMLInputElement>) => onChange(e)} 
      />
    </Form.Group>
  )
}

export default TextField