import React, { useState } from "react";


const Searchbox = () => {

    const list =[
        "Mobile",
        "Samsung Mobiles",
        "Vivo Mobiles",
        "Realme Mobiles",
        "Iphone",
        "Accessories",   
    ]
    const [filterList, setFilterList]= useState(list);

    const handleSearch =(event) =>{
        if (event.target.value === "") {
            setFilterList(list);
            return;
          }
          const filteredValues = list.filter(
            (item) =>
              item.toLowerCase().indexOf(event.target.value.toLowerCase()) !== -1
          );
          setFilterList(filteredValues);
        };
        return (
          <div className="app">
            <div>
              Search: <input name="query" type="text" onChange={handleSearch} />
            </div>
            {filterList &&
              filterList.map((item, index) => (
                <div key={index}>{item}</div> //Display each item
              ))}
          </div>
        );
      }



export default Searchbox;