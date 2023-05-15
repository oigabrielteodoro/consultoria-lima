import { styled } from "@/../stitches.config";

export const Button = styled("button", {
  padding: "$3 $8",
  textAlign: "center",

  color: "$blue900",

  fontFamily: "$primary",
  fontWeight: 700,

  background: "$blue300",
  border: 0,

  height: "51px",
  transition: "all 0.2s",

  "&:hover": {
    opacity: 0.8,
  },
});
