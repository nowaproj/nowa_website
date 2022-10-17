import React from "react";
import ReactGA from "react-ga4";

const useAnalyticsEventTracker = (category = "User Actions") => {
  const eventTracker = (
    action = "button click",
    label = "get early access"
  ) => {
    ReactGA.event({
      action: "asd",
      category: "button_clicks",
      label: "get early access",
    });
  };
  return eventTracker;
};
export default useAnalyticsEventTracker;
