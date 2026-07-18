export default function Loading() {
  return (
    <div className="flex min-h-[calc(100vh-5rem)] flex-col items-center justify-center px-6">
      <div className="flex flex-col items-center gap-6">
        <div className="font-heading text-2xl tracking-tight text-[var(--aw-primary)]">
          Art Wave
        </div>
        <div className="flex items-center gap-1.5">
          <span className="size-1.5 animate-pulse rounded-full bg-[var(--aw-accent)] [animation-delay:0ms]" />
          <span className="size-1.5 animate-pulse rounded-full bg-[var(--aw-accent)] [animation-delay:150ms]" />
          <span className="size-1.5 animate-pulse rounded-full bg-[var(--aw-accent)] [animation-delay:300ms]" />
        </div>
      </div>
    </div>
  );
}
