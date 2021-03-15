import {makeStyles, Grid} from "@material-ui/core";
import React, {useContext, useState, useEffect} from "react";
import StyledCardList from "../../Reusable/reusableComponents/StyledCardList";
// import {TestContext} from "../../context/TestContext";


const useHotelList = makeStyles((theme) => ({
  hotelEachCard: {
    marginBottom: theme.spacing(3),
  },
}));

const hotelListDetails = [
  {
    id: 1,
    title: "#Hotel 1",
    address: "Kathmandu Nepal",
    imgsrc: "assets/hotel1.jpg",
    price: "5000",
  },
  {
    id: 2,
    title: "#Hotel 2",
    address: "Pokhara Nepal",
    imgsrc: "assets/hotel2.jpg",
    price: "10000",
  },
  {
    id: 3,
    title: "#Hotel 3",
    address: "Biratnagar Nepal",
    imgsrc: "assets/hotel3.jpg",
    price: "6000",
  },
  {
    id: 4,
    title: "#Hotel 4",
    address: "Kalaiya Nepal",
    imgsrc: "assets/hotel4.jpg",
    price: "4000",
  },
  {
    id: 5,
    title: "#Hotel 5",
    address: "Nepalgunj Nepal",
    imgsrc: "assets/hotel5.jpg",
    price: "5000",
  },
  {
    id: 6,
    title: "#Hotel 6",
    address: "Dang Nepal",
    imgsrc: "assets/hotel6.jpg",
    price: "3000",
  },
];
const HotelListContent = (props) => {
  const {isLoading, hotelData, error} = props;
  // const {state, dispatch} = useContext(TestContext)  for context api
  // console.log(state)
  const classes = useHotelList();
  const [items, setItems] = useState(hotelListDetails);

  // useEffect(() => {
  //   dispatch({
  //     type: "DATA",
  //     payload: "hello world"
  //   })
  // }, [])


  return (
    <>
      {isLoading ? (<p>Loading....</p>) : (
        <>
          {hotelData.length ? (
            <>
              {hotelData.map((item) => (
                <Grid
                  zeroMinWidth={true}
                  item
                  key={item.id}
                  className={classes.hotelEachCard}
                >
                  <StyledCardList
                    id={item.id}
                    title={item.title}
                    address={item.address}
                    price={item.price}
                    imgsrc={item.image}
                    description={item.description}
                    className={classes.hotelEachCard}
                  />
                </Grid>
              ))}
            </>
          ) : <p>No data found.{error}</p>}

        </>
      )}

    </>
  );
};

export default HotelListContent;
