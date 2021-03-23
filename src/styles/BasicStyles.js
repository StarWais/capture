import styled from "styled-components";

export const BasicSection = styled.div`
  min-height: 90vh;
  display: flex;
  align-content: center;
  justify-content: space-between;
  padding: 5rem 10rem;
  color: white;
`;
export const Description = styled.div`
  flex: 1;
  padding-right: 5rem;
  h2 {
    font-weight: lighter;
  }
`;
export const Image = styled.div`
  flex: 1;
  img {
    overflow: hidden;
    width: 100%;
    height: 80vh;
    object-fit: cover;
  }
`;
export const Hidden = styled.div`
  overflow: hidden;
`;
