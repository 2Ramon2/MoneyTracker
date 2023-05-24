import styled from "styled-components";
import { transparentize } from "polished";

export const TransactionsModalContainer = styled.div`
  position: relative;

  h2 {
    color: #fff;
    margin-bottom: 2rem;
  }

  & > button {
    display: flex;
    align-items: center;
    
    background: transparent;
    position: absolute;
    top: -20px;
    right: -10px;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.8);
    }

    @media (max-width: 768px) {
      padding: 0.25rem;
      background: rgba(255, 255, 255, 0.2);
      border-radius: 2rem;
    }
  }

  form {
    input {
      width: 100%;
      padding: 1.5rem 1rem;
      font-size: 1.5rem;
      color: #444;
      background: #ccc;
      outline: none;

      border-radius: 4px;

      & + input {
        margin-top: 1.5rem;
      }
    }

    button[type="submit"] {
      width: 100%;
      height: 3.5rem;
      margin-top: 1.5rem;

      font-size: 1.25rem;
      color: #fff;

      background: #283666;

      border: 2px solid #fff;
      border-radius: 4px;

      transition: filter 0.2s;

      &:hover {
        filter: brightness(1.3);
      }

      &:disabled {
        opacity: 0.5;
        cursor: not-allowed;
      }

      @media (max-width: 768px) {
        height: 5rem;
      }
    }
  }
`;

export const TransactionTypeContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;

  margin: 1.5rem 0rem;
`;

const typeButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  height: 4rem;

  box-shadow: -6px 5px 6px -3px rgba(0, 0, 0, 0.5);
  border-radius: 4px;

  font-size: 1.5rem;
  font-weight: 500;
  color: #fff;

  transition: transform 0.2s;

  &:hover {
    transform: scale(1.04);
  }

  @media (max-width: 768px) {
    font-size: 1.25rem;
  }
`;

export const DepositButton = styled(typeButton)`
  background: #229c32;
  background: ${({ transactionType }) =>
    transactionType === "deposit" ? `${transparentize(0.7, "#44fc32")}` : ""};
`;

export const WithdrawButton = styled(typeButton)`
  background: #b51d20;
  background: ${({ transactionType }) =>
    transactionType === "withdraw" ? `${transparentize(0.4, "#b51d20")}` : ""};
`;
