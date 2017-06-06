import styled from 'styled-components'

const Box = styled.div`
    box-sizing: border-box;
    width: ${props => props.width};
    height: ${props => props.height};
    background: white;
    border-radius: 20px;
    box-shadow: 2px 2px 10px grey;
    margin-left: 50px;
    margin-top: -27vh;
`

export default Box