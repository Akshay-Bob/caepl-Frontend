import React from 'react'

export default function MobileViewProductSlider({images, setActiveIndex, activeIndex}) {
  return (
         <div className="d-flex flex-md-column w-md-100 w-sm-25 flex-row gap-3 align-items-center overflow-md-hidden overflow-sm-scroll">
                  {images ? images.map((item, i) => (
                        <img
                          key={i}
                          src={item.proImg}
                          className="img-fluid displatedSlideoptioVoew"
                          style={{
                            border:
                              activeIndex === i ? "2px solid red" : "none",
                          }}
                          onClick={() => setActiveIndex(i)}
                        />
                      ))
                    : []}
                </div>
  )
}
