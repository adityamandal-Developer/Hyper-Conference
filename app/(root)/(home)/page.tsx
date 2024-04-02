import MeetingTypeList from "@/components/MeetingTypeList";
import React from "react";

function Home() {
  const now = new Date();
  const time = now.toLocaleTimeString("en-IN", {
    hour: "2-digit",
    minute: "2-digit",
  });
  const date = now.toLocaleDateString("en-IN", {
    dateStyle: "full",
  });
  return (
    <section className="flex size-full flex-col gap-10 text-white">
      <div className="h-[350px] w-full rounded-[20px] bg-hero bg-cover">
        <div className="flex h-full flex-col justify-between max-md:px-5 max-md:py-8 lg:p-11">
          <h2 className="glassmorphism max-w-[270px] p-2 text-center rounded-lg">
            upcomming Meeting at: 12:30 PM
          </h2>
          <div className="flex flex-col gap-2">
            <h1 className="text-3xl font-extrabold lg:text-7xl">{time}</h1>
            <p className="text-lg font-medium text-blue-200">{date}</p>
          </div>
        </div>
      </div>
      <MeetingTypeList />
    </section>
  );
}

export default Home;
