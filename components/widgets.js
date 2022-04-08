import { motion } from "framer-motion";

export function SkillItem({ skill }) {
  return (
    <motion.div layoutId={skill.name} className="skill-item"
      style={{
        backgroundColor: skill.backgroundColor ?? "#fff",
        "--percentage": skill.percentage,
        "--shadow-color": skill.backgroundColor ? "#fff5" : "#0002",
      }}>
      {skill.svg}
    </motion.div>
  )
}

export function StackItem({ skill }) {
  return (
    <div className='skill-border'>
      <div className="skill-item"
        style={{ backgroundColor: skill.backgroundColor ?? "#fff" }}>
        {skill.svg}
      </div>
    </div>
  )
}