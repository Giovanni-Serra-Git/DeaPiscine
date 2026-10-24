import { ToastContainer, toast} from "react-toastify"
import "./prova.css"

export default function Prova() {

  function notify() {
    toast("Message Sent")
  }

  return (
    <>
    <a href="#" onClick={notify}>Notify</a>;
    <ToastContainer
      position="top-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="dark"
    />
  </>
  )
}

{/* <div className="contentitore">
<img src="../../../assets/about/risultati/mosaico_1/mosaico_1_dopo.jpg" srcSet="../../../assets/about/risultati/mosaico_1/mosaico_1_prima.jpg" alt="" />
<img src="../../../assets/about/risultati/mosaico_1/mosaico_1_dopo.jpg" srcSet="../../../assets/about/risultati/mosaico_1/mosaico_1_dopo.jpg" alt="" />
</div> */}