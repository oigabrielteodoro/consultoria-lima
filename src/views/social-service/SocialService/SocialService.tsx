import { BenefitItem } from "@/views/benefits/BenefitItem";
import * as S from "./SocialService.styles";
import {
  Heart,
  Briefcase,
  UsersThree,
  GraduationCap,
} from "@phosphor-icons/react";

export function SocialService() {
  return (
    <S.Container id="o-que-e-servico-social">
      <S.Content>
        <S.Title>
          Descubra como o apoio socioassistencial faz toda a diferença na vida
          daqueles que recebem assistência.
        </S.Title>
        <S.Description>
          Por meio do meu trabalho e da minha experiência, busco oferecer
          atendimentos centrados nas questões fundamentais dos clientes, visando
          assim proporcionar soluções práticas e oportunidades para reflexão.
          Aqui estão algumas maneiras pelas quais o apoio socioassistencial pode
          impactar positivamente sua vida:
        </S.Description>
        <S.ItemsContainer>
          <BenefitItem
            icon={Heart}
            title="Saúde"
            description="No setor da assistência se refere ao cuidado e promoção do bem-estar físico e mental das pessoas, incluindo prevenção, diagnóstico e tratamento de doenças, visando garantir uma vida saudável e de qualidade."
          />
          <BenefitItem
            icon={Briefcase}
            title="Serviços previdenciários"
            description="São benefícios e assistência fornecidos pelo governo para garantir proteção financeira, segurança e assistência social a indivíduos em situações como aposentadoria, invalidez, desemprego, maternidade e necessidades de assistência social."
          />
          <BenefitItem
            icon={UsersThree}
            title="Relacionamentos"
            description="A prevenção de relacionamentos no âmbito da violência doméstica envolve a implementação de estratégias e educação para evitar conflitos abusivos, promovendo relacionamentos saudáveis, respeitosos e livres de violência entre parceiros e familiares."
          />
          <BenefitItem
            icon={GraduationCap}
            title="Educação"
            description="O Serviço Social na escola é um veículo poderoso para promover a inclusão social, a formação da cidadania e a emancipação dos sujeitos."
          />
        </S.ItemsContainer>
      </S.Content>
    </S.Container>
  );
}
