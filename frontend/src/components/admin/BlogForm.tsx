import { useState } from 'react';
import { Blog } from '../../types/blogTypes';
import { blogService } from '../../services/api';
import React from 'react';

interface BlogFormProps {
  initialData?: Blog;
  onSuccess: () => void;
}

const BlogForm = ({ initialData, onSuccess }: BlogFormProps) => {
  const [formData, setFormData] = useState({
    title: initialData?.title || '',
    content: initialData?.content || '',
    topic: initialData?.topic || '',
    author: initialData?.author || 'Admin',
    image: null as File | null,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const data = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      if (value !== null && value !== undefined) data.append(key, value);
    });

    try {
      if (initialData) {
        await blogService.updateBlog(initialData.id, data);
      } else {
        await blogService.createBlog(data);
      }
      onSuccess();
    } catch (error) {
      console.error('Error saving blog:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-2xl mx-auto">
      {/* Form fields same as previous implementation */}
    </form>
  );
};
export default BlogForm;