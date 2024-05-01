const Banner = () => {
  return (
    <div className="relative bg-gray-800">
      {/* Background Image */}
      <img
        className="absolute inset-0 w-full h-full object-cover"
        src="https://source.unsplash.com/random"
        alt="Banner Background"
      />

      {/* Overlay */}
      <div className="relative bg-gray-900 bg-opacity-75">
        <div className="container mx-auto px-6 py-20 relative">
          {/* Left Content: Title and Description */}
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-5xl text-white font-bold mb-4">
              Start Your Journey
            </h1>
            <p className="text-lg lg:text-xl text-gray-300 mb-8">
              Achieve your fitness goals with our advanced tracking system.
            </p>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded">
              Get Started
            </button>
          </div>

          {/* Right Content: Image (Adjust as needed) */}
          <div className="hidden lg:block absolute top-0 right-0 bottom-0 w-1/2">
            <img
              className="h-full w-full object-cover"
              src="https://source.unsplash.com/random"
              alt="Feature Image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
