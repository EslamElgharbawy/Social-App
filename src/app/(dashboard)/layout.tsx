"use client";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import SuggestedFriendsCard from "@/components/SuggestedFriends/SuggestedFriends";
import UserCard from "@/components/UserCard/UserCard";
import { setToken } from "@/Features/user.slice";
import { geUserInfo } from "@/Features/UserInfo.slice";
import { useAppDispatch, useAppSelector } from "@/hooks/Store.hooks";
import {
  Avatar,
  BottomNavigation,
  BottomNavigationAction,
  Box,
  Paper,
} from "@mui/material";
import Grid from "@mui/material/Grid";
import { usePathname, useRouter } from "next/navigation";
import { ReactNode, useEffect } from "react";
import HomeIcon from "@mui/icons-material/Home";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SearchIcon from "@mui/icons-material/Search";
export default function DashboardLayout({ children }: { children: ReactNode }) {
    const router = useRouter();
  const pathname = usePathname();
  const isHome = pathname === "/";
  const isProfile = pathname === "/Profile";
  const isNotifications = pathname === "/Notifications";
  let { user } = useAppSelector((store) => store.UserInfoReducer);

  const dispatch = useAppDispatch();
  useEffect(() => {
    const token = localStorage.getItem("token");
    dispatch(setToken(token));
    dispatch(geUserInfo());
  }, []);
  return (
    <>
      <Navbar />
      <Box sx={{ bgcolor: "#FAFBFF", py: { xs: 0, lg: 3 }, my: { xs: 0 } }}>
        <Grid
          container
          sx={{ mx: { xs: 1, md: 5 }, py: 3, my: { xs: 0, md: 8 } }}
        >
          {/* Sidebar */}
          <Grid size={3} sx={{ display: { xs: "none", md: "block" } }}>
            <UserCard />
          </Grid>

          {/* Main Content */}
          <Grid size={{ xs: 12, md: isProfile || isNotifications ? 9 : 6 }}>{children}</Grid>

          {isHome && (
            <>
              {/* Suggestions*/}
              <Grid
                size={3}
                sx={{ pl: 5, display: { xs: "none", md: "block" } }}
              >
                <Box
                  sx={{
                    position: "sticky",
                    top: 100,
                    alignSelf: "flex-start",
                  }}
                >
                  <SuggestedFriendsCard fixed />
                  <Footer fixed />
                </Box>
              </Grid>
            </>
          )}
        </Grid>
      </Box>
      {/* Bottom Navigation */}
      <Paper
        sx={{
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          display: { md: "none", xs: "block" },
        }}
        elevation={3}
      >
        <BottomNavigation showLabels>
          <BottomNavigationAction
            label="Profile"
            onClick={() => router.push('/Profile')}
            icon={<Avatar src={user?.photo} sx={{ width: 20, height: 20 }} />}
          />
          <BottomNavigationAction
            label="Alerts"
            onClick={() => router.push('/Notifications')}
            icon={<NotificationsNoneIcon />}
          />
          <BottomNavigationAction label="Search" icon={<SearchIcon/>} />
          <BottomNavigationAction label="Home"  onClick={() => router.push('/')} icon={<HomeIcon />} />
        </BottomNavigation>
      </Paper>
    </>
  );
}
