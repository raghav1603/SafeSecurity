import axios from "axios";
import { useEffect, useState } from "react";
import CsvDownloader from "react-csv-downloader";

function GetData() {
  const [datas, setData] = useState({});
  // const [col, setCol] = useState({});
  let col = [];
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/todos").then((res) => {
      let fecthedData = res.data;
      let cols = [];
      // console.log(Object.keys(res.data[0]));
      let arr = Object.keys(res.data[0]);
      for (let i = 0; i < arr.length; i++) {
        let obj = {
          id: arr[i],
          displayName: arr[i]
        };
        cols.push(obj);
        console.log(obj, cols);
      }
      setData(fecthedData);
      col = cols;
      console.log(col, datas);
      // setCol(col);
    });
  }, []);

  return (
    <div>
      <label>Click here to download prefetched Data:- </label>
      {/* {console.log(col, datas)} */}
      <CsvDownloader
        filename="myfile"
        extension=".csv"
        separator=";"
        wrapColumnChar="'"
        // columns={col}
        datas={datas}
        text="DOWNLOAD"
      />
    </div>
  );
}

export default GetData;
