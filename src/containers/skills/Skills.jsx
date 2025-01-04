import React from 'react'
import Skill_Feature from '../../components/skill_feature/Skill_Feature'
import skillsData from './imports'
import "./skills.css"

export default function Skills() {
  return (
    <div className='skills'>
      {skillsData.map((skill, index) => (
        <div key={index}> 
          <Skill_Feature 
            image = {skill.imgSource} 
            name = {skill.sourceName}/>
        </div>

      ))}
    </div>
  )
}
