import SVG from "react-inlinesvg";
import {
  facebook,
  instagram,
  logo,
  mastercard,
  twitter,
} from "../../assets/icon";
import { LogoBtn } from "../Header/Header.styled";
import {
  ContactBox,
  ContactLink,
  FooterContainer,
  SocialItem,
  Text,
  Wraper,
  WraperSocial,
  WraperText,
  Container,
} from "./Footer.styled";
import { Navigation } from "../Navigation/Navigation";

export const Footer = () => {
  return (
    <FooterContainer>
      <Container>
        <Wraper>
          <WraperText>
            <LogoBtn to="/" style={{ marginBottom: "70px" }}>
              <SVG src={logo} width={140} height={25} title="logo" />
            </LogoBtn>
            <Text>&copy; Все права защищены</Text>
            <Text>Политика конфиденциальности</Text>
            <Text>Публичная оферта</Text>
          </WraperText>

          <Navigation />

          <ContactBox>
            <ContactLink href="tel:+380958235412">
              +38 (095) 823-54-12
            </ContactLink>
            <ContactLink href="mailto:hello@womazing.com">
              hello@womazing.com
            </ContactLink>
            <WraperSocial>
              <SocialItem href="https://www.instagram.com/">
                <SVG
                  src={instagram}
                  width={22}
                  height={22}
                  title="go to instagram"
                />
              </SocialItem>
              <SocialItem href="https://www.facebook.com/">
                <SVG
                  src={facebook}
                  width={22}
                  height={22}
                  title="go to facebook"
                />
              </SocialItem>
              <SocialItem href="https://twitter.com/">
                <SVG
                  src={twitter}
                  width={22}
                  height={22}
                  title="go to twitter"
                />
              </SocialItem>
            </WraperSocial>
            <SVG src={mastercard} width={68} height={22} title="mastercard" />
          </ContactBox>
        </Wraper>
      </Container>
    </FooterContainer>
  );
};
