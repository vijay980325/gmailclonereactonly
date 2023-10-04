import React, { useState } from "react";
import {
  Box,
  Grid,
  Card,
  Typography,
  Divider,
  TextField,
  Button,
  Menu,
  MenuItem,
  FormGroup,
  FormControlLabel,
  Checkbox,
  CardMedia,
} from "@mui/material";
import { Link } from "react-router-dom";
import youtubeVideo from "../video.mp4";
import pic from "../pic.png";
import Login from "./Login";

function ViewVideo() {
  const [videoPermission, setVideoPermission] = useState(false);
  const [viewvideo, setViewVideo] = useState(false);

  const handleOnclickViewVideo = (e) => {
    setViewVideo(!viewvideo);
  };

  const handleOnclickViewVideoCheck = (e) => {
    setViewVideo(false);
    setVideoPermission(true);
  };

  return (
    <Box>
      {viewvideo ? (
        <Login
          handleOnclickViewVideoCheck={handleOnclickViewVideoCheck}
          setViewVideo={setViewVideo}
          setVideoPermission={setVideoPermission}
        />
      ) : (
        <Grid container>
          {videoPermission ? (
            <Grid item md={12}>
              <Card>
                <video controls width="100%" style={{ height: "90vh" }}>
                  <source src={youtubeVideo} type="video/webm" />
                </video>
              </Card>
            </Grid>
          ) : (
            <Grid
              item
              xs={12}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100vh",
              }}
            >
              <Box sx={{ position: "absolute" }}>
                <img src={pic} alt="" height={"100%"} width={"100%"} />
              </Box>
              <Card
                sx={{
                  height: "100px",
                  width: "100px",
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: "column",
                  alignItems: "center",
                  padding: "20px",
                  position: "relative",
                  zIndex: 5,
                }}
              >
                {/* <Typography sx={{ textAlign: "center", mb: 2 }}>
                  Please click login to watching video
                </Typography> */}
                <Button
                  color="error"
                  variant="contained"
                  onClick={handleOnclickViewVideo}
                  sx={{ textTransform: "capitalize" }}
                >
                  watch
                </Button>
              </Card>
            </Grid>
          )}
        </Grid>
      )}
    </Box>
  );
}

export default ViewVideo;
