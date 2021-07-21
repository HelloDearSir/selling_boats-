import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
function boats() {
 
    const [boatdata, setData] = useState([]);

    useEffect(() => {
        axios.get("http://127.0.0.1:8000/boat").then((res) => {

            setData(res.data);
            console.log(res.data);
        })
            .catch((error) => console.log(error));
    }, []);

    const renderHeader = () => {
        let headerElement = ['Name', 'Description', 'Price'];

        return headerElement.map((key, index) => {
            return <th key={index}>{key.toUpperCase()}</th>
        })
    }
    const renderBody = () => {
        return boatdata && boatdata.map(({ _id, boat_name, description, price, images }) => {
            return (
                <div className="col-6 col-md-4 p-4">
                    <div className="card">
                        <div className="card-title">
                        <img className="card-img-top w-100 img-fluid" src={images} alt="Card image cap"/>

                            <h5 className="card-title">{boat_name}</h5>
                            <p className="card-text">{description}</p>
                            <p className="card-text"> {price}</p>
                        </div>
                    </div>
                </div>
            )
        })
    }
    return (
        <div> 
        <div className="container">
            <div className="row">
                {renderBody()}
            </div>
        </div>
    </div>
    );
}

export default boats;


