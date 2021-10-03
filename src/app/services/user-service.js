import axiosInstance from "../api/config/axiosInstance";

const getUserBoard = () => {
  return axiosInstance.get("/test/user");
};

const UserService = {
  getUserBoard,
};

export default UserService;
