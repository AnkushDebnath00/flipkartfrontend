import React, { useState } from "react";

// components
import { Box, Dialog, TextField, Typography, Button } from "@mui/material";
import { authenticateSignup, authenticateLogin } from "../../sevice/api";

function LoginBox(props) {
  const [newUser, setNewUser] = useState(false);
  const [error, setError] = useState(false);
  const [details, setDetails] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });

  const signUpUser = async () => {
    let response = await authenticateSignup(details);
    if (!response) return;
    props.setOpen(false);
    props.setAccount(details.firstname);
  };
  const loginUser = async () => {
    let response = await authenticateLogin(login);
    console.log(response);
    try {
      if (response.status === 200) props.setOpen(false);
      props.setAccount(response.data.data.firstname);
    } catch (error) {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 2000);
    }
  };

  return (
    <Dialog
      open={props.open}
      onClose={() => props.setOpen(false)}
      maxWidth={"800px"}
    >
      {newUser ? (
        <Box className="flex h-[80vh] w-[98vw] max-w-[800px] flex-col md:h-[600px] md:w-[55vw] md:flex-row">
          <Box className='h-[30%] w-[90%] bg-[#2874f0] bg-[center_85%] bg-no-repeat md:h-full md:w-[40%] md:bg-[url("https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/login_img_c4a81e.png")]'>
            <Typography className="mx-8 mt-10 text-[27px] font-medium text-white">
              {"Looks like you are new here!"}
            </Typography>
            <Typography className="mx-8 mt-4 text-[17px] font-light text-gray-200">
              {"Sign up with your mobile number to get started"}
            </Typography>
          </Box>
          <Box className="flex h-[70%] w-[90%] flex-col items-center md:h-full md:w-[60%]">
            {/* SignUp Inputs */}
            <Box className="flex w-[90%] flex-row p-0">
              <TextField
                required
                label="Firstname"
                name="firstname"
                size="small"
                fullWidth
                variant="standard"
                className="mr-1 mt-10"
                onChange={(e) => {
                  setDetails({ ...details, [e.target.name]: e.target.value });
                }}
              />
              <TextField
                required
                label="Lastname"
                name="lastname"
                size="small"
                fullWidth
                variant="standard"
                className="ml-1 mt-10"
                onChange={(e) => {
                  setDetails({ ...details, [e.target.name]: e.target.value });
                }}
              />
            </Box>
            <TextField
              required
              label="Enter Email/Mobile number"
              name="email"
              size="small"
              fullWidth
              variant="standard"
              className="mx-8 mt-10 w-[90%]"
              onChange={(e) => {
                setDetails({ ...details, [e.target.name]: e.target.value });
              }}
            />
            <TextField
              required
              label="Enter Password"
              name="password"
              type="password"
              size="small"
              fullWidth
              variant="standard"
              className="mx-8 mt-10 w-[90%]"
              onChange={(e) => {
                setDetails({ ...details, [e.target.name]: e.target.value });
              }}
            />

            <Typography className="mx-6 mt-16 mb-4 text-left text-xs font-light text-gray-600">
              By continuing, you agree to Flipkart's{" "}
              <span className="text-[#2874f0]">Terms of Use</span> and{" "}
              <span className="text-[#2874f0]">Privacy Policy</span>.
            </Typography>
            <Button
              variant="contained"
              className="mx-5 w-[90%] rounded-none bg-[#fb641b] py-3 text-white"
              onClick={signUpUser}
            >
              Continue
            </Button>
            <Button
              variant="contained"
              className="mx-5 mt-5 w-[90%] rounded-none bg-white py-3 text-[#2874f0]"
              onClick={() => setNewUser(false)}
            >
              Existing User? Login
            </Button>
          </Box>
        </Box>
      ) : (
        <Box className="flex h-[80vh] w-[98vw] max-w-[800px] flex-col md:h-[600px] md:w-[55vw] md:flex-row">
          <Box className='h-[30%] w-[90%] bg-[#2874f0] bg-[center_85%] bg-no-repeat md:h-full md:w-[40%] md:bg-[url("https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/login_img_c4a81e.png")]'>
            <Typography className="mx-8 mt-10 text-[27px] font-medium text-white">
              {"Login"}
            </Typography>
            <Typography className="mx-8 mt-4 text-[17px] font-light text-gray-200">
              {"Get access to your Orders, Wishlist and Recommendations"}
            </Typography>
          </Box>
          <Box className="flex h-[70%] w-[90%] flex-col items-center md:h-full md:w-[60%]">
            {/* Login Inputs */}
            <TextField
              required
              name="email"
              label="Enter Email/Mobile number"
              size="small"
              fullWidth
              variant="standard"
              className="mx-8 mt-10 w-[90%]"
              onChange={(e) => {
                setLogin({ ...login, [e.target.name]: e.target.value });
              }}
            />
            <TextField
              error={error}
              required
              name="password"
              label="Enter Password"
              type="password"
              size="small"
              fullWidth
              variant="standard"
              className="mx-8 mt-10 w-[90%]"
              onChange={(e) => {
                setLogin({ ...login, [e.target.name]: e.target.value });
              }}
            />
            {error && (
              <Typography className="mx-6 mt-0 mb-0 text-left text-xs font-light text-red-600">
                Invalid email or password. Try signup instead.
              </Typography>
            )}
            <Typography className="mx-6 mt-16 mb-4 text-left text-xs font-light text-gray-600">
              By continuing, you agree to Flipkart's
              <span className="text-[#2874f0]">Terms of Use</span> and
              <span className="text-[#2874f0]">Privacy Policy</span>.
            </Typography>
            <Button
              variant="contained"
              className="mx-5 w-[90%] rounded-none bg-[#fb641b] py-3 text-white"
              onClick={loginUser}
            >
              Login
            </Button>
            <Typography className="mx-auto mt-5 text-left text-xs font-semibold text-gray-600">
              OR,
            </Typography>
            <Button
              variant="contained"
              className="mx-5 mt-5 w-[90%] rounded-none bg-white py-3 text-[#2874f0]"
            >
              {"Request OTP"}
            </Button>
            <div onClick={() => setNewUser(true)}>
              <Typography
                href="#"
                className="mt-32 cursor-pointer text-sm text-[#2874f0]"
              >
                {"New to Flipkart? create an acount"}{" "}
              </Typography>
            </div>
          </Box>
        </Box>
      )}
    </Dialog>
  );
}

export default LoginBox;
