import { useState, useEffect } from 'react';
import BlogForm from '../../components/blog-form/blog-form.component';
import AllPosts from '../../components/all-posts/all-posts.component';
import './zadatak1.styles.css';

const LOCAL_STORAGE_KEY = 'react-mini-project.posts';

const Zadatak1 = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const storedPosts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storedPosts) setPosts(storedPosts);
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(posts));
  }, [posts]);

  const addNewPost = (newPost) => {
    const post = {
      id: Date.now(),
      ...newPost,
    };
    setPosts([post, ...posts]);
  };

  const deletePost = (id) => {
    const newPosts = posts.filter((post) => post.id !== id);
    setPosts(newPosts);
  };

  const updatePost = (id, newData) => {
    // console.log('function: updatePost');

    const post = posts.find((x) => x.id === id);
    // console.log(`Finded post object: ${JSON.stringify(post)}`);
    const index = posts.indexOf(post);

    // const post = posts.filter((post) => post.id === id);
    // console.log(`Finded array with one post: ${post}`);
    // const index = posts.indexOf(post[0]);

    // console.log(`Index: ${index}`);

    const updatedPost = {
      id,
      ...newData,
    };

    const updatedPosts = [
      ...posts.slice(0, index),
      updatedPost,
      ...posts.slice(index + 1),
    ];

    // console.log('Updated posts: ', updatedPosts);
    setPosts(updatedPosts);
  };

  return (
    <div className='task1'>
      <h2>Mini Blog</h2>
      <div className='blog'>
        <BlogForm addNewPost={addNewPost} />
        <AllPosts
          posts={posts}
          deletePost={deletePost}
          updatePost={updatePost}
        />
      </div>
    </div>
  );
};

export default Zadatak1;
