import React from 'react'

export default class Week extends React.Component {
  render() {
    let days = []
    let month = this.props.month
    let date = this.props.date

    days.push(<td className="weekNumber" key={date.week()}>{date.week()}</td>)

    for (let i = 0; i < 7; ++i) {
      let day = {
        number: date.date(),
        isCurrentMonth: date.month() === month.month(),
        isToday: date.isSame(new Date(), day),
        date: date
      }

      days.push(<td data-date={date.format().toString()} className={"day" + (day.isToday ? " today" : "") + (day.isCurrentMonth ? "" : " different-month")} key={day.date.toString()}>{day.number}</td>);

      date = date.clone();
      date.add(1, "d");
    }

    return (
      <tr className="week" key={days[0].toString()}>
        {days}
      </tr>
    )
  }
}
