import { Rating, Button, Input, Textarea } from "@material-tailwind/react";

import React from "react";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import {
  useCreateRatingMutation,
  useCreateReviewMutation,
} from "src/redux/api/serviceApi";
import { getDecodedeAccessToken } from "src/utiles/localStorage";

const ReviewAndRating = ({ id }) => {
  const { register, handleSubmit, reset } = useForm();

  const [createReview] = useCreateReviewMutation();
  const [createRating] = useCreateRatingMutation();
  const user = getDecodedeAccessToken();
  const handleReview = async (data) => {
    const reviewData = {
      serviceId: id,
      userId: user.id,
      comment: data.review,
    };
    const ratingData = {
      serviceId: id,
      userId: user.id,
      rating: data.rating,
    };

    try {
      const review = await createReview({ ...reviewData }).unwrap();
      const rating = await createRating({ ...ratingData });
      console.log(review, rating);
      if (review.success === true) {
        toast.success(review.message);
        reset();
      } else {
        toast.error("Something went wrong");
      }
    } catch (error) {
      console.error(error);
      toast.error("An error occurred.");
    }
  };
  return (
    <div>
      <Toaster />
      <div className="submit-review grid md:grid-col-6">
        {/* <div className="md:grid-cols-2">
          <p>location</p>
          <Rating value={5} readonly />;<p>location</p>
          <Rating value={5} readonly />;<p>location</p>
          <Rating value={5} readonly />;<p>location</p>
          <Rating value={5} readonly />;
        </div> */}
        <div className="grid-col-4"></div>
      </div>

      <form
        className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
        onSubmit={handleSubmit(handleReview)}
      >
        <div className="mb-4 flex flex-col gap-6">
          <Input
            size="lg"
            type="number"
            label="rating"
            {...register("rating", { required: true })}
          />
          <Textarea
            type="text"
            size="lg"
            label="write your review"
            {...register("review", { required: true })}
          />
        </div>

        <Button
          className="mt-6 bg-primary hover:bg-secondary"
          fullWidth
          type="submit"
        >
          Review
        </Button>
      </form>
    </div>
  );
};

export default ReviewAndRating;
