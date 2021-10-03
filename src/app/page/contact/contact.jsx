import styles from "./contact.module.scss";
import { FaGithub } from "react-icons/fa";
import { ImMail4, ImLinkedin } from "react-icons/im";
import { contactText } from "../../config";
const Contact = () => {
  return (
    <div className={styles["Contact"]}>
      <div className={styles["Contact-card"]}>
        <div className={styles["Contact-text"]}>Keep In Touch</div>
        <div className={styles["Icons"]}>
          <a
            href={contactText.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub color="white" size="80px" />
          </a>
          <a href={`mailto:${contactText.email}`}>
            <ImMail4 color="white" size="80px" />
          </a>
          <a
            href={contactText.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <ImLinkedin color="white" size="80px" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
