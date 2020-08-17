import React from 'react'
import './ActivityCard.css'
import heartOutline from '../images/heart-outline.svg'
import heartFilled from '../images/heart-filled.svg'
import deleteIcon from '../images/delete.svg'


const ActivityCard = ({activity}) => {

  const handleDelete = (id) => {
  console.log(id)
  }

  return (
    <div className="activity-card-container">
      <div className="activity-card-subcontainer">
        <section className={`ac-top ${activity.type}`}>
          <p className={`activity-${activity.type}`}>{activity.type}</p>
          <p className="activity-min-sec">{activity.min} min</p>
          {activity.sec !== 0 &&
          <p className="activity-min-sec">{activity.sec} sec</p>
          }
        </section>
        <section className="ac-bottom">
          <p className="activity-desc">{activity.description}</p>
          <section className="activity-btns">
            <img src={heartOutline} alt="favorite" />
            <img className="delete-img" src={deleteIcon} onClick={() => handleDelete(activity.id)} alt="delete"/>
          </section>
        </section>
      </div>      
    </div>
  )
}

export default ActivityCard;
