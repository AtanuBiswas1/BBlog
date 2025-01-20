import React from "react";
import appwriteService from "../appwrite/config";
import { Link } from "react-router-dom";

function PostCard({ $id, title, featuredImage }) {
  return (
    <Link to={`/post/${$id}`} className="w-full">
      <div className="w-full bg-yellow-300 rounded-xl p-4 flex flex-col h-[270px]">
        {/* Image Container */}
        <div className="w-full h-[200px] mb-4 overflow-hidden rounded-lg">
          <img
            src={appwriteService.getFilePreview(featuredImage)}
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>
        {/* Content */}
        <h2 className="text-xl font-bold text-gray-800 mb-2 truncate">
          {title}
        </h2>
      </div>
    </Link>
  );
}

export default PostCard;
