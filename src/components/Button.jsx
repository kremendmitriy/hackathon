/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';

const ButtonFunctional = ({ children, ...props  }) => {
    return (
        <button {...props}>
            {children}
        </button>
    )
}

export const Button = styled(ButtonFunctional)`
    display: flex;
    font-size: 18px;
    width: auto;
    height: 40px;
    border: 1px solid grey;
    border-radius: ${({ borderRadius = '0'}) => borderRadius};

    background-color: ${({ backgroundColor = 'grey' }) => backgroundColor};
`