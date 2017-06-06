import styled from 'styled-components'
import { keyframes } from 'styled-components'

const blink = keyframes`
    0% {
        opacity: 1;
    }

    50% {
        opacity: 0;
    }

    100% {
        opacity: 1;
    }
`

const Pad = styled.div`
    width: 150px;
    height: 150px;
    background-color: ${props => props.strict ? props.strictColor : props.color};
    margin: 10px;
    cursor: pointer;
    animation: ${props => props.playing ? `${blink} 0.5s linear` : undefined};
    &.top-left {
        border-radius: 100% 0 0 0;
    }
    &.top-right {
        border-radius: 0 100% 0 0;
    }
    &.bottom-left {
        border-radius: 0 0 0 100%;
    }
    &.bottom-right {
        border-radius: 0 0 100% 0;
    }
`

export default Pad