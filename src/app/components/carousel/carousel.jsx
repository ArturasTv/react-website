import styles from "./carousel.module.scss";
import { Carousel as MinimalCarousel } from "react-carousel-minimal";
import { makeCaption } from "../../utils/captionMaker";
import Loading from "../loading/loading";
import { useSelector } from "react-redux";
const captionStyle = {
  fontSize: "2em",
  fontWeight: "bold",
};
const slideNumberStyle = {
  fontSize: "20px",
  fontWeight: "bold",
};
const waitingData = [
  { image: "", caption: "" },
  { image: "", caption: "" },
];

const Carousel = ({ projects }) => {
  const { isLoading } = useSelector((state) => state.project);
  const newProjects = projects.map((item) => {
    return {
      image: item.path_url,
      caption: makeCaption(
        item.project_name,
        item.project_description,
        item.git_url,
        item.project_url
      ),
    };
  });
  return isLoading || projects.length === 0 ? (
    <div className={styles["center"]}>
      <Loading />
    </div>
  ) : (
    <div className={styles["Carousel"]}>
      <MinimalCarousel
        data={!projects.length ? waitingData : newProjects}
        time={4000}
        width="850px"
        height="500px"
        captionStyle={captionStyle}
        radius="15px"
        slideNumber={false}
        slideNumberStyle={slideNumberStyle}
        captionPosition="bottom"
        automatic={true}
        dots={true}
        pauseIconColor="white"
        pauseIconSize="40px"
        slideBackgroundColor="darkgrey"
        slideImageFit="cover"
        thumbnails={true}
        thumbnailWidth="100px"
      />
    </div>
  );
};

export default Carousel;
