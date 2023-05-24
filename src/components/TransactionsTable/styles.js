import styled from "styled-components";

export const TransactionsTableContainer = styled.div`
  margin-top: 4rem;
  background: ${({ transactionsList }) =>
    transactionsList.length !== 0 && "#ddd"};
  padding: 1rem 0 0;
  box-shadow: ${({ transactionsList }) =>
    transactionsList.length !== 0 && "-6px 5px 6px -3px rgba(0, 0, 0, 0.5)"};
  border-radius: 4px;

  table {
    border-collapse: separate;
    border-spacing: 0 0.5rem;
    width: 100%;

    th {
      font-size: 0.875rem;
      color: #333;
      text-align: left;
      padding: 0 0 1rem 1.5rem;

      @media (max-width: 768px) {
        display: none;
      }
    }

    tbody {
      tr {
        background: var(--primary-color);

        td {
          color: var(--white);
          padding: 1rem 1.5rem;

          &:first-child {
            font-weight: 700;
            text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);

            width: 30.375rem;
          }

          &.deposit,
          &.withdraw {
            filter: brightness(1.4);
            text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);
          }

          &.deposit {
            position: relative;
            color: #49ab68;
          }

          &.withdraw {
            position: relative;
            color: #f00;
          }

          @media (max-width: 768px) {
            font-size: 1.25rem;
            width: 100%;
            border-bottom: 1px solid #fff;
            text-align: center;

            &:first-child {
              width: 100%;
              text-align: center;
              font-size: 1.25rem;
              border-bottom: 1px solid #fff;
            }
          }
        }

        @media (max-width: 768px) {
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 100%;
          margin-top: 1rem;
          padding: 1rem 0 0;
          box-shadow: -6px 5px 6px -3px rgba(0, 0, 0, 0.5);
        }
      }
    }
  }

  @media (max-width: 768px) {
    margin-top: 2rem;
    padding: 1rem 0 0;
  }
`;
