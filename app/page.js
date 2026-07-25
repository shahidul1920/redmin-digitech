export default function Home() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center py-32 px-6">
      <div className="max-w-3xl text-center">
        <p className="inline-block text-sm font-semibold tracking-widest uppercase text-primary mb-6">
          Redmun Digitech
        </p>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-dark mb-6">
          Enterprise Management Platform{" "}
          <span className="text-gradient">Built for Growing Businesses</span>
        </h1>

        <p className="text-lg text-text-secondary max-w-xl mx-auto mb-10">
          We design and develop specialized digital platforms that help
          businesses streamline operations, scale efficiently, and stay ahead of
          the competition.
        </p>

        <div className="flex gap-4 justify-center flex-wrap">
          <a
            href="#"
            className="inline-flex items-center justify-center px-8 py-3.5 rounded-lg bg-primary text-white font-semibold shadow-md hover:bg-primary-dark transition-colors duration-200"
          >
            Request Demo
          </a>

          <a
            href="#"
            className="inline-flex items-center justify-center px-8 py-3.5 rounded-lg border-2 border-border text-dark font-semibold hover:border-primary hover:text-primary transition-colors duration-200"
          >
            View Products
          </a>
        </div>
      </div>
    </main>
  );
}
