import "../styles/experience.css";

const experiences = [
  {
    company: "TELUS Digital",
    role: "Data Analyst",
    location: "Calgary, AB",
    period: "September 2024 - June 2025",
    description: [
      "Strengthened my analytical and algorithmic thinking by working with data, patterns, and structured problem-solving processes.",
      "Developed the ability to break complex problems into smaller, logical steps, which helped me better understand algorithms and programming concepts.",
      "Built strong problem-solving skills by identifying patterns, inconsistencies, and potential issues within data.",
    ],
  },

  {
    company: "Code Clause",
    role: "Android Developer Intern",
    location: "Calgary, AB",
    period: "July 2024 - September 2024",
    description: [
      "Developed Android applications using Kotlin, Java, Firebase, and Android Studio as part of an internship project.",
      "Applied object-oriented programming concepts and application logic while implementing functional mobile application features.",
      "Gained hands-on experience connecting application functionality with Firebase and managing data within a mobile application.",
      "Strengthened debugging and problem-solving skills by identifying issues during development and improving application functionality.",
      "Combined software development with UI design principles to create applications that considered both functionality and user experience.",
    ],
  },

  {
    company: "Upper Edge Property",
    role: "Android Developer Team Leader",
    location: "Calgary, AB",
    period: "January 2023 - April 2023",
    description: [
      "Led development of a Q&A mobile application for Upper Edge Property.",
      "Designed the application and relational data structure using Figma, Firebase, and Android Studio.",
      "Scheduled and facilitated meetings between stakeholders and team members.",
      "Presented the team's application at the project showcase.",
    ],
  },
];

function ExperiencePage() {
  return (
    <main className="experience-page">
      <div className="experience-page__header">
        <p className="experience-page__comment">// Professional experience</p>

        <h1>Experience</h1>

        <p>
          Previous professional and development experience that helped shape my
          technical, communication, and problem-solving skills.
        </p>
      </div>

      <div className="experience-code">
        <div className="code-line">
          <span className="code-keyword">const</span>{" "}
          <span className="code-variable">experience</span>{" "}
          <span className="code-operator">=</span> [
        </div>

        {experiences.map((experience, index) => (
          <article className="experience-card" key={experience.company}>
            <div className="code-line">{"{"}</div>

            <div className="experience-card__content">
              <div className="code-line">
                <span className="code-property">company</span>:{" "}
                <span className="code-string">"{experience.company}"</span>,
              </div>

              <div className="code-line">
                <span className="code-property">role</span>:{" "}
                <span className="code-string">"{experience.role}"</span>,
              </div>

              <div className="code-line">
                <span className="code-property">location</span>:{" "}
                <span className="code-string">"{experience.location}"</span>,
              </div>

              <div className="code-line">
                <span className="code-property">period</span>:{" "}
                <span className="code-string">"{experience.period}"</span>,
              </div>

              <div className="code-line">
                <span className="code-property">highlights</span>: [
              </div>

              <div className="experience-card__highlights">
                {experience.description.map((item) => (
                  <div className="code-line" key={item}>
                    <span className="code-string">"{item}"</span>,
                  </div>
                ))}
              </div>

              <div className="code-line">]</div>
            </div>

            <div className="code-line">
              {"}"}
              {index !== experiences.length - 1 && ","}
            </div>
          </article>
        ))}

        <div className="code-line">];</div>
      </div>
    </main>
  );
}

export default ExperiencePage;
