import { styled } from "@/../stitches.config";
import Link from "next/link";

export const Container = styled("header", {
  position: "sticky",
  top: 0,

  display: "flex",
  alignItems: "center",

  background: "$white",
  borderBottom: "1px solid $neutral200",

  height: "80px",
  zIndex: "$alwaysOnTop",
});

export const Content = styled("div", {
  maxWidth: "1296px",
  marginInline: "auto",

  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",

  flex: 1,

  "@tablet": {
    maxWidth: "100vw",
    paddingInline: "$3",
  },
});

export const NavigationList = styled("ul", {
  display: "flex",
  alignItems: "center",
});

export const NavigationItem = styled("li", {
  "& + li": {
    marginLeft: "$6",
  },
});

export const NavigationLink = styled(Link, {
  color: "$blue900",
  transition: "all 0.2s",

  "&:hover": {
    color: "$neutral400",
  },
});
