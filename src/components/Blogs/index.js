import "./styles.css";
import { v4 as uuidv4 } from "uuid"; //Unique id
import { format } from "date-fns"; // To convert the date formate Ex: June 7 2025

const restaurantBlogVideos = [
  {
    id: uuidv4(),
    title: "Behind the Scenes at a Fine Dining Kitchen",
    description:
      "An immersive look into the prep and choreography before dinner service.",
    videoUrl: "https://www.youtube.com/watch?v=<VIDEO_ID_1>",
    thumbnail: "https://img.youtube.com/vi/<VIDEO_ID_1>/maxresdefault.jpg",
    uploadedDate: "2025-08-01",
  },
  {
    id: uuidv4(),
    title: "Street Food Tour: Hidden Gems Around the City",
    description: "Exploring local street vendors and their signature dishes.",
    videoUrl: "https://www.youtube.com/watch?v=<VIDEO_ID_2>",
    thumbnail: "https://img.youtube.com/vi/<VIDEO_ID_2>/maxresdefault.jpg",
    uploadedDate: "2025-08-05",
  },
  {
    id: uuidv4(),
    title: "Restaurant Owner Shares Menu Planning Tips",
    description:
      "Insights from a restaurateur on creating seasonal, profitable menus.",
    videoUrl: "https://www.youtube.com/watch?v=<VIDEO_ID_3>",
    thumbnail: "https://img.youtube.com/vi/<VIDEO_ID_3>/maxresdefault.jpg",
    uploadedDate: "2025-07-28",
  },
  {
    id: uuidv4(),
    title: "How a Restaurant Shot Their Viral Food Video",
    description:
      "Behind-the-scenes of shooting captivating short-form restaurant content.",
    videoUrl: "https://www.youtube.com/watch?v=<VIDEO_ID_4>",
    thumbnail: "https://img.youtube.com/vi/<VIDEO_ID_4>/maxresdefault.jpg",
    uploadedDate: "2025-07-22",
  },
];

const Blogs = () => {
  const formatBlogDate = (date) => {
    return format(new Date(date), "MMMM d yyyy");
  };

  return (
    <div className="blogs-container">
      <h1 className="section-title">Recent Blog</h1>
      <ul className="blogs-card">
        {restaurantBlogVideos.map((blog) => (
          <li key={blog.id} className="blog-item">
            <div className="blog-thumbnail">
              <img src={blog.thumbnail} alt={blog.id} />
            </div>
            <div className="blog-details">
              <span className="blog-date">
                {formatBlogDate(blog.uploadedDate)}
              </span>
              <h2 className="blog-title">{blog.title}</h2>
              <p className="blog-description">{blog.description}</p>
              <button type="button" className="blog-btn">
                Watch Now
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Blogs;
