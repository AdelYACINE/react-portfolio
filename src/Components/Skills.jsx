import { useTranslation } from "react-i18next";

const Skills = () => {
  const { t } = useTranslation();
  return (
    <div className="container-skills">
      <h1 className="title-skills underline">{t("skillstitle")}</h1>
      <div>
        <h2 className="heading-skills">Front-end</h2>
        <p className="text-skills">HTML , CSS , React.js , Javascript </p>
      </div>
      <div>
        <h2 className="heading-skills">Languages</h2>
        <p className="text-skills">Javascript</p>
      </div>
    </div>
  );
};

export default Skills;
