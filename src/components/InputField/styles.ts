import styled from 'styled-components'

export const Label = styled.label`
    display: flex;
`

export const Input = styled.input`
    font-size: 16px;
    width: 280px;
    height: 35px;
    padding: 5px;
    border-right: none;
    background: #3b4148;
    border: none;
    color: #fffc;
    outline: none;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    &:focus {
        outline: 1px solid #dd4881;
    }
`

export const Button = styled.button`
    width: 85px;
    height: 35px;
    background-color: #dd4881;
    cursor: pointer;
    border: none;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    color: #fffc;
`
