import { FC, ReactNode } from "react";

interface ITextIconProps {
  children: ReactNode;
}

const TextIcon: FC<ITextIconProps> = ({ children }) => {
  return (
    <span 
      style={{
        position: 'absolute',
        textAlign: 'right',
        right: '24px',
        top: '38px',
        verticalAlign: 'middle',
        fontWeight: 'bold',
        cursor: 'pointer',
      }} 
    >
      {children}
    </span>
  );
};

export default TextIcon;
