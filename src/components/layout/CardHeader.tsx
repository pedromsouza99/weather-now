import styled from "styled-components";

export interface CardHeaderProps {
  children?: React.ReactNode;
}

export function CardHeader(props: CardHeaderProps) {
  return <CardHeaderStyle>{props.children}</CardHeaderStyle>;
}

const CardHeaderStyle = styled.div`
  padding: var(--spacing-75);
  border-bottom: 1px solid var(--divider);
`;
