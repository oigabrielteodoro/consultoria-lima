import { ComponentType } from "react";

import { IconProps } from "@phosphor-icons/react";

import { theme } from "@/../stitches.config";

import * as S from "./BenefitItem.styles";

type Props = {
  title: string;
  description: string;
  icon: ComponentType<IconProps>;
};

export function BenefitItem({ title, description, icon: Icon }: Props) {
  return (
    <S.Container>
      <S.IconContainer>
        <Icon size={24} color={theme.colors.blue500.value} />
      </S.IconContainer>
      <S.TextContainer>
        <S.Title>{title}</S.Title>
        <S.Description>{description}</S.Description>
      </S.TextContainer>
    </S.Container>
  );
}
