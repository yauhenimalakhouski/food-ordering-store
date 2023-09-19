import classNames from "classnames";

import styles from "./styles.module.css";
import Link from "next/link";
import { LoginButton } from "../LoginButton/component";
import { ThemeButton } from "../ThemeButton/component";

export const Header = ({ className }) => {
  return (
    <header className={classNames(styles.root, className)}>
      <Link href="/">
        Home
      </Link>
      <Link href={"/restaurants"}>Restaurants</Link>
      <Link href={"/cart"}>Cart</Link>
      <Link href={"/dishes"}>Dishes</Link>
      <LoginButton />
      <ThemeButton />
    </header>
  );
};
