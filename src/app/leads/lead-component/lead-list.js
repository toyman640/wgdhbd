import { useState } from "react";
import { ChevronUpIcon, ChevronDownIcon, EnvelopeIcon, StarIcon, ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

export default function LeadCard() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const toggleCollapse = () => {
    setIsCollapsed((prevState) => !prevState);
  };

  const cards = [
    {
      name: "Jane Rayes",
      role: "COO . Northwind Traders",
      message: "Jane may be interested in upgrading espresso machines for her in-store coffee shops",
      tags: ["Expand business", "High buying intent"],
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    {
      name: "John Doe",
      role: "CEO . Tech Innovators",
      message: "John is exploring new software solutions for his company's project management needs",
      tags: ["Tech upgrade", "Medium buying intent"],
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80",
    },
    {
      name: "Alice Smith",
      role: "VP . Global Enterprises",
      message: "Alice is reviewing vendors for office furniture replacement",
      tags: ["New vendor search", "Low buying intent"],
      image: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80",
    },
    // Add more cards here
  ];

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? cards.length - 2 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === cards.length - 2 ? 0 : prevIndex + 1
    );
  };

  return (
    <div
      className="shadow-2xl mt-5 p-5 font-sans"
      style={{
        border: "2px solid transparent",
        borderRadius: "0.375rem",
        backgroundImage: "linear-gradient(white, white), linear-gradient(to right, #3b82f6, #4f46e5)",
        backgroundOrigin: "border-box",
        backgroundClip: "padding-box, border-box",
      }}
    >
      <div className="flex flex-col md:flex-row justify-between">
        <h2 className="text-lg font-bold md:basis-1/2">
          Hi Mona, 68% of goal achieved and rest can be achieved by focusing on 20 top leads
        </h2>
        <div className="grid grid-cols-12 gap-1 rounded-md mt-3 md:mt-0 md:basis-1/2">
          <div className="bg-green-500 col-span-2 h-2 md:h-full"></div>
          <div className="bg-blue-400 col-span-1 h-2 md:h-full"></div>
          <div className="bg-pink-400 col-span-1 h-2 md:h-full"></div>
          <div className="bg-yellow-400 col-span-1 h-2 md:h-full"></div>
          <div className="col-span-7 text-center">05</div>
        </div>
        <div onClick={toggleCollapse} className="cursor-pointer mt-3 md:mt-0">
          {isCollapsed ? (
            <ChevronDownIcon className="h-6 w-6 text-gray-500" />
          ) : (
            <ChevronUpIcon className="h-6 w-6 text-gray-500" />
          )}
        </div>
      </div>

      {/* Collapsible Content */}
      <div
        className={`transition-all duration-300 ease-in-out overflow-hidden ${
          isCollapsed ? "max-h-0" : "max-h-[1000px]"
        }`}
      >
        <div className="flex flex-col lg:flex-row mt-5 gap-6">
          <div className="lg:w-3/4 pr-5">
            <p className="mb-4 text-gray-700 font-medium text-sm">
              Copilot has pinpointed 20 key leads that show strong purchase intent and are actively engaging. These leads
              need your focus.
            </p>
           
            <div className="relative">
                {/* Carousel Container */}
                <div className="overflow-hidden">
                  <div
                    className="flex gap-4 transition-transform duration-300"
                    style={{
                      transform: `translateX(-${currentIndex * (50 + 2)}%)`,
                    }}
                  >
                    {cards.map((card, index) => (
                      <div
                        key={index}
                        className="border-2 border-gray-300 rounded-lg p-3 w-full sm:w-[48%] flex-shrink-0"
                        style={{ flexBasis: "calc(50% - 8px)", height: "200px", }}
                      >
                        <div className="flex">
                          <img
                            alt=""
                            src={card.image}
                            className="w-10 h-10 rounded-full"
                          />
                          <div className="pl-2">
                            <p className="font-semibold text-sm">{card.name}</p>
                            <p className="text-gray-400 text-xs">{card.role}</p>
                          </div>
                        </div>
                        <div className="p-2 bg-indigo-50 rounded-lg mt-3">
                          <div className="flex items-center">
                            <p className="font-semibold text-sm pl-2">
                              Engage with {card.name}
                            </p>
                          </div>
                          <p className="text-gray-500 text-sm mt-2">{card.message}</p>
                        </div>
                        <div className="flex justify-between text-sm text-gray-300 pt-3">
                          <p>{card.tags[0]}</p>
                          <p>{card.tags[1]}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Left Arrow */}
                {/* <button
                  onClick={handlePrev}
                  className="absolute top-1/2 -translate-y-1/2 left-0 bg-gray-100 p-2 rounded-full shadow"
                >
                  <ChevronLeftIcon className="h-6 w-6 text-gray-500" />
                </button> */}

                {/* Right Arrow */}
                <button
                  onClick={handleNext}
                  className="absolute top-1/2 -translate-y-1/2 right-0 bg-gray-100 p-2 rounded-full shadow"
                >
                  <ChevronRightIcon className="h-6 w-6 text-gray-500" />
                </button>

                {/* Dots */}
                <div className="flex justify-center gap-2 mt-4">
                  {cards.map((_, index) => (
                    <div
                      key={index}
                      onClick={() => setCurrentIndex(index)}
                      className={`h-2 w-2 rounded-full cursor-pointer ${
                        index === currentIndex ? "bg-indigo-500" : "bg-gray-300"
                      }`}
                    ></div>
                  ))}
                </div>
              </div>
          </div>
          <div className="lg:w-1/3 mt-5 lg:mt-0 border-l border-gray-200 pl-5">
            <p className="text-gray-700 font-medium mb-5 text-sm">Other key activities</p>
            <div className="shadow-md rounded-md p-3 mt-5">
              <div className="flex items-center">
                <img
                  alt=""
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  className="w-10 h-10 rounded-full"
                />
                <div className="pl-2">
                  <p className="font-semibold text-sm">Cafe A100 for Woodland Bank</p>
                  <div className="flex text-gray-400 text-xs space-x-1">
                    <p>Woodland Bank</p>
                    <p>•</p>
                    <p>$280,000</p>
                    <p>•</p>
                    <p>8 days to close</p>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between bg-sky-50 p-2 rounded-md mt-2">
                <div className="flex items-center">
                  <EnvelopeIcon className="h-4 w-4 text-gray-500" />
                  <p className="text-xs text-gray-600 pl-2">Review draft and reply to Chris Naido</p>
                </div>
                <StarIcon className="h-4 w-4 text-gray-500" />
              </div>
            </div>
            <div className="shadow-md rounded-md p-3 mt-2">
              <div className="flex items-center">
                <img
                  alt=""
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  className="w-10 h-10 rounded-full"
                />
                <div className="pl-2">
                  <p className="font-semibold text-sm">Cafe A100 for Woodland Bank</p>
                  <div className="flex text-gray-400 text-xs space-x-1">
                    <p>Woodland Bank</p>
                    <p>•</p>
                    <p>$280,000</p>
                    <p>•</p>
                    <p>8 days to close</p>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between bg-sky-50 p-2 rounded-md mt-2">
                <div className="flex items-center">
                  <EnvelopeIcon className="h-4 w-4 text-gray-500" />
                  <p className="text-xs text-gray-600 pl-2">Review draft and reply to Chris Naido</p>
                </div>
                <StarIcon className="h-4 w-4 text-gray-500" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
