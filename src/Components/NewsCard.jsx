
import { FaStar, FaEye, FaRegBookmark } from "react-icons/fa";
import { IoShareSocialOutline } from "react-icons/io5";

export default function NewsCard({ news }) {
  const { title, author, thumbnail_url, rating, total_view, details } = news;

  const formattedDate = new Date(author.published_date).toLocaleDateString(
    "en-US",
    {
      year: "numeric",
      month: "long",
      day: "numeric",
    }
  );

  return (
    <div className="card bg-base-100 shadow-md rounded-xl">
      {/* Header */}
      <div className="flex items-center gap-3 mb-3 bg-base-200 p-4 justify-between">
        <div className="flex items-center gap-4">
        <img
          src={author?.img}
          alt={author?.name}
          className="w-10 h-10 rounded-full object-cover"
        />
        <div>
          <p className="font-semibold">{author?.name}</p>
          <p className="text-sm text-gray-500">{formattedDate}</p>
        </div>
        </div>
        <div className="flex gap-3">
        <FaRegBookmark size={20}/>
        <IoShareSocialOutline size={20}/>
        </div>
      </div>
      <div className="p-4">
        {/* Title */}
        <h2 className="text-lg font-bold leading-snug mb-2">{title}</h2>

        {/* Thumbnail */}
        <figure className="mb-3">
          <img
            src={thumbnail_url}
            alt="News"
            className="w-full rounded-xl object-cover"
          />
        </figure>

        {/* Details (Shortened) */}
        <p className="text-sm text-gray-700 mb-2">
          {details.slice(0, 200)}...
          <span className="text-blue-600 font-medium cursor-pointer">
            {" "}
            Read More
          </span>
        </p>

        {/* Footer: Stars, Rating, Views */}
        <div className="flex items-center justify-between text-sm mt-2 pt-2 border-t">
          {/* Rating */}
          <div className="flex items-center gap-1 text-orange-400">
            {Array.from({ length: rating.number }, (_, i) => (
              <FaStar key={i} />
            ))}
            <span className="text-gray-700 font-semibold ml-1">
              {rating.number}
            </span>
          </div>

          {/* Views */}
          <div className="flex items-center gap-1 text-gray-600">
            <FaEye />
            <span>{total_view}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
