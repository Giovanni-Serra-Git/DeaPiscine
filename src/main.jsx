import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";




import "./App.css"
import App from "./App.jsx";
import ErrorPage from "./components/error/errorpage.jsx";
import Servizi from "./components/servizi/servizi.jsx";
import About from "./components/chi_siamo/about.jsx";
import Gallery from "./components/gallery/gallery.jsx";
import Contatti from "./components/contatti/contatti.jsx";
import Componenti from "./components/componenti/componenti.jsx";
import Accessori from "./components/accessori/accessori.jsx";
import Loader from "./components/loader/loader.jsx"

import './i18n';
import { Suspense } from "react";
import Rivestimenti from "./components/componenti/rivestimenti/rivestimenti.jsx";
import Bordi from "./components/componenti/bordi/bordi.jsx";
import Pavimentazione from "./components/componenti/pavimentazione/pavimentazione.jsx";
import Canalette from "./components/componenti/calette/canalette.jsx";
import Calore from "./components/accessori/calore/calore.jsx";
import Nuoto from "./components/accessori/nuoto/nuoto.jsx";
import Copertura from "./components/accessori/copertura/copertura.jsx";
import Domande from "./components/domande/domande.jsx";
import Idromassaggio from "./components/accessori/idromassaggio/idromassaggio.jsx";
import Prova from "./components/chi_siamo/prova.jsx";
import PrivacyPolicy from "./components/cookie/privacy_policy.jsx";
import Costruzioni from "./components/costruzioni/costruzioni.jsx";
import Ristrutturazioni from "./components/ristrutturazioni/ristrutturazioni.jsx";



const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
   },
  {
    path: "/servizi",
    element: <Servizi />,
  },
  {
    path: "/ristrutturazione",
    element: <Ristrutturazioni />
  },
  {
    path: "/costruzioni",
    element: <Costruzioni />
  },
  {
    path: "/componenti",
    element: <Componenti />,
  },
  {
    path: "/componenti/rivestimenti",
    element: <Rivestimenti />
  },
  {
    path: "/componenti/bordi",
    element: <Bordi />
  },
  {
    path: "/componenti/canalette",
    element: <Canalette />
  },
  {
    path: "/componenti/pavimentazione",
    element: <Pavimentazione />
  },
  {
    path: "/accessori",
    element: <Accessori />,
  },
  {
    path: "/accessori/pompa-di-calore",
    element: <Calore />,
  },
  {
    path: "/accessori/nuoto-contro-corrente",
    element: <Nuoto />,
  },
  {
    path: "/accessori/copertura-elettrica",
    element: <Copertura />,
  },
  {
    path: "/accessori/idromassaggio",
    element: <Idromassaggio />,
  },
  {
    path: "/domande-frequenti",
    element: <Domande />
  },
  {
    path: "/chi-siamo",
    element: <About />,
  },
  {
    path: "/gallery",
    element: <Gallery />,
  },
  {
    path: "/contatti",
    element: <Contatti />,
  },
  {
    path: "/prova",
    element: <Prova />
  },
  {
    path: "/privacy-policy",
    element: <PrivacyPolicy />
  }
]);




const loading = (
  <Loader />
)

const renderWithDelay = () => {
  ReactDOM.createRoot(document.getElementById("root")).render(
    <Suspense fallback={loading}>
      <React.StrictMode>
           <RouterProvider router={router} />
      </React.StrictMode>
    </Suspense>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <Suspense fallback={loading}>
    <Loader />
  </Suspense>
);

setTimeout(renderWithDelay, 900);