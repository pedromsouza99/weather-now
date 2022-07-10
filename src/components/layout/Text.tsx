import styled from "styled-components";

interface TextProps {
  children: React.ReactNode;
  dBlock?: boolean;
  align?: "left" | "center" | "right";
  color?: string;
  fontSize?: "0.7em" | "0.8em" | "0.9em" | "1em" | "1.2em" | "4.5em";
  fontWeight?: 300 | 600 | 800 | "bold" | "bolder";
  className?: string;
}

export function Text(props: TextProps) {
  return <TextStyle {...props}>{props.children}</TextStyle>;
}

const TextStyle = styled.span<TextProps>`
  display: ${(p) => (p.dBlock ? "block" : "initial")};
  text-align: ${(p) => p.align};
  font-size: ${(p) => p.fontSize || "1em"};
  font-weight: ${(p) => p.fontWeight};
  color: ${(p) => (p.color ? `var(--${p.color})` : "inherit")};
`;
