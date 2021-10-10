import React from "react";

const About = () => {
  return (
    <div className="px-6 pt-16 leading-8 md:w-4/5 max-width">
      <p className="mt-10 text-2xl">
        It all begins with an idea. Maybe you want to launch a business. Maybe
        you want to turn a hobby into something more. Or maybe you have a
        creative project to share with the world. Whatever it is, the way you
        tell your story online can make all the difference.
      </p>
      <p className="mt-4 text-lg">
        Don’t worry about sounding professional. Sound like you. There are over
        1.5 billion websites out there, but your story is what’s going to
        separate this one from the rest. If you read the words back and don’t
        hear your own voice in your head, that’s a good sign you still have more
        work to do.
      </p>
      <div
        style={{
          width: "300px",
          border: "gray solid 0.2px",
          marginTop: "2.5rem",
        }}
      ></div>
      <p className="mt-4 font-medium">email@email.com</p>
      <p className="mt-1 font-medium">(555)555-5555</p>
    </div>
  );
};

export default About;
