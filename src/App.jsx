import React from 'react';
import './index.css';
import './App.css';

const products = [
  {
    name: 'Gerber Organic 2nd Foods',
    price: '$6.84',
    rating: '4.6',
    brand: 'Happy kids',
    availability: 'Yes',
  },
  {
    name: 'Serenity Kids 6+ Months Baby Food...',
    price: '$6.55',
    rating: '4.9',
    brand: 'Serenity',
    availability: 'Yes',
  },
  {
    name: 'Gerber Organic 2nd Foods Pouches...',
    price: '$6.84',
    rating: '4.6',
    brand: 'Happy kids',
    availability: 'Yes',
  },
  {
    name: 'Serenity Kids 6+ Months Baby Food...',
    price: '$6.55',
    rating: '4.9',
    brand: 'Serenity',
    availability: 'Yes',
  },
  {
    name: 'Gerber Organic 2nd Foods Pouches...',
    price: '$6.84',
    rating: '4.6',
    brand: 'Happy kids',
    availability: 'Yes',
  },
  {
    name: 'Serenity Kids 6+ Months Baby Food...',
    price: '$6.55',
    rating: '4.9',
    brand: 'Serenity',
    availability: 'Yes',
  },
];
function App() {
  return (
    <div className="tw-bg-gray-100 tw-min-h-screen tw-font-sans tw-flex">
      {/* Sidebar */}
      <SideBar />
      {/* Main Content */}
      <MainContent />
    </div>
  );
}

export default App;

const SideBar = () => {
  return (
    <div className="tw-bg-white tw-w-64 tw-h-screen tw-shadow-md tw-flex tw-flex-col">
      <div className="logoLayout">
        <h2 className="logoClass tw-ml-3">Grepsr</h2>
      </div>
      <nav className="tw-mt-4 tw-flex-grow">
        <ul>
          <li className="tw-flex tw-items-center tw-p-4 tw-text-blue-600 hover:tw-bg-[#D6E7FF] tw-cursor-pointer">
            <svg
              width="14"
              height="16"
              viewBox="0 0 14 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="tw-mr-3"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M6.24185 0H7.75815C9.07774 0 10.1231 0 10.9408 0.11386C11.7823 0.231442 12.4636 0.478512 13.0013 1.03516C13.5384 1.59256 13.7767 2.29879 13.8902 3.17098C14 4.01935 14 5.10214 14 6.46995V9.53005C14 10.8979 14 11.9814 13.8902 12.829C13.7767 13.7012 13.5384 14.4074 13.0013 14.9648C12.4636 15.5215 11.7823 15.7686 10.9408 15.8861C10.1224 16 9.07774 16 7.75815 16H6.24185C4.92226 16 3.87692 16 3.05918 15.8861C2.21774 15.7686 1.53641 15.5215 0.998667 14.9648C0.461641 14.4074 0.223282 13.7012 0.109846 12.829C8.55862e-08 11.9807 0 10.8979 0 9.53005V6.46995C0 5.10214 8.55862e-08 4.0186 0.109846 3.17098C0.223282 2.29879 0.461641 1.59256 0.998667 1.03516C1.53641 0.478512 2.21774 0.231442 3.05918 0.11386C3.87764 0 4.92226 0 6.24185 0ZM3.20205 1.22047C2.47979 1.32093 2.06338 1.50995 1.75897 1.82474C1.456 2.13953 1.27364 2.57116 1.17672 3.31981C1.07764 4.08484 1.07621 5.09246 1.07621 6.51163V9.48837C1.07621 10.9075 1.07764 11.9159 1.17672 12.6809C1.27364 13.4288 1.456 13.8605 1.75969 14.1753C2.06338 14.49 2.47979 14.6791 3.20205 14.7795C3.9401 14.8822 4.91221 14.8837 6.28133 14.8837H7.71723C9.08636 14.8837 10.0592 14.8822 10.7972 14.7795C11.5188 14.6791 11.9352 14.49 12.2389 14.1753C12.5426 13.8605 12.7249 13.4288 12.8218 12.6802C12.9209 11.9159 12.9224 10.9075 12.9224 9.48837V6.51163C12.9224 5.09246 12.9209 4.08484 12.8218 3.31907C12.7249 2.57116 12.5426 2.13953 12.2389 1.82474C11.9352 1.50995 11.5188 1.32093 10.7965 1.22047C10.0592 1.11777 9.08636 1.11628 7.71723 1.11628H6.28133C4.91221 1.11628 3.94082 1.11777 3.20205 1.22047ZM3.58974 6.51163C3.58974 6.3636 3.64647 6.22164 3.74746 6.11696C3.84844 6.01229 3.9854 5.95349 4.12821 5.95349H9.87179C10.0146 5.95349 10.1516 6.01229 10.2525 6.11696C10.3535 6.22164 10.4103 6.3636 10.4103 6.51163C10.4103 6.65966 10.3535 6.80162 10.2525 6.90629C10.1516 7.01096 10.0146 7.06977 9.87179 7.06977H4.12821C3.9854 7.06977 3.84844 7.01096 3.74746 6.90629C3.64647 6.80162 3.58974 6.65966 3.58974 6.51163ZM3.58974 9.48837C3.58974 9.34034 3.64647 9.19838 3.74746 9.09371C3.84844 8.98904 3.9854 8.93023 4.12821 8.93023H7.71795C7.86076 8.93023 7.99772 8.98904 8.0987 9.09371C8.19968 9.19838 8.25641 9.34034 8.25641 9.48837C8.25641 9.6364 8.19968 9.77836 8.0987 9.88304C7.99772 9.98771 7.86076 10.0465 7.71795 10.0465H4.12821C3.9854 10.0465 3.84844 9.98771 3.74746 9.88304C3.64647 9.77836 3.58974 9.6364 3.58974 9.48837Z"
                fill="#1276FF"
              />
            </svg>
            Datasets
          </li>
          <li className="tw-flex tw-items-center tw-p-4 tw-text-blue-600 hover:tw-bg-[#D6E7FF] tw-cursor-pointer">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="tw-mr-3"
            >
              <path
                d="M14.2222 1H1.77778C1.34822 1 1 1.34822 1 1.77778V5.66667C1 6.09622 1.34822 6.44444 1.77778 6.44444H14.2222C14.6518 6.44444 15 6.09622 15 5.66667V1.77778C15 1.34822 14.6518 1 14.2222 1Z"
                stroke="#1B2D4F"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M7.22222 9.55566H1.77778C1.34822 9.55566 1 9.90389 1 10.3334V14.2223C1 14.6518 1.34822 15 1.77778 15H7.22222C7.65178 15 8 14.6518 8 14.2223V10.3334C8 9.90389 7.65178 9.55566 7.22222 9.55566Z"
                stroke="#1B2D4F"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M14.2222 9.55566H10.8889C10.4593 9.55566 10.1111 9.90389 10.1111 10.3334V14.2223C10.1111 14.6518 10.4593 15 10.8889 15H14.2222C14.6518 15 15 14.6518 15 14.2223V10.3334C15 9.90389 14.6518 9.55566 14.2222 9.55566Z"
                stroke="#1B2D4F"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Workflows
          </li>
          <li className="tw-flex tw-items-center tw-p-4 tw-text-blue-600 hover:tw-bg-[#D6E7FF] tw-cursor-pointer">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="tw-mr-3"
            >
              <path
                d="M1 8.58316C1 8.58316 4.08333 5.49982 8 5.49982C11.9167 5.49982 15 8.58316 15 8.58316"
                stroke="#1B2D4F"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M8 15.0003C9.84098 15.0003 11.3333 13.507 11.3333 11.666C11.3333 9.82506 9.84098 8.33301 8 8.33301C6.15903 8.33301 4.66667 9.82506 4.66667 11.666C4.66667 13.507 6.15903 15.0003 8 15.0003Z"
                stroke="#1B2D4F"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Credit Usuage
          </li>
        </ul>
      </nav>
    </div>
  );
};

const MainContent = () => {
  return (
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
            {products.map((product, index) => (
              <tr
                key={index}
                className="tw-bg-white tw-border-b hover:tw-bg-gray-50"
              >
                <td className="tw-px-6 tw-py-4 tw-whitespace-nowrap">
                  {product.name}
                </td>
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
  );
};
