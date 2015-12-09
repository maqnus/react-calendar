import React from 'react'
import CalendarTop from './CalendarTop'
import Week from './Week'

export default class Month extends React.Component {

  /*  Constructor details:
   *  Use a Moment object containing the month the calendar should display
   *  Example: <Month date={Moment('2015-12', 'YYYY-MM')} />
   *  NOTE: Moment needs a ISO formatted date string to function correctly.
   */


  constructor(props) {
    super(props)
    this.state = {month: props.date}
  }

  renderWeeks() {
    let weeks = []
    let done = false
    let date = this.state.month.clone().startOf('month').add(-1, 'w').day('Monday')
    let monthIndex = date.month()
    let count = 0

    while (!done) {
      let inMonth = false
      for (let i = 0; i < 7; ++i) {
        if (date.clone().add(i, 'd').month() === this.state.month.month()) {
          inMonth = true
        }
      }

      if (inMonth) weeks.push(<Week key={date.toString()} date={date.clone()} month={this.state.month} />)

      date.add(1, 'w')
      done = count++ > 2 && monthIndex !== date.month()
      monthIndex = date.month()
    }

    return weeks
  }

  render() {
    return (
      <table className="calendar">
        <thead>
          <tr>
            <td>{this.state.month.format('MMMM')}</td>
          </tr>

        </thead>
        <tbody>
          <CalendarTop />
          {this.renderWeeks()}
        </tbody>
      </table>
    )
  }
}
