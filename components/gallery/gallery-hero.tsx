export function GalleryHero() {
  return (
    <section className="border-b border-[var(--border)] bg-[var(--aw-secondary)] px-6 py-20 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-label mb-4 text-[var(--aw-accent)]">Shop Original Art</p>
        <h1 className="font-heading text-4xl tracking-tight text-[var(--aw-primary)] md:text-5xl lg:text-6xl">
          Original Paintings
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed md:text-lg">
          Explore a curated collection of original paintings available for
          purchase. Every artwork is carefully selected to bring timeless beauty
          into your space.
        </p>
      </div>
    </section>
  );
}
