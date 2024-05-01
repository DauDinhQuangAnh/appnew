import ToolTip from "./ToolTip";

const Hero = () => {
  return (
    <div className="bg-white h-full">
      <div className="max-w-5xl mx-auto md:grid md:grid-cols-2 flex flex-col items-center gap-4 h-full">
        <div className="space-y-5 flex-1 p-4">
          <div>
            <h1 className="text-gray-900 font-semibold md:text-3xl text-2xl">
              Unleash Your Inner Podcaster:
            </h1>
            <h1 className="text-gray-900 font-semibold md:text-3xl text-2xl">
              Build Your Own App with React Native and Node.js!
            </h1>
          </div>
          <p className="text-gray-900">
            Discover How to Build a Professional-Quality Podcast Player App from
            Scratch with React Native and Node.js
          </p>

          <ToolTip tooltip="You need to be familiar with JavaScript">
            <p>No Prior Experience Required!*</p>
          </ToolTip>

          <div>
            <a
              rel="noreferrer noopener"
              target="_blank"
              href="https://www.udemy.com/user/niraj-dhungana-92/"
              className="bg-[#7e89fd] hover:bg-[#6c78fe] text-white font-bold px-10 py-2 rounded-md inline-block cursor-pointer"
            >
              Take It
            </a>
          </div>
        </div>
        <div className="p-4 flex-1">
          <div className="border-4 border-[#7e89fd] rounded-full aspect-square flex items-center justify-center p-10">
            <img className="w-full h-auto" src="hero.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
