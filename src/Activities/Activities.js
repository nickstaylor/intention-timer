import React from 'react'
import './Activities.css'
import ActivityCard from '../ActivityCard/ActivityCard'
// import heartFilled from '../images/heart-filled.svg'
// import exercise from '../images/exercise.svg'
// import meditate from '../images/meditate.svg'
// import study from '../images/study.svg'
// import exerciseActive from '../images/exercise-active.svg'
// import meditateActive from '../images/meditate-active.svg'
// import studyActive from '../images/study-active.svg'


const Activities = ({ activities }) => {

  let displayedActivities = activities.map((activity, i) => {
    return (
      <ActivityCard
        key={i}
        activity={activity}
      />
    )
  })

  return (
    <div className="activities-container">
      <section className="activity-section-header">
        <h2>Past Activities</h2>

      </section>
      <section className="activities-inner-container">
        {displayedActivities}
      </section>
    </div>
  )
}

export default Activities;
