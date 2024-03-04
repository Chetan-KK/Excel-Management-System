"use client";
import { useEffect, useState } from "react";
import DashboardLayout from "../DashboadLayout";
import { useToast } from "@/components/ui/use-toast";

const Dashboard = () => {
  const url = process.env.SHEET_ONE_URL;
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
          height: "100%",
          width: "100%",
          borderRadius: "20px",
        }}
        title="YouTube video player"
        allow="autoplay"
        // allowfullscreen
      ></iframe>
    </DashboardLayout>
  );
};

export default Dashboard;
