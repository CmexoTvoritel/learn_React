import React from 'react';

const PostItem = (props) => {
    return(
        <div className='post'>
        <div className='post_cont'>
          <strong>{props.post.id}. {props.post.title}</strong>
          <div>
            {props.post.body}
          </div>
        </div>
        <div className='post_butts'>
          <button>Delete post</button>
        </div>
      </div>
    );
};

export default PostItem;