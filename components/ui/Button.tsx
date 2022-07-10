import type { FunctionComponent, ReactNode } from 'react';

const Button: FunctionComponent<ButtonProps> = ({
    outlined,
    children,
    block,
    onClick,
}) => {
    return (
        <button
            className={`button button-component${outlined ? '-outlined' : ''} ${
                block && 'button-component-block'
            }`}
            onClick={onClick}
        >
            {children}
        </button>
    );
};

export default Button;

interface ButtonProps {
    children: ReactNode;
    outlined?: boolean;
    block?: boolean;
    onClick?: () => void;
}
