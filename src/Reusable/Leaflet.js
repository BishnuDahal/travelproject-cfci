import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

export default function Leaflet() {

    return (
          <div  >
               <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={true} style= {{ width:'100%', height:'10vh', margin:'auto' }}>
 <TileLayer
//    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a>'
   url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
 />
 <Marker position={[51.505, -0.09]}>
   <Popup>
     A pretty CSS3 popup. <br /> Easily customizable.
   </Popup>
 </Marker>
</MapContainer>
        </div>
    )
}

