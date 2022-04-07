import type { FC } from "react"
import { useDarkMode } from "@/hooks"
import { Link } from "react-router-dom"

const Index: FC = () => {
  const [theme, setTheme] = useDarkMode()

  return (
    <div className="w-screen min-h-screen bg-white dark:bg-gray-800 text-black dark:text-white flex flex-col justify-center items-center">
      <h1 className="text-2xl">Index</h1>
      <nav>
        <button
          className="px-4 py-2 m-2 border rounded"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          {theme === "light" ? "🌞" : "🌜"}
        </button>
        <Link
          to="/about"
          className="px-4 py-2 m-2 border rounded text-black dark:text-white"
        >
          About
        </Link>
      </nav>
    </div>
  )
}

export default Index
