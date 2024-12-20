import { useState } from "react";
import LeadModal from "./lead.modal";

export default function LeadTable () {

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

  const handleRowClick = (lead) => {
    setSelectedLead(lead);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedLead(null);
  };

  return (
    <div className=" mt-5">
      <table className="w-full table-auto">
        <thead className="">
          <tr className="border-b-2 text-start">
            <th className="text-start">Name</th>
            <th className="text-start">Topic</th>
            <th className="text-start">Status reason</th>
            <th className="text-start">Created on</th>
          </tr>
        </thead>
        <tbody>
          {leads.map((lead, index) => (
            <tr key={index} className="border-b-2 relative group hover:bg-gray-100 cursor-pointer" onClick={() => handleRowClick(lead)}>
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
          ))}
        </tbody>
      </table>
      <LeadModal isOpen={isModalOpen} onClose={closeModal} lead={selectedLead} />
    </div>
  )
}