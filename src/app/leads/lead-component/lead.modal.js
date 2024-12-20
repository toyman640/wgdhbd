export default function LeadModal({ isOpen, onClose, lead }) {
  if (!isOpen || !lead) return null; // Do not render if modal is closed or no lead data

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-lg font-bold mb-4">Lead Information</h2>
        <p className="text-sm">
          <strong>Name:</strong> {lead.name}
        </p>
        <p className="text-sm">
          <strong>Topic:</strong> {lead.topic}
        </p>
        <p className="text-sm">
          <strong>Status:</strong> {lead.status}
        </p>
        <p className="text-sm">
          <strong>Created on:</strong> {lead.createdOn}
        </p>
        <button
          className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
}
