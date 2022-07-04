import styled from "styled-components";

const Side = (props) => {
  return <SideContainer>{props.children}</SideContainer>;
};

const SideContainer = styled.aside`
 position: fixed;
 left: 0;
 top: 0;
 z-index: 100;
 height: 100vh;
 width: 70%
 background: white;
 box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
`;

export default Side;
