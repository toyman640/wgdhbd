import { EnvelopeIcon, XMarkIcon, SparklesIcon, PencilIcon, PaperAirplaneIcon, CheckBadgeIcon, StarIcon, WindowIcon, ShieldCheckIcon, HandThumbUpIcon, HandThumbDownIcon, ChevronDownIcon } from "@heroicons/react/24/outline";
// import Image from 'next/image'


export default function LeadModal({ isOpen, onClose, lead }) {
  if (!isOpen || !lead) return null; // Do not render if modal is closed or no lead data

  return (
    <div className="fixed inset-0 flex items-center justify-center text-xs bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-[70%] lg:max-w-[70%] md:max-w-[70%]">
        <div className="flex justify-between mb-2">
          <div className="flex">
            <EnvelopeIcon className="h-5 w-5 text-gray-500" />
            <p className="font-semibold pl-2">Engage with {lead.name}</p>
          </div>
          <button onClick={onClose}><XMarkIcon className="h-6 w-6 text-gray-500" /></button>
        </div>
        <div className="shadow-md rounded flex p-2 mt-3 mb-3">
          <img
            src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80"
            width={500}
            height={500}
            alt="Picture of the author"
            className="w-10 h-10 rounded-full"
          />
          <div className="pl-2">
            <p className="font-semibold text-sm">{lead.name}</p>
            <div className="flex">
              <p>In</p>
              <p className="text-gray-400 ">COO, Northwind Traders</p>
            </div>
          </div>
        </div>
        <div className="flex justify-between bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 p-2 rounded">
          <div className="flex">
            <SparklesIcon class="h-4 w-4  bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500" />
            <p className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">Jane may be interested in upgrading espresso machines for her in-store coffe shops.</p>
          </div>
          <div className="flex gap-2">
            <button className="bg-white flex px-3 rounded py-1"><PencilIcon class="h-4 w-4 text-gray-500 mr-2" /> Edit</button>
            <button className="flex bg-gradient-to-r from-blue-500  to-pink-500 px-3 py-1 rounded text-white"><PaperAirplaneIcon class="h-4 w-4 text-white  mr-2" />
             Approve and send</button>
          </div>
        </div>
        <div className="flex gap-4 shadow pt-3 pl-3 pb-2 mt-5">
          <p className="text-sm text-gray-500">
            Engage
          </p>
          <p className="text-sm text-gray-500">Research</p>
        </div>
        <div className="bg-gradient-to-r from-blue-50  to-blue-100 w-full rounded p-1 pb-">
          <div className="bg-white rounded-md p-5">
            <div className="bg-blue-50 p-3 rounded-md mt-5">
              <p className="text-indigo-500 pb-1">Why I picked this lead</p>
              <ul className="list-disc ml-5">
                <li>Jane is a <span className="font-semibold">key decision maker</span> and was browsing <span className="font-semibold">'espresso machines' </span>on First Coffee's website</li>
                <li>Multiple people at her company have reported 'slowness' during <span className="font-semibold">service requests</span></li>
                <li>Northwind Traders currently see <span className="font-semibold">$200M</span> in revenue from thier in-store coffee shops.</li>
              </ul>
              <div className="flex mt-5 gap-3">
                <div className="flex bg-white shadow-md rounded-lg p-3">
                  <CheckBadgeIcon className="h-10 w-10 text-blue-500 mr-2" />
                  <div>
                    <p className="">Decision maker</p>
                    <p className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 font-extrabold">Yes</p>
                  </div>
                </div>
                <div className="flex bg-white shadow-md rounded-lg p-3">
                    <StarIcon class="h-10 w-10 text-amber-500 mr-2"  />
                  <div>
                    <p className="">Potential deal value</p>
                    <p className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 font-extrabold">$1m</p>
                  </div>
                </div>
                <div className="flex bg-white shadow-md rounded-lg p-3">
                  <WindowIcon class="h-10 w-10 text-blue-500 mr-2" />
                  <div>
                    <p className="">Intent</p>
                    <p className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 font-extrabold">High</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-between mt-3 text-xs">
              <div className="flex gap-2">
                <button className="bg-gray-100 border rounded p-1"><ShieldCheckIcon className="h-5 w-5 text-gray-500" /></button>
                <button className="bg-gray-100 border rounded p-1"><span className="px-2  border-r-2">1</span> D365 Sales</button>
                <button className="bg-gray-100 border rounded py-1 px-2">+2</button>
              </div>
              <div className="flex gap-2">
                <button className="bg-gray-100 border rounded p-1 text-xs">AI-generated content may be incorrect</button>
                <HandThumbUpIcon className="h-5 w-5 text-gray-500" />
                <HandThumbDownIcon className="h-5 w-5 text-gray-500" />
              </div>
            </div>
          </div>
          <div className="border-2 border-gray-500 rounded-lg p-5 mt-5 bg-white">
            <div className="flex justify-between mb-1">
              <h2 className="font-semibold">About Jane</h2>
              <ChevronDownIcon className="h-6 w-6 text-gray-500" />
            </div>
            <p className="text-gray-500 ">{lead.name}, the Cheif Operating Officer of Northwind Traders, is a dynamic leader with a proven track record in optimizing operations and enhancing customer experinces. Under her guidance, Northwund Traders' in-store coffee shops have
              flourished, becoming a hallmark of quality and innovation. Jane's commitment to excellence makes her an ideal partner for First Coffee. She is always seeking top-tier equipment to elevate her coffee shops' offerings, ensuring consistent, high-quality servive  
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
