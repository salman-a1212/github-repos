import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [response, setResponse] = useState([])
console.log(response)
  useEffect(() => {
    const loadProduct = async () => {
        const res = await axios.get(
          "http://localhost:1337/api/products");
        setResponse(res.data.data);
console.log(res.data)
    }

    
    loadProduct();
    console.log(response)
}, []);


  return (
    <div className="App">
      {response?.map(item => 
      <table style={{textAlign: "left", border: '1px solid #eee'}}>
        <tr>
    <th>
          <p>ID</p>
        </th>
        <th>
          <p>Name</p>
        </th>
        <th>
          <p>Description</p>
        </th>
        <th>
          <p>Created by</p>
        </th>
        </tr>
        <tr>
        <td>{item?.attributes?.product?.id}</td>
        <td>{item?.attributes?.product?.name}</td>
        <td>{item?.attributes?.product?.description}</td>
        <td>{item?.attributes?.product?.created_by.firstname}{" "}{item?.attributes?.product?.created_by.lastname}</td>
        </tr>
        <tr>
        <td>{item?.attributes?.product?.categories.id}</td>
        </tr>
      </table>
      )}
    </div>
  );

      }
export default App;
