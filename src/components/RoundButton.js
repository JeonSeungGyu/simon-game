import styled from 'styled-components'

const RoundButton = styled.button`
    width: 30px;
    height: 30px;
    background: ${props => props.color};
    cursor: pointer;
    border-radius: 100%;
    margin-left: 5px;
    margin-top: 5px;
`

export default RoundButton