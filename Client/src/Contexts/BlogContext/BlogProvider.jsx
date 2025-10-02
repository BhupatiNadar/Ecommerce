import React, { createContext,useEffect,useState } from 'react'


// eslint-disable-next-line react-refresh/only-export-components
export const BlogContext=createContext()

const BlogProvider = ({children}) => {

      const [blogs,setBlogs]=useState([])
      const [loading,setLoading]=useState(true)
      const [error,setError]=useState(null)
    
      useEffect(()=>{
        const fetchBlogs=async ()=>{
          try{
            const response=await fetch("http://localhost:8080/api/Blogs")
            if(!response.ok){
              throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const data=await response.json();
            setBlogs(data)
          }catch (e){
            setError(e.message);
          }finally{
            setLoading(false)
          }
        };
    
        fetchBlogs();
      },[])

      const value = {
        blogs,
        setBlogs,
        loading,
        setLoading,
        error,
        setError,
      };
  return (
    <BlogContext.Provider value={value}>{children}</BlogContext.Provider>
  )
}

export default BlogProvider