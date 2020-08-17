import React, { useState } from 'react'
import './Form.css'
import exercise from '../images/exercise.svg'
import meditate from '../images/meditate.svg'
import study from '../images/study.svg'
import exerciseActive from '../images/exercise-active.svg'
import meditateActive from '../images/meditate-active.svg'
import studyActive from '../images/study-active.svg'
import warning from '../images/warning.svg'

const Form = () => {
  const [selected, updateSelected] = useState('')
  const [description, updateDescription] = useState('')
  const [minutes, updateMinutes] = useState('')
  const [seconds, updateSeconds] = useState('')
  const [minutesError, updateMinutesError] = useState(false)
  const [descError, updateDescError] = useState(false)

  return (
    <div className="form-timer-container">
      <h2>New Activity</h2>
      <section className="form-timer-inner-container">
        <h3>Select A Category:</h3>
        <section className="menu-buttons">
          <button><img src={selected === 'study' ? studyActive : study} alt="study" />Study</button>
          <button><img src={selected === 'meditate' ? meditateActive: meditate} alt="meditate" />Meditate</button>
          <button><img src={selected === "exercise" ? exerciseActive : exercise} alt="exercise" />Exercise</button>
        </section>
        {/* form section inputs */}
        <section className="activity-description">
          <label for="description">What would you like to accomplish during this time?</label>
          <input
            type="text"
            name="description"
            maxLength="60"
            value={description}
            onChange={e => updateDescription(e.target.value)}
          />
          {descError &&
            <p className="desc-error"><img src={warning} alt="warning" />Please enter a Description</p>}
        </section>
        <section className={descError ? "minutes-seconds-error" : "minutes-seconds"}>
          <div className="min-sec-inputs">
            <label for="minutes">Minutes</label>
            <input
              type="text"
              name="minutes"
              value={minutes}
              onChange={e => updateMinutes(parseInt(e.target.value))}
            />
            {minutesError &&
              <p className="min-error"><img src={warning} alt="warning" />Please enter Minutes</p>}
          </div>
          <div className="min-sec-inputs">
            <label for="seconds">Seconds</label>
            <input
              type="text"
              name="seconds"
              value={seconds}
              onChange={e => updateSeconds(parseInt(e.target.value))}
            />
          </div>
        </section>
        <div className={minutesError ? "start-activity-btn-error" : "start-activity-btn"}>
          <button className="start-activity">Start Activity</button>
        </div>

      </section>
    </div>
  )
}

export default Form;
