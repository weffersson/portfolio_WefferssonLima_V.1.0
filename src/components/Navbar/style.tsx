import { styled } from "@/styles/stitches.config";
import { Flex, Container } from "@/styles/Global";
import { Button } from "@/styles/Buttons";

export const Navbar = styled("nav", {
  background: "$grey0",
  borderBottom: "2px solid $brand1",
  position: "fixed",
  inset: 0,
  bottom: "auto",
  padding: "1rem 0",
  width: "100%",
  zIndex: "99999",

  [`& ${Container}`]: {
    display: "flex",
    position: "relative",
    justifyContent: "space-between",
    "@mobile": {
      flexDirection: "column",
    },
  },
});

export const LogoTipo = styled(Flex, {
  alignItems: "center",
});

export const LogoTipoText = styled("span", {
  fontSize: "1.25rem",
  fontWeight: 600,
  color: "$grey4",
  fontFamily: '"IBM Plex Sans"',
  "@mobile": {
    fontSize: "1rem",
  },
});

export const NavbarLinks = styled(Flex, {
  marginTop: "$1",
  alignItems: "flex-start",
  "& a": {
    width: "100%",
    justifyContent: "flex-start",
    paddingLeft: 0,
    position: "relative",
  },
  "& a::after": {
    content: '""',
    position: "absolute",
    width: "0%",
    height: "2px",
    bottom: "-1px",
    left: 0,
    background: "linear-gradient(to right, purple, pink)",
    opacity: 0,
    transition: "width 0.3s ease, opacity 0.3s ease",
  },
  "& a:hover::after": {
    width: "100%",
    opacity: 1,
  },
  "@mobile": {
    flexDirection: "column",
    "& a": {
      width: "100%",
      marginRight: 0,
    },
  },
  "@desktop": {
    flexDirection: "row",
    "& a": {
      width: "auto",
      marginRight: "1rem",
    },
  },
});


export const NavbarMobileArea = styled("div", {
  display: "flex",
  justifyContent: "space-between",
});

