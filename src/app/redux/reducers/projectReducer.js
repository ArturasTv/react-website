import { FETCH_PROJECTS_STARTED, FETCH_PROJECTS_SUCCESS } from "../types";

const initialState = {
  projects: [],
  isLoading: false,
};

const projectReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PROJECTS_STARTED:
      return {
        ...state,
        isLoading: true,
      };
    case FETCH_PROJECTS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        projects: action.payload.projects,
      };
    default:
      return state;
  }
};

export default projectReducer;
