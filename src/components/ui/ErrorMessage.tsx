import Button from "./Button";
interface Props {
  message: string;
  onRetry?: () => void;
}

const ErrorMessage = ({ message, onRetry }: Props) => {
  return (
    <div className="alert alert-danger" role="alert">
      {message}
      {onRetry && <Button onClick={onRetry}>Încearcă din nou</Button>}
    </div>
  );
};

export default ErrorMessage;
