import classNames from "classnames";


import styles from "./styles.module.css";
// import UserContainer from "../User/container";

export const Review = ({ children, review, className }) => {
  if (!review) {
    return null;
  }

  return (
    <div className={classNames(className, styles.root)}>
      {children}
      {/* <UserContainer userId={review.userId} /> */}
      <div className={styles.rating}>Rating: {review.rating}</div>
      <span className={styles.text}>{review.text}</span>
    </div>
  );
};
