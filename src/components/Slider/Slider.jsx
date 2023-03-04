import React from "react";
import SVG from "react-inlinesvg";
import Slider from "react-slick";
import {
  BtnBox,
  ItemSlider,
  LinkBtn,
  LinkDown,
  SliderBox,
  SliderIcon,
  SliderWraper,
  TextBtn,
  TextSlider,
  TitleSlider,
} from "./Slider.styled";

import "../../../node_modules/slick-carousel/slick/slick.css";
import { arrow } from "../../assets/icon";
// import "~slick-carousel/slick/slick-theme.css";

export const SliderHero = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 6000,
    cssEase: "linear",
    arrows: false,
    appendDots: (dots) => <SliderBox>{dots}</SliderBox>,
    customPaging: (i) => <SliderIcon></SliderIcon>,
  };
  return (
    <SliderWraper>
      <Slider {...settings}>
        <ItemSlider>
          <TitleSlider>Новые поступления в этом сезоне</TitleSlider>
          <TextSlider>
            Утонченные сочетания и бархатные оттенки - вот то, что вы искали в
            этом сезоне. Время исследовать.
          </TextSlider>
          <BtnBox>
            <LinkDown href="#new">
              <SVG src={arrow} width={66} height={66} title="go to news" />
            </LinkDown>
            <LinkBtn to="/shop">
              <TextBtn>Открыть магазин</TextBtn>
            </LinkBtn>
          </BtnBox>
        </ItemSlider>

        <ItemSlider>
          <TitleSlider>Что-то новенькое. Мы заждались тебя.</TitleSlider>
          <TextSlider>
            Надоело искать себя в сером городе? Настало время новых идей, свежих
            красок и вдохновения с Womazing!
          </TextSlider>
          <BtnBox>
            <LinkDown href="#new">
              <SVG src={arrow} width={66} height={66} title="go to news" />
            </LinkDown>
            <LinkBtn to="/shop">
              <TextBtn>Открыть магазин</TextBtn>
            </LinkBtn>
          </BtnBox>
        </ItemSlider>

        <ItemSlider>
          <TitleSlider>Включай новый сезон с WOMAZING</TitleSlider>
          <TextSlider>
            Мы обновили ассортимент - легендарные коллекции и новинки от
            отечественных дизайнеров
          </TextSlider>
          <BtnBox>
            <LinkDown href="#new">
              <SVG src={arrow} width={66} height={66} title="go to news" />
            </LinkDown>
            <LinkBtn to="/shop">
              <TextBtn>Открыть магазин</TextBtn>
            </LinkBtn>
          </BtnBox>
        </ItemSlider>
      </Slider>
    </SliderWraper>
  );
};
