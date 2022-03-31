import { ChangeEvent, FC } from "react";
import { Form } from "react-bootstrap";
import { greaterThanValue } from "../../utils";
import TextIcon from "./TextIcon";

interface IProps {
  label: string;
  className: string;
  type: string;
  value: string | number;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onClickIcon: () => void;
}

const TextField: FC<IProps> = ({
  label,
  className,
  type,
  value,
  onChange,
  onClickIcon,
}) => {
  return (
    <Form.Group className={className} style={{ position: 'relative' }}>
      <Form.Label>{label}</Form.Label>
      <Form.Control
        type={type}
        value={value} 
        onChange={(e: ChangeEvent<HTMLInputElement>) => onChange(e)} 
      />
      {greaterThanValue(value) && (
        <TextIcon>
          <svg
            width="21"
            height="21"
            viewBox="0 0 24 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            onClick={onClickIcon}
          >
            <use href="/assets/icons.svg#login-cancel"></use>
          </svg>
        </TextIcon>
      )}
    </Form.Group>
  )
}

export default TextField