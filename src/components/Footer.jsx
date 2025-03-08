import Link from "next/link";
export default function Footer() {
    return (


        <footer id="footer" className="bg-gray-300 shadow-sm dark:bg-gray-800 w-full mt-[4%] mb-[1em]">
            <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
                <span className="text-sm text-gray-800 sm:text-center dark:text-gray-400">Made with Next.js by <Link target="_blank" href="https://github.com/wendell-costa-barreto" className="hover:underline text-blue-600">Wendell Costa</Link>
                </span>
                <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-800 dark:text-gray-400 sm:mt-0">
                    <li>
                        <Link href="#" className="hover:underline me-4 md:me-6">Home</Link>
                    </li>
                    <li>
                        <Link href="/dashboard" className="hover:underline me-4 md:me-6">Dashboard</Link>
                    </li>
                    <li>
                        <Link href="/charts" className="hover:underline me-4 md:me-6">Charts</Link>
                    </li>
                    <li>
                        <Link href="/https://github.com/wendell-costa-barreto" className="hover:underline me-4 md:me-6">About me</Link>
                    </li>
                    <li>
                        <Link href="/https://github.com/wendell-costa-barreto" className="hover:underline">Contact</Link>
                    </li>
                </ul>
            </div>
        </footer>
    )
}