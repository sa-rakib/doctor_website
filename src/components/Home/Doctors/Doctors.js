import React from 'react';
import Doctor from '../Doctor/Doctor';

const Doctors = () => {

    const myState = {
        marginTop: '150px'
    }
    return (
        <div>
            <section className="doctors">
            <div className="container">
                <h5 style={myState} className="text-center  text-primary">Our Doctors</h5>
                <div className="row">
                    <Doctor/>
                    <Doctor/>
                    <Doctor/>
                </div>
            </div>
        </section>
        </div>
    );
};

export default Doctors;