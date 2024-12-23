export default function NotFound() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="text-center">
        <h1 className="text-2xl text-gray-700 mb-4">404 - Page Not Found</h1>
        <a 
          href="/" 
          className="text-sm text-blue-500 underline hover:text-blue-600 transition duration-300"
        >
          Go back to the app
        </a>
      </div>
    </div>
  );
}
