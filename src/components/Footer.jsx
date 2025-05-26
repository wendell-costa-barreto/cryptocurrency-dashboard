import Link from "next/link";
export default function Footer() {
  return (
    <div className="w-full flex justify-center">
      <footer
        id="footer"
        className="bg-slate-800/50 shadow-sm dark:bg-gray-800 w-[80%] mt-[4%] mb-[1em] rounded-lg"
      >
        <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
          <span className="text-sm text-white sm:text-center dark:text-gray-400">
            Made with Next.js by{" "}
            <Link
              target="_blank"
              href="https://github.com/wendell-costa-barreto"
              className="hover:underline text-blue-600"
            >
              Wendell Costa
            </Link>
          </span>
          <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-white dark:text-gray-400 sm:mt-0">
            <li>
              <Link href="/" className="hover:underline me-4 md:me-6">
                Home
              </Link>
            </li>
            <li>
              <Link href="/dashboard" className="hover:underline me-4 md:me-6">
                Dashboard
              </Link>
            </li>
            <li>
              <Link href="/portfolio" className="hover:underline me-4 md:me-6">
                Portfolio
              </Link>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
}
