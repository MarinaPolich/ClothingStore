import styled from "styled-components";

export const ContentBox = styled.section`
  width: 100%;
  padding-block: 130px;
  text-align: end;
`;

export const Title = styled.h2`
  margin-bottom: 190px;
  text-align: start;
  font-weight: 500;
  font-size: 55px;
  line-height: 1.1;
  letter-spacing: 0.02em;
  color: var(--text-color);
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 72px;
`;

export const TableHeader = styled.thead`
  padding-bottom: 26px;
  text-align: start;
  border-bottom: 1px solid #cccccc;
  font-weight: 500;
  font-size: 20px;
  line-height: 1.4;
  letter-spacing: 0.02em;
  color: var(--text-color);
`;

export const ItemHeader = styled.td`
  padding-bottom: 26px;
`;

export const TableBody = styled.tbody`
  text-align: start;
  vertical-align: middle;
  font-weight: 500;
  font-size: 17px;
  line-height: 1.4;
  letter-spacing: 0.02em;
  color: var(--text-color);
`;

export const TableData = styled.td`
  min-width: 60px;
  max-width: 200px;
  padding-top: 49px;
`;

export const DelBtn = styled.button`
  width: 12px;
  height: 12px;
  /* margin-right: 36px; */
  text-align: center;
  border: none;
  background-color: transparent;
  cursor: pointer;
`;

export const ThumbaImage = styled.div`
  width: 125px;
  aspect-ratio: 125 / 179;
  /* margin-right: 36px; */
`;

export const Image = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center center;
`;

export const TextName = styled.p`
  /* width: 200px;
  text-align: start; */
`;

export const Input = styled.input`
  width: 80px;
  padding: 9px 5px 9px 19px;
  border: 1px solid #afafaf;
  font: inherit;
`;

export const Wraper = styled.div`
  display: inline-flex;
  flex-direction: row;
  justify-content: end;
  align-items: center;
`;

export const TextBox = styled(Wraper)`
  justify-content: space-between;
  margin-right: 15px;
  padding: 16px 50px 16px 30px;
  background-color: var(--footer-color);
`;

export const CheckoutText = styled.span`
  font-weight: 500;
  font-size: 25px;
  line-height: 1.4;
  letter-spacing: 0.02em;
  color: var(--text-color);

  &:not(:last-child) {
    margin-right: 62px;
  }
`;

export const CheckoutBtn = styled.button`
  padding: 22px 50px;
  text-align: center;
  font-weight: 400;
  font-size: 17px;
  line-height: 1.39;
  letter-spacing: 0.02em;
  border: none;
  background-color: var(--primary);
  color: var(--bg-body);
  transition: background-color var(--transition);
  cursor: pointer;

  &:hover,
  &:focus {
    background-color: var(--hover-bg);
  }
`;
