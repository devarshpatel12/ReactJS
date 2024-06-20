import { CDN_URL } from "../utils/constants";

const RestaurantCard = ({ resData }) => {
    const { id, name, cloudinaryImageId, cuisines, avgRating, costForTwo, sla } = resData?.info || {};

    return (
        <div className="res-card bg-white rounded-md shadow-md p-4">
            {cloudinaryImageId && (
                <img
                    className="res-logo w-full rounded-t-md"
                    src={`${CDN_URL}${cloudinaryImageId}`}
                    alt="Restaurant Logo"
                />
            )}
            <h3 className="text-lg font-semibold mt-2">{name}</h3>
            <h4 className="text-sm text-gray-600">{cuisines && cuisines.join(', ')}</h4>
            <div className="flex items-center mt-2">
                <span className="text-yellow-400">{avgRating} stars</span>
                <span className="text-gray-600 ml-2">{costForTwo} for two</span>
            </div>
            <div className="mt-2">
                <span className="text-gray-600">{sla?.slaString}</span>
            </div>
        </div>
    );
};

export default RestaurantCard;

