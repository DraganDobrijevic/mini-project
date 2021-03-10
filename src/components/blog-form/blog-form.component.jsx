import { useState } from 'react';
import FormInput from '../form-input/form-input.component';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import './blog-form.styles.css';

const BlogForm = ({ addNewPost }) => {
  const [postInfo, setPostInfo] = useState({
    author: '',
    title: '',
    blogPost: '',
    contactEmail: '',
  });
  const [error, setError] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();

    const { author, title, blogPost } = postInfo;

    if (!author) {
      setError('enter the author');
      return;
    }

    if (!title) {
      setError('enter a blog title');
      return;
    }

    if (!blogPost) {
      setError('enter the text of the blog');
      return;
    }

    try {
      // console.log(postInfo);

      addNewPost(postInfo);

      setPostInfo({
        author: '',
        title: '',
        blogPost: '',
        contactEmail: '',
      });
    } catch (error) {
      setError(error.message);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setPostInfo({ ...postInfo, [name]: value });
  };

  const { author, title, blogPost, contactEmail } = postInfo;

  return (
    <div className='blog-form'>
      <h4 className='title'>Create New Post</h4>
      {error && <Alert variant='danger'>{error}</Alert>}
      <form className='create-blog-form' onSubmit={handleSubmit}>
        <FormInput
          type='text'
          name='author'
          value={author}
          onChange={handleChange}
          label='Author'
          required
        />
        <FormInput
          type='text'
          name='title'
          value={title}
          onChange={handleChange}
          label='Title'
          required
        />
        <FormInput
          type='text'
          name='blogPost'
          value={blogPost}
          onChange={handleChange}
          label='Blog Post'
          required
        />
        <FormInput
          type='email'
          name='contactEmail'
          value={contactEmail}
          onChange={handleChange}
          placeholder='Enter your email..'
        />
        <Button variant='outline-primary' type='submit'>
          ADD POST
        </Button>
      </form>
    </div>
  );
};

export default BlogForm;
