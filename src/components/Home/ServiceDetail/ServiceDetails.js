import React from 'react';

const ServiceDetails = (props) => {
    const { name, img } = props.service;
    return (
        <div className="col-md-4 text-center mb-5">
            <img className="mt-5" src={img} alt="" />
            <h5 className="mt-4 mb-4">{name}</h5>
            <p className="text-secondary">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, quaerat?</p>

        </div>
    );
};

export default ServiceDetails;