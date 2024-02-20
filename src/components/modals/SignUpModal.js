import {
  Modal,
  Typography,
  Box,
  Card,
  CardContent,
  Button,
  Grid,
  TextField,
  Snackbar,
} from "@mui/material";
import React, { useCallback, useState } from "react";
import Config from "../../config";
import useAuth from "../../hooks/useAuth";

const textFieldStyle = {
  sx: {
    backgroundColor: Config.colorConfig.mainColor,
    color: "white",
    "& .MuiOutlinedInput-notchedOutline": {
      border: "none", // remove border
    },
    "&:hover .MuiOutlinedInput-notchedOutline": {
      border: "none", // remove border on hover
    },
    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
      border: "none", // remove border when focused
    },
  },
};

const SignUpModal = ({ isOpen, handleClose }) => {
  const { colorConfig } = Config;
  const { signUp } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [isSignClicked, setSignUpClicked] = useState(false);
  const [isError, setError] = useState(false);

  const handleEmailChange = useCallback((event) => {
    setEmail(event.target.value);
  }, [setEmail]);

  const handlePasswordChange = useCallback((event) => {
    setPassword(event.target.value);
  }, [setPassword]);

  const handleRePasswordChange = useCallback((event) => {
    setRePassword(event.target.value);
  }, [setRePassword]);

  const handleSubmit = useCallback(() => {
    setError(false);
    setSignUpClicked(true);
    if (password === rePassword) {
      signUp(email, password)
        .then(() => {
          setSignUpClicked(false);
          handleClose();
        })
        .catch((err) => {
          setSignUpClicked(false);
          setError(true);
        });
    }
  }, [email, password, rePassword]);

  return (
    <div>
      {isError && (
        <Snackbar
          anchorOrigin={{ vertical: "top", horizontal: "center" }}
          open={isError}
          autoHideDuration={3000}
          message="Something went wrong!"
        />
      )}
      <Modal
        open={isOpen}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            border: "2px solid #000",
            boxShadow: 24,
          }}
        >
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
              <TextField
                sx={{
                  width: "80%",
                  mb: 3,
                }}
                InputProps={textFieldStyle}
                size={"small"}
                id="email"
                placeholder="Email"
                type="text"
                value={email}
                onChange={handleEmailChange}
              />
              <TextField
                sx={{
                  width: "80%",
                  mb: 2,
                }}
                InputProps={textFieldStyle}
                size={"small"}
                id="password"
                placeholder="Password"
                type="password"
                value={password}
                onChange={handlePasswordChange}
              />
              <TextField
                sx={{
                  width: "80%",
                  mb: 2,
                }}
                InputProps={textFieldStyle}
                size={"small"}
                id="re-password"
                placeholder="Retype Password"
                type="password"
                value={rePassword}
                onChange={handleRePasswordChange}
              />
              <Button
                className="btn"
                sx={{
                  backgroundColor: "green",
                  "&:hover": {
                    backgroundColor: "green",
                  },
                  gap: "8px",
                }}
                onClick={handleSubmit}
              >
                {isSignClicked ? "Signing up..." : "Sign up"}
              </Button>
            </CardContent>
          </Card>
        </Box>
      </Modal>
    </div>
  );
};
export default SignUpModal;
