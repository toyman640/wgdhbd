import { PresentationChartLineIcon } from "@heroicons/react/24/outline";
import { ListBulletIcon, PlusIcon, TrashIcon, ChevronDownIcon, EllipsisVerticalIcon, Bars3BottomLeftIcon, PencilSquareIcon, 
ArrowTopRightOnSquareIcon, ArrowPathIcon, UserGroupIcon, ChartPieIcon  } from "@heroicons/react/24/outline"


export default function LeadHeader() {
  return (
    <div className="flex justify-between shadow-xl rounded p-1 font-sans text-sm">
      <div className="flex w-1/3">
        <p className="">My open leads</p><ChevronDownIcon class="h-4 w-4 mt-1 text-gray-500 mt-1" />
      </div>
      <div className="flex justify-between w-2/3">
        <button className="flex">
          <PresentationChartLineIcon className="h-4 w-4 mt-1 mr-1 text-gray-500" />
          <p>Show chart</p>
        </button>
        <button className="flex">
          <ListBulletIcon className="h-4 w-4 mt-1 mr-1 text-gray-500" />
          <p>Focused view</p>
        </button>
        <button className="flex">
          <PlusIcon className="h-4 w-4 mt-1 mr-1 text-gray-500" />
          <p>New</p>
        </button>
        <button className="flex">
          <ArrowPathIcon className="h-4 w-4 mt-1 mr-1 text-gray-500" />
          <p>Refresh</p>
        </button>
        <button className="flex">
          <UserGroupIcon className="h-4 w-4 mt-1 mr-1 text-gray-500" />
          <p>Collaborate</p>  
        </button>
        <button className="flex">
          <TrashIcon className="h-4 w-4 mt-1 mr-1 text-gray-500" />
          <p>Delete</p>
        </button>
        <div className="flex">
          <p>|</p>
          <ChevronDownIcon className="h-4 w-4 mt-1 mr-1 text-gray-500" />
          <EllipsisVerticalIcon className="h-4 w-4 mt-1 mr-1 text-gray-500" />
        </div>
        <button className="flex border-solid border rounded py-1 px-2 border-gray-300">
          <ChartPieIcon className="h-4 w-4 mt-1 mr-1 text-gray-500" /> Smart data
        </button>
        <button className="flex border-solid border rounded py-1 px-2 border-gray-300">
          <Bars3BottomLeftIcon className="h-4 w-4 mt-1 mr-1 text-gray-500" /> Edit filters
        </button>
        <button className="flex border-solid border rounded py-1 px-2 border-gray-300">
          <PencilSquareIcon className="h-4 w-4 mt-1 mr-1 text-gray-500" /> Edit columns
        </button>
        <div className="bg-blue-700 rounded p-1">

          <button className="border-r border-white-500">
            <ArrowTopRightOnSquareIcon className="h-4 w-4 mt-1 mr-1 text-white" />
            
          </button>
          <button className="">

            <ChevronDownIcon className="h-4 w-4 mt-1 mr-1 text-white" />
          </button> 
        </div>

        {/* <div className="flex">
        </div> */}
      </div>
    </div>
  );
}
