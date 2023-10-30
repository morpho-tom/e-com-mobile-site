import "./App.css";
import ImageSlider from "./components/Imageslider/index";
import Card from "./components/Card";
import ShoppingBgrnd from "./components/ShoppingBackground";
import Samsung20 from ".//assets/s20fe.jpg"
import Samsung22 from ".//assets/s22.jpg"
import Ip14 from ".//assets/ip14.jpg"
import Mi10pro from ".//assets/mi10pro.jpg"
import SamsungM33 from ".//assets/m33.jpg"
import Note12pro from ".//assets/note12pro.jpg"
import Nordce2 from ".//assets/nordce2.jpg"
import Realmegt from ".//assets/realmegt.jpg"
import Nothing from ".//assets/nothing.jpg"
// import SearchBar from "./components/SearchBar";



function App() {

// arr object of mobile list 

  const arr = [
    {
      img:  Samsung20 ,
      name: "Samsung Galaxy S20 FE",
      unit: "$",
      price: 450.0,
      button: "Add to Cart",
      title : "Samsung Galaxy S20 FE",
    },
    {
      img: Nordce2 ,
      name: "OnePlus Nord CE2 5G",
      unit: "$",
      price: 400.0,
      button: "Add to Cart",
      title : "OnePlus Nord CE2 5G",
    },
    {
      img: Note12pro ,
      name: "Redmi Note 12 Pro 5G",
      unit: "$",
      price: 250.0,
      button: "Add to Cart",
      title : "Redmi Note 12 Pro 5G",
    },
    {
      img:   Realmegt ,
      name: "Realme GT 2 pro",
      unit: "$",
      price: 450.0,
      button: "Add to Cart",
      title : "realme GT 2 pro",
    },
    {
      img: Samsung22 ,
      name: "Samsung S22 Ultra",
      unit: "$",
      price: 1500.0,
      button: "Add to Cart",
      title : "Samsung S22 Ultra",
    },
    {
      img: Ip14,
      name: "Apple iPhone 14 ",
      unit: "$",
      price: 160.0,
      button: "Add to Cart",
      title : "Apple iPhone 14",
    },
    {
      img: Mi10pro,
      name: "Redmi Note 10",
      unit: "$",
      price: 170.0,
      button: "Add to Cart",
      title : "Redmi Note 10",
    },
    {
      img: SamsungM33 ,
      name: "Samsung M33 5G",
      unit: "$",
      price: 220.0,
      button: "Add to Cart",
      title : "Samsung M33 5G",
    },
    {
      img: Nothing,
      name: "Nothing Phone 1 5G ",
      unit: "$",
      price: 220.0,
      button: "Add to Cart",
      title : "Nothing Phone 1 5G ",
    },
  ];


// sort array object ...
  const arr1 = [...arr].sort((a, b) =>
  a.name > b.name ? -1 : 1,
);

  return (
    <div> 
     
      <ShoppingBgrnd />
      {/* <Searchbox/> */}
      <ImageSlider/>
      <Card type={arr1} />
    </div>
  );
}

export default App;
