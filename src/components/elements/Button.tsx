import { FC, ReactNode } from "react";
import { Button } from "react-bootstrap";

type ButtonVariant = 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'dark' | 'light' | string;

type ButtonType = "button" | "submit" | "reset" | undefined;

interface IProps {
  type?: ButtonType;
  variant?: ButtonVariant;
  title: string;
  children?: ReactNode;
  disabled?: boolean;
  className?: string;
  onClick?: () => void;
}

const ButtonComponent: FC<IProps> = ({
  type = "submit",
  variant = "primary",
  disabled = false,
  className,
  title,
  children,
  onClick,
}) => {
  return (
    <Button
      className={className}
      type={type} 
      variant={variant} 
      disabled={disabled}
      onClick={onClick}
    >
      {title}
      {children}
    </Button>
  )
}

export default ButtonComponent