export default function LeadCard() {
  return (
    <div className="flex justify-between shadow-xl mt-5">
      <h2 className="basis-1/2">Hi Mona, 68% of goal achieved and rest can be achieved by focusing on 20 top leads</h2>
      <div className="basis-1/2 grid grid-cols-12 rounded-md">
        <div className="bg-green-500 col-span-2"></div>
        <div className="bg-blue-400 col-span-1"></div>
        <div className="bg-pink-400 col-span-1"></div>
        <div className="bg-yellow-400 col-span-1"></div>
        <div className="col-span-7">05</div>
      </div>

    </div>
  );
}
