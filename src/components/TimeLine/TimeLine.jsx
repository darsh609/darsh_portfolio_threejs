import React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import { Event } from "@mui/icons-material";
import Typography from "@mui/material/Typography";

const TimeLine = ({ timelines = [] }) => {
  return (
    <div>
  <Timeline position="alternate">
    <TimelineItem>
      <TimelineOppositeContent
        sx={{ m: "auto 0" }}
        align="right"
        variant="body2"
        color="text.secondary"
      >
        Dec 2024 - Present
      </TimelineOppositeContent>
      <TimelineSeparator>
        <TimelineConnector />
        <TimelineDot>
          <Event />
        </TimelineDot>
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent sx={{ py: "12px", px: 2 }}>
        <Typography variant="h6">
          WEB DEVELOPER | SPRING SPREE (College Cultural Fest Website)
        </Typography>
        <Typography>
          Contributing to the development of the college cultural fest website,
          focusing on creating an eye-catching scrollable animation using JavaScript,
          React, and Tailwind CSS, ensuring responsiveness with proper media queries.
        </Typography>
      </TimelineContent>
    </TimelineItem>

    <TimelineItem>
      <TimelineOppositeContent
        sx={{ m: "auto 0" }}
        align="right"
        variant="body2"
        color="text.secondary"
      >
        May 2024 - July 2024
      </TimelineOppositeContent>
      <TimelineSeparator>
        <TimelineConnector />
        <TimelineDot>
          <Event />
        </TimelineDot>
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent sx={{ py: "12px", px: 2 }}>
        <Typography variant="h6">
          WEB DEVELOPER | SPIRE LAB | IISC (Indian Institute of Science, Bengaluru)
        </Typography>
        <Typography>
          Developed an audio fetching dashboard for the EnglishGyaani Project using React.js and Firebase,
          filtering over 1 lakh audios by state, gender, mother tongue, and specific words.
        </Typography>
      </TimelineContent>
    </TimelineItem>

    <TimelineItem>
      <TimelineOppositeContent
        sx={{ m: "auto 0" }}
        align="right"
        variant="body2"
        color="text.secondary"
      >
        Dec 2023 - Jan 2024
      </TimelineOppositeContent>
      <TimelineSeparator>
        <TimelineConnector />
        <TimelineDot>
          <Event />
        </TimelineDot>
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent sx={{ py: "12px", px: 2 }}>
        <Typography variant="h6">
          WEB DEVELOPER | CODSOFT
        </Typography>
        <Typography>
          Virtual Internship where I learned the basics of web development.
        </Typography>
      </TimelineContent>
    </TimelineItem>
  </Timeline>
</div>

  );
};

export default TimeLine;