import React from 'react';

//`Article` component as a child of `ArticleList`
const Article = ({ date,title, preview }) => {
    return (
        <article>
            <h3> {title} </h3>
            <small>{date ? date : 'January 1, 1970'}</small>
            <p> {preview} </p>
        </article>
    )
};

export default Article;