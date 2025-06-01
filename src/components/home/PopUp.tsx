import React from "react";
import amrown from "./amrown.png"
interface PopupProps {
    onClose: () => void;
}

const Popup: React.FC<PopupProps> = ({ onClose }) => {
    return (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 px-4">
            <div className="bg-white p-6 rounded-2xl shadow-2xl max-w-lg w-full text-center relative animate-fadeIn">
                <button
                    onClick={onClose}
                    className="absolute top-3 right-4 text-2xl font-bold text-gray-500 hover:text-red-500"
                >
                    &times;
                </button>

                {/* Logo (replace src with Amrown logo path) */}
                {/* <div className="mb-4">
                    <img
                        src={amrown}
                        alt="Amrown Logo"
                        className="mx-auto h-16 w-auto"
                    />
                </div> */}

                <h2 className="text-2xl font-extrabold text-blue-700 mb-2">
                    🚨 Global Hiring Alert!
                </h2>

                <h3 className="text-lg font-semibold text-gray-800 mb-3">
                    Amrown Groups is Hiring Worldwide 🌍
                </h3>

                <p className="text-gray-700">
                    Hello folks! We are thrilled to announce that we're currently hiring
                    for <a href="#" className="text-blue-600 font-medium hover:underline">Amrown</a> Groups and expanding our global team of
                    <span className="text-red-600 font-bold"> 500,000+ employees</span>.
                </p>

                <p className="mt-3 text-sm text-gray-500 italic">
                    Be part of something big. Opportunities across multiple roles and locations.
                </p>

                <button
                    onClick={onClose}
                    className="mt-6 bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition"
                >
                    Got it!
                </button>
            </div>
        </div>
    );
};

export default Popup;
