import { Button } from "@/components/ui/Button";
import { Container } from "@/components/layout/Container";

export default function NotFound() {
  return (
    <main id="main" className="flex flex-1 items-center pt-28 pb-20">
      <Container>
        <p className="text-xs font-semibold tracking-[0.28em] text-cyan-400 uppercase">
          404
        </p>
        <h1 className="mt-4 max-w-2xl text-4xl font-semibold tracking-tight sm:text-5xl">
          This page is not on the map.
        </h1>
        <p className="mt-4 max-w-xl text-muted-strong">
          The link may be out of date, or the work has moved. Try the homepage,
          services, or get in touch and we will point you the right way.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button href="/">Back to home</Button>
          <Button href="/contact" variant="secondary">
            Contact us
          </Button>
        </div>
      </Container>
    </main>
  );
}
