import React from 'react'
import Tour from './Tour'

const tourData = [
  {
    date: new Date("2023-07-16"),
    location: "DETROIT, MI",
    venue: "DTE ENERGY MUSIC THEATRE"
  },
  {
    date: new Date("2023-07-19"),
    location: "TORONTO, ON",
    venue: "BUDWEISER STAGE"
  },
  {
    date: new Date("2023-07-22"),
    location: "BRISTOW, VA",
    venue: "JIGGY LUBE LIVE"
  },
  {
    date: new Date("2023-07-29"),
    location: "PHOENIX, AZ",
    venue: "AK-CHIN PAVILION"
  },
  {
    date: new Date("2023-08-02"),
    location: "LAS VEGAS, NV",
    venue: "T-MOBILE ARENA"
  },
  {
    date: new Date("2023-08-07"),
    location: "CONCORD, CA",
    venue: "CONCORD PAVILION"
  }
]
function Tours() {

  
  return (
    <section className='w-100 h-100 bg-light  d-flex flex-column justify-content-center align-items-center '>
      <div className='m-3'>
      <h3 className='fw-bold fs-3 '>Tours</h3>
      </div>
 
    <div className='w-100 '>

      {tourData.map((tour)=> {
               
        return <Tour date={tour.date} location={tour.location} venue={tour.venue} />

      })
      }
   
   
   
    </div>
    
  </section>
  )
}

export default Tours