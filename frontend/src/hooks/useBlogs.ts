import { useEffect, useState } from 'react';
import { blogService } from '../services/api';
import { Blog, SearchQuery } from '../types/blogTypes';

export const useBlogs = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchBlogs = async () => {
    try {
      const response = await blogService.getAllBlogs();
      setBlogs(response.data);
    } catch (err) {
      setError('Failed to fetch blogs');
    } finally {
      setLoading(false);
    }
  };

  const searchBlogs = async (query: SearchQuery) => {
    try {
      const response = await blogService.searchBlogs(query);
      setBlogs(response.data);
    } catch (err) {
      setError('Failed to search blogs');
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  return { blogs, loading, error, searchBlogs, refreshBlogs: fetchBlogs };
};