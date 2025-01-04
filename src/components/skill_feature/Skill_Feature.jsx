import React from 'react'
import './skill_feature.css'

export default function Skill_Feature({image, name}) {
  return (
    <div>
      <div className="header-skills-icon">
         <img src={image} alt="" />
      </div>
      <div className="header-skills-text">{name}</div>
    </div>
  )
}
