import axiosInstance from "../api/config/axiosInstance";

const uploadProject = (
  file,
  { description, gitUrl, projectUrl, projectName }
) => {
  let formData = new FormData();
  formData.append("file", file);
  formData.append("name", projectName);
  formData.append("description", description);
  formData.append("gitUrl", gitUrl);
  formData.append("projectUrl", projectUrl);
  return axiosInstance.post("/uploadProject", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

const getProjects = () => {
  return axiosInstance.get("/getProjects");
};

const ProjectsService = {
  uploadProject,
  getProjects,
};

export default ProjectsService;
