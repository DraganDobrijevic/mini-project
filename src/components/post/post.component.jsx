import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import FormInput from '../form-input/form-input.component';
import './post.styles.css';

const Post = ({ id, author, title, blogPost, contactEmail, deletePost }) => {
  const [updatePost, setUpdatePost] = useState({
    author: '',
    title: '',
    blogPost: '',
    contactEmail: '',
  });

  const {
    author: authorUpdate,
    title: titleUpdate,
    blogPost: blogPostUpdate,
    contactEmail: contactEmailUpdate,
  } = updatePost;

  const [show, setShow] = useState(false);

  const handleDeletePost = () => {
    console.log('delete');
    console.log(id);
    deletePost(id);
  };

  const handleUpdate = () => {
    console.log('update');
    console.log(id);
  };

  const showUpdateForm = () => {
    console.log('show/hide');
    if (show) {
      setShow(false);
    } else {
      setShow(true);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setUpdatePost({ ...updatePost, [name]: value });
  };

  return (
    <div className='post'>
      <h3>{title}</h3>
      <h4>{blogPost}</h4>
      <h5>{author}</h5>
      <h5>{contactEmail}</h5>
      <Button variant='outline-danger' size='sm' onClick={handleDeletePost}>
        Delete Post
      </Button>
      <Button variant='outline-info' size='sm' onClick={showUpdateForm}>
        Update Post
      </Button>
      {show && (
        <div className='blog-form-update'>
          <h4 className='title'>Update Post</h4>
          <form className='create-blog-form' onSubmit={handleUpdate}>
            <FormInput
              type='text'
              name='author'
              value={authorUpdate}
              onChange={handleChange}
              label='Author'
              required
            />
            <FormInput
              type='text'
              name='title'
              value={titleUpdate}
              onChange={handleChange}
              label='Title'
              required
            />
            <FormInput
              type='text'
              name='blogPost'
              value={blogPostUpdate}
              onChange={handleChange}
              label='Blog Post'
              required
            />
            <FormInput
              type='email'
              name='contactEmail'
              value={contactEmailUpdate}
              onChange={handleChange}
              placeholder='Enter your email..'
            />
            <Button variant='outline-success' type='submit'>
              Update
            </Button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Post;
