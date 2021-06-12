import axios from "axios";
import { useEffect, useState } from "react";
import CsvDownloader from "react-csv-downloader";
import FormData from "./Form";

function PostData() {
  const [formData, setFormData] = useState({});
  useEffect(() => {
    console.log(formData);
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
