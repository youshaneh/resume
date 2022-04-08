import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { SkillItem } from "./widgets";

export default function SkillSet({ header, skills }) {
  const [skill, setSkill] = useState(null);
  return (
    <div className="content">
      <h3 className="strong">{header}</h3>

      <div className="items">
        {skills.map(skill => (
          <div key={skill.name} className='skill-border' onMouseEnter={() => setSkill(skill)} onMouseLeave={() => setSkill(null)}>
            <SkillItem skill={skill} />
          </div>
        ))}
        <div className="details-wrapper">
          <div className='details'>
            <AnimatePresence>
              {skill && <SkillItem skill={skill} key={skill.name} />}
            </AnimatePresence>
            <AnimatePresence>
              {(
                <motion.div
                  key={skill == null}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }} >
                  {skill ? (
                    <div className="description">
                      <div className="strong" dangerouslySetInnerHTML={{ __html: skill.name }}></div>
                      <div>{getProficiencyString(skill.percentage)}</div>
                    </div>) : (
                    <div className="placeholder">Hover for more information</div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  )
}

function getProficiencyString(proficiency) {
  return (proficiency == null || proficiency > 75) ? "Proficient" :
    (proficiency > 50) ? "Intermediate" : "Basic"
}