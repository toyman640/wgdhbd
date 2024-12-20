import {
  PresentationChartLineIcon,
  ListBulletIcon,
  PlusIcon,
  TrashIcon,
  ChevronDownIcon,
  EllipsisVerticalIcon,
  Bars3BottomLeftIcon,
  PencilSquareIcon,
  ArrowTopRightOnSquareIcon,
  ArrowPathIcon,
  UserGroupIcon,
  ChartPieIcon,
} from "@heroicons/react/24/outline";

export default function LeadHeader() {
  return (
    <div className="flex flex-col lg:flex-row lg:justify-between shadow-xl rounded p-3 font-sans text-sm">
      {/* Left Section */}
      <div className="flex items-center mb-3 lg:mb-0">
        <p className="mr-2">My open leads</p>
        <ChevronDownIcon className="h-4 w-4 text-gray-500" />
      </div>

      {/* Right Section */}
      <div className="flex flex-wrap lg:flex-nowrap items-center justify-start lg:justify-end gap-2 overflow-x-auto">
        <button className="flex items-center whitespace-nowrap">
          <PresentationChartLineIcon className="h-4 w-4 mr-1 text-gray-500" />
          <p>Show chart</p>
        </button>
        <button className="flex items-center whitespace-nowrap">
          <ListBulletIcon className="h-4 w-4 mr-1 text-gray-500" />
          <p>Focused view</p>
        </button>
        <button className="flex items-center whitespace-nowrap">
          <PlusIcon className="h-4 w-4 mr-1 text-gray-500" />
          <p>New</p>
        </button>
        <button className="flex items-center whitespace-nowrap">
          <ArrowPathIcon className="h-4 w-4 mr-1 text-gray-500" />
          <p>Refresh</p>
        </button>
        <button className="flex items-center whitespace-nowrap">
          <UserGroupIcon className="h-4 w-4 mr-1 text-gray-500" />
          <p>Collaborate</p>
        </button>
        <button className="flex items-center whitespace-nowrap">
          <TrashIcon className="h-4 w-4 mr-1 text-gray-500" />
          <p>Delete</p>
        </button>
        <div className="flex items-center whitespace-nowrap">
          <p className="mr-2">|</p>
          <ChevronDownIcon className="h-4 w-4 mr-2 text-gray-500" />
          <EllipsisVerticalIcon className="h-4 w-4 text-gray-500" />
        </div>
        <button className="flex items-center whitespace-nowrap border border-gray-300 rounded py-1 px-2">
          <ChartPieIcon className="h-4 w-4 mr-1 text-gray-500" />
          Smart data
        </button>
        <button className="flex items-center whitespace-nowrap border border-gray-300 rounded py-1 px-2">
          <Bars3BottomLeftIcon className="h-4 w-4 mr-1 text-gray-500" />
          Edit filters
        </button>
        <button className="flex items-center whitespace-nowrap border border-gray-300 rounded py-1 px-2">
          <PencilSquareIcon className="h-4 w-4 mr-1 text-gray-500" />
          Edit columns
        </button>
        <div className="flex bg-blue-700 rounded p-1 items-center">
          <button className="border-r border-white-500 pr-2">
            <ArrowTopRightOnSquareIcon className="h-4 w-4 text-white" />
          </button>
          <button className="pl-2">
            <ChevronDownIcon className="h-4 w-4 text-white" />
          </button>
        </div>
      </div>
    </div>
  );
}
