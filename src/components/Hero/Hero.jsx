import { SliderHero } from "../Slider/Slider";
import {
  HeroWraper,
  Image,
  ImageContainer,
  ThumbaCenter,
  ThumbaLeft,
  ThumbaRight,
} from "./Hero.styled";
import { photo_1, photo_2, photo_3 } from "../../assets/image";

export const Hero = () => {
  return (
    <HeroWraper>
      <SliderHero />
      <ImageContainer>
        <ThumbaCenter>
          <Image src={photo_2} alt="photo content" />
        </ThumbaCenter>
        <ThumbaLeft>
          <Image src={photo_1} alt="photo content" />
        </ThumbaLeft>
        <ThumbaRight>
          <Image src={photo_3} alt="photo content" />
        </ThumbaRight>
      </ImageContainer>
    </HeroWraper>
  );
};
