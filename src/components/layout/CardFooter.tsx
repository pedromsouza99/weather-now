import styled from "styled-components";

interface CardFooterProps {
  children?: React.ReactNode;
}

export function CardFooter(props: CardFooterProps) {
  return <CardFooterStyle>{props.children}</CardFooterStyle>;
}

const CardFooterStyle = styled.div`
  background: var(--card-footer-bg);
  padding: var(--spacing-100);
`;
