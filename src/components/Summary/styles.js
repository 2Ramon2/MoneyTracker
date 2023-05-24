import styled from "styled-components";

export const SummaryContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-content: space-between;
  gap: 2rem;
  max-width: 1120px;

  margin-top: -7rem;

  div {
    background: var(--white);
    padding: 1.5rem 1rem 2rem;
    box-shadow: -6px 5px 6px -3px rgba(0, 0, 0, 0.5);
    border-radius: 4px;

    header {
      display: flex;
      justify-content: space-between;
      align-items: center;

      h2 {
        font-size: 1.25rem;
        font-weight: 500;
      }

      span {
        padding: 0.25rem;
        border-radius: 4px;
      }

    }

    strong {
      margin-top: 1.8rem;
      font-size: 2rem;
      font-weight: 400;
      color: #333;
      @media (max-width: 1080px) {
          font-size: 1.30rem;
      }

      @media (max-width: 768px) {
        font-size: 1.6rem;
      }
    }


    @media (max-width: 768px) {
      padding: 1rem;
    }
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1rem;
    margin-top: -18rem;
  }
`;

export const IncomeIcon = styled.span`
  background: #49ab68;
`;

export const OutcomeIcon = styled.span`
  background: #b51d20;
`;
export const TotalIcon = styled.span`
  background: #49ab68;
`;
