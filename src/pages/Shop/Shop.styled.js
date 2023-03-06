import styled from "styled-components";

export const ContentBox = styled.section`
  width: 100%;
  padding-block: 130px;
  text-align: center;
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

export const TextCounter = styled.p`
  text-align: start;
  font-weight: 500;
  font-size: 17px;
  line-height: 1.4;
  letter-spacing: 0.02em;
  color: var(--text-gray);
`;

export const Wraper = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  justify-content: center;
  grid-gap: 30px;
  margin: 0 auto;
  max-width: 100%;
  margin-block: 65px;
`;

export const NavBtn = styled.button`
  margin-top: 65px;
  padding: 9px 16px;
  text-align: center;
  font-weight: 500;
  font-size: 17px;
  line-height: 1.4;
  letter-spacing: 0.02em;
  border: 1px solid var(--text-color);
  background-color: transparent;
  color: var(--text-color);
  transition: color var(--transition), background-color var(--transition);
  cursor: pointer;

  &:hover,
  &:focus {
    background-color: var(--text-color);
    color: var(--bg-body);
  }
`;

export const Filter = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 92px;

  & .select__control {
    width: 250px;
    height: 62px;
    font-weight: 500;
    font-size: 17px;
    line-height: 1.4;
    letter-spacing: 0.02em;
    border: 1px solid var(--text-color);
    background-color: transparent;
    color: var(--text-color);
    border-radius: 0;
    transition: color var(--transition), background-color var(--transition);
    cursor: pointer;

    &:not(:last-child) {
      margin-right: 12px;
    }

    &:active,
    &:hover,
    &:focus {
      background-color: var(--text-color);
      color: var(--bg-body);
    }

    & .select__single-value,
    & .select__placeholder {
      color: inherit;

      &:active,
      &:hover,
      &:focus {
        color: inherit;
      }
    }
  }

  & .select__option {
    font-weight: 500;
    font-size: 17px;
    line-height: 1.4;
    letter-spacing: 0.02em;
    background-color: var(--bg-body);
    color: var(--text-color);
    transition: color var(--transition), background-color var(--transition);

    &:active,
    &:hover,
    &:focus {
      background-color: var(--text-color);
      color: var(--bg-body);
    }
  }
`;

export const FilterItem = styled.li``;
