export default function ThankYou() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-emerald-100">
      <div className="max-w-2xl w-full space-y-8 p-8 bg-white rounded-xl shadow-lg text-center">
        <div className="space-y-4">
          <div className="text-6xl">👋</div>
          <h1 className="text-4xl font-bold text-gray-900">
            Hello!
          </h1>
          <div className="space-y-4 text-lg text-gray-700">
            <p className="text-xl font-medium">
              Thanks for participating in the TaskFlow Workshop!
            </p>
            <p>
              We hope this workshop helps you understand how to effectively use AI coding assistants
              like ChatGPT, Cursor, and Claude Code for your development workflow.
            </p>
          </div>
        </div>

        <div className="pt-6 border-t border-gray-200">
          <div className="space-y-3 text-left bg-gray-50 p-6 rounded-lg">
            <h2 className="text-xl font-semibold text-gray-900 text-center">
              Chrome DevTools MCP Demo Complete! ✅
            </h2>
            <p className="text-gray-600 text-center">
              If you're seeing this page, it means the Chrome DevTools MCP automation successfully:
            </p>
            <ul className="space-y-2 text-gray-700 list-disc list-inside">
              <li>Navigated to the landing page</li>
              <li>Filled in the login credentials</li>
              <li>Clicked the Sign In button</li>
              <li>Reached this thank you page</li>
            </ul>
          </div>
        </div>

        <div className="pt-4">
          <a
            href="/"
            className="inline-flex items-center justify-center py-3 px-6 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors"
          >
            Back to Home
          </a>
        </div>
      </div>
    </div>
  );
}
