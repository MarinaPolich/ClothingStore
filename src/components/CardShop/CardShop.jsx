import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { addOrderItem } from "../../redux/cart/cart-slice";
import {
  AddBtn,
  CardBox,
  Image,
  SubmitBtn,
  TextCard,
  ThumbImage,
  TitleCard,
} from "./CardShop.styled";
import Modal from "../Modal/Modal";
import { AuthForm } from "../Authorization/AuthForm";
import { getIsLogin } from "../../redux/auth/auth-selector";

export const CardShop = ({ item }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [stateForm, setStateForm] = useState(1);
  const dispatch = useDispatch();
  const isLogin = useSelector(getIsLogin);

  const addToCardHandle = () => {
    if (isLogin) dispatch(addOrderItem(item.id));
    else setIsModalOpen(true);
  };

  useEffect(() => {
    if (isLogin) setIsModalOpen(false);
  }, [isLogin]);

  return (
    <>
      <CardBox>
        <ThumbImage>
          <Image src={item.photo} title="product photo" />
          <AddBtn type="button" onClick={addToCardHandle}>
            Добавить в корзину
          </AddBtn>
        </ThumbImage>
        <TitleCard>{item.name}</TitleCard>
        <TextCard>${item.price}</TextCard>
      </CardBox>

      {isModalOpen && (
        <Modal setModalClose={setIsModalOpen}>
          {stateForm === 1 && (
            <>
              <TitleCard>Чтобы добавить товар в корзину, Вам нужно:</TitleCard>
              <SubmitBtn type="button" onClick={() => setStateForm(2)}>
                Авторизоваться
              </SubmitBtn>
            </>
          )}
          {stateForm === 2 && <AuthForm />}
        </Modal>
      )}
    </>
  );
};
