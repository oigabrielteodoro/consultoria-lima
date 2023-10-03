import { Check, User } from "@phosphor-icons/react";

import { theme } from "@/../stitches.config";

import * as S from "./AboutMe.styles";

export function AboutMe() {
  return (
    <S.Container id="sobre-mim">
      <div>
        <User size={24} color={theme.colors.blue500.value} />
        <S.Title>Quem sou eu</S.Title>
        <S.DescriptionContainer>
          <S.Description>
            No exercício da minha função como assistente social, mantenho uma
            convicção sólida acerca da relevância de ouvir de forma atenta e
            compreender as narrativas individuais de cada cliente.
          </S.Description>
          <S.Description>
            Cada pessoa trilha uma trajetória singular, enfrentando desafios
            específicos, e estou aqui com o propósito de fornecer o suporte,
            orientação e os recursos necessários para facilitar a mitigação ou a
            superação dessas adversidades.
          </S.Description>
        </S.DescriptionContainer>

        <ul>
          <li>
            <S.SkillItem>
              <Check size={24} color={theme.colors.blue500.value} />
              <span>Disposta a enfrentar desafios</span>
            </S.SkillItem>
          </li>
          <li>
            <S.SkillItem>
              <Check size={24} color={theme.colors.blue500.value} />
              <span>Sempre buscando soluções para problemas sociais</span>
            </S.SkillItem>
          </li>
          <li>
            <S.SkillItem>
              <Check size={24} color={theme.colors.blue500.value} />
              <span>Procuro fazer a diferença na vida das pessoas</span>
            </S.SkillItem>
          </li>
          <li>
            <S.SkillItem>
              <Check size={24} color={theme.colors.blue500.value} />
              <span>
                Acredito que com colaboração conseguimos alcançar resultados
                incríveis
              </span>
            </S.SkillItem>
          </li>
        </ul>
      </div>
      <S.ProfileCard>
        <img src="/profile.png" alt="Maria Ozineide Lima" />
        <S.ProfileCardInformation>
          <strong>Maria Ozineide Lima</strong>
          <span>
            51 anos, Assistente Social <span className="blue">|</span> CRESS
            48.981
          </span>
        </S.ProfileCardInformation>
      </S.ProfileCard>
    </S.Container>
  );
}
