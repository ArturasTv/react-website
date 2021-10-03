import React from "react";
import styles from "./projects.module.scss";
import Carousel from "../../components/carousel/carousel";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProjects } from "../../redux/actions/project";
import Message from "../../components/message/message";

const Projects = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProjects());
  }, []);

  const { projects } = useSelector((state) => state.project);
  const { message } = useSelector((state) => state.message);
  return (
    <div>
      {message ? (
        <Message message={message} />
      ) : (
        <div className={styles["Projects"]}>
          <Carousel projects={projects} />
        </div>
      )}
    </div>
  );
};

export default Projects;
