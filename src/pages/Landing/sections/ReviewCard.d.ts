import React from "react";
import { Review } from "@/data/reviewsData";
interface ReviewCardProps {
    review: Review;
}
declare const ReviewCard: React.FC<ReviewCardProps>;
export default ReviewCard;
