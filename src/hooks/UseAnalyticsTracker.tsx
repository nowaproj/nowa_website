import React from "react";
import ReactGA from "react-ga";

const useAnalyticsEventTracker = (category = "User Actions") => {
  const eventTracker = (
    action = "button click",
    label = "get early access"
  ) => {
    ReactGA.event({ category, action, label });
  };
  return eventTracker;
};
export default useAnalyticsEventTracker;
