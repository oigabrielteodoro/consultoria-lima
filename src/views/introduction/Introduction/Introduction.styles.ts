import Link from "next/link";

import { styled } from "@/../stitches.config";

export const Container = styled("section", {
  position: "relative",

  maxWidth: "1296px",
  marginInline: "auto",

  display: "flex",
  alignItems: "center",

  "@tablet": {
    maxWidth: "100vw",
  },
});

export const Content = styled("div", {
  marginBlock: "$48",

  display: "flex",
  flexDirection: "column",
  gap: "$6",

  "@tablet": {
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    marginInline: "auto",

    marginBlock: "$24",
    paddingInline: "$6",
  },
});

export const Title = styled("h1", {
  color: "$blue900",

  fontSize: "$h4",
  fontWeight: 700,

  maxWidth: "666px",

  "@mobile": {
    fontSize: "28px",
  },
});

export const Description = styled("p", {
  color: "$neutral400",

  fontFamily: "$secondary",
  fontSize: "$body1",
  lineHeight: "$body1",

  maxWidth: "650px",
});

export const Image = styled("img", {
  position: "absolute",
  top: 0,
  right: "-8%",

  zIndex: "$alwaysOnBottom",

  "@tablet": {
    display: "none",
  },
});

export const Actions = styled("div", {
  display: "flex",
  alignItems: "center",
  gap: "$6",
});

export const SeeBenefitsLink = styled(Link, {
  color: "$blue900",

  display: "inline-flex",
  alignItems: "center",
  gap: "$3",

  transition: "all 0.2s",

  "&:hover": {
    color: "$neutral400",
  },

  "@mobile": {
    svg: {
      display: "none",
    },
  },
});
