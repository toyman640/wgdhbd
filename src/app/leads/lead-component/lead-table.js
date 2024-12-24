import { useState } from "react";
import LeadModal from "./lead.modal";
import { CheckBadgeIcon, StarIcon } from "@heroicons/react/24/outline";

export default function LeadTable() {
  const leads = [
    {
      name: "John Doe",
      topic: "Expanding business",
      status: "New",
      createdOn: "4/02/2024 12:00 PM",
    },
    {
      name: "Jane Smith",
      topic: "Product inquiry",
      status: "In Progress",
      createdOn: "5/02/2024 10:30 AM",
    },
    {
      name: "Alice Johnson",
      topic: "Partnership opportunity",
      status: "Closed",
      createdOn: "6/02/2024 2:00 PM",
    },
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedLead, setSelectedLead] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  const handleRowClick = (lead) => {
    setSelectedLead(lead);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedLead(null);
  };

  // Filter leads based on search query
  const filteredLeads = leads.filter(
    (lead) =>
      lead.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      lead.topic.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="mt-5 pb-5 ">
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search by name or topic..."
          className="w-full lg:w-1/4 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          style={{
            border: "1px solid transparent",
            borderRadius: "0.375rem",
            backgroundImage:
              "linear-gradient(white, white), linear-gradient(to right, #3b82f6, #4f46e5)",
            backgroundOrigin: "border-box",
            backgroundClip: "padding-box, border-box",
          }}
        />
      </div>

      {/* Table */}
      <div className="">
        <table className="w-full table-auto">
          <thead>
            <tr className="border-b-2 text-start">
              <th className="text-start">Name</th>
              <th className="text-start">Topic</th>
              <th className="text-start">Status reason</th>
              <th className="text-start">Created on</th>
            </tr>
          </thead>
          <tbody>
            {filteredLeads.length > 0 ? (
              filteredLeads.map((lead, index) => (
                <tr
                  key={index}
                  className="border-b-2 relative group hover:bg-gray-100 cursor-pointer"
                  onClick={() => handleRowClick(lead)}
                >
                  <td className="text-sky-400 py-2">{lead.name}</td>
                  <td className="py-2">{lead.topic}</td>
                  <td className="py-2">{lead.status}</td>
                  <td className="py-2">{lead.createdOn}</td>
                  <div className="hidden group-hover:flex gap-2 absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-full p-3 bg-gray-100 shadow-md border border-gray-200 rounded-md z-[9999]">
                    <div className="flex  bg-white shadow-md rounded-lg p-3 w-full sm:w-[48%] md:w-[32%] lg:w-[50%]">
                      <StarIcon className="h-10 w-10 text-amber-500 mr-2" />
                      <div>
                        <p className="text-sm sm:text-base">Potential deal value</p>
                        <p className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 font-extrabold text-xs sm:text-sm">
                          $1m
                        </p>
                      </div>
                    </div>
                    <div className="flex bg-white shadow-md rounded-lg p-3 w-full sm:w-[48%] md:w-[32%] lg:w-[50%]">
                      <CheckBadgeIcon className="h-10 w-10 text-blue-500 mr-2" />
                      <div>
                        <p className="text-sm sm:text-base">Decision maker</p>
                        <p className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 font-extrabold text-xs sm:text-sm">
                          Yes
                        </p>
                      </div>
                    </div>
                  </div>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="text-center py-4 text-gray-500">
                  No leads found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Modal Component */}
      <LeadModal isOpen={isModalOpen} onClose={closeModal} lead={selectedLead} />
    </div>

  );
}
