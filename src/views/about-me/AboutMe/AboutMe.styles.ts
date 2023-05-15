import { styled } from "@/../stitches.config";

export const Container = styled("section", {
  maxWidth: "1296px",
  marginInline: "auto",

  display: "flex",
  alignItems: "flex-start",
  justifyContent: "space-between",

  paddingBlock: "$36",
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
});

export const ProfileCard = styled("div", {
  display: "flex",
  flexDirection: "column",

  width: "416px",

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
  },
});
