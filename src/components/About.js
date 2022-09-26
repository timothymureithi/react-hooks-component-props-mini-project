import React from 'react';
/**Make an `About` component as a child of `App`. It should return:

- an `<aside>` element with the following elements inside:
  - an `<img>` element, with the `src` set to an _image_ passed as a prop
  - the `<img>` element should use this placeholder image as a _default value_
    for the prop if no prop is passed in: "https://via.placeholder.com/215"
  - the image should also be accessible! Give it an `alt` attribute of "blog logo"
  - a `<p>` element, with the _about_ text for the blog passed in as a prop */
  
const About = ({ image, about }) => {
    return <div>
        <aside>
            <img
                src={image ? image : 'https://via.placeholder.com/215'}
                alt='blog logo'
            />
            <p>{about}</p>

        </aside>
    </div>;
};

export default About;