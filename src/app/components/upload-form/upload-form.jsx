import styles from "./upload-form.module.scss";
import { useState } from "react";
import ProjectService from "../../services/projects-service";
import { useDispatch } from "react-redux";
import { setMessage } from "../../redux/actions/message";
const UploadForm = () => {
  const [description, setDescription] = useState("");
  const [gitUrl, setGitUrl] = useState("");
  const [projectUrl, setProjectUrl] = useState("");
  const [projectName, setProjectName] = useState("");
  const [projectFile, setProjectFile] = useState(null);
  const dispatch = useDispatch();
  const handleChangeDescription = (e) => {
    setDescription(e.target.value);
  };
  const handleChangeGitUrl = (e) => {
    setGitUrl(e.target.value);
  };
  const handleChangeProjectUrl = (e) => {
    setProjectUrl(e.target.value);
  };
  const handleChangeFile = (e) => {
    setProjectFile(e.target.files[0]);
  };
  const handleChangeProjectName = (e) => {
    setProjectName(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!projectFile) return;
    const data = {
      description,
      gitUrl,
      projectUrl,
      projectName,
    };
    ProjectService.uploadProject(projectFile, data)
      .then((res) => dispatch(setMessage(res.data.message)))
      .catch((err) => {
        const message =
          (err.response && err.response.data && err.response.data.message) ||
          err.message ||
          err.toString();
        dispatch(setMessage(message));
      });
  };
  return (
    <div className={styles["form"]}>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          value={projectName}
          onChange={handleChangeProjectName}
          placeholder="Project Name"
        />
        <textarea
          rows="3"
          value={description}
          onChange={handleChangeDescription}
          placeholder="Project Description"
        />
        <input
          type="text"
          value={gitUrl}
          onChange={handleChangeGitUrl}
          placeholder="Github url"
        />
        <input
          type="text"
          value={projectUrl}
          onChange={handleChangeProjectUrl}
          placeholder="Project url"
        />

        <div className={styles["fakeFileButton"]}>
          Browse Project Image file on Computer
          <input
            type="file"
            className={styles["custom-file-input"]}
            onChange={handleChangeFile}
          />
        </div>

        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default UploadForm;
