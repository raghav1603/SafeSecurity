import axios from "axios";
import { useEffect, useState } from "react";
import CsvDownloader from "react-csv-downloader";
import FormData from "./Form";

function PostData() {
  const [formData, setFormData] = useState({
    name:"test",
    age:'23',
    dob:"2021-06-03"
  });
  useEffect(() => {
    console.log(formData)
    axios.post('http://localhost:4000/EmpData',formData)
    .then(()=>{
      alert('data Posted')
    })
    .catch((e)=>{
      console.error("encountered error",e.message)
    })
  }, []);
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
