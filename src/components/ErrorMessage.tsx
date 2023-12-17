interface ErrorMessageProps {
  message: string[];
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => {
  return (
    <ul className="error__message">
      {message.map((map) => (
        <li key={map}>{map}</li>
      ))}
    </ul>
  );
};
export default ErrorMessage;
