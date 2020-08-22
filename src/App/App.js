import React, { useState } from 'react';
import './App.css';
import Header from '../Header/Header'
import Form from '../Form/Form'
import TimerPage from '../TimerPage/TimerPage'
import Activities from '../Activities/Activities'

function App() {

  let activityData = [{
    type: 'meditate', description: 'Calm the mind', min: 15, sec: 0, date: '08/15/20', id: 1, favorite: false
  },
  {
    type: 'study', description: 'Practice React Hooks', min: 25, sec: 0, date: '08/16/20', id: 2, favorite: true
  },
  {
    type: 'exercise', description: 'Weight Lifting', min: 45, sec: 0, date: '08/15/20', id: 3, favorite: false
  }]

  let sampleActivity = {date: "8/20/2020",
                        description: "Learn Express",
                        favorite: false,
                        id: 1597973827053,
                        min: 0,
                        sec: 3,
                        type: "study"}

  const [activities, setActivities] = useState(activityData)
  const [currentActivity, setCurrentActivity] = useState('')

  const beginActivity = (activity) => {
    setCurrentActivity(activity)
  }

  const logActivity = () => {
    console.log(currentActivity);
    let updatedActivities = [currentActivity, ...activities]
    setActivities(updatedActivities)
    // setCurrentActivity('')
  }

  const deleteActivity = (id) => {
    let updatedActivities = activities.filter(activity => activity.id !== id)
    setActivities(updatedActivities)
  }

  return (

    <div className="App">
      <Header />

      {currentActivity ?
       <TimerPage
       activity={currentActivity}
       logActivity={logActivity}
       setCurrentActivity={setCurrentActivity}/> :
       <Form beginActivity={beginActivity} />
      }

      {!activities.length ?
        <section class="activities-container">
          <h2>Past Activities</h2>
          <p className="no-activity-msg">You haven't logged any activities yet.</p>
          <p className="no-activity-msg">Complete the form to get started!</p>
        </section> :
        <Activities activities={activities} deleteActivity={deleteActivity} />
      }

    </div>
  );
}

export default App;
