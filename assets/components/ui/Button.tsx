import type { FunctionComponent, ReactNode } from 'react';

const Button: FunctionComponent<ButtonProps> = ({ outlined, children }) => {
    return (
        <button className={`button button-component${outlined && '-outlined'}`}>
            {children}
        </button>
    );
};

export default Button;

interface ButtonProps {
    children: ReactNode;
    outlined?: boolean;
}
