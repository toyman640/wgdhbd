import { ChevronUpIcon, EnvelopeIcon, StarIcon } from "@heroicons/react/24/outline";

export default function LeadCard() {
  return (
    <div className="shadow-2xl mt-5 p-5 font-sans" style={{
      border: "2px solid transparent",
      borderRadius: "0.375rem",
      backgroundImage: "linear-gradient(white, white), linear-gradient(to right, #3b82f6, #4f46e5)",
      backgroundOrigin: "border-box",
      backgroundClip: "padding-box, border-box",
    }}>
      <div className="flex justify-between ">
        <h2 className="basis-1/2">Hi Mona, 68% of goal achieved and rest can be achieved by focusing on 20 top leads</h2>
        <div className="basis-1/2 grid grid-cols-12 rounded-md">
          <div className="bg-green-500 col-span-2"></div>
          <div className="bg-blue-400 col-span-1"></div>
          <div className="bg-pink-400 col-span-1"></div>
          <div className="bg-yellow-400 col-span-1"></div>
          <div className="col-span-7">05</div>
        </div>
        <ChevronUpIcon class="h-6 w-6 text-gray-500" />
      </div>
      <div className="flex">
        <div className="w-3/4">
          <p>Copilot has pinpointed 20 key lead that show strong purchase intent and are actively engaging. These leads need your focus</p>
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
                    <EnvelopeIcon className="h4 w-4 text-gray-500" />
                    <p className="font-semibold text-sm">Engage with Jane Reyes</p>
                  </div>
                  {/* <StarIcon className="h-6 w-6 text-gray-500  star-align" /> */}
                </div>
                <p className="text-gray-500 text-md ">Jane may be intrested in upgrading espresso machines for her instore coffee shops</p>
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
                    <EnvelopeIcon className="h4 w-4 text-gray-500" />
                    <p className="font-semibold text-sm">Engage with Jane Reyes</p>
                  </div>
                  {/* <StarIcon className="h-6 w-6 text-gray-500  star-align" /> */}
                </div>
                <p className="text-gray-500 text-md ">Jane may be intrested in upgrading espresso machines for her instore coffee shops</p>
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
          <div>
            <div className="flex">
              <img
                alt=""
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                className="size-8 rounded-full"
              />
              <div>
                <p>Cafe A100 for Woodland Bank</p>
                <div className="flex">
                  <p>Woodland Bank</p>
                  <p>.</p>
                  <p>$280,000</p>
                  <p>.</p>
                  <p>8 days to close</p>
                </div>
              </div>
            </div>
            <div>
              <div className="flex">
                <EnvelopeIcon className="h-6 w-6 text-gray-500" />
                <p>Review draft and reply to Chris Naido</p>
              </div>
              
              <StarIcon class="h-6 w-6 text-gray-500" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
