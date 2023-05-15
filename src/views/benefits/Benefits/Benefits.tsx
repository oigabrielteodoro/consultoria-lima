import { Heart, ShieldCheck, UsersThree, Wrench } from "@phosphor-icons/react";

import { BenefitItem } from "../BenefitItem";

import * as S from "./Benefits.styles";

export function Benefits() {
  return (
    <S.Container id="benefícios">
      <S.Content>
        <S.Title>Vantagens</S.Title>
        <S.BenefitsContainer>
          <BenefitItem
            icon={Wrench}
            title="Acesso a recursos e serviços"
            description="Assistência social pode ajudar a identificar e acessar recursos e serviços relevantes para a sua situação, tais como programas de proteção social, serviços de saúde e outros serviços públicos ou privados."
          />
          <BenefitItem
            icon={ShieldCheck}
            title="Proteção dos direitos sociais"
            description="Uma assistente social pode ajudar a proteger e defender os seus direitos sociais e humanos, garantindo que você tenha acesso a serviços e benefícios de proteção social adequados."
          />
          <BenefitItem
            icon={UsersThree}
            title="Inclusão social"
            description="A assistência social pode ajudar a promover a inclusão social, garantindo que grupos vulneráveis, como pessoas com deficiência, idosos e mulheres, tenham acesso a oportunidades e recursos adequados para o seu bem-estar e desenvolvimento."
          />
          <BenefitItem
            icon={Heart}
            title="Qualidade de vida"
            description="Ofereço suporte emocional, orientação e soluções para problemas sociais e pessoais."
          />
        </S.BenefitsContainer>
      </S.Content>
    </S.Container>
  );
}
