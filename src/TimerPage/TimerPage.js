import React, { useState } from 'react'
import './TimerPage.css'

const TimerPage = ({activity, logActivity}) => {
  console.log('currentActivity', activity);
  const [timerCompleted, updateTimerCompleted] = useState(true)
  const [activityLogged, updatedActivityLogged] = useState(false)

  const activateTimer = () => {
    console.log('timer');
  }

  const completeActivity = () => {
    console.log('complete activity');
  }

  return (
    <div className="form-timer-container">
      <h2>Current Activity</h2>
      <section className="timer-inner-container">
        <section className="timer-column-box">
          <div className="top-timer-column-box">
            <p>{activity.description}</p>
            <p className="timer-display">{activity.min}:{activity.sec}</p>
          </div>
          <button className={`timer-circle-btn ${activity.type}-outline`} onClick={activateTimer}>
          {timerCompleted ? 'Complete' : 'Start'}
          </button>
        </section>
        {timerCompleted &&
          <button className="log-activity-btn" onClick={completeActivity}>
          Log Activity
          </button>
        }
      </section>
    </div>
  )
}

export default TimerPage;
