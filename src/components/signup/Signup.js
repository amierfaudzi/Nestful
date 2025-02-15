import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import UserContext from "../context/userContext";
import ErrorNotice from "../../components/misc/ErrorNotice";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import "./signup.style.scss";
import Container from "@material-ui/core/Container";
import { Link as RouterLink } from "react-router-dom";
// import MaterialLink from "@material-ui/core/link";

// function Copyright() {
//   return (
//     <Typography variant="body2" color="textSecondary" align="center">
//       {"Copyright © "}
//       <RouterLink to='/'>
//         Nestful
//       </RouterLink>{" "}
//       {new Date().getFullYear()}
//       {"."}
//     </Typography>
//   );
// }

function SignUp({setCurrentTitle}) {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [passwordCheck, setPasswordCheck] = useState();
  const [displayName, setDisplayName] = useState();
  const [error, setError] = useState();

  const { setUserData } = useContext(UserContext);
  const history = useHistory();

  const submit = async (e) => {
    e.preventDefault();

    try {
      const newUser = { email, password, passwordCheck, displayName };
      await axios.post(
        "https://nestful-api-v2.herokuapp.com/users/register",
        newUser
      );
      const loginResponse = await axios.post(
        "https://nestful-api-v2.herokuapp.com/users/login",
        {
          email,
          password,
        }
      );
      setUserData({
        token: loginResponse.data.token,
        user: loginResponse.data.user,
      });
      localStorage.setItem("auth-token", loginResponse.data.token);
      history.push("/welcome");
    } catch (err) {
      err.response.data.msg && setError(err.response.data.msg);
    }
  };

  setCurrentTitle('');
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className="paper">
        <Avatar className="avatar">
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Get started with Nestful
        </Typography>
        {error && (
          <ErrorNotice message={error} clearError={() => setError(undefined)} />
        )}
        <form onSubmit={submit} className="form">
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                type="text"
                label="Name"
                id="dsplay-name"
                onChange={(e) => setDisplayName(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                type="email"
                id="email"
                variant="outlined"
                required
                fullWidth
                label="Email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                type="password"
                id="password"
                variant="outlined"
                label="Password"
                required
                fullWidth
                onChange={(e) => setPassword(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                type="password"
                label="Confirm password"
                onChange={(e) => setPasswordCheck(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="I want to receive notification and updates via email."
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className="submit"
          >
            Sign Up
          </Button>
          <Grid container justify="center">
            <Grid item>
              {/* <MaterialLink variant="body2" component={RouterLink} to="/signin">
                Already have an account? Sign in
              </MaterialLink> */}
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>{/* <Copyright /> */}</Box>
    </Container>
  );
}

export default SignUp;
