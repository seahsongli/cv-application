function PracticalExperience({experiences}) {
    return (
      <div className = "experiences">
        {experiences.map((experience, index) => {
          return (
            <div key={index} className = "practical-experience">
             
              <h2>Professional Experience</h2>
              <h3 className = "company-name">{experience.company}</h3>
              <div className = "position-date">
                <h4>{experience.position}</h4>
                <p>{experience.expStartDate} - {experience.expEndDate}</p>
              </div>
              <p className = "description">{experience.description}</p>
            </div>
          );
        })}
      </div>
    );
  }
  
  export default PracticalExperience;