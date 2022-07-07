import { useState } from 'react'
import Map, { Marker, Popup } from 'react-map-gl';
import getCenter from 'geolib/es/getCenter';
import {LocationMarkerIcon} from "@heroicons/react/solid";
import "mapbox-gl/dist/mapbox-gl.css"

function MapView({ searchResults }) {

  const [selectedLocation, setSelectedLocation] = useState(null)

// Finding center of all search results
  const coordinates = searchResults.map(data => ({
    longitude: data.long,
    latitude: data.lat,
  }))
  
  // Single set of coordinates
  const center = getCenter(coordinates)
  
  const [viewport, setViewport] = useState({
      width: '100%',
      height: '100%',
      longitude: center.longitude,
      latitude: center.latitude-0.15,
      zoom: 10.5
  });

  return (
    <Map 
        mapStyle='mapbox://styles/ddorosh1/cl5abr8tl000614nsz611nced'
        mapboxAccessToken={process.env.mapbox_key}
        {...viewport}
        onMove={e => setViewport(e.viewport)}
    >
      {searchResults.map((data) => (
        <div key={data.long}>

          {/* Map icon */}
          <Marker longitude={data.long} latitude={data.lat} offsetLeft={-20} offsetTop={-10}>
            <LocationMarkerIcon onClick={() => {setSelectedLocation(data)}} aria-label="push-pin"
              className="cursor-pointer h-6 bg-transparent text-red-400 rounded-full" />
          </Marker>

          {/* Map popup */}
          {/* {console.log(selectedLocation) && (
            <Popup longitude={selectedLocation.longitude} latitude={selectedLocation.latitude}
              onClick={() => setSelectedLocation(selectedLocation)}>
                <div>
                  {selectedLocation.title}
                </div>
            </Popup>
          )} */}
        </div>
      ))}

    </Map>
  )
}

export default MapView