import {
  FETCH_PROJECTS_STARTED,
  FETCH_PROJECTS_SUCCESS,
  SET_MESSAGE,
} from "../types";

import ProjectsService from "../../services/projects-service";

export const fetchProjects = () => {
  return (dispatch) => {
    dispatch(fetchProjectsStarted());

    ProjectsService.getProjects()
      .then((res) => {
        dispatch(fetchProjectsSuccess(res.data));
      })
      .catch((err) => {
        dispatch(fetchProjectsFailed(err));
      });
  };
};

const fetchProjectsStarted = () => {
  return {
    type: FETCH_PROJECTS_STARTED,
  };
};

const fetchProjectsSuccess = (projects) => {
  return {
    type: FETCH_PROJECTS_SUCCESS,
    payload: {
      projects,
    },
  };
};

const fetchProjectsFailed = (err) => {
  const message =
    (err.response && err.response.data && err.response.data.message) ||
    err.message ||
    err.toString();
  return {
    type: SET_MESSAGE,
    payload: message,
  };
};
