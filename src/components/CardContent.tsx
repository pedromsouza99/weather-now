import styled from "styled-components";

export interface CardContentProps {
  children?: React.ReactNode;
  className?: string;
}

export function CardContent(props: CardContentProps) {
  return <CardContentStyle {...props}>{props.children}</CardContentStyle>;
}

const CardContentStyle = styled.div`
  padding: var(--spacing-100);
`;
