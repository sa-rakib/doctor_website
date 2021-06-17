import React from 'react';
import './testimonialtitle.css';
import quat from '../../../images/quote.png'
import wilson from '../../../images/wilson.png'
import ema from '../../../images/ema.png'
import aliza from '../../../images/aliza.png'
import Testimonial from '../Testimonial/Testimonial';
const TestimonialTitle = () => {

    const testimonialData = [
    {
        quote : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ',
        name : 'Wilson Harry',
        from : 'California',
        img : wilson
    },
    {
        quote : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ',
        name : 'Ema Gomez',
        from : 'California',
        img : ema
    },
    {
        quote : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ',
        name : 'Aliza Farari',
        from : 'California',
        img : aliza
    }
]

    const mystyle = {
        width: '30%',
    }
    return (
        <section className="">
            <div className="row d-flex align-items-center marginTob">
            <div className="col-md-6">
                <h5 className="text-primary text-uppercase">Testimonial</h5>
                <h1>What Our Patients <br/> Says </h1>
            </div>
            <div className="col-md-6 text-center">
                <img style={mystyle} className="img-fluid" src={quat} alt="" />
            </div>
            </div>
            <div className="card-deck mt-5">
                {
                    testimonialData.map(testimonial => <Testimonial testimonial={testimonial} key={testimonial.name} ></Testimonial>)
                }
            </div>
        </section>
    );
};

export default TestimonialTitle;