import Link from "next/link"

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-[#fafafa] dark:bg-[#0a0a0a] px-6">
      <div className="text-center">
        <span className="font-mono text-xs md:text-sm text-[#6b6b6b] dark:text-[#999] tracking-widest">
          [ 404 ]
        </span>
        <h1 className="mt-4 text-2xl md:text-3xl font-medium text-[#0a0a0a] dark:text-[#fafafa] tracking-tight">
          Page not found
        </h1>
        <p className="mt-3 text-sm md:text-base text-[#525252] dark:text-[#a1a1a1]">
          The page you&rsquo;re looking for doesn&rsquo;t exist.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex items-center gap-2 text-sm font-medium tracking-wide text-[#0a0a0a] dark:text-[#fafafa] hover:text-black dark:hover:text-white transition-colors duration-300 underline decoration-[#d4d4d4] dark:decoration-[#404040] hover:decoration-[#0a0a0a] dark:hover:decoration-[#fafafa]"
        >
          Back home
        </Link>
      </div>
    </div>
  )
}
