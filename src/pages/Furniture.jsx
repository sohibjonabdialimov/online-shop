import React from "react";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
const Furniture = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      let list = [];
      try {
        const querySnapshot = await getDocs(collection(db, "products"));
        querySnapshot.forEach((doc) => {
          console.log(doc);
          list.push({id: doc.id, ...doc.data()});
        });
        setData(list);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);
  console.log(data);
  return (
    <>
      <div className="h-[90dvh]">
      <div>Furniture</div>
      <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat nemo consectetur iure esse doloribus maiores atque corrupti, ab dolorum mollitia molestias suscipit eaque perferendis totam cupiditate non itaque alias magni.</p>
      </div>
    </>
  );
};

export default Furniture;
