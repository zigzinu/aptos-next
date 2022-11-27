import { NextPage } from "next";
import NavBar from "./NavBar";

type LayoutProps = {
  children: React.ReactNode; // 👈️ type children
};

const Layout: NextPage<LayoutProps> = (props) => {
  return (
    <div>
      <NavBar color={"blue"} />
      <div>{props.children}</div>
    </div>
  );
}

export default Layout;

