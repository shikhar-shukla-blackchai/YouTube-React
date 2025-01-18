const Demo = () => {
  return (
    <div
      className={`min-h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900 ml-44 `}
    >
      <div className="max-w-md p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md ">
        <h1 className="text-3xl font-bold mb-6 text-center text-gray-800 dark:text-white">
          Netflix GPT
        </h1>
        <p className="text-center text-gray-600 dark:text-gray-400 mb-8">
          <a
            href="https://netflix-gpt-w3tu.onrender.com/browse"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            https://netflix-gpt-w3tu.onrender.com/browse
          </a>
        </p>
      </div>
    </div>
  );
};

export default Demo;
