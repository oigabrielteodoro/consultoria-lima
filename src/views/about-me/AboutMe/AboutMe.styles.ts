import { styled } from "@/../stitches.config";

export const Container = styled("section", {
  maxWidth: "1296px",
  marginInline: "auto",

  display: "flex",
  alignItems: "flex-start",
  justifyContent: "space-between",

  paddingBlock: "$36",

  "@tablet": {
    flexDirection: "column",
    padding: "$16 $6",

    maxWidth: "100vw",
  },
});

export const Title = styled("h1", {
  color: "$blue900",

  fontSize: "$h3",
  lineHeight: "$h3",

  fontWeight: 500,
  marginTop: "$6",
});

export const Description = styled("h3", {
  color: "$neutral400",

  fontSize: "$body1",
  fontFamily: "$secondary",
  lineHeight: "$body1",

  fontWeight: 400,
  marginBlock: "$6 $8",

  "@mobile": {
    fontSize: "$body2",
  },
});

export const ProfileCard = styled("div", {
  display: "flex",
  flexDirection: "column",

  maxWidth: "416px",
  width: "100%",

  img: {
    width: "100%",
    height: "485px",

    objectFit: "cover",
    background: "$black",
  },
});

export const ProfileCardInformation = styled("div", {
  display: "flex",
  flexDirection: "column",

  width: "100%",
  background: "$neutral100",

  padding: "$8",
  gap: "$2",

  strong: {
    color: "$blue900",

    fontSize: "$h5",
    lineHeight: "$h5",
  },

  span: {
    color: "$neutral400",

    ".blue": {
      color: "$blue500",
    },
  },
});

export const SkillItem = styled("div", {
  display: "flex",
  alignItems: "center",
  gap: "$3",

  marginBottom: "$8",

  span: {
    color: "$neutral400",

    fontSize: "$body1",
    lineHeight: "$body1",

    fontFamily: "$secondary",
    fontWeight: 300,

    "@mobile": {
      fontSize: "$body3",
    },
  },

  svg: {
    minWidth: "24px",
  },
});
