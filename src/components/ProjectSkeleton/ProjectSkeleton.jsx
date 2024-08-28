import "./ProjectSkeleton.css";

const ProjectSkeleton = ({ children }) => {
  return (
    <div className="project_skeleton">
      <div className="project_skeleton_info_user_loading">
        <div className="project_skeleton_info_user_img_loading"></div>
        <div className="project_skeleton_info_user_name_loading"></div>
      </div>
      <div className="project_skeleton_info_project_loading">
        <div className="project_skeleton_info_project_left_loading">
          <div className="project_skeleton_info_project_left_img_loading"></div>
          <div className="project_skeleton_info_project_left_title_loading"></div>
          <div className="project_skeleton_info_project_left_description_loading">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div className="project_skeleton_info_project_left_stars_loading"></div>
        </div>
        {children}
      </div>
    </div>
  );
};

export default ProjectSkeleton;
