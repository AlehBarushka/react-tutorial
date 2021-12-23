import React from 'react';
import styles from './MyPosts.module.css';
import Post from './Posts/Post';

const MyPosts = (props) => {
  let postsElements = props.postsData.map((post) => (
    <Post message={ post.message } likes={ post.likesCount } />
  ));

  let newPostElement = React.createRef();

  let addPost = () => {
    props.dispatch({ type: 'ADD-POST' });
  };

  let onPostChange = () => {
    const text = newPostElement.current.value;
    const action = { type: 'UPDATE-NEW-POST-TEXT', newText: text };
    props.dispatch(action);
    console.log('update');
  };

  return (
    <div className={ styles['posts-block'] }>
      <h3>My Posts</h3>
      <div>
        <div>
          <textarea onChange={ onPostChange } ref={ newPostElement } value={ props.newPostText } />
        </div>
        <div>
          <button onClick={ addPost }>Add Post</button>
        </div>
      </div>
      <div className={ styles.posts }>{ postsElements }</div>
    </div>
  );
};

export default MyPosts;
