import React from 'react';
import fluoride from '../../../images/fluoride.png';
import cavity from '../../../images/cavity.png';
import whitening from '../../../images/whitening.png';
import ServiceDetails from '../ServiceDetail/ServiceDetails';
const Service = () => {

    const serviceData = [
        {
        name: 'Fluoride Treatment',
        img: fluoride
    },
    {
        name: 'Cavity Filling',
        img: cavity
    },
    {
        name: 'Teeth Whitening',
        img: whitening
    }
    ]

    return (
        <section className="mt-5">
            <div className="text-center">
                <h5 style={{color: '#1CC7C1'}}>OUR SERVICES</h5>
                <h2>Service we Provide</h2>
            </div>
            <div className="d-flex align-items-center">
                <div className="row">
                    {
                        serviceData.map(data => <ServiceDetails service={data} key={data.name}></ServiceDetails>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Service;