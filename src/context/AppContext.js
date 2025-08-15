import { createContext, useState, useCallback } from "react";
import { baseUrl } from "../baseUrl";

export const AppContext = createContext();

export default function AppContextProvider({ children }) {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(null);

  // Stable function using useCallback
  const fetchBlogPosts = useCallback(async (page = 1, tag = null, category = null) => {
    setLoading(true);
    let url = `${baseUrl}?page=${page}`;
    if (tag) url += `&tag=${tag}`;
    if (category) url += `&category=${category}`;

    try {
      const result = await fetch(url);
      const data = await result.json();
      if (!data.posts || data.posts.length === 0)
        throw new Error("Something went wrong");

      console.log("Api Response", data);
      setPage(data.page);
      setPosts(data.posts);
      setTotalPages(data.totalPages);
    } catch (error) {
      console.log("Error in fetching data");
      setPosts([]);
      setTotalPages(null);
      setPage(1);
    }
    setLoading(false);
  }, []);

  function handlePageChange(page, tag=null, category=null) {
    setPage(page);
    fetchBlogPosts(page, category,tag);
    console.log("Page changed to:", page, "Tag:", tag, "Category:", category);
  }

  const value = {
    posts,
    setPosts,
    loading,
    setLoading,
    page,
    setPage,
    totalPages,
    setTotalPages,
    handlePageChange,
    fetchBlogPosts, 
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
