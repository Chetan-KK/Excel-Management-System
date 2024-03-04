"use client";
import { useEffect, useState } from "react";
import DashboardLayout from "../DashboadLayout";
import { useToast } from "@/components/ui/use-toast";

const Dashboard = () => {
  const url =
    "https://docs.google.com/spreadsheets/d/1r1IR5EmzffhfCrthiPyeJi5ynihmSYKa128GoQW9_fk/edit?usp=sharing";
  return (
    <DashboardLayout>
      <iframe
        // className="rounded-2xl"
        // ref={playerRef}
        width="760"
        height="415"
        src={url}
        style={{
          colorScheme: "dark",
        }}
        title="YouTube video player"
        allow="autoplay"
        // allowfullscreen
      ></iframe>
    </DashboardLayout>
  );
};

export default Dashboard;
