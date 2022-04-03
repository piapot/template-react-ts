import { FC } from "react"
import { RecoilRoot } from "recoil"
import Home from "@/pages/Home"

const App: FC = () => {
  return (
    <RecoilRoot>
      <Home />
    </RecoilRoot>
  )
}

export default App
