import React from "react";
import "./index.css";

function App() {
  return (
    <div className="tw-bg-gray-100 tw-min-h-screen tw-font-sans tw-flex">
      {/* Sidebar */}
      <div className="tw-bg-white tw-w-64 tw-h-screen tw-shadow-md">
        <div className="tw-p-4">
          <h2 className="tw-text-lg tw-font-semibold tw-text-center">Grepsr</h2>
        </div>
        <nav className="tw-mt-4">
          <ul>
            <li className="tw-p-4 tw-text-blue-600 hover:tw-bg-gray-100">
              Datasets
            </li>
            <li className="tw-p-4 tw-text-blue-600 hover:tw-bg-gray-100">
              Workflows
            </li>
            <li className="tw-p-4 tw-text-blue-600 hover:tw-bg-gray-100">
              Credit usage
            </li>
          </ul>
        </nav>
        <div className="tw-absolute tw-bottom-0 tw-w-full">
          <button className="tw-bg-blue-600 tw-text-white tw-w-full tw-py-2">
            Contact Support
          </button>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="tw-flex-1 tw-p-4">
        <div className="tw-bg-white tw-shadow-md tw-rounded-lg tw-overflow-hidden">
          <div className="tw-p-4 tw-border-b tw-border-gray-200 tw-flex tw-justify-between tw-items-center">
            <h2 className="tw-text-lg tw-font-semibold">Amazon product price</h2>
            <div className="tw-flex tw-items-center">
              <button className="tw-text-blue-600 tw-mr-4">Operations</button>
              <button className="tw-text-blue-600">Add filters</button>
            </div>
          </div>
          <table className="tw-w-full tw-text-sm tw-text-left tw-text-gray-500">
            <thead className="tw-text-xs tw-uppercase tw-bg-gray-50 tw-text-gray-700">
              <tr>
                <th className="tw-px-6 tw-py-3">Product name</th>
                <th className="tw-px-6 tw-py-3">Price</th>
                <th className="tw-px-6 tw-py-3">Rating</th>
                <th className="tw-px-6 tw-py-3">Brand</th>
                <th className="tw-px-6 tw-py-3">Availability</th>
              </tr>
            </thead>
            <tbody>
              {[
                { name: "Gerber Organic 2nd Foods", price: "$6.84", rating: "4.6", brand: "Happy kids", availability: "Yes" },
                { name: "Serenity Kids 6+ Months Baby Food...", price: "$6.55", rating: "4.9", brand: "Serenity", availability: "Yes" },
                { name: "Gerber Organic 2nd Foods Pouches...", price: "$6.84", rating: "4.6", brand: "Happy kids", availability: "Yes" },
                { name: "Serenity Kids 6+ Months Baby Food...", price: "$6.55", rating: "4.9", brand: "Serenity", availability: "Yes" },
                { name: "Gerber Organic 2nd Foods Pouches...", price: "$6.84", rating: "4.6", brand: "Happy kids", availability: "Yes" },
                { name: "Serenity Kids 6+ Months Baby Food...", price: "$6.55", rating: "4.9", brand: "Serenity", availability: "Yes" },
              ].map((product, index) => (
                <tr key={index} className="tw-bg-white tw-border-b hover:tw-bg-gray-50">
                  <td className="tw-px-6 tw-py-4 tw-whitespace-nowrap">{product.name}</td>
                  <td className="tw-px-6 tw-py-4">{product.price}</td>
                  <td className="tw-px-6 tw-py-4">{product.rating}</td>
                  <td className="tw-px-6 tw-py-4">{product.brand}</td>
                  <td className="tw-px-6 tw-py-4">{product.availability}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default App;
