import { useState, useEffect } from 'react';
import Post from '../post/post.component.jsx';
import './all-posts.styles.css';

const AllPosts = ({ posts, deletePost }) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (posts.length >= 1) {
      setShow(true);
    } else {
      setShow(false);
    }
  }, [posts]);

  return (
    <div className='allPosts'>
      {show ? <h4>Posts:</h4> : <h4>List is empty</h4>}
      {posts.map(({ id, ...otherPostProps }) => (
        <Post key={id} {...otherPostProps} deletePost={deletePost} id={id} />
      ))}
    </div>
  );
};

export default AllPosts;
