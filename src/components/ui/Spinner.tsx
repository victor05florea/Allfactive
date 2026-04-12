interface Props {
  size?: "small" | "medium" | "large";
}

const Spinner = ({ size = "medium" }: Props) => {
  return (
    <div
      className={`spinner-border spinner-border-${size} text-primary `}
      role="status"
    >
      <span className="visually-hidden">Loading...</span>
    </div>
  );
};

export default Spinner;
