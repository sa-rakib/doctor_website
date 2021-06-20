import React from 'react';

const BlogPost = (props) => {
    const {title, description, author, authorImg, date} = props.blog
    return (
        <div className="card shadow-sm">
            <div className="card-header d-flex align-items-center">
                <img mx-3 src={authorImg} alt="images" />
                <div className="ml-3">
                    <h5 className="text-primary">{author}</h5>
                    <p className="m-0">{date}</p>
                </div>
            </div>
            <div className="card-body">
                <h6 className="">{title}</h6>
                <p className="card-text text-secondary mt-4">{description}</p>
            </div>
        </div>
    );
};

export default BlogPost;