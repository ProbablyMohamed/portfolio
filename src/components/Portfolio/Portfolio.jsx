import React, { useState } from 'react';

import img1 from '../../image/1.png';
import img2 from '../../image/2.png';
import img3 from '../../image/3.png';
import img4 from '../../image/4.png';
import img5 from '../../image/5.png';
import img6 from '../../image/6.png';

export default function Portfolio() {
  const [data, setData] = useState([
    { img: img1, id: "img1", title: "Project 1" },
    { img: img2, id: "img2", title: "Project 2" },
    { img: img3, id: "img3", title: "Project 3" },
    { img: img4, id: "img4", title: "Project 4" },
    { img: img5, id: "img5", title: "Project 5" },
    { img: img6, id: "img6", title: "Project 6" },
  ]);

  const [activeItem, setActiveItem] = useState(null); 

  
  const handleOpenModal = (item) => {
    setActiveItem(item);
  };

  return (
    <>
      <section className="portfolio bg-dark py-5 text-center">
        <h2 className="fw-bolder mb-5">PORTFOLIO PROJECTS</h2>
        <div className="container">
          <div className="row g-4">
            {data.map((item) => (
              <div className="col-md-4" key={item.id}>
                <div className="portfolio-item" onClick={() => handleOpenModal(item)} data-bs-toggle="modal" data-bs-target="#portfolioModal">
                  <img src={item.img} alt={item.title} className="w-100 rounded-3" />
                  <div className="plus rounded-3">
                    <i className="fa-solid fa-plus"></i>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      
      <div className="modal fade" id="portfolioModal" tabIndex="-1" aria-labelledby="portfolioModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-lg" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="portfolioModalLabel">{activeItem ? activeItem.title : "Portfolio Item"}</h5>
            </div>
            <div className="modal-body">
              {activeItem && <img src={activeItem.img} alt={activeItem.title} className="w-100 rounded-3" />}
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
