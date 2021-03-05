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
               {id: 1, image: '/images/offercardimage.jpg'},
               {id: 2, image: '/images/2.jpg' },
               {id: 3, image: '/images/1.jpg', rows: 2},
               {id: 4, image: '/images/3.jpg'},
               {id: 5, image: '/images/4.jpg'},
               {id: 6, image: '/images/offercardimage.jpg'},
               {id: 7, image: '/images/1.jpg'},
               {id: 8, image: '/images/4.jpg', rows: 2},
               {id: 9, image: '/images/2.jpg'},
               {id: 10, image: '/images/3.jpg'},
               {id: 11, image: '/images/3.jpg'},
               {id: 12, image: '/images/4.jpg', rows: 2},
             ],
         
             price: 2000,
             star_rating: "✡ ✡ ✡ ✡ ✡ ",
             description: "Set in Pokhara, 600 m from Fewa Lake, Hotel Dream Inn offers accommodation with a restaurant, free private parking and a bar. All rooms boast a flat-screen TV with cable channels and a private bathroom. The accommodation features room service and free WiFi throughout the property Set in Pokhara, 600 m from Fewa Lake, Hotel Dream Inn offers accommodation with a restaurant, free private parking and a bar. All rooms boast a flat-screen TV with cable channels and a private bathroom. The accommodation features room service and free WiFi throughout the property Set in Pokhara, 600 m from Fewa Lake, Hotel Dream Inn offers accommodation with a restaurant, free private parking and a bar. All rooms boast a flat-screen TV with cable channels and a private bathroom. The accommodation features room service and free WiFi throughout the property Set in Pokhara, 600 m from Fewa Lake, Hotel Dream Inn offers accommodation with a restaurant, free private parking and a bar. All rooms boast a flat-screen TV with cable channels and a private bathroom. ",
             reviews:
             [
               {name: "Raj", description: " “breakfast was good and the staff did wonderful job waiting for us till late at night and providing us with snacks even though it was very late.”"},
               {name: "Raj1", description: "“Well & Excellent Hotel 🛍️ ,Well familiar Environment & behavior ,Cooperate us Thanks to all Hotel Team ,Again we want to visit & stay this hotel ,Well located .”"},
               {name: "Raj2", description: "“This is our 3rd Time stay ,Well located ,Well Behavior .”"},
               {name: "Raj3", description: "“Clean bedsheet and clean bathroom and hotel staff are friendly mostly parking space”"},
               {name: "Raj4", description: "“Well & Excellent Hotel 🛍️ ,Well familiar Environment & behavior ,Cooperate us Thanks to all Hotel Team ,Again we want to visit & stay this hotel ,Well located .”"},
             ]
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
