import React from 'react'
import ReactDOM from 'react-dom'
import ContextApp from './ContextApp'
import UnstatedApp from './UnstatedApp'

ReactDOM.render(<ContextApp />, document.getElementById('context'))
ReactDOM.render(<UnstatedApp />, document.getElementById('unstated'))
