import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
function Payments() {

    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="container">
                        <form>
                            <div className="form-group text-center">
                                <label> Full  Name</label>
                                <input type="text" className="form-control" />
                            </div>
                            <div className="form-group">
                            <label> Card Numer  </label>
                                <input type="text" className="form-control" />
                            </div>
                            <div className="form-group text-center">
                                <label> Address</label>
                                <input type="text" className="form-control" />
                            </div>
                            <div className="form-group">
                            <label> Card Numer  </label>
                                <input type="text" className="form-control" />
                            </div>
                        </form>
                    </div>
                </div>

            </div>
        </div>
    );
}
export default Payments;