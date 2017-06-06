import React from 'react'
import { mp3s } from '../utils/mp3s'
import { colors } from '../utils/constants'
import { sleep } from '../utils/sleep'

import Flexboard from '../components/Flexboard'
import Pad from '../components/Pad'
import Score from '../components/Score'

class Pads extends React.Component {

    componentDidMount () {
        /*
          positions = ['top-left', 'top-right', 'bottom-left', 'bottom-right']

          playSeq(parm1, parm2)
          @param1 : array - positions being played
          @param2 : boolean - preplay condition 
        */  
        this.props.playSeq(this.props.seq, this.props.user === "not played")
    }

    componentDidUpdate (prop) {
        const activePad = prop.pads.filter(v => v.playing)

        if (activePad.length) {
            this[activePad[0].position].play()
        } 
    }

    render () {
        /*
          redux programming isn't async..
          it changes its props object real time
          however the reference for user value was outside onclick,
          and it made value to refer to the value before onclick event..
          this.props.xx should be used if it's related to newest state
        */
        const { pads, playSeq, updateUserSeq, updateSeq, setToInitial } = this.props
        const pad = (pos) => pads.filter(v => v.position === pos)[0]
        const positions = ['top-left', 'top-right', 'bottom-left', 'bottom-right']
        const endOfGame = 20
        const playGame = async (position) => {
            /*
            positions = ['top-left', 'top-right', 'bottom-left', 'bottom-right']
                
            playSeq(parm1, parm2)
            @param1 : array - positions being played
            @param2 : boolean - preplay condition 

            updateUserSeq(param1)
            @param1 : array - selected position
            */     
            await playSeq([position], true)
            await updateUserSeq([position])
            await (() => { 
                const { strict, seq, step } = this.props
                
                strict && position !== seq[step] ? setToInitial() : updateSeq()
            })()
            await sleep(100)
            await (() => {
                const { seq, user } = this.props

                playSeq(seq, user === 'failed to pass steps' ||
                (seq.length < endOfGame && user === "not played"))
            })()
        }

        const mapPad = positions.map((v, i) => 
            <Pad key={i} 
                 playing={pad(v).playing} 
                 color={colors[v][0]}
                 strictColor={colors[v][1]} 
                 strict={this.props.strict}
                 className={v} 
                 onClick={() => {
                    if (this.props.seq.length === endOfGame) {
                        alert("this is the end of a game!")
                        setToInitial()
                    } else {
                        if (this.props.status === 'loading..') {            
                            playGame(v)
                        } 
                    }
                 }} />
        )
        const mapAudio = positions.map((v, i) => 
            <audio key={i} 
                   src={mp3s[v]} 
                   ref={ref => this[v] = ref} />
        )

        return (
            <div>
                <Flexboard margin={'30vh auto'}>
                    {mapPad}
                    {mapAudio}
                    <Score>
                        {this.props.seq.length}
                    </Score>
                </Flexboard>
            </div>    
        )
    }
}

export default Pads