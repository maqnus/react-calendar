import React from 'react'
import ReactDOM from 'react-dom'
import Moment from 'moment'
import Month from './Year'

export default class Calendars extends React.Component {

  /*  Constructor details:
   *  Example: <Year year={2015} />
   */


  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
      	<Year date={2015} />
      </div>
    )
  }
}

ReactDOM.render(<Calendar />, document.getElementById('calendars'));
