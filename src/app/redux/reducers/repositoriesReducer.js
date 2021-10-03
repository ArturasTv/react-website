import {
  FETCH_REPOSITORIES_STARTED,
  FETCH_REPOSITORIES_SUCCESS,
} from "../types";

const initialState = {
  repositories: [],
  isLoading: false,
};

const repositoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_REPOSITORIES_STARTED:
      return {
        ...state,
        isLoading: true,
      };
    case FETCH_REPOSITORIES_SUCCESS:
      return {
        ...state,
        isLoading: false,
        repositories: action.payload.repositories,
      };
    default:
      return state;
  }
};

export default repositoriesReducer;
