import "./globals.css";

export default function Home() {
  return (
    <div className="text-center">
      <h3 className="font-bold text-lg">This page serve as a guide to the app</h3>
      <p>1. The functional menu items are:</p>
      <ul>
        <li>Home</li>
        <li>Leads</li>
        <li>Agents Skills Pop up</li>
      </ul>
      <p>
        2. Functionalities are
      </p>
      <ul>
        <li>Functional Search bar</li>
        <li>Collapsible Card(Hi mona ...)</li>
        <li>Modal when table data is clicked</li>
        <li>Modal when user hover over table data </li>
      </ul>
    </div>
  );
}
