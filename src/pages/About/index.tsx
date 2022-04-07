import type { FC } from "react"
import { Link } from "react-router-dom"

const About: FC = () => {
  return (
    <div className="w-screen min-h-screen flex flex-col justify-center items-center">
      <h1 className="text-2xl m-4">About</h1>
      <nav>
        <Link to="/" className="px-4 py-2 border rounded">
          Home
        </Link>
      </nav>
    </div>
  )
}

export default About
