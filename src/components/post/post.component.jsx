import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import FormInput from '../form-input/form-input.component';
import './post.styles.css';

const Post = ({
  id,
  author,
  title,
  blogPost,
  contactEmail,
  deletePost,
  updatePost,
}) => {
  const [updatePostData, setUpdatePostData] = useState({
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
  } = updatePostData;

  const [show, setShow] = useState(false);

  const handleDeletePost = () => {
    // console.log('delete');
    // console.log(id);
    deletePost(id);
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    console.log('update');
    console.log(id);
    console.log(updatePostData);

    updatePost(id, updatePostData);

    setUpdatePostData({
      author: '',
      title: '',
      blogPost: '',
      contactEmail: '',
    });

    setShow(false);
  };

  const showUpdateForm = (e) => {
    console.log('show/hide');
    console.log(e.target);
    if (show) {
      e.target.innerHTML = 'Update Post';
      setShow(false);
    } else {
      e.target.innerHTML = 'X';
      setShow(true);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setUpdatePostData({ ...updatePostData, [name]: value });
  };

  return (
    <div className='post'>
      <h3 className='post-title'>{title}</h3>

      <p className='post-text'>{blogPost}</p>
      <div className='post-info'>
        <span>
          Posted by {author}
          {contactEmail && `, ${contactEmail}`}
        </span>
        <hr />
      </div>
      <div className='post-footer'>
        <Button variant='outline-danger' size='sm' onClick={handleDeletePost}>
          Delete Post
        </Button>
        <Button
          type='button'
          variant='outline-info'
          size='sm'
          onClick={showUpdateForm}
        >
          Update Post
        </Button>
      </div>
      {show && (
        <div className='blog-form-update'>
          <h5 className='title'>Update Post</h5>
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
