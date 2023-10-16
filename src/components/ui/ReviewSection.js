import { Rating } from "@material-tailwind/react";
import React from "react";

const ReviewSection = ({ service }) => {
  console.log(service);
  return (
    <div>
      reviews
      {service?.reviews?.map((review) => {
        const rating = service.ratings.find(
          (rating) => rating.userId === review.userId
        );
        if (rating) {
          console.log(rating.user.name);
          return (
            <div key={review.id}>
              <p>{rating.user.name}</p>
              <p>03 july 2023</p>

              <p>{rating.rating}</p>
              <p>{review.comment}</p>
            </div>
          );
        }
        return null;
      })}
    </div>
  );
};

export default ReviewSection;
