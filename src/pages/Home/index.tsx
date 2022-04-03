import type { FC } from "react"
import { useDarkMode } from "@/hooks"

const Home: FC = () => {
  const [theme, setTheme] = useDarkMode()

  return (
    <div className="w-screen min-h-screen bg-white dark:bg-gray-800 text-black dark:text-white flex flex-col justify-center items-center">
      <p className="text-2xl py-2">Hello World!</p>
      <p>
        <button
          className="px-4 py-2 border rounded"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          {theme === "light" ? "🌞" : "🌜"}
        </button>
      </p>
    </div>
  )
}

export default Home
