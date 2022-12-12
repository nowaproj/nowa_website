import React from "react";
import { Footer, NavBar } from "../../components";
import "../../styles/event.scss";
import calendar from "../../assets/calendar.png";
import event from "../../assets/event.png";
export const EventPage = () => {
  return (
    <>
      <NavBar />
      <main>
        <div className="event-header mara mw">
          <h1>launch + livestream</h1>
          <h2>
            Join our Livestream on
            <br />
            17h January 2023
            <br />
            20.00 CET
          </h2>
          <a href="https://calendar.google.com/calendar/event?action=TEMPLATE&tmeid=MWxlN2pqdXZnZDVuY2E2ZmZhMjMzdW1qYjYgNjAzYTc0YmZlOTIyMzk1Mjk1MWZmY2U1ZDhiY2E3MjY3ZjhlOTI0NzE4YzhkMjU3ZmY4YWQ2YTYxMGFlNTNiMEBn&tmsrc=603a74bfe9223952951ffce5d8bca7267f8e924718c8d257ff8ad6a610ae53b0%40group.calendar.google.com">
            <img src={calendar} alt="" />
            Add to calendar
          </a>
        </div>
        <div className="event-image mara mw">
          <img src={event} alt="event" />
        </div>
        <div className="event-desc mara mw">
          Finally the time has come for you to build amazing apps! We are
          excited to launch Nowa for all of you. For this occasion we will host
          a livestream. You will see all the amazing features and learn how to
          use them by building something together. At the end we will have a Q&A
          session to answer all your questions. Add the event to your calendar
          to not forget about it! See you soon 👋
        </div>
        <div className="event-add mara mw">
          <a href="https://calendar.google.com/calendar/event?action=TEMPLATE&tmeid=MWxlN2pqdXZnZDVuY2E2ZmZhMjMzdW1qYjYgNjAzYTc0YmZlOTIyMzk1Mjk1MWZmY2U1ZDhiY2E3MjY3ZjhlOTI0NzE4YzhkMjU3ZmY4YWQ2YTYxMGFlNTNiMEBn&tmsrc=603a74bfe9223952951ffce5d8bca7267f8e924718c8d257ff8ad6a610ae53b0%40group.calendar.google.com">
            <img src={calendar} alt="" />
            Add to calendar
          </a>
        </div>
      </main>
      <Footer />
    </>
  );
};
