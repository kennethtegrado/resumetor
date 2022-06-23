import type { FunctionComponent, ReactNode } from 'react';

const Button: FunctionComponent<ButtonProps> = ({ children }) => {
    return <button className="button-component">{children}</button>;
};

export default Button;

interface ButtonProps {
    children: ReactNode;
}
