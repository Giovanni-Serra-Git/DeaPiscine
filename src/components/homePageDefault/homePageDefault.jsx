/* eslint-disable react/prop-types */
import Footer from "../footer/footer";
import Navbar from "../navbar/navbar";

export default function HomePageDefault({children, styledOn}) {
  return (
    <>
        <Navbar styledOn={styledOn} />
            { children }
        <Footer />
    </>
  )
}
