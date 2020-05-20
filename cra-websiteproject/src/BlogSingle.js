import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';

//Sometimes this causes my logo to go in and out of displaying

const BlogSingle = (props) => {
    const [ posts, setPosts ] = useState(null);
    useEffect(() => {
        const { id } = props.match.params;
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(response => response.json())
        .then(post => {

            let postData = (
                <div className="post" key={post.id}>
                    <h1>{post.title}</h1> 
                    <p>{post.body}</p>
                </div>
            );
            setPosts(postData);
            });
    }, []);//empty array so it will not run more than once
    return(
        <>
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <h1>Blog</h1>
                        {posts}
                    </div>
                </div>

            </div>

        </>
    )
}

export default BlogSingle;