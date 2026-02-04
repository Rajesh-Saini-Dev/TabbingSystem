import { useState } from "react";

const tabsData = [
  {
    label: "Faq",
    content:
      "Here is some faq inquiries like.What is your return and exchange policy?",
  },
  {
    label: "Overview",
    content: "This is the overview tab content. It gives a quick summary.",
  },
  {
    label: "Features",
    content: "This tab lists all the features of the product or service.",
  },
  {
    label: "Pricing",
    content:
      "Here you can see pricing details and subscription plans.&pricing details of the any product",
  },
];

function Tabs() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="max-w-2xl mx-auto p-4 mt-32">
      <h2 className="text-4xl font-serif font-bold mb-6 text-center">
        Tab System
      </h2>
      {/* Tabs Header */}
      <div className="flex justify-evenly border-2 border-gray-200">
        {tabsData.map((tab, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={`px-2 py-2 font-bold transition
              ${
                activeTab === index
                  ? "border-b-4 border-blue-600 text-blue-600"
                  : "text-gray-500 hover:text-blue-600"
              }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
      {/* Tab Content */}
      <div className="mt-4 p-4 bg-gray-100 rounded-lg transition-all duration-300">
        <p className="text-gray-700">{tabsData[activeTab].content}</p>
      </div>
    </div>
  );
}
export default Tabs;
