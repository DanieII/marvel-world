type ErrorMessageProps = {
  message: string | null;
};

export default function ErrorMessage({
  message = "There was an error",
}: ErrorMessageProps) {
  return (
    <div className="container mx-auto px-4 pb-6">
      <p className="text-center">{message}</p>
    </div>
  );
}
