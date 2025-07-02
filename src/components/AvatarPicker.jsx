import React from "react";
import avatar1 from "../assets/avatars/avatar1.jpeg"
import avatar2 from "../assets/avatars/avatar2.jpeg";
import avatar3 from "../assets/avatars/avatar3.jpeg";
import avatar4 from "../assets/avatars/avatar4.jpeg";
import avatar5 from "../assets/avatars/avatar5.jpeg";
import avatar6 from "../assets/avatars/avatar6.jpeg";
import avatar7 from "../assets/avatars/avatar7.jpeg";
import avatar8 from "../assets/avatars/avatar8.jpeg";

const avatars = [
  { id: 1, img: avatar1 },
  { id: 2, img: avatar2 },
  { id: 3, img: avatar3 },
  { id: 4, img: avatar4 },
  { id: 5, img: avatar5 },
  { id: 6, img: avatar6 },
  { id: 7, img: avatar7 },
  { id: 8, img: avatar8 },
];

export default function AvatarPicker({ onSelect, onClose }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 z-50">
      <div className="bg-gray-900 p-6 rounded-2xl border-2 border-pink-400 modal-glow w-[70%] lg:max-w-sm">
        <h3 className="text-pink-300 text-lg mb-4 text-center">Pick your avatar</h3>

        {/* Close button */}
        <div className="text-right mb-4">
          <button
            onClick={onClose}
            className="text-sm text-pink-400 hover:text-pink-200 underline bg-inherit border-none"
          >
            Cancel
          </button>
        </div>

        {/* Avatar grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {avatars.map((avatar) => (
            <div
              key={avatar.id}
              onClick={() => onSelect(avatar)}
              className="cursor-pointer border-2 border-pink-300 rounded-full p-1 hover:scale-110 transition"
            >
              <img
                src={avatar.img}
                alt={`Avatar ${avatar.id}`}
                className="rounded-full lg:w-18 lg:h-18 h-20 w-20 object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}