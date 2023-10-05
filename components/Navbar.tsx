"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import navImage from '@/images/NavbarLogo3.png.png'
import Link from "next/link";
import {
  Button,
  Drawer,
  Grid,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useRouter } from "next/navigation";
import useToken from "@/services/TokenProvider";
import MenuIcon from "@mui/icons-material/Menu";
import { navLinks } from "@/json/navbarItems";

const Navbar = () => {
  const theme = useTheme();
  const router = useRouter();
  const [token, setToken] = useState<null | string>(null);
  const [openDrawer, setOpenDrawer] = useState(false);
  const isSmall = useMediaQuery(theme.breakpoints.down("sm"));

  useEffect(() => {
    setToken(useToken);
  }, []);

  return (
    <Grid
      container
      justifyContent={"space-between"}
      height={"10%"}
      direction={"row"}
      alignItems={"center"}
      padding={3}
      fontSize={"20px"}
      // fontWeight={5}
      className="font-semibold bg-app-secondary text-2xl"
      item
      sm={12}
      md={12}
    >
      <Grid item>
        <Grid container>
          {isSmall && (
            <Grid item onClick={() => setOpenDrawer(!openDrawer)}>
              <MenuIcon />
              <>
                <Drawer
                  open={openDrawer}
                  onClose={() => setOpenDrawer(openDrawer)}
                  PaperProps={{
                    sx:{width:'45%'}
                  }}
                >
                  <List>
                    {navLinks.map((navlink) => (
                      <ListItemButton key={navlink.id}>
                        <ListItemIcon>
                          <ListItemText> {navlink.link} </ListItemText>
                        </ListItemIcon>
                      </ListItemButton>
                    ))}
                  </List>
                </Drawer>
              </>
            </Grid>
          )}
          <Grid item>
            {/* <Image src={navImage} alt="NAVIMAGE" width={50} height={40} /> */}
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <Grid container direction={"row"} item gap={6} xs={12}>
          {!isSmall && (
            <>
              <Grid>
                <Link href={"/"} className="hover:text-blue-800">
                  Home
                </Link>
              </Grid>
              <Grid>
                <Link href={"/about"} className="hover:text-blue-800">
                  About
                </Link>
              </Grid>
              <Grid>
                <Link href={"/contact"} className="hover:text-blue-800">
                  Contact
                </Link>
              </Grid>
              <Grid>
                <Link href={"/blog"} className="hover:text-blue-800">
                  Blog
                </Link>
              </Grid>
              <Grid className="border border-darkApp-background h-9"></Grid>
            </>
          )}
          <Grid>
            {token ? (
              <Button
                variant="contained"
                className="bg-app-primary hover:bg-slate-500"
                onClick={() => {
                  sessionStorage.removeItem("token");
                  setToken("");
                  router.push("/");
                }}
              >
                logout
              </Button>
            ) : (
              <Button
                variant="contained"
                className="bg-app-primary hover:bg-slate-500"
                onClick={() => router.push("/login")}
              >
                Login
              </Button>
            )}
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Navbar;
