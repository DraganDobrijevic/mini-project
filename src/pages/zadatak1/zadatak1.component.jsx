import { useState, useEffect } from 'react';
import BlogForm from '../../components/blog-form/blog-form.component';
import AllPosts from '../../components/all-posts/all-posts.component';

const LOCAL_STORAGE_KEY = 'react-mini-project.posts';

const Zadatak1 = () => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      author: 'Dragan',
      title: 'Title1',
      blogPost: 'tekst Draganov q askdka skf a asf alsfkja fla kf a',
      contactEmail: 'd@d.com',
    },
    {
      id: 2,
      author: 'Petar',
      title: 'Title2',
      blogPost: 'tekst Petrov q askdka skf a asf alsfkja fla kf a',
      contactEmail: 'p@d.com',
    },
    {
      id: 3,
      author: 'Jakov',
      title: 'Title3',
      blogPost: 'tekst Jakovljev q askdka skf a asf alsfkja fla kf a',
      contactEmail: 'j@d.com',
    },
  ]);

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
      id: 10,
      ...newPost,
    };
    setPosts([post, ...posts]);
  };

  const deletePost = (id) => {
    const newPosts = posts.filter((post) => post.id !== id);
    setPosts(newPosts);
  };

  return (
    <div className='task1'>
      <h2>Mini Blog</h2>
      <BlogForm addNewPost={addNewPost} />
      <AllPosts posts={posts} deletePost={deletePost} />
    </div>
  );
};

export default Zadatak1;
