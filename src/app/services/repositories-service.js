import axiosInstance from "../api/config/axiosInstance";

const getRepositories = () => {
  return axiosInstance.get("/getrepositories");
};

const RepositoriesService = {
  getRepositories,
};

export default RepositoriesService;
