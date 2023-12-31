"use client";

import { NewReviewFormContainer } from "../NewReviewForm/container";
import { RestaurantReview } from "../RestaurantReview/component";
import { Review } from "../Review/component";
import styles from "./styles.module.css";

export const Reviews = ({
  reviewsFromOtherUsers,
  currentUserreviews,
  restaurantId,
}) => {
  return (
    <div className={styles.root}>
      <h3 className={styles.title}>Reviews</h3>
      <div className={styles.reviews_container}>
        {reviewsFromOtherUsers?.map((review) => (
          <Review key={review.id} review={review} className={styles.review} />
        ))}
      </div>
      <div className={styles.reviews_container}>
        {currentUserreviews?.map((review) => (
          <RestaurantReview
            key={review.id}
            review={review}
            className={styles.review}
          />
        ))}
      </div>
      <div>
        <h1 className={styles.title_form}>Nice to Meet You!</h1>
        <h4 className={styles.secondary_title}>
          You can leave your feedback here!
        </h4>
      </div>
      <NewReviewFormContainer restaurantId={restaurantId} />
    </div>
  );
};
