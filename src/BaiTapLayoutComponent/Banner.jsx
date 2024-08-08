import React from "react";

export const Banner = () => {
  return (
    <div className="container mt-5">
      <div className="text-center p-5 bg-light">
        <h1 className="display-5 fw-bold">A warm welcome!</h1>
        <p className="lead fs-4 text-dark">
          Bootstrap utility classes are used to create this jumbotron since the
          old component has been removed from the framework. Why create custom
          CSS when you can use utilities?
        </p>
        <a href="#" className="btn btn-primary">
          Call to action
        </a>
      </div>
    </div>
  );
};
