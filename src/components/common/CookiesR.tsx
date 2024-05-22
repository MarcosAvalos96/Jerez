import { useState } from "react";

interface CookiesRProps {
  body: string;
  button: string;
}

const CookiesR: React.FC<CookiesRProps> = ({ body, button }) => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <section className="left-0 right-0 fixed bottom-0 w-full bg-cardBg p-4">
      <div className="container lg:flex lg:items-center lg:gap-x-8 max-w-screen-xl mx-auto px-8 md:px-10">
        <p className="text-textColor">{body}</p>
        <div className="flex items-center mt-6 gap-x-4 lg:gap-x-8 lg:mt-0">
          <button
            onClick={() => setIsVisible(false)}
            className="text-sm w-1/2 md:w-auto font-medium  bg-primary rounded-lg hover:bg-SoftBlue text-white px-4 py-2.5 duration-300 transition-colors focus:outline-none"
          >
            {button}
          </button>
        </div>
      </div>
    </section>
  );
};

export default CookiesR;
