import { useTranslation } from "react-i18next";

const SelectorLng = () => {
  const { i18n } = useTranslation();

  const handleChange = (e) => {
    i18n.changeLanguage(e.target.value);
  };

  return (
    <select className="select w-full " onChange={handleChange}>
      <option value="en">EN</option>
      <option value="fr">FR</option>
    </select>
  );
};

export default SelectorLng;
