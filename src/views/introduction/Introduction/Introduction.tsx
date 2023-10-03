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
        <S.DescriptionContainer>
          <S.Description>
            Você já parou para pensar na diferença que um acompanhamento
            profissional e apoio emocional podem fazer em sua vida? Muitas
            vezes, enfrentamos desafios, dilemas e momentos difíceis que podem
            parecer esmagadores.
          </S.Description>
          <S.Description>
            No entanto, contar com a orientação certa e um apoio emocional
            adequado pode ser a chave para superar obstáculos e alcançar o seu
            melhor potencial.
          </S.Description>
        </S.DescriptionContainer>
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
