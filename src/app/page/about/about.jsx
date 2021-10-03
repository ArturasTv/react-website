import styles from "./about.module.scss";
import Time from "../../components/time/time";
import { aboutText } from "../../config";
import { FaNodeJs, FaCss3Alt, FaHtml5, FaSass } from "react-icons/fa";
import {
  SiNginx,
  SiJavascript,
  SiCplusplus,
  SiRedux,
  SiDotNet,
  SiMongodb,
  SiMysql,
  SiCsharp,
  SiReact,
  SiTypescript,
  SiDocker,
  SiKubernetes,
  SiAmazonaws,
  SiDigitalocean,
} from "react-icons/si";

const About = () => {
  const props = { color: "white", size: "30px" };
  return (
    <div className={styles["About"]}>
      <div className={styles["Short-bio"]}>
        {aboutText.age[0]}
        <Time /> {aboutText.age[1]}
        <br />
        {aboutText.profession}
        <br />
        {aboutText.university}
      </div>
      <div className={styles["About-title"]}>Currently trying to master</div>
      <div className={styles["About-icons"]}>
        <FaNodeJs {...props} />
        <SiReact {...props} />
        <FaHtml5 {...props} />
        <FaCss3Alt {...props} />
        <FaSass {...props} />
        <SiNginx {...props} />
        <SiJavascript {...props} />
        <SiCplusplus {...props} />
        <SiCsharp {...props} />
        <SiRedux {...props} />
        <SiDotNet {...props} />
        <SiMongodb {...props} />
        <SiMysql {...props} />
        <SiDigitalocean {...props} />
      </div>
      <div className={styles["About-title"]}>Also interested in</div>
      <div className={styles["About-icons"]}>
        <SiTypescript {...props} />
        <SiDocker {...props} />
        <SiKubernetes {...props} />
        <SiAmazonaws {...props} />
      </div>
    </div>
  );
};

export default About;
