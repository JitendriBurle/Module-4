function App() {
  return (
    <div className="min-h-screen bg-gray-100">

      {/* NAVBAR */}
      <nav className="bg-white shadow p-4 flex flex-col md:flex-row md:space-x-6">
        <a className="hover:text-blue-600">Home</a>
        <a className="hover:text-blue-600">Features</a>
        <a className="hover:text-blue-600">Contact</a>
      </nav>

      {/* HERO SECTION */}
      <section className="p-8 text-center space-y-6">
        <h2 className="text-xl md:text-3xl lg:text-5xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
          Tailwind CSS Exploration
        </h2>

        <div className="flex justify-center">
          <img
            src="https://placehold.co/400x300"
            className="rounded-lg shadow-lg transform transition hover:scale-105"
          />
        </div>

        {/* BUTTON STYLING */}
        <button className="px-6 py-2 rounded bg-gray-200 hover:bg-gray-300 active:bg-gray-400 transition">
          Click Me
        </button>
      </section>

      {/* FEATURES GRID (3 CARDS) */}
      <section className="p-8">
        <h3 className="text-2xl font-bold mb-6">Features</h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3].map((item) => (
            <div key={item} className="bg-white rounded shadow p-4">
              <img src="https://placehold.co/300x200" className="rounded mb-3" />
              <h4 className="font-bold">Feature {item}</h4>
              <p className="text-gray-600 text-sm">
                Short description goes here.
              </p>
              <button className="mt-3 px-4 py-2 rounded bg-gray-200 hover:bg-gray-300 active:bg-gray-400">
                Learn More
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* LIST STYLING */}
      <section className="p-8">
        <h3 className="text-2xl font-bold mb-4">Styled List</h3>
        <ul className="list-disc list-inside pl-5 space-y-2">
          <li className="hover:text-blue-600">Tailwind Utilities</li>
          <li className="hover:text-blue-600">Responsive Design</li>
          <li className="hover:text-blue-600">Hover Effects</li>
        </ul>
      </section>

      {/* TABLE */}
      <section className="p-8 overflow-x-auto">
        <h3 className="text-2xl font-bold mb-4">Table</h3>

        <table className="w-full border border-gray-300">
          <thead className="bg-gray-200">
            <tr>
              <th className="border p-2">Name</th>
              <th className="border p-2">Role</th>
              <th className="border p-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["Alice", "Developer", "Active"],
              ["Bob", "Designer", "Active"],
              ["Charlie", "Manager", "Inactive"],
            ].map((row, i) => (
              <tr
                key={i}
                className={`${i % 2 === 0 ? "bg-white" : "bg-gray-50"} hover:bg-gray-100`}
              >
                {row.map((cell) => (
                  <td key={cell} className="border p-2">
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {/* CONTACT FORM */}
      <section className="p-8 max-w-md mx-auto">
        <h3 className="text-2xl font-bold mb-4">Contact Us</h3>

        <form className="space-y-4">
          <input
            className="w-full p-2 rounded border focus:ring-2 focus:ring-blue-500"
            placeholder="Name"
          />
          <input
            className="w-full p-2 rounded border focus:ring-2 focus:ring-blue-500"
            placeholder="Email"
          />
          <input
            type="password"
            className="w-full p-2 rounded border focus:ring-2 focus:ring-blue-500"
            placeholder="Password"
          />
          <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
            Submit
          </button>
        </form>
      </section>

    </div>
  )
}

export default App
