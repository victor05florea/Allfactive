interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

const Input = ({ label, ...rest }: InputProps) => {
  return (
    <div>
      {label && <label>{label}</label>}
      <input {...rest} />
    </div>
  );
};

export default Input;
