import { Button, Logo } from "@/ui";

import * as S from "./Header.styles";
import Link from "next/link";

export function Header() {
  return (
    <S.Container>
      <S.Content>
        <Logo />

        <nav>
          <S.NavigationList>
            <S.NavigationItem>
              <S.NavigationLink href="/blog">Ver notícias</S.NavigationLink>
            </S.NavigationItem>
            <S.NavigationItem>
              <Link href="https://wa.link/9zc0i9" target="_blank">
                <Button>Entrar em contato</Button>
              </Link>
            </S.NavigationItem>
          </S.NavigationList>
        </nav>
      </S.Content>
    </S.Container>
  );
}
