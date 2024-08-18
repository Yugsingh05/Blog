import React, { useEffect, useState, memo } from "react";
import appwriteService from "../appwrite/config";
import { Container, PostCard } from "../components/index";
import authService from "../appwrite/auth";
import { Link } from "react-router-dom";
import "./style.css";
import { useSelector } from "react-redux";

function Home() {
  const [posts, setPosts] = useState([]);
  const [user, Setuser] = useState(false);
  const userData = useSelector((state) => state.auth.userData);
  // time = {post.$createdAt.split("T",1)}

  useEffect(() => {
    appwriteService.getPosts([]).then((postsResponse) => {
      if (postsResponse) {
        const userPosts = [];
        for (var i = postsResponse.total - 1; i >= 0; i--) {
          const data = postsResponse.documents[i];
          userPosts.push(data);
          //   console.log(data.$createdAt.split("T",1))
        }
        setPosts(userPosts);
      }
    });
    authService.getCurrentUser().then((state) => Setuser(state.status));
  }, []);

  if (posts.length === 0) {
    return (
      <div className="w-full py-8 mt-4 text-center bg-black my-8">
        <Container>
          <div className="flex flex-wrap">
            <div className="p-5 w-full ">
              {user === false && (
                <h1 className="text-2xl font-bold text-white hover:text-blue-300 mx-5 my-8 cursor-pointer ">
                  <Link to="/login"> Login to read posts</Link>
                </h1>
              )}
              {user && (
                <h1 className="text-2xl font-bold hover:text-red-500 text-white">
                  <Link to="/add-post">Add a Post</Link>
                </h1>
              )}
            </div>
          </div>
        </Container>
      </div>
    );
  }

  return (
    <div className="w-full py-5 bg-gray-800 post  ">
      <Container>
        <div className="con w-full">
          <div className="flex flex-wrap postDir w-full ">
            {posts.map((post) => (
              <div key={post.$id} className="p-2 w-full  wid">
                <PostCard {...post} />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}

export default memo(Home);
