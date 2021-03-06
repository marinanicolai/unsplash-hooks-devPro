import styled from "styled-components";

export const Navigation = styled.div`
  display: flex;
  align-items: center;
`;

export const CameraImage = styled.div`
  background-image: url(${(props) => props.img});
`;

export const Image = styled.img`
  justify-content: center;
  padding: 15px;
  max-height: 80%;
`;
