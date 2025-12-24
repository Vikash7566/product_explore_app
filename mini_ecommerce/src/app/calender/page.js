import dynamic from "next/dynamic";
import React from "react";
// Dynamically import the calendar component
const FullCalendarJSX = dynamic(() => import("@/component/calender/Calender"), {
  loading: () => <p>Loading Calendar...</p>,
});

const Page = () => {
  return (
    <div>
      <FullCalendarJSX />
    </div>
  );
};

export default Page;
