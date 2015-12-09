import React from 'react'
import ReactDOM from 'react-dom'
import Moment from 'moment'
import Month from './Month'

export default class Year extends React.Component {

  /*  Constructor details:
   *  Example: <Year year={2015} />
   */


  constructor(props) {
    super(props)
    this.state = {year: props.date}
  }

  renderMonths() {
    let months = []
    let done = false
    let date = 1;
    let monthIndex = 1
    let count = 0

    while (!done) {
      months.push(<Month key={date.toString()} date={Moment(this.state.year + '-' + monthIndex, 'YYYY-MM')} />)
      done = count++ > 10
      date++
      monthIndex++
    }

    return months
  }

  render() {
    return (
      <div>
      	{this.renderMonths()}
      </div>
    )
  }
}

ReactDOM.render(<Year date={2015} />, document.getElementById('calendars'));
