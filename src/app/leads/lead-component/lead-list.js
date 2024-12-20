import { useState } from "react";
import { ChevronUpIcon, ChevronDownIcon, EnvelopeIcon, StarIcon } from "@heroicons/react/24/outline";

export default function LeadCard() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleCollapse = () => {
    setIsCollapsed((prevState) => !prevState);
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
        <div className="flex flex-col lg:flex-row mt-5">
          <div className="lg:w-3/4">
            <p className="mb-4">
              Copilot has pinpointed 20 key leads that show strong purchase intent and are actively engaging. These leads
              need your focus.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="border-2 border-gray-300 rounded-lg p-3 w-full sm:w-[48%]">
                <div className="flex">
                  <img
                    alt=""
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    className="w-10 h-10 rounded-full"
                  />
                  <div className="pl-2">
                    <p className="font-semibold text-sm">Jane Rayes</p>
                    <p className="text-gray-400 text-xs">COO . Northwind Tranders</p>
                  </div>
                </div>
                <div className="p-5 bg-indigo-50 rounded-lg mt-3">
                  <div className="flex items-center">
                    <EnvelopeIcon className="h-4 w-4 text-gray-500" />
                    <p className="font-semibold text-sm pl-2">Engage with Jane Reyes</p>
                  </div>
                  <p className="text-gray-500 text-md mt-2">
                    Jane may be interested in upgrading espresso machines for her in-store coffee shops
                  </p>
                </div>
                <div className="flex justify-between text-sm text-gray-300 mt-3">
                  <p>Expand business</p>
                  <p>High buying intent</p>
                </div>
              </div>

              {/* Duplicate section for another lead */}
              <div className="border-2 border-gray-300 rounded-lg p-3 w-full sm:w-[48%]">
              <div className="flex">
                  <img
                    alt=""
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    className="w-10 h-10 rounded-full"
                  />
                  <div className="pl-2">
                    <p className="font-semibold text-sm">Jane Rayes</p>
                    <p className="text-gray-400 text-xs">COO . Northwind Tranders</p>
                  </div>
                </div>
                <div className="p-5 bg-indigo-50 rounded-lg mt-3">
                  <div className="flex items-center">
                    <EnvelopeIcon className="h-4 w-4 text-gray-500" />
                    <p className="font-semibold text-sm pl-2">Engage with Jane Reyes</p>
                  </div>
                  <p className="text-gray-500 text-md mt-2">
                    Jane may be interested in upgrading espresso machines for her in-store coffee shops
                  </p>
                </div>
                <div className="flex justify-between text-sm text-gray-300 mt-3">
                  <p>Expand business</p>
                  <p>High buying intent</p>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-1/4 mt-5 lg:mt-0">
            <p>Other key activities</p>
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
