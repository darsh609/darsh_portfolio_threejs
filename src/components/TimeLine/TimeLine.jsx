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
        
          <TimelineItem >
            <TimelineOppositeContent
              sx={{ m: "auto 0" }}
              align="right"
              variant="body2"
              color="text.secondary"
            >
              13/5/24
            </TimelineOppositeContent>

            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot>
                <Event />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: "12px", px: 2 }}>
              <Typography variant="h6">SPIRE Lab-IISC Banglore</Typography>
              <Typography> Web Developer in English-Gyaani project </Typography>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem >
            <TimelineOppositeContent
              sx={{ m: "auto 0" }}
              align="right"
              variant="body2"
              color="text.secondary"
            >
              13/7/24
            </TimelineOppositeContent>

            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot>
                <Event />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: "12px", px: 2 }}>
              <Typography variant="h6"></Typography>
              <Typography></Typography>
            </TimelineContent>
          </TimelineItem>
  
  
      </Timeline>
    </div>
  );
};

export default TimeLine;