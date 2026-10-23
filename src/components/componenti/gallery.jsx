/* eslint-disable react/prop-types */


export default function Gallery({gallery, typology}) {

    function isVideo(url) {
        return url.toLowerCase().endsWith('.mp4');
    }
  return (
    <>
    {gallery.map((item, index) => {
        return (
         <div className="container-gallery-item" key={index}>
            <div className="container-gallery-picture">
                {isVideo(gallery[index]) ? 
                <video width="100%" height="auto" controls>
                    <source src={gallery[index]} type="video/mp4" />
                        Your browser does not support the video tag.
                </video> : 
                <img src={gallery[index]} alt={typology + " Dea Piscine"} />}
            </div>
        </div>
        )
    }) }
    </>
  )
}
