import React, { useState, useEffect } from "react";

import "./features.css";

// Icon
// Postingan

import IconPen from "../../assets/icon/icon-pen.png";
import IconIdea from "../../assets/icon/Idea.png";
import IconArtikel from "../../assets/icon/Artikel.png";
import IconPolling from "../../assets/icon/Poling.png";
import IconPetisi from "../../assets/icon/Petisi.png";
// Artikel
import IconOpini from "../../assets/icon/Petisi.png";
import IconEsai from "../../assets/icon/Petisi.png";
import IconResensi from "../../assets/icon/Petisi.png";
import IconCerpen from "../../assets/icon/Petisi.png";
// Polling
import IconPilihanku from "../../assets/icon/Petisi.png";
import IconKataKunci from "../../assets/icon/Petisi.png";
import IconPsikografik from "../../assets/icon/Petisi.png";
import IconKuesioner from "../../assets/icon/Petisi.png";

import IconArrowLeft from "../../assets/icon/arrow-left.png";

export default function Features() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [show, setShow] = useState(false);

  const handleScroll = () => {
    const position = window.pageYOffset;
    if (position > 385) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const Dropdown = (status) => {
    // status === "idea" ? (
    //   <>
    //     <div className="navigation">
    //       <ul className="menu no-bullets ">
    //         <li>
    //           <div className="parent-dropdown shadow">
    //             <img src={IconPen} alt="icon" />
    //             <span>Buat Postingan</span>
    //           </div>

    //           <ul className="child-dropdown no-bullets d-grid ">
    //             <li>
    //               <div className="dropdown" onClick={() => handleOnClick("idea")}>
    //                 <img src={IconIdea} alt="icon" />
    //                 <span>Idea</span>
    //               </div>
    //             </li>
    //             <li>
    //               <div className="dropdown" onClick={() => handleOnClick("artikel")}>
    //                 <img src={IconArtikel} alt="icon" />
    //                 <span>Artikel</span>
    //               </div>
    //             </li>
    //             <li>
    //               <div className="dropdown" onClick={() => handleOnClick("polling")}>
    //                 <img src={IconPolling} alt="icon" />
    //                 <span>Polling</span>
    //               </div>
    //             </li>
    //             <li>
    //               <div className="dropdown" onClick={() => handleOnClick("petisi")}>
    //                 <img src={IconPetisi} alt="icon" />
    //                 <span>Petisi</span>
    //               </div>
    //             </li>
    //           </ul>
    //         </li>
    //       </ul>
    //     </div>
    //   </>
    // ) : (
    //   <>
    //     <div className="navigation">
    //       <ul className="menu no-bullets ">
    //         <li>
    //           <div className="parent-dropdown shadow">
    //             <img src={IconPen} alt="icon" />
    //             <span>Buat Postingan</span>
    //           </div>

    //           <ul className="child-dropdown no-bullets d-grid ">
    //             <li>
    //               <div className="dropdown" onClick={() => handleOnClick("idea")}>
    //                 <img src={IconIdea} alt="icon" />
    //                 <span>Idea</span>
    //               </div>
    //             </li>
    //             <li>
    //               <div className="dropdown" onClick={() => handleOnClick("artikel")}>
    //                 <img src={IconArtikel} alt="icon" />
    //                 <span>Artikel</span>
    //               </div>
    //             </li>
    //             <li>
    //               <div className="dropdown" onClick={() => handleOnClick("polling")}>
    //                 <img src={IconPolling} alt="icon" />
    //                 <span>Polling</span>
    //               </div>
    //             </li>
    //             <li>
    //               <div className="dropdown" onClick={() => handleOnClick("petisi")}>
    //                 <img src={IconPetisi} alt="icon" />
    //                 <span>Petisi</span>
    //               </div>
    //             </li>
    //           </ul>
    //         </li>
    //       </ul>
    //     </div>
    //   </>
    // ))

    // if (status === "idea") {
    //   console.log(status);
    //   return (
    //     <div className="navigation">
    //       <ul className="menu no-bullets">
    //         <li>
    //           <div className="parent-dropdown shadow">
    //             {/* <img src={IconPen} alt="icon" /> */}
    //             <span>Idea</span>
    //           </div>

    //           <ul className="child-dropdown no-bullets d-grid ">
    //             <li>
    //               <div className="dropdown" onClick={() => handleOnClick("idea")}>
    //                 <img src={IconIdea} alt="icon" />
    //                 <span>Idea</span>
    //               </div>
    //             </li>
    //             <li>
    //               <div className="dropdown" onClick={() => handleOnClick("artikel")}>
    //                 <img src={IconArtikel} alt="icon" />
    //                 <span>Artikel</span>
    //               </div>
    //             </li>
    //             <li>
    //               <div className="dropdown" onClick={() => handleOnClick("polling")}>
    //                 <img src={IconPolling} alt="icon" />
    //                 <span>Polling</span>
    //               </div>
    //             </li>
    //             <li>
    //               <div className="dropdown" onClick={() => handleOnClick("petisi")}>
    //                 <img src={IconPetisi} alt="icon" />
    //                 <span>Petisi</span>
    //               </div>
    //             </li>
    //           </ul>
    //         </li>
    //       </ul>
    //     </div>
    //   );
    // } else {
    //   console.log(status);
    //   return (
    //     <div className="navigation">
    //       <ul className="menu no-bullets ">
    //         <li>
    //           <div className="parent-dropdown shadow">
    //             <img src={IconPen} alt="icon" />
    //             <span>Buat Postingan</span>
    //           </div>

    //           <ul className="child-dropdown no-bullets d-grid ">
    //             <li>
    //               <div className="dropdown" onClick={() => handleOnClick("idea")}>
    //                 <img src={IconIdea} alt="icon" />
    //                 <span>Idea</span>
    //               </div>
    //             </li>
    //             <li>
    //               <div className="dropdown" onClick={() => handleOnClick("artikel")}>
    //                 <img src={IconArtikel} alt="icon" />
    //                 <span>Artikel</span>
    //               </div>
    //             </li>
    //             <li>
    //               <div className="dropdown" onClick={() => handleOnClick("polling")}>
    //                 <img src={IconPolling} alt="icon" />
    //                 <span>Polling</span>
    //               </div>
    //             </li>
    //             <li>
    //               <div className="dropdown" onClick={() => handleOnClick("petisi")}>
    //                 <img src={IconPetisi} alt="icon" />
    //                 <span>Petisi</span>
    //               </div>
    //             </li>
    //           </ul>
    //         </li>
    //       </ul>
    //     </div>
    //   );
    // }

    let content;
    switch (status) {
      case "artikel":
        console.log("Artikel ke trigger");
        content = (
          <div className="navigation">
            <ul className="menu no-bullets">
              <li>
                <div className="parent-dropdown shadow">
                  <img src={IconPen} alt="icon" />
                  <span>Artikel</span>
                </div>

                <ul className="child-dropdown no-bullets d-grid ">
                  <li>
                    <div className="dropdown" onClick={() => handleOnClick("idea")}>
                      <img src={IconIdea} alt="icon" />
                      <span>Idea</span>
                    </div>
                  </li>
                  <li>
                    <div className="dropdown" onClick={() => handleOnClick("artikel")}>
                      <img src={IconArtikel} alt="icon" />
                      <span>Artikel</span>
                    </div>
                  </li>
                  <li>
                    <div className="dropdown" onClick={() => handleOnClick("polling")}>
                      <img src={IconPolling} alt="icon" />
                      <span>Polling</span>
                    </div>
                  </li>
                  <li>
                    <div className="dropdown" onClick={() => handleOnClick("petisi")}>
                      <img src={IconPetisi} alt="icon" />
                      <span>Petisi</span>
                    </div>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        );
        break;
      case "polling":
        console.log("polling ke trigger");
        return <h1>ini Polling</h1>;
      default:
        content = (
          <div className={show ? "navigation" : "navigation hidden"}>
            <ul className="menu no-bullets ">
              <li>
                <div className="parent-dropdown shadow">
                  <img src={IconPen} alt="icon" />
                  <span>Buat Postingan</span>
                </div>

                <ul className="child-dropdown no-bullets d-grid ">
                  <li>
                    <div className="dropdown" onClick={() => handleOnClick("idea")}>
                      <img src={IconIdea} alt="icon" />
                      <span>Idea</span>
                    </div>
                  </li>
                  <li>
                    <div className="dropdown" onClick={() => handleOnClick("artikel")}>
                      <img src={IconArtikel} alt="icon" />
                      <span>Artikel</span>
                    </div>
                  </li>
                  <li>
                    <div className="dropdown" onClick={() => handleOnClick("polling")}>
                      <img src={IconPolling} alt="icon" />
                      <span>Polling</span>
                    </div>
                  </li>
                  <li>
                    <div className="dropdown" onClick={() => handleOnClick("petisi")}>
                      <img src={IconPetisi} alt="icon" />
                      <span>Petisi</span>
                    </div>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        );
        break;
    }

    console.log(content);

    return <div>{content}</div>;
  };

  const handleOnClick = (e) => {
    Dropdown(e);
  };

  return (
    <>
      <Dropdown />
    </>
  );
}
