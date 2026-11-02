import Button from "@/components/Button";

export default function NotFound() {
  return (
    <section className="grid min-h-[80svh] place-items-center px-5 pt-32 text-center">
      <div>
        <p className="font-display text-[clamp(6rem,22vw,14rem)] font-semibold leading-none tracking-[-0.05em] text-outline-soft">404</p>
        <h1 className="mt-2 font-display text-4xl font-medium tracking-tight md:text-5xl">
          This sheet <span className="italic text-brand-blue">isn&apos;t in stock.</span>
        </h1>
        <p className="mx-auto mt-5 max-w-md text-muted">The page you&apos;re looking for has moved or doesn&apos;t exist.</p>
        <div className="mt-9">
          <Button href="/">Back to home</Button>
        </div>
      </div>
    </section>
  );
}
