import styled from "styled-components";

export const HeaderContainer = styled.header`
  background: var(--primary-color);
  height: 230px;

  @media (max-width: 768px) {
    height: 400px;
  }
`;

export const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  max-width: 1120px;
  margin: 0 auto;
  padding: 2rem 1rem;

  span {
    display: flex;
    align-items: center;

    font-size: 2rem;
    color: var(--white);
  }

  button {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    height: 3rem;
    padding: 0 1rem;

    font-size: 1.25rem;
    color: var(--white);

    background-color: #283666;

    border: 2px solid var(--white);
    border-radius: 4px;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(1.3);
    }

    @media (max-width: 550px) {
      width: 100%;
      justify-content: center;
      margin-top: 1rem;
      font-size: 1.5rem;
      height: 4rem;
    }
  }

  @media (max-width: 550px) {
    flex-direction: column;
  }
`;
