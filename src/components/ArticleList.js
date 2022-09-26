import React from 'react';
import Article from './Article';

/** an array of `Article` components (one component for each _post_ passed down
    as a prop to `ArticleList`) */
const ArticleList = ({ posts }) => {
    return (
        <main>
            {posts.map((post) => {
                return (
                    <Article key={post.id} title={post.title} date={post.date} preview={post.preview} />
                )
            })}
        </main>
    )
};

export default ArticleList;