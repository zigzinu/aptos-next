import { NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./NavBar.module.css";

interface NavBarProps {
  color: string;
}

const NavBar: NextPage<NavBarProps> = (props) => {
  const router = useRouter();
  console.log(router);
  return (
    <nav>
      <img src="/vercel.svg" />
      <Link href="/">
        <a className={router.pathname === "/" ? styles.active : ""}>Home</a>
      </Link>
      <Link href="/counter">
        <a className={router.pathname === "/counter" ? "active" : ""}>
          Counter
        </a>
      </Link>
      <style jsx>{`
        nav {
          background-color: tomato;
        }
        a {
          text-decoration: none;
        }
        .active {
          color: ${props.color};
        }
      `}</style>
    </nav>
  );
};

export default NavBar;
