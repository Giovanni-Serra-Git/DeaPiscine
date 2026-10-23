/* eslint-disable react/prop-types */
export default function ContainerGallery({children}) {
  return (
    <div className="container-gallery">
        <div className="inner-container-gallery">
            {children}
        </div>
    </div>
  )
}
