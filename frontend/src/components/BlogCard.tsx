import { Link } from 'react-router-dom';
import { Blog } from '../types/blogTypes';
import { formatDate } from '../utils/helper';
import React from 'react';

const BlogCard = ({ blog }: { blog: Blog }) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
    {blog.imageUrl && (
      <img 
        src={blog.imageUrl} 
        alt={blog.title} 
        className="w-full h-48 object-cover"
      />
    )}
    <div className="p-4">
      <div className="flex justify-between items-start mb-2">
        <h3 className="text-xl font-bold">{blog.title}</h3>
        <span className="bg-blue-100 text-blue-800 text-sm px-2 py-1 rounded">
          {blog.topic}
        </span>
      </div>
      <p className="text-gray-600 line-clamp-3 mb-4">{blog.content}</p>
      <div className="flex justify-between items-center text-sm text-gray-500">
        <span>By {blog.author}</span>
        <span>{formatDate(blog.createdAt)}</span>
      </div>
      <Link 
        to={`/blog/${blog.id}`} 
        className="mt-4 inline-block text-blue-600 hover:text-blue-800"
      >
        Read More →
      </Link>
    </div>
  </div>
);
export default BlogCard;