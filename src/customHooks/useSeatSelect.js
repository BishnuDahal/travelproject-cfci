import {useState} from 'react';


const UseSeatSelect = (props) => {

  const [selectedSeat, setSelectedSeat] = useState([]);


  const [seatB1, setSeatB1] = useState("Available");
  const [seatB2, setSeatB2] = useState('Available');
  const [seatB3, setSeatB3] = useState('Available');
  const [seatB4, setSeatB4] = useState('Available');
  const [seatB5, setSeatB5] = useState('Available');
  const [seatB6, setSeatB6] = useState('Available');
  const [seatB7, setSeatB7] = useState('Available');
  const [seatB8, setSeatB8] = useState('Available');
  const [seatB9, setSeatB9] = useState('Available');
  const [seatB10, setSeatB10] = useState('Available');
  const [seatB11, setSeatB11] = useState('Available');
  const [seatB12, setSeatB12] = useState('Available');
  const [seatB13, setSeatB13] = useState('Available');
  const [seatB14, setSeatB14] = useState('Available');
  const [seatB15, setSeatB15] = useState('Available');
  const [seatB16, setSeatB16] = useState('Available');
  const [seatB17, setSeatB17] = useState('Available');
  const [seatB18, setSeatB18] = useState('Available');

  const [seatA1, setSeatA1] = useState('Available');
  const [seatA2, setSeatA2] = useState('Available');
  const [seatA3, setSeatA3] = useState('Available');
  const [seatA4, setSeatA4] = useState('Available');
  const [seatA5, setSeatA5] = useState('Available');
  const [seatA6, setSeatA6] = useState('Available');
  const [seatA7, setSeatA7] = useState('Available');
  const [seatA8, setSeatA8] = useState('Available');
  const [seatA9, setSeatA9] = useState('Available');
  const [seatA10, setSeatA10] = useState('Available');
  const [seatA11, setSeatA11] = useState('Available');
  const [seatA12, setSeatA12] = useState('Available');
  const [seatA13, setSeatA13] = useState('Available');
  const [seatA14, setSeatA14] = useState('Available');
  const [seatA15, setSeatA15] = useState('Available');
  const [seatA16, setSeatA16] = useState('Available');
  const [seatA17, setSeatA17] = useState('Available');


  const onSeatClick = (e) => {
    const {id, innerText} = e.target;
    if (id === "b1") {
      if (seatB1 === "Available") {
        setSeatB1("Selected")
        // setSelectedSeat([...selectedSeat, {id: id, seatNo: innerText, status: 'Selected'}]) add array of object
        const seat = selectedSeat.includes(innerText);
        // eslint-disable-next-line no-lone-blocks
        {!seat && setSelectedSeat([...selectedSeat, innerText])}

      } else {
        setSeatB1('Available');
        const newArr = selectedSeat.filter(item => item !== innerText);
        setSelectedSeat(newArr);

      }
    }


    if (id === "b2") {
      if (seatB2 === "Available") {
        setSeatB2("Selected")
        const seat = selectedSeat.includes(innerText);
        {!seat && setSelectedSeat([...selectedSeat, innerText])}

      } else {
        setSeatB2("Available")
        const newArr = selectedSeat.filter(item => item !== innerText);
        setSelectedSeat(newArr);

      }
    }


    if (id === "a1") {
      if (seatA1 === "Available") {
        setSeatA1("Selected")
        const seat = selectedSeat.includes(innerText);
        {!seat && setSelectedSeat([...selectedSeat, innerText])}

      } else {
        setSeatA1("Available")
        const newArr = selectedSeat.filter(item => item !== innerText);
        setSelectedSeat(newArr);

      }
    }


    if (id === "a2") {
      if (seatA2 === "Available") {
        setSeatA2("Selected")
        const seat = selectedSeat.includes(innerText);
        {!seat && setSelectedSeat([...selectedSeat, innerText])}

      } else {
        setSeatA2("Available")
        const newArr = selectedSeat.filter(item => item !== innerText);
        setSelectedSeat(newArr);

      }
    }
  };

  return {seatB1, seatB2, seatA1, seatA2, onSeatClick, selectedSeat,};
}

export default UseSeatSelect;