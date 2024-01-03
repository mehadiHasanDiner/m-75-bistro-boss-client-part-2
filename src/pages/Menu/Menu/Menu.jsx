import { Helmet } from "react-helmet-async";
import Cover from "../../../Shared/Cover/Cover";
import coverImage from "../../../assets/menu/banner3.jpg";

const Menu = () => {
  return (
    <div>
      <Helmet>
        <title> Bistro Boss | Menu </title>
      </Helmet>

      <Cover img={coverImage} title={"Our menu"}></Cover>
    </div>
  );
};

export default Menu;
