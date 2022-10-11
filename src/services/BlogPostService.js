import axios from "axios";

export class BlogPostService {

    getAllBlogPosts() {
        console.log("Making external call now")
        return axios.get(
            `http://localhost:8089/api/v1/blog/allPosts`,
            {
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        ).then(response => response.data).catch(error => error.response);
    }
}