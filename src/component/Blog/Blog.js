import { useCallback, useEffect, useState } from "react";
import Button from "../Button/Button";
import "./Blog.css"

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [pageCounts, setPageCounts] = useState(0);
  const [activePageNumber, setActivePageNumber] = useState(0);
  const LoadPosts = async () => {
    setLoading(true);
    const responsePosts = await fetch(
      "https://run.mocky.io/v3/64f3d5df-6415-42eb-ad9b-e18aede951c6"
    );
    const posts = await responsePosts.json();
    setPosts(posts);
    setLoading(false);
  };

  useEffect(() => {
    LoadPosts();
  }, []);

  useEffect(() => {
    setPageCounts(calculatePageCounts());
  }, [posts]);

  const calculatePageCounts = () => {
    if (posts.length % 3 > 0) {
      return parseInt(posts.length / 3 + 1);
    }
    return parseInt(posts.length / 3);
  };

  const handleClickOnPages = useCallback((pageNumber) => {
    setActivePageNumber(pageNumber);
  },[]);

  
  return (
    <div className="blog">
      {loading && "Loading"}
      {posts.length === 0 && <div> No Posts</div>}
      {posts.length > 0 && (
        <ul>
          {posts
            .slice(3 * activePageNumber, 3 * (activePageNumber + 1)).map((item) => {
              return (
                <li key={item.id}>
                  <h3>{item.title}</h3>
                  <p>{item.content}</p>
                </li>
              );
            })}
        </ul>
      )}
      <div className="page">
        <ul>
          {new Array(pageCounts).fill(0).map((item, index) => {
            return (
              <li key={item+index}>
                <Button
                  onClick={() => handleClickOnPages(index)}
                  className={
                    activePageNumber === index ? "active page-btn" : "page-btn"
                  }
                >
                  {index + 1}
                </Button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
export default Blog;
