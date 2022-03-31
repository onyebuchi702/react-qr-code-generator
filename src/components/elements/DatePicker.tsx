import { ChangeEvent, FC } from "react";
import { Form } from "react-bootstrap";

interface IProps {
  label: string;
  className: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const DatePicker: FC<IProps> = ({
  label,
  className,
  value,
  onChange,
}) => {
  return (
    <Form.Group className={className}>
      <Form.Label>{label}</Form.Label>
      <Form.Control
        type="date"
        value={value} 
        onChange={(e: ChangeEvent<HTMLInputElement>) => onChange(e)} 
      />
    </Form.Group>
  )
}

export default DatePicker;