import axios from 'axios';
import { SearchQuery } from '../types/blogTypes';

const API = axios.create({
  baseURL: 'http://localhost:8000/api',
});

export const blogService = {
  getAllBlogs: () => API.get('/blogs'),
  getBlogById: (id: string) => API.get(`/blogs/${id}`),
  createBlog: (blogData: FormData) => API.post('/blogs', blogData),
  updateBlog: (id: string, blogData: FormData) => API.put(`/blogs/${id}`, blogData),
  deleteBlog: (id: string) => API.delete(`/blogs/${id}`),
  searchBlogs: (query: SearchQuery) => API.get('/blogs/search', { params: query }),
  scrapeArticles: (url: string) => API.post('/scrape', { url }),
};

// process.env.REACT_APP_API_URL