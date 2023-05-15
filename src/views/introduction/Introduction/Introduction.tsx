import Link from "next/link";
import { Info } from "@phosphor-icons/react";

import { Button } from "@/ui";

import * as S from "./Introduction.styles";

export function Introduction() {
  return (
    <S.Container id="inicio">
      <S.Content>
        <S.Title>
          Experimente a diferença que acompanhamento profissional e apoio
          emocional podem fazer em sua vida
        </S.Title>
        <S.Description>
          Invista na sua qualidade de vida e na de sua família, agende agora
          mesmo sua avaliação e comece a cuidar de si e dos seus entes queridos
          através dos serviços da área socioassistencial.
        </S.Description>
        <S.Actions>
          <Link href="https://wa.link/9zc0i9" target="_blank">
            <Button>Entrar em contato</Button>
          </Link>
          <S.SeeBenefitsLink href="#benefícios">
            <Info size={24} />
            Ver benefícios
          </S.SeeBenefitsLink>
        </S.Actions>
      </S.Content>
      <S.Image
        src="/introduction.svg"
        alt="Uma mão puxando a outra na vertical simbolizando o apoio emocional"
      />
    </S.Container>
  );
}
