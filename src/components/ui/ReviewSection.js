import { Rating } from "@material-tailwind/react";
import React from "react";

const person = (
  <svg height="20" viewBox="0 0 8 8" xmlns="http://www.w3.org/2000/svg">
    <path
      d="m4 0c-1.1 0-2 1.12-2 2.5s.9 2.5 2 2.5 2-1.12 2-2.5-.9-2.5-2-2.5zm-2.09 5c-1.06.05-1.91.92-1.91 2v1h8v-1c0-1.08-.84-1.95-1.91-2-.54.61-1.28 1-2.09 1s-1.55-.39-2.09-1z"
      fill="#"
    />
  </svg>
);
const ReviewSection = ({ service }) => {
  console.log(service);
  return (
    <div className="lg:ml-20">
      <span>Guests Review</span>
      {service?.reviews?.map((review) => {
        const rating = service.ratings.find(
          (rating) => rating.userId === review.userId
        );
        console.log(rating?.rating);
        if (rating) {
          return (
            <div key={review.id}>
              <div className="flex my-4 items-center gap-4">
                {person}
                <div>
                  <p className="uppercase">{rating.user.name}</p>
                  <p className="text-deep_primary text-sm">03 july 2023</p>
                </div>
              </div>
              <div className="ml-4">
                <Rating
                  value={
                    parseInt(rating?.rating) > 5 ? 5 : parseInt(rating?.rating)
                  }
                  size="sm"
                  color="blue"
                  readonly
                />
                <p>{review.comment}</p>
              </div>
            </div>
          );
        }
        return null;
      })}
    </div>
  );
};

export default ReviewSection;
