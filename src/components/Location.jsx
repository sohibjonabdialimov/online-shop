import React from 'react'
import { Location1, Location2, Location3 } from '../assets/location'

const Location = () => {
  return (
    <div className='p-24'>
      <h1 className="text-#1F2937 text-4xl mb-12 font-semibold">
        Bizning manzilimiz
      </h1>
      <div className="map_wrap">
        <div className="map_item">
          <Location1 />
          <p>Oʻzbekiston, Toshkent shah, Amir Temur koʻch, Yunusobod</p>
        </div>
        <div className="map_item">
          <Location2 />
          <p>Universam bozoriga 3 daqiqa</p>
        </div>
        <div className="map_item">
          <Location3 />
          <p>Aeroportga 8 daqiqa</p>
        </div>
      </div>
      <iframe
          src="https://yandex.uz/map-widget/v1/org/131222940559/?ll=69.180014%2C41.276609&z=15"
          width="100%"
          height={400}
          frameBorder={1}
          allowFullScreen="true"
          style={{ position: "relative" }}
        />
    </div>
  )
}

export default Location