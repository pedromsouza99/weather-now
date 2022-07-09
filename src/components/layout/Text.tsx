interface TextProps {
  children: React.ReactNode;
}

export function Text(props: TextProps) {
  return <span>{props.children}</span>;
}
