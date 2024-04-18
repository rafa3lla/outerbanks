import Header from "./components/Header"
import Outer from "./components/Outer"


export default function App() {
  return(
    <div className="bg-stone-50">
      <header>
        <Header />
      </header>

      <main>
        <Outer />
      </main>
    </div>
  )
}