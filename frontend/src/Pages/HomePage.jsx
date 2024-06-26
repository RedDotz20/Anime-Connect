import { Box, Divider, Stack } from "@mui/material";
import LeftBar from "../Components/HomePage/LeftBar";
import Feed from "../Components/HomePage/Feed";
// import SideBar from "../Components/HomePage/SideBar";
import Cookies from "js-cookie";
import { Suspense, lazy, useEffect, useState } from "react";
const SideBar = lazy(() => import("../Components/HomePage/SideBar"));
import { useDispatch } from "react-redux";
import { isAuth } from "../redux/reducers/auth/authSlice";
import Loading from "../Components/Loading";

const HomePage = () => {
  const dispatch = useDispatch();
  const [user, setUser] = useState();
  useEffect(() => {
    if (Cookies.get("weeebsuser")) {
      setUser(JSON.parse(Cookies.get("weeebsuser")));
    }
  }, []);
  if (user) {
    dispatch(
      isAuth({
        isAuthenticated: true,
        email: user.email,
        fullname: user.fullname,
        profilePictureUrl: user.profilepictureurl,
        theme: user.theme,
        username: user.username,
        postcount: user.postcount,
        followers: user.followers,
        following: user.following,
        location: user.location,
        bio: user.bio,
        animeInterest: user.animeInterest,
        verified: user.verified,
      })
    );
  }
  return (
    <Box bgcolor={"primary.main"} color={"primary.text"}>
      <Stack
        direction="row"
        divider={<Divider orientation="vertical" flexItem />}
        spacing={{ xs: 0, sm: 2 }}
      >
        <LeftBar />
        <Feed />
        <Suspense fallback={<Loading />}>
          <SideBar />
        </Suspense>
      </Stack>
    </Box>
  );
};

export default HomePage;
