import styled from "styled-components";

export interface ButtonProps {
  children?: React.ReactNode;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  size?: "sm" | "md" | "lg";
  block?: boolean;
}

export function Button(props: ButtonProps) {
  return <ButtonStyle {...props}>{props.children}</ButtonStyle>;
}

const ButtonStyle = styled.button<ButtonProps>`
  border-radius: 50px;
  padding: var(--spacing-75) var(--spacing-100);
  border: 2px solid var(--grey-dark);
  background: transparent;
  color: var(--grey-dark);
  transition: 0.15s ease;
  cursor: pointer;
  outline: none;

  &:hover,
  &:active {
    background: var(--grey-dark);
    color: var(--white);
  }
  &:active,
  &:focus {
    transform: scale(0.93);
  }
`;
