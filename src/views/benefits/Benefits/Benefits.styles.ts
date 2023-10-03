import { styled } from "@/../stitches.config";

export const Container = styled("section", {
  background: "$neutral100",
  padding: "$36 $6",

  marginTop: "$20",

  "@tablet": {
    marginTop: 0,
    paddingBlock: "$16",
  },
});

export const Content = styled("div", {
  maxWidth: "1296px",
  marginInline: "auto",

  display: "grid",
  gap: "$12",
});

export const TitleContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "$4",
});

export const Title = styled("h1", {
  color: "$blue900",

  fontWeight: 500,
  fontSize: "$h3",
  lineHeight: "$h3",

  maxWidth: "348px",
});

export const Description = styled("h2", {
  color: "$neutral400",

  fontWeight: 400,
  fontSize: "$body1",
  lineHeight: "$body1",

  maxWidth: "700px",
});

export const BenefitsContainer = styled("div", {
  display: "grid",
  gridTemplateColumns: "repeat(2, 1fr)",

  gap: "$8",

  "@mobile": {
    gap: "$6",
    gridTemplateColumns: "1fr",
  },
});
