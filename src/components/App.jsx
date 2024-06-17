import { useState } from "react";
import Description from "./Description/Description";
import Optiions from "./Options/Options";
import Feedback from "./Feedback/Feedback";

export default function App() {
  const [reviewsNumber, setReviewsNumber] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });
  return (
    <div>
      <Description />
      <Optiions />
      <Feedback
        good={reviewsNumber.good}
        neutral={reviewsNumber.neutral}
        bad={reviewsNumber.bad}
      />
    </div>
  );
}
