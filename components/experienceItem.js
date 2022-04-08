import StaticImage from "./staticImage";

export default function ExperienceItem({
  icon, timeframe, company, position, position2, children
}) {
  return (
    <div className="item">
      <div className="icon">
        <StaticImage src={icon} width="240" height="240" />
      </div>
      <div className="item-header strong">
        <p className="timeframe">{timeframe}</p>
        <h3 className="company">{company}</h3>
        <div className="position">{position}</div>
        {position2 && <div className="position2">{position2}</div>}
      </div>
      <div className="description">
        {children}
      </div>
    </div>
  )
}
