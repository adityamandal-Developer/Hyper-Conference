"use client";
import React, { useState } from "react";
import HomeCard from "./HomeCard";
import { useRouter } from "next/navigation";

const MeetingTypeList = () => {
  const router = useRouter();
  const [meetingState, setMeetingState] = useState<
    "isScheduleMeeting" | "isJoiningMeeting" | "isInstantMeeting" | undefined
  >();
  return (
    <section className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
      <HomeCard
        img="/icons/add-meeting.svg"
        title="New Meeting"
        description="start an instant meeting"
        handleClick={() => setMeetingState("isJoiningMeeting")}
        className="bg-orange-500 hover:bg-orange-700"
      />
      <HomeCard
        img="/icons/schedule.svg"
        title="Schedule Meeting"
        description="Plan a meeting"
        handleClick={() => setMeetingState("isScheduleMeeting")}
        className="bg-cyan-500 hover:bg-cyan-700"
      />
      <HomeCard
        img="/icons/recordings.svg"
        title="view recordings"
        description="Check your recordings meeting"
        handleClick={() => router.push("/recordings")}
        className="bg-violet-500 hover:bg-violet-700"
      />
      <HomeCard
        img="/icons/join-meeting.svg"
        title="Join Meeting"
        description="Via Invitation Link"
        handleClick={() => setMeetingState("isJoiningMeeting")}
        className="bg-amber-500 hover:bg-amber-700"
      />
    </section>
  );
};

export default MeetingTypeList;
