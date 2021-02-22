import React, {useState} from 'react'
import SinglePage from './SinglePage'

export default function SingleApiData() {
    const [tileData, setTileData] = useState(
        [
          {
            id: 1,
            title: 'Hotel Dream Inn',
            address: 'Durbar Marg,Lakeside,3341 Pokhara, Nepal',  
             imgsrc:
             [
               {id: 1, image: '/images/offercardimage.jpg', cols: 2},
               {id: 2, image: '/images/hotellistsecond.webp'},
               {id: 3, image: '/images/Hotellistthird.webp'},
               {id: 4, image: '/images/Hotellistfourth.webp'},
               {id: 4, image: '/images/Hotellistfourth.webp'},
               {id: 5, image: '/images/offercardimage.jpg'},
               {id: 1, image: '/images/hotellistsecond.webp'},
               {id: 2, image: '/images/offercardimage.jpg', cols: 2},
               {id: 3, image: '/images/Hotellistthird.webp'},
               {id: 4, image: '/images/Hotellistfourth.webp'},
               {id: 5, image: '/images/Hotellistfourth.webp'},
               {id: 1, image: '/images/offercardimage.jpg', cols: 2},
             ],
         
             price: 2000,
             star_rating: "✡ ✡ ✡ ✡ ✡ ",
             description: "Set in Pokhara, 600 m from Fewa Lake, Hotel Dream Inn offers accommodation with a restaurant, free private parking and a bar. All rooms boast a flat-screen TV with cable channels and a private bathroom. The accommodation features room service and free WiFi throughout the property Set in Pokhara, 600 m from Fewa Lake, Hotel Dream Inn offers accommodation with a restaurant, free private parking and a bar. All rooms boast a flat-screen TV with cable channels and a private bathroom. The accommodation features room service and free WiFi throughout the property Set in Pokhara, 600 m from Fewa Lake, Hotel Dream Inn offers accommodation with a restaurant, free private parking and a bar. All rooms boast a flat-screen TV with cable channels and a private bathroom. The accommodation features room service and free WiFi throughout the property Set in Pokhara, 600 m from Fewa Lake, Hotel Dream Inn offers accommodation with a restaurant, free private parking and a bar. All rooms boast a flat-screen TV with cable channels and a private bathroom. ",
            },
         ]
    )
    return (
        
        <div>
          {tileData.map(tile =>
          <div>
          <SinglePage tile={tile} />
          </div>
          )}
        </div>
    )
}
