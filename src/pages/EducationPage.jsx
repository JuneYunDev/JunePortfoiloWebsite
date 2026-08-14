import { GraduationCap, MapPin, CalendarDays, Award } from "lucide-react";

import "../styles/education.css";

function EducationPage() {
  return (
    <main className="education-page">
      <div className="education-page__header">
        <p className="education-page__markdown"># Education</p>

        <h1>Education</h1>

        <p>
          My academic background in software development and application design.
        </p>
      </div>

      <article className="education-card">
        <div className="education-card__icon">
          <GraduationCap size={42} />
        </div>

        <div className="education-card__content">
          <p className="education-card__type">Software Development Diploma</p>

          <h2>Bow Valley College</h2>

          <div className="education-card__details">
            <span>
              <MapPin size={18} />
              Calgary, Alberta
            </span>

            <span>
              <CalendarDays size={18} />
              January 2022 - June 2024
            </span>

            <span>
              <Award size={18} />
              GPA: 3.93 / 4.0
            </span>
          </div>

          <div className="education-card__divider" />

          <div className="education-card__focus">
            <h3>Areas of Study</h3>

            <div className="education-card__tags">
              <span>Software Development</span>
              <span>Web Development</span>
              <span>Database Design</span>
              <span>Application Development</span>
              <span>UI / UX Design</span>
              <span>Agile / SDLC</span>
            </div>
          </div>
        </div>
      </article>
    </main>
  );
}

export default EducationPage;
