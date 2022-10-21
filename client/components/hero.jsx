import React from 'react';

const Hero = ({title, children, cta}) => {
  return (
    <div className="hero h-[60vh] bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">{title}</h1>
          <p className="py-6">{children}</p>
          <button className="btn btn-primary">
            <a href="/donate">{cta}</a>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Hero;