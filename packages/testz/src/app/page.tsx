export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-800 dark:text-white mb-4">
          Hello World! 👋
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
          Welcome to your new Next.js application
        </p>
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 max-w-md mx-auto">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-3">
            🚀 Ready to build something amazing?
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            This is your hello world app built with Next.js and Tailwind CSS.
            Start editing this page to create something awesome!
          </p>
        </div>
      </div>
    </div>
  );
}

