import { ChangeEvent, ElementType, FC } from "react";
import { Form } from "react-bootstrap";

interface IProps {
  label: string;
  className: string;
  value: string | number;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  as: ElementType<any>;
}

const TextArea: FC<IProps> = ({
  label,
  className,
  value,
  onChange,
  as,
}) => {
  return (
    <Form.Group className={className}>
      <Form.Label>{label}</Form.Label>
      <Form.Control
        as={as}
        value={value} 
        onChange={(e: ChangeEvent<HTMLInputElement>) => onChange(e)} 
      />
    </Form.Group>
  )
}

export default TextArea;