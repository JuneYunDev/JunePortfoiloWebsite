import { Mail, MapPin, Briefcase } from "lucide-react";

import "../styles/contact.css";

function ContactPage() {
  const email = "97yunjy@gmail.com";

  return (
    <main className="contact-page">
      <div className="contact-page__content">
        <p className="contact-page__comment">// Let's work together.</p>

        <h1>Get In Touch</h1>

        <p className="contact-page__intro">
          Have a question or want to work together? Feel free to reach out.
        </p>

        <div className="contact-card">
          <div className="contact-card__item">
            <Mail size={20} />

            <div>
              <span className="contact-card__label">Email</span>

              <a href={`mailto:${email}`}>{email}</a>
            </div>
          </div>

          <div className="contact-card__item">
            <Briefcase size={20} />

            <div>
              <span className="contact-card__label">Availability</span>

              <span>Open to Junior Software Developer opportunities</span>
            </div>
          </div>

          <div className="contact-card__item">
            <MapPin size={20} />

            <div>
              <span className="contact-card__label">Location</span>

              <span>Calgary, Alberta, Canada</span>
            </div>
          </div>
        </div>

        <a href={`mailto:${email}`} className="contact-page__button">
          <Mail size={18} />
          Send Email
        </a>
      </div>
    </main>
  );
}

export default ContactPage;
