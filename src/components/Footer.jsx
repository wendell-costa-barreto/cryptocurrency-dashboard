import Link from "next/link";
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full bg-black/70 backdrop-blur-md border-t border-purple-700/30 py-10 px-6 mt-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-gray-300">
        {/* About */}
        <div>
          <h3 className="text-white text-xl font-semibold mb-4">
            Nexus Dashboard
          </h3>
          <p className="text-gray-400 leading-relaxed">
            Stay connected to the crypto market with our sleek and powerful
            dashboard, offering real-time updates and deep analytics.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="text-white text-xl font-semibold mb-4">Navigate</h3>
          <ul className="space-y-2">
            <li>
              <Link
                href="/"
                className="hover:text-purple-400 transition-colors duration-300"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/dashboard"
                className="hover:text-purple-400 transition-colors duration-300"
              >
                Dashboard
              </Link>
            </li>
            <li>
              <Link
                href="/portfolio"
                className="hover:text-purple-400 transition-colors duration-300"
              >
                Portfolio
              </Link>
            </li>
          </ul>
        </div>

        {/* Social & Credits */}
        <div>
          <h3 className="text-white text-xl font-semibold mb-4">
            Connect & Credits
          </h3>
          <div className="flex space-x-4 mb-4">
            <a
              href="https://github.com/wendell-costa-barreto"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="hover:text-purple-400 transition-colors duration-300"
            >
              <FaGithub className="w-6 h-6" />
            </a>
            <a
              href="https://x.com/_wendellDev"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="hover:text-purple-400 transition-colors duration-300"
            >
              <FaXTwitter className="w-6 h-6" />
            </a>
            <a
              href="https://linkedin.com/in/wendell-costa-barreto-junior-1853412a0/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:text-purple-400 transition-colors duration-300"
            >
              <FaLinkedin className="w-6 h-6" />
            </a>
          </div>
          <p className="text-sm text-gray-500">
            Made by{" "}
            <Link
              href="https://linkedin.com/in/wendell-costa-barreto-junior-1853412a0/"
              target="_blank"
              className="hover:underline text-purple-400"
            >
              Wendell Costa
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
