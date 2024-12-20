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
      <div className="flex justify-between">
        <h2 className="basis-1/2 text-lg font-bold">
          Hi Mona, 68% of goal achieved and rest can be achieved by focusing on 20 top leads
        </h2>
        <div className="basis-1/2 grid grid-cols-12 rounded-md">
          <div className="bg-green-500 col-span-2"></div>
          <div className="bg-blue-400 col-span-1"></div>
          <div className="bg-pink-400 col-span-1"></div>
          <div className="bg-yellow-400 col-span-1"></div>
          <div className="col-span-7">05</div>
        </div>
        <div onClick={toggleCollapse} className="cursor-pointer">
          {isCollapsed ? (
            <ChevronDownIcon className="h-6 w-6 text-gray-500" />
          ) : (
            <ChevronUpIcon className="h-6 w-6 text-gray-500" />
          )}
        </div>
      </div>

      {/* Conditional Rendering: Collapsed state */}
      <div className={`transition-all duration-300 ease-in-out overflow-hidden ${
          isCollapsed ? "max-h-0" : "max-h-[1000px]"
        }`}
      >
          <div className="flex">
          <div className="w-3/4">
            <p>
              Copilot has pinpointed 20 key leads that show strong purchase intent and are actively engaging. These leads
              need your focus.
            </p>
            <div className="flex">
              <div className="border-2 border-grey-300 rounded-lg p-3">
                <div className="flex">
                  <img
                    alt=""
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    className="size-8 rounded-full"
                  />
                  <div className="pl-2">
                    <p className="font-semibold text-sm">Jane Rayes</p>
                    <p className="text-gray-400 text-xs">COO . Northwind Tranders</p>
                  </div>
                </div>
                <div className="p-5 bg-indigo-50 rounded-lg ">
                  <div className="flex justify-between">
                    <div className="flex">
                      <EnvelopeIcon className="h-4 w-4 text-gray-500" />
                      <p className="font-semibold text-sm">Engage with Jane Reyes</p>
                    </div>
                  </div>
                  <p className="text-gray-500 text-md">
                    Jane may be interested in upgrading espresso machines for her in-store coffee shops
                  </p>
                </div>
                <div className="flex">
                  <p className="text-sm text-gray-300">Expand business</p>
                  <p className="text-2xl text-gray-400 leading-3">.</p>
                  <p className="text-sm text-gray-300">High buying intent</p>
                </div>
              </div>
              <div className="border-2 border-grey-300 rounded-lg p-3">
                <div className="flex">
                  <img
                    alt=""
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    className="size-8 rounded-full"
                  />
                  <div className="pl-2">
                    <p className="font-semibold text-sm">Jane Rayes</p>
                    <p className="text-gray-400 text-xs">COO . Northwind Tranders</p>
                  </div>
                </div>
                <div className="p-5 bg-indigo-50 rounded-lg ">
                  <div className="flex justify-between">
                    <div className="flex">
                      <EnvelopeIcon className="h-4 w-4 text-gray-500" />
                      <p className="font-semibold text-sm">Engage with Jane Reyes</p>
                    </div>
                  </div>
                  <p className="text-gray-500 text-md">
                    Jane may be interested in upgrading espresso machines for her in-store coffee shops
                  </p>
                </div>
                <div className="flex">
                  <p className="text-sm text-gray-300">Expand business</p>
                  <p className="text-2xl text-gray-400 leading-3">.</p>
                  <p className="text-sm text-gray-300">High buying intent</p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-1/4">
          <p>Other key activites</p>
          <div className="shadow-md rounded-md p-2 mt-2 mb-5">
            <div className="flex">
              <img
                alt=""
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                className="size-8 rounded-full"
              />
              <div className="pl-2">
                <p className="font-semibold text-sm">Cafe A100 for Woodland Bank</p>
                <div className="flex text-gray-400 text-xs">
                  <p>Woodland Bank</p>
                  <p>.</p>
                  <p>$280,000</p>
                  <p>.</p>
                  <p>8 days to close</p>
                </div>
              </div>
            </div>
            <div className="flex">
              <div className="flex bg-sky-50 p-1 rounded-md mt-1 w-full">
                <EnvelopeIcon className="h-4 w-4  text-gray-500" />
                <p className="text-xs text-gray ml-1">Review draft and reply to Chris Naido</p>
              </div>
              
              <StarIcon class="h-4 w-4 mt-2 text-gray-500" />
            </div>
          </div>
          <div className="shadow-md rounded-md p-2">
            <div className="flex">
              <img
                alt=""
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                className="size-8 rounded-full"
              />
              <div className="pl-2">
                <p className="font-semibold text-sm">Partnership opportunity for Fabrikam</p>
                <div className="flex text-gray-400 text-xs">
                  <p>Fabrikam</p>
                  <p>.</p>
                  <p>$5,000,000</p>
                  <p>.</p>
                  <p>12 days to close</p>
                </div>
              </div>
            </div>
            <div className="flex">
              <div className="flex bg-sky-50 p-1 rounded-md mt-1 w-full">
                <EnvelopeIcon className="h-4 w-4  text-gray-500" />
                <p className="text-xs text-gray ml-1">Prepare me for Fabrikam's key stakeholder meeting</p>
              </div>
              
              <StarIcon class="h-4 w-4 mt-2 text-gray-500" />
            </div>
            </div>
            <p>Show all key activites</p>
          </div>
        </div>
      </div>
    </div>
  );
}
