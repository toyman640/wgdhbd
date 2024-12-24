import { useState } from "react";
import LeadModal from "./lead.modal";

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
    {
      name: "Alice Johnson",
      topic: "Partnership opportunity",
      status: "Closed",
      createdOn: "6/02/2024 2:00 PM",
    },
    {
      name: "Alice Johnson",
      topic: "Partnership opportunity",
      status: "Closed",
      createdOn: "6/02/2024 2:00 PM",
    },
    {
      name: "Alice Johnson",
      topic: "Partnership opportunity",
      status: "Closed",
      createdOn: "6/02/2024 2:00 PM",
    },
    {
      name: "Alice Johnson",
      topic: "Partnership opportunity",
      status: "Closed",
      createdOn: "6/02/2024 2:00 PM",
    },
    {
      name: "Alice Johnson",
      topic: "Partnership opportunity",
      status: "Closed",
      createdOn: "6/02/2024 2:00 PM",
    },
    {
      name: "Alice Johnson",
      topic: "Partnership opportunity",
      status: "Closed",
      createdOn: "6/02/2024 2:00 PM",
    },
    {
      name: "Alice Johnson",
      topic: "Partnership opportunity",
      status: "Closed",
      createdOn: "6/02/2024 2:00 PM",
    },
    {
      name: "Alice Johnson",
      topic: "Partnership opportunity",
      status: "Closed",
      createdOn: "6/02/2024 2:00 PM",
    },
    {
      name: "Alice Johnson",
      topic: "Partnership opportunity",
      status: "Closed",
      createdOn: "6/02/2024 2:00 PM",
    },
    {
      name: "Alice Johnson",
      topic: "Partnership opportunity",
      status: "Closed",
      createdOn: "6/02/2024 2:00 PM",
    },
    {
      name: "Alice Johnson",
      topic: "Partnership opportunity",
      status: "Closed",
      createdOn: "6/02/2024 2:00 PM",
    },
    {
      name: "Alice Johnson",
      topic: "Partnership opportunity",
      status: "Closed",
      createdOn: "6/02/2024 2:00 PM",
    },
    {
      name: "Alice Johnson",
      topic: "Partnership opportunity",
      status: "Closed",
      createdOn: "6/02/2024 2:00 PM",
    },
    {
      name: "Alice Johnson",
      topic: "Partnership opportunity",
      status: "Closed",
      createdOn: "6/02/2024 2:00 PM",
    },
    {
      name: "Alice Johnson",
      topic: "Partnership opportunity",
      status: "Closed",
      createdOn: "6/02/2024 2:00 PM",
    },
    {
      name: "Alice Johnson",
      topic: "Partnership opportunity",
      status: "Closed",
      createdOn: "6/02/2024 2:00 PM",
    },
    {
      name: "Alice Johnson",
      topic: "Partnership opportunity",
      status: "Closed",
      createdOn: "6/02/2024 2:00 PM",
    },
    {
      name: "Alice Johnson",
      topic: "Partnership opportunity",
      status: "Closed",
      createdOn: "6/02/2024 2:00 PM",
    },
    {
      name: "Alice Johnson",
      topic: "Partnership opportunity",
      status: "Closed",
      createdOn: "6/02/2024 2:00 PM",
    },
    {
      name: "Alice Johnson",
      topic: "Partnership opportunity",
      status: "Closed",
      createdOn: "6/02/2024 2:00 AM",
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
    // <div className="mt-5">
    //   <div className="mb-4">
    //     <input
    //       type="text"
    //       placeholder="Search by name or topic..."
    //       className="w-1/4 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 rounded-md"
    //       value={searchQuery}
    //       onChange={(e) => setSearchQuery(e.target.value)}
    //       style={{
    //         border: "1px solid transparent",
    //         borderRadius: "0.375rem",
    //         backgroundImage: "linear-gradient(white, white), linear-gradient(to right, #3b82f6, #4f46e5)",
    //         backgroundOrigin: "border-box",
    //         backgroundClip: "padding-box, border-box",
    //       }}
    //     />
    //   </div>

    //   {/* Table */}
    //   <table className="w-full table-auto">
    //     <thead>
    //       <tr className="border-b-2 text-start">
    //         <th className="text-start">Name</th>
    //         <th className="text-start">Topic</th>
    //         <th className="text-start">Status reason</th>
    //         <th className="text-start">Created on</th>
    //       </tr>
    //     </thead>
    //     <tbody>
    //       {filteredLeads.length > 0 ? (
    //         filteredLeads.map((lead, index) => (
    //           <tr
    //             key={index}
    //             className="border-b-2 relative group hover:bg-gray-100 cursor-pointer"
    //             onClick={() => handleRowClick(lead)}
    //           >
    //             <td className="text-sky-400 py-2">{lead.name}</td>
    //             <td className="py-2">{lead.topic}</td>
    //             <td className="py-2">{lead.status}</td>
    //             <td className="py-2">{lead.createdOn}</td>
    //             <div className="hidden group-hover:block absolute top-full left-0 mt-2 p-3 bg-white shadow-md border border-gray-200 rounded-md z-10">
    //               <p className="text-sm font-bold">{lead.name}</p>
    //               <p className="text-sm">Topic: {lead.topic}</p>
    //               <p className="text-sm">Status: {lead.status}</p>
    //               <p className="text-sm">Created on: {lead.createdOn}</p>
    //             </div>
    //           </tr>
    //         ))
    //       ) : (
    //         <tr>
    //           <td colSpan="4" className="text-center py-4 text-gray-500">
    //             No leads found.
    //           </td>
    //         </tr>
    //       )}
    //     </tbody>
    //   </table>

    //   {/* Modal Component */}
    //   <LeadModal isOpen={isModalOpen} onClose={closeModal} lead={selectedLead} />
    // </div>
    <div className="mt-5">
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
      <div className="overflow-x-auto">
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
                  <div className="hidden group-hover:block absolute top-full left-0 mt-2 p-3 bg-white shadow-md border border-gray-200 rounded-md z-10">
                    <p className="text-sm font-bold">{lead.name}</p>
                    <p className="text-sm">Topic: {lead.topic}</p>
                    <p className="text-sm">Status: {lead.status}</p>
                    <p className="text-sm">Created on: {lead.createdOn}</p>
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
