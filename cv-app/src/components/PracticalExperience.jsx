function PracticalExperience({experiences}) {
    return (
      <div className="PracticalExperience">
        {experiences.map((experience, index) => {
          return (
            <div key={index}>
              <h2>Professional Experience</h2>
              <h3>{experience.company}</h3>
              <p>{experience.positionTitle}</p>
              <p>{experience.startDate} - {experience.endDate}</p>
              <p>{experience.description}</p>
            </div>
          );
        })}
      </div>
    );
  }
  
  export default PracticalExperience;