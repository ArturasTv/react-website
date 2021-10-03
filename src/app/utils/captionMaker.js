export const makeCaption = (name, description, gitUrl, projectUrl) => {
  return `<div>
              ${name}<br/>
              <linksto>

                  ${
                    gitUrl
                      ? '<a href="' + gitUrl + '"><gitt><div></div></gitt></a>'
                      : ""
                  }
                  ${
                    projectUrl
                      ? '<a href="' +
                        projectUrl +
                        '"><previeww><div></div></previeww></a>'
                      : ""
                  } 
              </linksto>
              <description>
                  <div>${description}</div>
              </description>
          </div>`;
};
