import styled from "styled-components";

interface CardContentProps {
  children?: React.ReactNode;
}

export function CardContent(props: CardContentProps) {
  return <CardContentStyle>{props.children}</CardContentStyle>;
}

const CardContentStyle = styled.div`
  padding: var(--spacing-100);
`;
