import {useEffect, useState} from "react";
import {BlogPostService} from "../services/BlogPostService";
import {DataScroller} from "primereact";

export const Articles = () => {

    const [blogPosts, setBlogPosts] = useState([]);

    useEffect(() => {
        new BlogPostService().getAllBlogPosts().then(data => setBlogPosts(data)).catch(error => console.log(error))
    }, []);

    const blogPostTemplate = (post) => {
        return (
            <div>
                <div className="post-preview">
                    <a href="#">
                        <h2 className="post-title">{post.heading}</h2>
                        <h3 className="post-subtitle">{post.subHeading}</h3>
                    </a>
                    <p className="post-meta">
                        Posted by
                        <a href="#">{post.postedBy}</a>
                        on <span>{post.postedDate}</span>
                    </p>
                </div>
                <hr className="my-4"/>
            </div>
        )
    };

    return (
        <div className="container px-4 px-lg-5">
            <div className="row gx-4 gx-lg-5 justify-content-center">
                <div className="col-md-10 col-lg-8 col-xl-7">
                    <DataScroller value={blogPosts} itemTemplate={blogPostTemplate} rows={5} inline scrollHeight="500px" />
                    <hr className="my-4"/>
                    <div className="d-flex justify-content-end mb-4"><a className="btn btn-primary text-uppercase"
                                                                        href="#">Do Something else with Posts →</a></div>
                </div>
            </div>
        </div>
    )

}