import type { FC } from "react"

const NotFound: FC = () => {
  return (
    <main className="w-screen min-h-screen text-2xl flex flex-col justify-center items-center">
      <p>404 - Not Found</p>
      <p className="text-blue-500 underline">
        <a href="/">/index</a>
      </p>
    </main>
  )
}

export default NotFound
