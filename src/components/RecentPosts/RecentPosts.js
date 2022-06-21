import  './RecentPosts.css'
import { Grid } from "@chakra-ui/layout";
import { Container } from "@chakra-ui/layout";
import { GridItem } from "@chakra-ui/layout";
import PostCard from "./PostCard";
import { blogData } from "../../data";
import { Heading } from "@chakra-ui/layout";
const RecentPosts = () => {
  return (
    <>
    <div class="row">
    
  {
    blogData.map((post)=>(

  <div class="column" key={post.title}>
    <div class="card">
      <PostCard post={post}/>
    </div>
  </div>
  
    ))
  }
  </div>
  
    
    </>
  );
};

export default RecentPosts;
