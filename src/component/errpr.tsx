interface FallbackProps {
  error: Error;
  resetErrorBoundary: () => void;
}

const ErrorFallback = ({ error, resetErrorBoundary }: FallbackProps) => {
  return (
    <div role="alert" className="text-center text-red-500">
      <p>Something went wrong:</p>
      <pre className="text-sm">{error.message}</pre>
      <button
        onClick={resetErrorBoundary}
        className="mt-2 bg-red-500 text-white px-4 py-2 rounded"
      >
        Try again
      </button>
    </div>
  );
};

export default ErrorFallback;
