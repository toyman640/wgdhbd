import { useState } from "react";
import { ChevronUpIcon, ChevronDownIcon, EnvelopeIcon, StarIcon, ChevronLeftIcon, ChevronRightIcon, ClockIcon } from "@heroicons/react/24/outline";


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
  ];

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? cards.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === cards.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div
      className="shadow-2xl mt-5 p-5 font-sans max-w-full mx-auto"
      style={{
        border: "2px solid transparent",
        borderRadius: "0.375rem",
        backgroundImage: "linear-gradient(white, white), linear-gradient(to right, #3b82f6, #4f46e5)",
        backgroundOrigin: "border-box",
        backgroundClip: "padding-box, border-box",
      }}
    >
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between">
        <h2 className="text-sm font-bold md:basis-1/2 text-center md:text-left">
          Hi Mona, <span className="text-blue-800">68% </span>of goal achieved and rest can be achieved by focusing on 20 top leads
        </h2>
        <div className="md:mt-0 md:basis-1/2 flex flex-col items-center md:items-end lg:items-start">
          <div className="flex pb-1">
            <ClockIcon className="h-4 w-4 text-gray-500 mr-1" />
            <p className="text-xs text-gray-400">1 month until Q4 ends</p>
          </div>
          <div
            className="grid grid-cols-12 rounded-lg overflow-hidden w-full"
            style={{ height: "10px" }}
          >
            <div className="bg-emerald-500 col-span-3"></div>
            <div className="bg-blue-400 col-span-1"></div>
            <div className="bg-pink-400 col-span-1"></div>
            <div className="bg-yellow-400 col-span-1"></div>
            <div className="col-span-6 bg-gray-100"></div>
          </div>
          {/* Legend */}
          <div className="flex gap-3 mt-2 text-xs te">
            <div className="flex items-center">
              <span className="bg-emerald-500 rounded-full h-3 w-3 mr-1"></span><span></span>Won $18m
            </div>
            <div className="flex items-center">
              <span className="bg-blue-500 rounded-full h-3 w-3 mr-1"></span>Commited $8m
            </div>
            <div className="flex items-center">
              <span className="bg-pink-500 rounded-full h-3 w-3 mr-1"></span>Best case $7m
            </div>
            <div className="flex items-center">
              <span className="bg-yellow-500 rounded-full h-3 w-3 mr-1"></span>Qualified $3m
            </div>
          </div>
        </div>
        <button
          onClick={toggleCollapse}
          className="mt-3 md:mt-0 flex items-center justify-center w-full md:w-auto"
        >
          {isCollapsed ? (
            <ChevronDownIcon className="h-6 w-6 text-gray-500" />
          ) : (
            <ChevronUpIcon className="h-6 w-6 text-gray-500" />
          )}
        </button>
      </div>

      {/* Collapsible Content */}
      <div
        className={`transition-all duration-300 ease-in-out overflow-hidden ${
          isCollapsed ? "max-h-0" : "max-h-screen"
        }`}
      >
        <div className="flex flex-col lg:flex-row gap-4 mt-5">
          {/* Carousel Section */}
          <div className="lg:w-2/3">
            <div className="relative">
              <div className="overflow-hidden">
                <div
                  className="flex transition-transform duration-300"
                  style={{
                    transform: `translateX(-${currentIndex * 100}%)`,
                  }}
                >
                  {cards.map((card, index) => (
                    <div
                      key={index}
                      className="w-full sm:w-1/2 flex-shrink-0 p-4"
                    >
                      <div className="border rounded-lg p-4">
                        <div className="flex items-center">
                          <img
                            alt=""
                            src={card.image}
                            className="w-12 h-12 rounded-full"
                          />
                          <div className="pl-3">
                            <p className="font-semibold">{card.name}</p>
                            <p className="text-gray-400">{card.role}</p>
                          </div>
                        </div>
                        <p className="text-sm mt-3">{card.message}</p>
                        <div className="text-xs mt-2 flex justify-between">
                          <p>{card.tags[0]}</p>
                          <p>{card.tags[1]}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              {/* Navigation Arrows */}
              <button
                onClick={handlePrev}
                className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-100 p-2 rounded-full shadow"
              >
                <ChevronLeftIcon className="h-6 w-6 text-gray-500" />
              </button>
              <button
                onClick={handleNext}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-100 p-2 rounded-full shadow"
              >
                <ChevronRightIcon className="h-6 w-6 text-gray-500" />
              </button>
            </div>
          </div>

          {/* Sidebar Section */}
          <div className="lg:w-1/3">
            <p className="font-medium">Other key activities</p>
            <div className="mt-4">
              {/* Sidebar Item */}
              <div className="border rounded-md p-3 mb-4">
                <div className="flex items-center">
                  <img
                    alt=""
                    src={cards[0].image}
                    className="w-10 h-10 rounded-full"
                  />
                  <div className="pl-2">
                    <p className="font-medium">Cafe A100 for Woodland Bank</p>
                    <p className="text-xs text-gray-400">Woodland Bank • $280,000</p>
                  </div>
                </div>
              </div>
              <div className="border rounded-md p-3 mb-4">
                <div className="flex items-center">
                  <img
                    alt=""
                    src={cards[0].image}
                    className="w-10 h-10 rounded-full"
                  />
                  <div className="pl-2">
                    <p className="font-medium">Cafe A100 for Woodland Bank</p>
                    <p className="text-xs text-gray-400">Woodland Bank • $280,000</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
