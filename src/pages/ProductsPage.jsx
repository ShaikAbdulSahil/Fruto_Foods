import React, { useState } from "react";
function ProductsPage({ product }) {
  
  const { title, title_Image, content, benefits, applications } = product;

  
  const [activeTab, setActiveTab] = useState("benefits");

 
  const getTabClassName = (tabName) => {
    return `px-6 py-2 text-lg font-semibold rounded-md transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${
      activeTab === tabName
        ? "bg-blue-600 text-white shadow-lg"
        : "bg-gray-200 text-gray-700 hover:bg-gray-300"
    }`;
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 ">
        {/* Top Section: Title, Image, and Content */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            {title}
          </h1>
          <span className="block w-32 h-1 bg-red-500 mx-auto"></span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-12">
          <img
            src={title_Image}
            alt={title}
            className="rounded-lg shadow-xl w-full h-auto object-cover aspect-video"
          />
          <p className="text-gray-600 leading-relaxed text-justify text-lg">
            {content}
          </p>
        </div>

        {/* Divider */}
        <div className="border-t-2 border-gray-200 mb-12"></div>

        {/* Tab Buttons: Benefits & Applications */}
        <div className="flex justify-center items-center gap-4 mb-8">
          <button
            onClick={() => setActiveTab("benefits")}
            className={getTabClassName("benefits")}
          >
            Benefits
          </button>
          <button
            onClick={() => setActiveTab("applications")}
            className={getTabClassName("applications")}
          >
            Applications
          </button>
        </div>

        {/* Content Area: Displays content based on the active tab */}
        <div className="bg-white p-8 rounded-lg shadow-md min-h-[300px]">
          {/* Conditional rendering for Benefits */}
          {activeTab === "benefits" && (
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                Medical Benefits of {title}
              </h3>
              <ul className="space-y-4 text-gray-600">
                {benefits.map((item, index) => {
                  const benefitTitle = Object.values(item)[0];
                  const explanation = item.explanation;
                  return (
                    <li key={index} className="flex items-start">
                      <span className="text-red-500 text-xl mr-3 mt-1">❖</span>
                      <p>
                        <b className="text-gray-800">{benefitTitle}</b> – {explanation}
                      </p>
                    </li>
                  );
                })}
              </ul>
            </div>
          )}

          {/* Conditional rendering for Applications */}
          {activeTab === "applications" && (
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                Common Applications of {title}
              </h3>
              <ul className="space-y-4 text-gray-600">
                 {applications && applications.length > 0 ? (
                    applications.map((item, index) => {
                      const appTitle = Object.values(item)[0];
                      const explanation = item.explanation;
                      return (
                        <li key={index} className="flex items-start">
                          <span className="text-blue-500 text-xl mr-3 mt-1">✓</span>
                           <p>
                            <b className="text-gray-800">{appTitle}</b> – {explanation}
                          </p>
                        </li>
                      );
                    })
                 ) : (
                    <p className="text-gray-500">Applications information is coming soon...</p>
                 )}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
export default ProductsPage;