export default function Home() {
  return (
    <div className="min-h-screen bg-base-200 text-base-content">
      <main>
        {/* Header */}
        <header className="bg-base-200">
          <div className="max-w-4xl mx-auto flex justify-between items-center px-4 sm:px-6 md:px-8 py-4">
            <div className="font-bold text-lg">PsWd</div>
            <nav className="hidden md:flex space-x-6">
              <a className="link link-hover">Pricing</a>
              <a className="link link-hover">FAQ</a>
            </nav>
          </div>
        </header>

        {/* Hero */}
        <section className="text-center py-12 px-4 sm:py-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6">
            Welcome to PsWd
          </h1>
        </section>

        {/* Input Form */}
        <section className="bg-base-200 py-6 px-4">
          <div className="max-w-md mx-auto flex flex-col sm:flex-row justify-center items-center gap-4">
            <input
              type="text"
              placeholder="Type here"
              className="input input-primary w-full sm:w-auto sm:flex-1"
            />
            <button className="btn btn-neutral w-full sm:w-auto">Send</button>
          </div>
        </section>
      </main>
    </div>
  );
}
