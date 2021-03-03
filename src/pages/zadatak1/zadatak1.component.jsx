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
    console.log('snima');
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
    console.log('updateeeeeeeeeeeee');
    console.log(id);
    // const object = posts.find((x) => x.id === id);
    const object = posts.filter((post) => post.id === id);
    console.log(object);
    const index = posts.indexOf(object[0]);
    console.log(index);
    console.log(newData);

    const newUpdate = {
      id,
      ...newData,
    };
    console.log(newUpdate);

    const updatedObject = [
      ...posts.slice(0, index),
      newUpdate,
      ...posts.slice(index + 1),
    ];

    console.log(updatedObject);
    setPosts(updatedObject);
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
