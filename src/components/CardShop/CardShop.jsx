import {
  CardBox,
  Image,
  TextCard,
  ThumbImage,
  TitleCard,
} from "./CardShop.styled";

export const CardShop = ({ item }) => {
  return (
    <CardBox>
      <ThumbImage>
        <Image src={item.photo} title="product photo" />
      </ThumbImage>
      <TitleCard>{item.name}</TitleCard>
      <TextCard>${item.price}</TextCard>
    </CardBox>
  );
};
