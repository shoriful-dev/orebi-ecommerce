import React, { useState } from "react";
import { Link } from "react-router-dom";

const MyAccountPage = () => {
  const [activeTab, setActiveTab] = useState("account");
  const [accountDetails, setAccountDetails] = useState({
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "123-456-7890",
    address: "123 Main St, Anytown, USA",
    country: "USA",
    state: "New York",
    city: "New York City",
    zip: "10001",
  });
  const [isSaved, setIsSaved] = useState(false);
  const [settings, setSettings] = useState({
    notifications: true,
    newsletter: false,
    darkMode: false,
  });

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const handleAccountDetailsChange = (e) => {
    setAccountDetails({ ...accountDetails, [e.target.name]: e.target.value });
  };

  const handleSettingsChange = (e) => {
    setSettings({ ...settings, [e.target.name]: e.target.checked });
  };

  const handleSaveChanges = () => {
    setIsSaved(true);
    setTimeout(() => {
      setIsSaved(false);
    }, 2000);
  };

  return (
    <div className="max-w-4xl mx-auto p-4 md:p-6 lg:p-8">
      <div className="flex justify-center mb-4">
        <h1 className="text-3xl font-bold">My Account</h1>
      </div>
      <div className="flex flex-wrap justify-center mb-4">
        <button
          className={`text-lg font-bold p-2 md:p-4 ${
            activeTab === "account"
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-gray-500"
          }`}
          onClick={() => handleTabChange("account")}
        >
          Account
        </button>
        <button
          className={`text-lg font-bold p-2 md:p-4 ${
            activeTab === "orders"
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-gray-500"
          }`}
          onClick={() => handleTabChange("orders")}
        >
          Orders
        </button>
        <button
          className={`text-lg font-bold p-2 md:p-4 ${
            activeTab === "settings"
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-gray-500"
          }`}
          onClick={() => handleTabChange("settings")}
        >
          Settings
        </button>
      </div>
      {activeTab === "account" && (
        <div className="bg-white p-4 md:p-6 lg:p-8 shadow-md rounded-md">
          <h2 className="text-2xl font-bold mb-4">Account Details</h2>
          <form>
            <div className="flex flex-wrap justify-between mb-4">
              <div className="w-full md:w-1/2 lg:w-1/3 mb-4 md:mb-0">
                <label className="block text-lg font-bold mb-2">Name:</label>
                <input
                  type="text"
                  name="name"
                  value={accountDetails.name}
                  onChange={handleAccountDetailsChange}
                  className="block w-full p-2 md:p-4 border border-gray-200 rounded-md"
                />
              </div>
              <div className="w-full md:w-1/2 lg:w-1/3 mb-4 md:mb-0">
                <label className="block text-lg font-bold mb-2">Email:</label>
                <input
                  type="email"
                  name="email"
                  value={accountDetails.email}
                  onChange={handleAccountDetailsChange}
                  className="block w-full p-2 md:p-4 border border-gray-200 rounded-md"
                />
              </div>
              <div className="w-full md:w-1/2 lg:w-1/3 mb-4 md:mb-0">
                <label className="block text-lg font-bold mb-2">Phone:</label>
                <input
                  type="text"
                  name="phone"
                  value={accountDetails.phone}
                  onChange={handleAccountDetailsChange}
                  className="block w-full p-2 md:p-4 border border-gray-200 rounded-md"
                />
              </div>
            </div>
            <div className="flex flex-wrap justify-between mb-4">
              <div className="w-full md:w-1/2 lg:w-1/3 mb-4 md:mb-0">
                <label className="block text-lg font-bold mb-2">Address:</label>
                <input
                  type="text"
                  name="address"
                  value={accountDetails.address}
                  onChange={handleAccountDetailsChange}
                  className="block w-full p-2 md:p-4 border border-gray-200 rounded-md"
                />
              </div>
              <div className="w-full md:w-1/2 lg:w-1/3 mb-4 md:mb-0">
                <label className="block text-lg font-bold mb-2">Country:</label>
                <input
                  type="text"
                  name="country"
                  value={accountDetails.country}
                  onChange={handleAccountDetailsChange}
                  className="block w-full p-2 md:p-4 border border-gray-200 rounded-md"
                />
              </div>
              <div className="w-full md:w-1/2 lg:w-1/3 mb-4 md:mb-0">
                <label className="block text-lg font-bold mb-2">State:</label>
                <input
                  type="text"
                  name="state"
                  value={accountDetails.state}
                  onChange={handleAccountDetailsChange}
                  className="block w-full p-2 md:p-4 border border-gray-200 rounded-md"
                />
              </div>
            </div>
            <div className="flex flex-wrap justify-between mb-4">
              <div className="w-full md:w-1/2 lg:w-1/3 mb-4 md:mb-0">
                <label className="block text-lg font-bold mb-2">City:</label>
                <input
                  type="text"
                  name="city"
                  value={accountDetails.city}
                  onChange={handleAccountDetailsChange}
                  className="block w-full p-2 md:p-4 border border-gray-200 rounded-md"
                />
              </div>
              <div className="w-full md:w-1/2 lg:w-1/3 mb-4 md:mb-0">
                <label className="block text-lg font-bold mb-2">Zip:</label>
                <input
                  type="text"
                  name="zip"
                  value={accountDetails.zip}
                  onChange={handleAccountDetailsChange}
                  className="block w-full p-2 md:p-4 border border-gray-200 rounded-md"
                />
              </div>
            </div>
              <div className="flex justify-end mb-4">
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md"
                  onClick={handleSaveChanges}
                  >
                  Save Changes
                </button>
                {isSaved && (
                  <span className="ml-4 text-green-500 font-bold">
                    Changes saved!
                  </span>
                )}
              </div>
          </form>
        </div>
      )}
      {activeTab === "settings" && (
        <div className="bg-white p-4 md:p-6 lg:p-8 shadow-md rounded-md">
          <h2 className="text-2xl font-bold mb-4">Settings</h2>
          <form>
            <div className="flex flex-wrap justify-between mb-4">
              <div className="w-full md:w-1/2 lg:w-1/3 mb-4 md:mb-0">
                <label className="block text-lg font-bold mb-2">
                  Notifications:
                </label>
                <input
                  type="checkbox"
                  name="notifications"
                  checked={settings.notifications}
                  onChange={handleSettingsChange}
                  className="block w-full p-2 md:p-4"
                />
              </div>
              <div className="w-full md:w-1/2 lg:w-1/3 mb-4 md:mb-0">
                <label className="block text-lg font-bold mb-2">
                  Newsletter:
                </label>
                <input
                  type="checkbox"
                  name="newsletter"
                  checked={settings.newsletter}
                  onChange={handleSettingsChange}
                  className="block w-full p-2 md:p-4"
                />
              </div>
              <div className="w-full md:w-1/2 lg:w-1/3 mb-4 md:mb-0">
                <label className="block text-lg font-bold mb-2">
                  Dark Mode:
                </label>
                <input
                  type="checkbox"
                  name="darkMode"
                  checked={settings.darkMode}
                  onChange={handleSettingsChange}
                  className="block w-full p-2 md:p-4"
                />
              </div>
            </div>
            <Link to={"/"}>
              <div className="flex justify-end mb-4">
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md"
                  onClick={handleSaveChanges}
                >
                  Save Changes
                </button>
                {isSaved && (
                  <span className="ml-4 text-green-500 font-bold">
                    Changes saved!
                  </span>
                )}
              </div>
            </Link>
          </form>
        </div>
      )}
    </div>
  );
};

export default MyAccountPage;





