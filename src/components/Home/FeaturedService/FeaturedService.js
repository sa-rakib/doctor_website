import React from 'react';
import image from '../../../images/featured.png'
const FeaturedService = () => {
    const mystyle = {
        width: '500px',
        backgroundSize: 'cover'
    };
    const mystyles = {
        textAlign: 'justify',
    }
    
    return (
        <section className="row d-flex align-items-center text-center">
            <div className="col-md-6">
                <img style={mystyle} className="img-fluid" src={image} alt="" />
            </div>
            <div className="col-md-6">
                <h1>Exceptional Dental Care, on Your Terms</h1>
                <p style={mystyles} className="text-secondary my-5 d-flex justify-content-start">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.  Tempore efacere amet aperiam non odio. Temporibus, nemo quasi quisquam ipsa distinctio saepe sed veniam incidunt, tempora mollitia, dignissimos repellendus expedita. Obcaecati minima, reiciendis optio aspernatur autem pariatur soluta illum velit, eligendi dolorem consequuntur sapiente rerum accusamus aut nulla praesentium! Neque autem animi, voluptatem magnam nesciunt officia nemo nam, delectus minima velit beatae iste praesentium ad repudiandae, similique excepturi sapiente.
                </p>
                <button className="btn btn-primary">Learn More</button>
            </div>
        </section>
    );
};

export default FeaturedService;