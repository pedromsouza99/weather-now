import styled from "styled-components";

export interface CardProps {
  children?: React.ReactNode;
  className?: string;
}

export function Card(props: CardProps) {
  return <CardStyle {...props}>{props.children}</CardStyle>;
}

const CardStyle = styled.div`
  background: var(--card-bg);
  border-radius: 4px;
  box-shadow: 2px 2px 4px var(--box-shadow);
`;
