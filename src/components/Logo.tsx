import { FC } from "react";
import { useProject } from "context/project";
import { NavLink } from "react-router-dom";

const Logo: FC = () => {
  const { project, isLoading } = useProject();

  const getLogoLink = () => {
    if (isLoading || !project) {
      return "/ui/";
    }
    return `/ui/project/${project.name}`;
  };

  return (
    <NavLink className="p-panel__logo" to={getLogoLink()}>
      <img
        src="/ui/assets/img/incus-logo.svg"
        alt="Incus-UI logo"
        className="p-panel__logo-image"
      />
      <div className="logo-text p-heading--4">Incus UI</div>
    </NavLink>
  );
};

export default Logo;
