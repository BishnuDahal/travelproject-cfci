import React from 'react'

export default function ItemsSearch(props) {
    console.log(props, 'items')
    const items= props.location.state.title;
    console.log(items, 'item')
    return (
        <>
  {items.map(item =>
     <div key={item.hotel_id}>
    {/* <img src={item.images.fixed_height.url}  alt=""/>   */}
   {item.hotel_id}
        </div>
        )} 
        </>
    )
}