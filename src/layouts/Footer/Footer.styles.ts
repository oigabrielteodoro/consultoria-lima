import { styled } from "@/../stitches.config";

export const Container = styled("footer", {
  background: "$white",
  borderTop: "1px solid $neutral200",

  height: "78px",

  display: "grid",
  placeItems: "center",

  span: {
    color: "$blue900",
    fontWeight: 500,
    fontFamily: "$secondary",
    fontSize: "$body3",
    lineHeight: "$body3",
  },
});
