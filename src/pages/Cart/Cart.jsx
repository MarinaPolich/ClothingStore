import SVG from "react-inlinesvg";
import {
  CheckoutBtn,
  CheckoutText,
  ContentBox,
  DelBtn,
  Image,
  Input,
  ItemHeader,
  Table,
  TableBody,
  TableData,
  TableHeader,
  TextBox,
  TextName,
  ThumbaImage,
  Title,
  Wraper,
} from "./Cart.styled";
import { del } from "../../assets/icon";
import { useDispatch, useSelector } from "react-redux";
import { getOrderItem } from "../../redux/cart/cart-selector";

import { useEffect, useState } from "react";
import {
  getFirestore,
  collection,
  query,
  where,
  getDocs,
  documentId,
} from "firebase/firestore";
import app from "../../firebase-config";
import { deleteOrderItem, setCount } from "../../redux/cart/cart-slice";

const Cart = () => {
  const dispatch = useDispatch();
  const [items, setItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const orderItems = useSelector(getOrderItem);

  useEffect(() => {
    (async () => {
      if (!orderItems) return;
      const db = getFirestore(app);
      const coll = collection(db, "shop");
      const q = query(
        coll,
        where(
          documentId(),
          "in",
          orderItems.map(({ id }) => id)
        )
      );

      const querySnapshot = await getDocs(q);

      const res = querySnapshot.docs.map((item) => ({
        id: item.id,
        ...item.data(),
      }));

      let total = 0;

      setItems(
        orderItems.map(({ id, count }) => {
          const item = res.find((item) => item.id === id);
          if (item) {
            total += item.price * count;
            return {
              id,
              count,
              photo: item.photo,
              name: item.name,
              price: item.price,
            };
          }
          return { id, count };
        })
      );
      setTotalPrice(total);
    })();
  }, [orderItems]);

  return (
    <ContentBox>
      <Title>Корзина</Title>
      <Table>
        <TableHeader>
          <tr>
            <ItemHeader colSpan="3">Товар</ItemHeader>
            <ItemHeader>Цена</ItemHeader>
            <ItemHeader>Количество</ItemHeader>
            <ItemHeader>Всего</ItemHeader>
          </tr>
        </TableHeader>
        <TableBody>
          {items.map((item) => (
            <tr key={item.id}>
              <TableData>
                <DelBtn
                  type="button"
                  onClick={() => dispatch(deleteOrderItem(item.id))}
                >
                  <SVG src={del} width={12} height={12} title="delete" />
                </DelBtn>
              </TableData>
              <TableData>
                <ThumbaImage>
                  <Image src={item.photo} title="photo" />
                </ThumbaImage>
              </TableData>
              <TableData>
                <TextName>{item.name}</TextName>
              </TableData>
              <TableData>${item.price}</TableData>
              <TableData>
                <Input
                  type="number"
                  value={item.count}
                  onChange={({ target }) =>
                    dispatch(setCount({ id: item.id, count: +target.value }))
                  }
                />
              </TableData>
              <TableData>${item.price * item.count}</TableData>
            </tr>
          ))}
        </TableBody>
      </Table>
      <Wraper>
        <TextBox>
          <CheckoutText>Итого:</CheckoutText>
          <CheckoutText>${totalPrice}</CheckoutText>
        </TextBox>
        <CheckoutBtn type="button">Оформить заказ</CheckoutBtn>
      </Wraper>
    </ContentBox>
  );
};

export default Cart;
