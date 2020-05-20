import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';

const Blog = () => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(response => response.json())
        .then(data => {
            let postData = data.map(post => (
                <div className="post" key={post.id}>
                    <h2><Link to={`/blog/${post.id}`}>{post.title}</Link></h2> 
                    {/* Creates link for each blog posts and assigns them an id */}
                    <p>{post.body}</p>
                </div>
            ));
            setPosts(postData);
        })
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

export default Blog;