import React, { useState, useEffect } from "react";
import TableComponent from "../../component/TableCompanent";
import axios from "axios";

export default function CategoryPage() {
  let [headers, setHeaders] = useState(["non", "GAF"]);

  useEffect(() => {
    axios.get(`https://63a724f759fd83b1bb3f703d.mockapi.io/ra/mock/headed`)
      .then(res => {
        setHeaders(res.data);
        console.log(headers);
      })
      .catch(error => console.log(error));
  }, [headers])

  return (
    <>
      <TableComponent headers={headers}></TableComponent>
    </>
  );
}
