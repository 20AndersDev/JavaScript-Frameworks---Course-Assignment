import { API_ITEMS } from "../../Shared/apis";
import React, { useState, useEffect } from "react";

function GetItems() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch(API_ITEMS);
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        const dataArray = Array.isArray(data) ? data : [data];
        setItems(dataArray);
        console.log(dataArray);
      } catch (error) {
        console.log(error);
      }
    };

    fetchItems();
  }, []);

  return (
    <div>
      {items.map((item) => (
        <div key={item.id}>
          {/* Access item properties directly */}
          <h1>{item.title}</h1>
        </div>
      ))}
    </div>
  );
}

export default GetItems;
