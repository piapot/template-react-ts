import { Paths } from "@/routes"
import type { FC } from "react"
import { Link } from "react-router-dom"

const NotFound: FC = () => {
  return (
    <main className="w-screen min-h-screen bg-white dark:bg-gray-800 text-black dark:text-white flex flex-col justify-center items-center">
      <h1 className="text-2xl">404 - Not Found</h1>
      <nav className="m-4">
        <Link
          to={Paths.INDEX}
          className="px-4 py-2 border rounded text-blue-500"
        >
          Index
        </Link>
      </nav>
    </main>
  )
}

export default NotFound
