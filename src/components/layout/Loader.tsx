import styled from "styled-components";
import loadersvg from "assets/loader.svg";

export interface LoaderProps {
  className?: string;
}

export function Loader(props: LoaderProps) {
  return (
    <LoaderStyle {...props}>
      <img src={loadersvg} alt=" " />
    </LoaderStyle>
  );
}

const LoaderStyle = styled.div`
  display: inline-block;
`;
