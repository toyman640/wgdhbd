import LeadCard from "./lead-list"
import LeadHeader from "./lead-header"
import LeadTable from "./lead-table"

export default function LeadMain () {

  return (
    <div className="w-50">
      <LeadHeader />
      <LeadCard />
      <LeadTable />
    </div>
  )
}