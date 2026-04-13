interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "danger" | "success";
}

const Button = ({
  children,
  onClick,
  variant = "primary",
  className,
  ...rest
}: Props) => {
  return (
    <button
      className={`btn btn-${variant} ${className ?? ""}`.trim()}
      onClick={onClick}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
