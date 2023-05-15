import { styled } from "@/../stitches.config";

export const Container = styled("div", {
  display: "flex",
  alignItems: "flex-start",

  gap: "$6",

  background: "$white",
  border: "1px solid $neutral200",

  padding: "$8",

  transition: "all 0.2s",

  "&:hover": {
    borderColor: "$blue500",
  },

  "@tablet": {
    flexDirection: "column",
  },
});

export const TextContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
});

export const Title = styled("strong", {
  fontSize: "$body1",
  color: "$blue900",

  fontWeight: 700,
  lineHeight: "$body1",

  marginBottom: "$3",
});

export const Description = styled("p", {
  color: "$neutral400",

  fontFamily: "$secondary",
  lineHeight: "$body3",
});

export const IconContainer = styled("div", {
  background: "$blue100",
  height: "48px",
  minWidth: "48px",

  borderRadius: "50%",

  display: "grid",
  placeItems: "center",
});
