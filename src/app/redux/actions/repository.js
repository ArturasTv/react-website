import {
  FETCH_REPOSITORIES_STARTED,
  FETCH_REPOSITORIES_SUCCESS,
  SET_MESSAGE,
} from "../types";

import RepositoriesService from "../../services/repositories-service";

export const fetchRepositories = () => {
  return (dispatch) => {
    dispatch(fetchRepositoriesStarted());

    RepositoriesService.getRepositories()
      .then((res) => {
        dispatch(fetchRepositoriesSuccess(res.data));
      })
      .catch((err) => {
        dispatch(fetchRepositoriesFailed(err));
      });
  };
};

const fetchRepositoriesStarted = () => {
  return {
    type: FETCH_REPOSITORIES_STARTED,
  };
};

const fetchRepositoriesSuccess = (repositories) => {
  return {
    type: FETCH_REPOSITORIES_SUCCESS,
    payload: {
      repositories,
    },
  };
};

const fetchRepositoriesFailed = (err) => {
  const message =
    (err.response && err.response.data && err.response.data.message) ||
    err.message ||
    err.toString();
  return {
    type: SET_MESSAGE,
    payload: message,
  };
};
