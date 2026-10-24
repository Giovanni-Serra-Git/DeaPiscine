import HomePage from "./components/homepage/homepage"
import {Helmet} from "react-helmet";

function App() {
  return (
    <>
      <Helmet>
        <meta  name="description" content="Dea Piscine offre una vasta gamma di opzioni : Rivestimenti, idromassaggio, nuoto contro corrente e molto altro. Lasciati guidare dalla nostra esperienza di oltre dieci anni per realizzare e/o restaurare la piscina dei tuoi sogni !" />
        </Helmet>
      <HomePage />
    </>
  )
}

export default App
