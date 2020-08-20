import React from 'react'
import './TimerPage.css'

const TimerPage = ({activity, logActivity}) => {
  console.log('currentActivity', activity);

  return (
    <div className="form-timer-container">
      <h2>Current Activity</h2>
    </div>
  )
}

export default TimerPage;
