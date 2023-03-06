import {
  getFirestore,
  collection,
  query,
  where,
  getDocs,
  limit,
  getCountFromServer,
  startAfter,
  orderBy,
} from "firebase/firestore";
import app from "../../firebase-config";

import Select from "react-select";
import {
  ContentBox,
  NavBtn,
  Title,
  Wraper,
  TextCounter,
  Filter,
  FilterItem,
} from "./Shop.styled";
import { CardShop } from "../../components/CardShop/CardShop";
import { useCallback, useEffect, useState } from "react";
import SVG from "react-inlinesvg";
import { next } from "../../assets/icon";

const categories = [
  { value: 1, label: "Футболки" },
  { value: 2, label: "Купальники" },
  { value: 3, label: "Свитшоты" },
];

const orders = [
  {
    value: 1,
    label: "Сортировать по возростанию цены",
    orderName: "price",
    orderType: "asc",
  },
  {
    value: 2,
    label: "Сортировать по убыванию цены",
    orderName: "price",
    orderType: "desc",
  },

  {
    value: 3,
    label: "Сортировать от Я до А",
    orderName: "name",
    orderType: "desc",
  },
  {
    value: 4,
    label: "Сортировать от А до Я",
    orderName: "name",
    orderType: "asc",
  },
];

const Shop = () => {
  const [items, setItems] = useState([]);
  const [lastItem, setLastItem] = useState(null);
  const [countOnPage] = useState(6);
  const [count, setCount] = useState(0);
  const [filter, setFilter] = useState({});
  const [order, setOrder] = useState({ value: 2, name: "price", type: "desc" });

  const getCollection = useCallback(() => {
    const db = getFirestore(app);
    const coll = collection(db, "shop");
    const value = [coll];
    if (filter.category) {
      value.push(where("category", "==", filter.category));
    }
    value.push(orderBy(order.name, order.type));

    return value;
  }, [filter, order]);

  const loadMoreHandle = async () => {
    const coll = getCollection();
    const q = query(...coll, startAfter(lastItem), limit(countOnPage));
    const querySnapshot = await getDocs(q);

    setItems((state) => [
      ...state,
      ...querySnapshot.docs.map((item) => ({ id: item.id, ...item.data() })),
    ]);
    setLastItem(querySnapshot.docs[querySnapshot.docs.length - 1]);
  };

  const setFilterHandle = async (selected) => {
    setFilter((state) => ({ ...state, category: selected?.value }));
  };

  useEffect(() => {
    (async () => {
      const coll = getCollection();
      const q = query(...coll, limit(countOnPage));

      const snapshot = await getCountFromServer(query(...coll));
      setCount(snapshot.data().count);

      const querySnapshot = await getDocs(q);

      setItems(
        querySnapshot.docs.map((item) => ({ id: item.id, ...item.data() }))
      );
      setLastItem(querySnapshot.docs[querySnapshot.docs.length - 1]);
    })();
  }, [filter, order, countOnPage, getCollection]);

  return (
    <>
      <ContentBox>
        <Title>Магазин</Title>

        <Filter>
          <FilterItem>
            <Select
              className="basic-single"
              classNamePrefix="select"
              isSearchable={false}
              isClearable={true}
              placeholder="Все"
              name="category"
              options={categories}
              value={categories.find(({ value }) => value === filter?.category)}
              onChange={setFilterHandle}
            />
          </FilterItem>
          <FilterItem>
            <Select
              className="basic-single"
              classNamePrefix="select"
              isSearchable={false}
              name="order"
              options={orders}
              value={orders.find(({ value }) => value === order.value)}
              onChange={({ value, orderName, orderType }) =>
                setOrder({ value, name: orderName, type: orderType })
              }
            />
          </FilterItem>
        </Filter>

        <TextCounter>
          Показано: {items.length} из {count} товаров
        </TextCounter>
        <Wraper>
          {items.map((item) => (
            <CardShop key={item.id} item={item} />
          ))}
        </Wraper>
        <TextCounter>
          {" "}
          Показано: {items.length} из {count} товаров
        </TextCounter>
        {items.length < count && (
          <NavBtn type="button" onClick={loadMoreHandle}>
            Смотреть больше{" "}
            <SVG src={next} width={20} height={10} title="next" />
          </NavBtn>
        )}
      </ContentBox>
    </>
  );
};

export default Shop;
