import axios from "axios";
import { useEffect, useState } from "react";
import CsvDownloader from "react-csv-downloader";
import FormData from "./Form";

function PostData() {
  // initialise store with a default value to check if there is successful ppost happening on the given port
  const [formData, setFormData] = useState({
    name:"test",
    age:'23',
    dob:"2021-06-03"
  });
  // effect will evoke everytime there is change in formdata
  useEffect(() => {
    console.log(formData)
    axios.post('http://localhost:4000/EmpData',formData)
    .then(()=>{
      alert('data Posted')
    })
    .catch((e)=>{
      console.error("encountered error",e.message)
    })
  }, [formData]);
  return (
    <div>
      <FormData setFormData={setFormData} />
      <CsvDownloader
        filename="PostFile"
        extension=".csv"
        separator=";"
        wrapColumnChar="'"
        // columns={columns}
        datas={formData}
        text="DOWNLOAD"
      />
    </div>
  );
}
export default PostData;
