import {
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import Config from "../config";
import { GithubOutlined, GoogleOutlined } from "@ant-design/icons";
import "../App.css";
import { EmailOutlined } from "@mui/icons-material";
import FeatureCard from "../components/FeatureCard";
import SignUpModal from "../components/modals/SignUpModal";
import SignInModal from "../components/modals/SignInModal";

const SignUp = () => {
  const [isSignUpEmailClicked, setIsSignUpEmailClicked] = useState(false);
  const [isSignInEmailClicked, setIsSignInEmailClicked] = useState(false);
  const { colorConfig } = Config;

  const signUpWithEmail = () => {
    setIsSignUpEmailClicked(true);
  };

  const closeSignUpWithEmail = () => {
    setIsSignUpEmailClicked(false);
  };

  const signInWithEmail = () => {
    setIsSignInEmailClicked(true);
  };

  const closeSignInWithEmail = () => {
    setIsSignInEmailClicked(false);
  };

  return (
    <div>
      {isSignUpEmailClicked && (
        <SignUpModal
          isOpen={isSignUpEmailClicked}
          handleClose={closeSignUpWithEmail}
        />
      )}

      {isSignInEmailClicked && (
        <SignInModal
          isOpen={isSignInEmailClicked}
          handleClose={closeSignInWithEmail}
        />
      )}
      <Grid
        className="content"
        container
        direction="row"
        justifyItems={"center"}
        justifyContent={"center"}
        p={5}
        spacing={4}
      >
        <Grid
          mt={10}
          color={"white"}
          container
          direction={"row"}
          item
          md={5}
          xs={12}
        >
          <Box>
            <Typography variant="h3" sx={{ mb: 1 }}>
              Cloud Computing Developer Trust
            </Typography>
            <Typography
              color={"#E6E0DE"}
              variant="subtitle1"
              sx={{ lineHeight: 1.2 }}
            >
              In the 19th century, it was debated whether the most fundamental
              principle in language was contextuality or compositionality, and
              compositionality was usually preferred compositionality was
              usually preferred compositionality was usually preferred
            </Typography>
          </Box>
        </Grid>
        <Grid color={"white"} item md={4} xs={12}>
          <Card
            variant="outlined"
            sx={{
              backgroundColor: colorConfig.secondryColor,
              borderRadius: 0,
              boxShadow: 10,
              justifyContent: "center",
            }}
          >
            <CardContent
              className="sign-up-card-content"
              sx={{ textAlign: "center", color: "white", py: 5 }}
            >
              <Button
                className="btn"
                sx={{
                  backgroundColor: "green",
                  gap: "8px",
                }}
              >
                <GoogleOutlined style={{ fontSize: "20px" }} /> Sign up with
                Google
              </Button>
              <Button
                className="btn"
                sx={{
                  backgroundColor: colorConfig.mainColor,
                  gap: "8px",
                }}
              >
                <GithubOutlined style={{ fontSize: "20px" }}></GithubOutlined>{" "}
                Github
              </Button>
              <Button
                onClick={signUpWithEmail}
                className="btn"
                sx={{
                  backgroundColor: colorConfig.mainColor,
                  gap: "8px",
                }}
              >
                <EmailOutlined style={{ fontSize: "20px" }}></EmailOutlined>{" "}
                Email
              </Button>
              <br />
              <Typography variant="body2" sx={{ pr: 4, pl: 4, pb: 4 }}>
                In the 19th century, it was debated whether the most fundamental
                principle in language was contextuality or compositionality,{" "}
                <Button
                  onClick={signInWithEmail}
                  sx={{
                    color: "green",
                    background: "none",
                    textDecoration: "underline",
                    textTransform: "none",
                  }}
                >
                  Sign In
                </Button>
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Typography
        variant="h4"
        color="white"
        sx={{ textAlign: "center", mb: 3 }}
      >
        Features
      </Typography>
      <Grid justifyContent={"center"} container>
        <Grid justifyContent={"center"} item md={4}>
          <Typography
            variant="subtitle1"
            color="white"
            sx={{ textAlign: "center", mb: 5, lineHeight: 1.2 }}
          >
            In the 19th century, it was debated whether the most fundamental
            principle in language was contextuality or compositionality,
          </Typography>
        </Grid>
      </Grid>

      <Grid
        container
        mb={5}
        spacing={3}
        direction={"column"}
        justifyContent={"center"}
        alignContent={"center"}
      >
        <Grid
          container
          direction={"row"}
          justifyContent={"center"}
          alignContent={"center"}
          spacing={2}
          item
        >
          <Grid item xs={4}>
            <FeatureCard
              imageUrl={
                "https://miro.medium.com/v2/resize:fit:1400/1*LUFUl_8fqS97nUzpcFjgWw.png"
              }
            ></FeatureCard>
          </Grid>
          <Grid item xs={4}>
            <FeatureCard
              imageUrl={
                "https://miro.medium.com/v2/resize:fit:1400/1*LUFUl_8fqS97nUzpcFjgWw.png"
              }
            ></FeatureCard>
          </Grid>
        </Grid>
        <Grid
          container
          direction={"row"}
          justifyContent={"center"}
          alignContent={"center"}
          spacing={2}
          item
        >
          <Grid xs={4} item>
            <FeatureCard
              imageUrl={
                "https://miro.medium.com/v2/resize:fit:1400/1*LUFUl_8fqS97nUzpcFjgWw.png"
              }
            ></FeatureCard>
          </Grid>
          <Grid xs={4} item>
            <FeatureCard
              imageUrl={
                "https://miro.medium.com/v2/resize:fit:1400/1*LUFUl_8fqS97nUzpcFjgWw.png"
              }
            ></FeatureCard>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default SignUp;
