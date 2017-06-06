import React from 'react'

import PadsContainer from './PadsContainer'
import PadControlContainer from './PadControlContainer'

class Layout extends React.Component {
    render () {
        return (
            <div>
                <PadsContainer />
                <PadControlContainer />
            </div>
        )
    }
}

export default Layout