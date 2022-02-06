import axios from 'axios';

class BlogAPI {

  constructor() {
    this.req = axios.create({
      baseURL: 'http://127.0.0.1:8000/'
    })
  }

  listBlogs() {
    const url = '/';
    return this.req.get(url);
  }

}

const blogAPI = new BlogAPI();

export default blogAPI;