import React, { useState, useEffect } from 'react'
import './TimerPage.css'

const TimerPage = ({activity, logActivity}) => {
  console.log('currentActivity', activity);
  const [timerCompleted, setTimerCompleted] = useState(false)
  const [timerActive, setTimerActive] = useState(false)
  const [activityLogged, setActivityLogged] = useState(false)
  const [minutes, setMinutes] = useState(activity.min)
  const [seconds, setSeconds] = useState(activity.sec)

  useEffect(() => {
    let timer = null;
    if (timerActive) {
    interval = setInterval(() => {
        setSeconds(seconds => seconds - 1);
      }, 1000);
      if (minutes && seconds < 0){
        setMinutes(minutes => minutes -1)
        setSeconds(59)
      }
      if (minutes === 0 && seconds === 0){
        clearInterval(timer)
        setTimeout(()=> setTimerCompleted(true), 1000)
        setTimeout(()=> setTimerActive(false), 1000)
      }
    } else if (!timerActive) {
      clearInterval(timer);
    }
    return () => clearInterval(timer);
  }, [timerActive, seconds]);

  const activateTimer = () => {
    setTimerActive(!timerActive)
  }

  const completeActivity = () => {
    console.log('complete activity');
  }

  return (
    <div className="form-timer-container">
      <h2>Current Activity : <span className={`${activity.type}-header`}>{activity.type}</span></h2>
      <section className="timer-inner-container">
        <section className="timer-column-box">
          <div className="top-timer-column-box">
            <p>{activity.description}</p>
            <p className="timer-display">{minutes}:{seconds < 10 ? '0' + seconds : seconds}</p>
          </div>
          <button className={`timer-circle-btn ${activity.type}-outline`} onClick={activateTimer}>
          {timerCompleted ? 'Complete!' : (timerActive ? 'Pause' : 'Start')}
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
