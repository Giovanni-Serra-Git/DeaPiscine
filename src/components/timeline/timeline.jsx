/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import "./timeline.css"
import { useTranslation } from "react-i18next";



// let iconStyle = {
//     backgroundColor: "black",
//     color: "#fff",
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
// }

// export default function Timeline({ gradient, backgroundDefault, color }) {

//   const {t,i18n} = useTranslation();

//   let servizi = t("servizi", {returnObjects: true});
//   console.log(servizi)


//   //  REFACTOR THIS *********************
//   //  REFACTOR THIS *********************
//   //  REFACTOR THIS *********************
//   //  REFACTOR THIS *********************
//   //  REFACTOR THIS *********************
//   //  REFACTOR THIS *********************
//   //  REFACTOR THIS *********************
//   //  REFACTOR THIS *********************
//   //  REFACTOR THIS *********************


//   return (
//   <VerticalTimeline className='margin-block' lineColor="#273f64">

//     {servizi.map((servizio, index) => {
//       return (
//         <VerticalTimelineElement 
//         key={index}
//         className=""
//         contentStyle={{  background : gradient ? gradient : backgroundDefault, color: color, fontWeight: 200 }}
//         iconStyle={ iconStyle }
//         icon={<img src="../../../assets/timelineIcons/rinnovo.png" />}
//       >
//         <h3 className="vertical-timeline-element-title" style={{ fontWeight: 300, fontSize: 'var(--fs-350)'  }} >{servizio.titolo}</h3>
//         {servizio.descrizione.map((descrizione, index) => <p key={index}>{descrizione}</p>)}
//       </VerticalTimelineElement>
//       )
//     })}

//   {/* <VerticalTimelineElement
//     className=""
//     contentStyle={{  background : gradient ? gradient : backgroundDefault, color: color, fontWeight: 200 }}
//     iconStyle={ iconStyle }
//     icon={<img src="../../../assets/timelineIcons/rinnovo.png" />}
//   >
//     <h3 className="vertical-timeline-element-title" style={{ fontWeight: 300, fontSize: 'var(--fs-350)'  }} >{t("servizi.rinnovo_piscine")}</h3>
//     <p>
//       Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, saepe?
//       Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam eligendi pariatur rem totam fugiat excepturi debitis et sunt earum minus.
//     </p>
//   </VerticalTimelineElement> */}

//   {/* <VerticalTimelineElement
//     className=""
//     contentStyle={{  background : gradient ? gradient : backgroundDefault, color: color, fontWeight: 200 }}
//     iconStyle={iconStyle}
//     icon={<img src="../../../assets/timelineIcons/costruzione.png" />}

//   >
//     <h3 className="vertical-timeline-element-title" style={{ fontWeight: 300, fontSize: 'var(--fs-350)' }}>{t("servizi.costruzioni")}</h3>
//     <p>
//       Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, saepe?
//       Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam eligendi pariatur rem totam fugiat excepturi debitis et sunt earum minus.
//     </p>
//   </VerticalTimelineElement>

//   <VerticalTimelineElement
//     className=""
//     contentStyle={{  background : gradient ? gradient : backgroundDefault, color: color, fontWeight: 200 }}
//     iconStyle={iconStyle}
//     icon={<img src="../../../assets/timelineIcons/idraulica.png" />}


//   >
//     <h3 className="vertical-timeline-element-title" style={{ fontWeight: 300, fontSize: 'var(--fs-350)' }}>{t("servizi.idraulica")}</h3>
//     <p>
//       Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, saepe?
//       Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam eligendi pariatur rem totam fugiat excepturi debitis et sunt earum minus.
//     </p>
//   </VerticalTimelineElement>

//   <VerticalTimelineElement
//     className=""
//     contentStyle={{  background : gradient ? gradient : backgroundDefault, color: color, fontWeight: 200 }}
//     iconStyle={iconStyle}
//     icon={<img src="../../../assets/timelineIcons/muratura.png" />}


//   >
//     <h3 className="vertical-timeline-element-title" style={{ fontWeight: 300, fontSize: 'var(--fs-350)' }}>{t("servizi.muratura")}</h3>
//     <p>
//       Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, saepe?
//       Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam eligendi pariatur rem totam fugiat excepturi debitis et sunt earum minus.
//     </p>
//   </VerticalTimelineElement>
//   <VerticalTimelineElement
//     className=""
//     contentStyle={{  background : gradient ? gradient : backgroundDefault, color: color, fontWeight: 200 }}
//     iconStyle={iconStyle}
//     icon={<img src="../../../assets/timelineIcons/riparazione.png" />}



//   >
//     <h3 className="vertical-timeline-element-title" style={{ fontWeight: 300, fontSize: 'var(--fs-350)' }}>{t("servizi.riparazione")}</h3>
//     <p>
//       Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, saepe?
//       Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam eligendi pariatur rem totam fugiat excepturi debitis et sunt earum minus.
//     </p>
//   </VerticalTimelineElement> */}
//   {/* <VerticalTimelineElement
//     className=""
//     contentStyle={{  background : gradient ? gradient : backgroundDefault, color: color, fontWeight: 200 }}
//     iconStyle={iconStyle}
//     icon={<img src="../../../assets/timelineIcons/perdite.png" />}


//   >
//     <h3 className="vertical-timeline-element-title" style={{ fontWeight: 300, fontSize: 'var(--fs-350)' }}>{t("servizi.perdite")}</h3>
//     <p>
//       Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, saepe?
//       Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam eligendi pariatur rem totam fugiat excepturi debitis et sunt earum minus.
//     </p>
//   </VerticalTimelineElement> */}

// </VerticalTimeline>
//   )
// }

// export default function TimeLine({gradient, backgroundDefault, color}) {

//     const {t,i18n} = useTranslation();

//   let servizi = t("servizi", {returnObjects: true});
//   console.log(servizi)

//     {servizi.map((servizio, index) => {
//       return (
//         <div 
//         key={index}
//         style={{  background : gradient ? gradient : backgroundDefault, color: color, fontWeight: 200 }}
//       >
//         <h3 className="vertical-timeline-element-title" style={{ fontWeight: 300, fontSize: 'var(--fs-350)'  }} >{servizio.titolo}</h3>
//         {servizio.descrizione.map((descrizione, index) => <p key={index}>{descrizione}</p>)}
//       </div>
//       )
//     })}
// }
