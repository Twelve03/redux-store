import React from "react";

const Contact = () => {
  return (
    <div id="contact">
      <div className="p-8 items-center max-width md:flex lg:mt-20">
        <img
          src="https://i.pinimg.com/originals/da/6a/87/da6a87d05b220e44e2cd42ca81fef22b.jpg"
          alt="about me portrait"
          className="md:w-2/4 md:ml-4 lg:w-2/5"
        />
        <div className="md:ml-8">
          <p className="mt-4 text-3xl lg:text-4xl">Contact</p>
          <p className="mt-2 text-gray-500 lg:text-xl lg:w-4/5">
            For custom paintings, or any questions you can contact me here:
          </p>
          <p className="mt-4 font-medium">email@email.com</p>
          <p className="mt-1 font-medium">(555)555-5555</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
