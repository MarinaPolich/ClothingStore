import {
  getFirestore,
  collection,
  query,
  where,
  getDocs,
  limit,
} from "firebase/firestore";
import app from "../../firebase-config";
import { CardShop } from "../../components/CardShop/CardShop";
import { Hero } from "../../components/Hero/Hero";
import {
  ContentBox,
  ItemValue,
  LinkBtn,
  Wraper,
  Title,
  Box,
  ThumbImage,
  Image,
  TitleItem,
  TextItem,
  ItemTime,
  LinkText,
} from "./Home.styled";
import SVG from "react-inlinesvg";
import { fast, res, values } from "../../assets/icon";
import { photo_time } from "../../assets/image";
import { useEffect, useState } from "react";

const Home = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    (async () => {
      const db = getFirestore(app);
      const coll = collection(db, "shop");
      const q = query(coll, where("newCollection", "==", true), limit(3));

      const querySnapshot = await getDocs(q);

      setItems(
        querySnapshot.docs.map((item) => ({ id: item.id, ...item.data() }))
      );
    })();
  }, []);
  return (
    <>
      <Hero />

      <ContentBox>
        <Title id="new">Новая коллекция</Title>
        <Wraper>
          {items.map((item) => (
            <CardShop key={item.id} item={item} />
          ))}
        </Wraper>
        <LinkBtn to="/shop">Открыть магазин</LinkBtn>
      </ContentBox>

      <ContentBox>
        <Title>Что для нас важно</Title>
        <Wraper>
          <ItemValue>
            <SVG src={values} width={61} height={61} title="values" />
            <TitleItem>Качество</TitleItem>
            <TextItem>
              Наши профессионалы работают на лучшем оборудовании для пошива
              одежды беспрецедентного качества
            </TextItem>
          </ItemValue>
          <ItemValue>
            <SVG src={fast} width={61} height={61} title="fast" />
            <TitleItem>Скорость</TitleItem>
            <TextItem>
              Благодаря отлаженной системе в Womazing мы можем отшивать до 20-ти
              единиц продукции в наших собственных цехах
            </TextItem>
          </ItemValue>
          <ItemValue>
            <SVG src={res} width={61} height={61} title="responsibility" />
            <TitleItem>Ответственность</TitleItem>
            <TextItem>
              Мы заботимся о людях и планете. Безотходное производство и
              комфортные условия труда - все это Womazing
            </TextItem>
          </ItemValue>
        </Wraper>
      </ContentBox>

      <ContentBox>
        <Title>Команда мечты Womazing</Title>
        <Box>
          <ThumbImage>
            <Image src={photo_time} alt="time photo" />
          </ThumbImage>
          <ItemTime>
            <TitleItem>Для каждой</TitleItem>
            <TextItem style={{ marginBottom: "28px" }}>
              Каждая девушка уникальна. Однако, мы схожи в миллионе мелочей.
            </TextItem>
            <TextItem>
              Womazing ищет эти мелочи и создает прекрасные вещи, которые
              выгодно подчеркивают достоинства каждой девушки.
            </TextItem>
            <LinkText to="/brand">Подробнее о бренде</LinkText>
          </ItemTime>
        </Box>
      </ContentBox>
    </>
  );
};

export default Home;
