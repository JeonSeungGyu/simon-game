import React from 'react'
import RoundButton from '../components/RoundButton'
import Box from '../components/Box'
import Label from '../components/Label'
import Flexboard from '../components/Flexboard'

import { sleep } from '../utils/sleep'

/*
    evnet listener expects function to be returned but got object error :
    return function inside onClick handler
*/
class PadControl extends React.Component {
    render () {

        /*
          positions = ['top-left', 'top-right', 'bottom-left', 'bottom-right']
        
          playSeq(parm1, parm2)
          @param1 : array - positions being played
          @param2 : boolean - preplay condition 
        */
        return (
            <Flexboard margin={'auto'}>
                <Box 
                    width={'240px'} 
                    height={'40px'}
                >
                    <RoundButton 
                        onClick={() => { 
                            if (this.props.status !== 'playing..') {
                                const startAgain = async () => {
                                    await this.props.setToInitial()
                                    await sleep(100)
                                    await (() => {
                                        const { playSeq, seq } = this.props 

                                        playSeq(seq, true)
                                    })()
                                }

                                startAgain()
                            }
                        }} 
                        color={'red'} 
                    />
                    <Label>START</Label> 
                    <RoundButton 
                        onClick={() => this.props.setToStrict()}
                        color={'yellow'} />
                    <Label>STRICT</Label>
                </Box>   
            </Flexboard>
        )
    }
}

export default PadControl