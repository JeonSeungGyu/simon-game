import styled from 'styled-components'
const scoreWidth = 90
const scoreHeight = 90

// pad height && pad width = 340px
const left = (340-scoreWidth)/2
const bottom = (340 + scoreHeight)/2

const Score = styled.div`
    color: white;
    background: black;
    width: ${scoreWidth}px;
    height: ${scoreHeight}px;
    position: relative;
    left: ${left}px;
    bottom: ${bottom}px;
    border-radius: 100%;
    text-align: center;
    font-size: 60px;
    font-weight: bold;
`

export default Score