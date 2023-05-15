import { styled } from "@/../stitches.config";

export const Container = styled("section", {
  paddingBlock: "$36",
  borderTop: "1px solid $neutral200",
});

export const Content = styled("div", {
  maxWidth: "1296px",
  marginInline: "auto",

  display: "flex",
  flexDirection: "column",
  gap: "$14",
});

export const Title = styled("h1", {
  color: "$blue900",

  fontSize: "$h3",
  lineHeight: "$h3",

  fontWeight: 500,
  marginTop: "$6",
});

export const Description = styled("p", {
  color: "$neutral400",

  fontSize: "$body1",
  lineHeight: "$body1",
  fontFamily: "$secondary",

  maxWidth: "880px",
});
