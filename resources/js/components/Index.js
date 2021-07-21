import { result } from 'lodash';
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import Headers from './Headers';
function Index() {


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
                            <img className="card-img-top w-100 img-fluid" src={images} alt="Card image cap" />
                            <h5 className="card-title text-center">{boat_name}</h5>
                            <p className="card-text text-center ">{description}</p>
                            <p className="card-text text-center"> {price}</p>
                            <div className="container text-center">
                                <button type="button" className="btn btn-primary" data-toggle="modal" data-target=".bd-example-modal-lg">Pre order</button>
                                <div className="modal fade bd-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
                                    <div className="modal-dialog modal-lg">
                                        <div className="modal-content">
                                            <div className="modal-header text-center">
                                                <h5 className="modal-title text-center">Pre ordering </h5>
                                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                    <span aria-hidden="true">&times;</span>
                                                </button>
                                            </div>
                                            <form>
                                                <div class="form-group row p-3">
                                                    <labe className="col-sm-4 col-form-label">Billing Name</labe>
                                                    <div class="col-sm-8">
                                                        <input type="text" className="form-control" />
                                                    </div>
                                                </div>
                                                <div class="form-group row p-3">
                                                    <labe className="col-sm-4 col-form-label">Price</labe>
                                                    <div class="col-sm-8">
                                                        <input type="text" className="form-control" placeholder={price} disabled />
                                                    </div>
                                                </div>
                                                <div class="form-group row p-3">
                                                    <labe className="col-sm-4 col-form-label">First Line</labe>
                                                    <div class="col-sm-8">
                                                        <input type="text" className="form-control" />
                                                    </div>
                                                </div>
                                                <div class="form-group row p-3">
                                                    <labe className="col-sm-4 col-form-label">Second Line</labe>
                                                    <div class="col-sm-8">
                                                        <input type="text" className="form-control" />
                                                    </div>
                                                </div>
                                                <div class="form-group row p-3">
                                                    <labe className="col-sm-4 col-form-label">City</labe>
                                                    <div class="col-sm-8">
                                                        <input type="text" className="form-control" />
                                                    </div>
                                                </div>
                                                <div class="form-group row p-3">
                                                    <labe className="col-sm-4 col-form-label">County</labe>
                                                    <div class="col-sm-8">
                                                        <input type="text" className="form-control" />
                                                    </div>
                                                </div>
                                                <div class="form-group row p-3">
                                                    <labe className="col-sm-4 col-form-label">Billing Name</labe>
                                                    <div class="col-sm-8">
                                                        <input type="text" className="form-control" />
                                                    </div>
                                                </div>
                                                <div class="form-group row p-3">
                                                    <labe className="col-sm-4 col-form-label">Post Code</labe>
                                                    <div class="col-sm-8">
                                                        <input type="text" className="form-control" />
                                                    </div>
                                                </div>
                                                <div class="form-group row p-3">
                                                    <labe className="col-sm-4 col-form-label">Card Details</labe>
                                                    <div class="col-sm-8">
                                                        <input type="text" className="form-control" />
                                                    </div>
                                                </div>
                                                <div class="form-group row p-3">
                                                    <labe className="col-sm-4 col-form-label">Expire</labe>
                                                    <div class="col-sm-8">
                                                        <input type="text" className="form-control" />
                                                    </div>
                                                </div>
                                                <div class="form-group row p-3">
                                                    <labe className="col-sm-4 col-form-label">CVC</labe>
                                                    <div class="col-sm-8">
                                                        <input type="text" className="form-control" />
                                                    </div>
                                                </div>
                                                <div class="pb-4">
                                                    <button className=" text-centre btn btn-primary"> Order </button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
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
export default Index;
if (document.getElementById('app')) {
    ReactDOM.render(<Index />, document.getElementById('app'));
}
