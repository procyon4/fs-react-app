import React from 'react'

const CommentsList = ({ comments }) => {
    if(!comments) return null;
    return (
        <>
        <h3>Comments:</h3>
        {comments.map(comment => (
            <div className="comment">
                <h4>{comment.username}</h4>
                <p>{comment.text}</p>
            </div>
        ))}
        </>
    )
}

export default CommentsList
