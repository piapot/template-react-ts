import { Paths } from "@/routes"
import type { FC } from "react"
import { Link } from "react-router-dom"

const About: FC = () => {
  return (
    <div className="w-screen min-h-screen bg-white dark:bg-gray-800 text-black dark:text-white flex flex-col justify-center items-center">
      <h1 className="text-2xl m-4">About</h1>
      <nav>
        <Link
          to={Paths.INDEX}
          className="px-4 py-2 m-2 text-blue-500 border rounded"
        >
          Home
        </Link>
      </nav>
    </div>
  )
}

export default About
