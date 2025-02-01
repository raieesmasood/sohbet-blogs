import { useState } from 'react';
import BlogForm from '../components/admin/BlogForm';
import BlogList from '../components/admin/BlogList';
import SearchBar from '../components/common/SearchBar';
import { useBlogs } from '../hooks/useBlogs';
import { Blog, SearchQuery } from '../types/blogTypes';
import React from 'react';
import Loader from '../components/common/Loader';
import { blogService } from '../services/api';

const AdminDashboard = () => {
  const { blogs, loading, error, searchBlogs, refreshBlogs } = useBlogs();
  const [showForm, setShowForm] = useState(false);
  const [selectedBlog, setSelectedBlog] = useState<Blog | null>(null);

  const handleSearch = (query: SearchQuery) => searchBlogs(query);

  const handleDelete = async (id: string) => {
    try {
      await blogService.deleteBlog(id);
      refreshBlogs();
    } catch (error) {
      console.error('Error deleting blog:', error);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Admin Dashboard</h1>
        <button
          onClick={() => setShowForm(!showForm)}
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          {showForm ? 'Cancel' : 'Create New Blog'}
        </button>
      </div>

      {showForm && (
        <BlogForm 
          initialData={selectedBlog || undefined}
          onSuccess={() => {
            setShowForm(false);
            setSelectedBlog(null);
            refreshBlogs();
          }}
        />
      )}

      {/* <SearchBar onSearch={handleSearch} />
      
      {loading ? (
        <Loader />
      ) : error ? (
        <div className="text-red-500 text-center">{error}</div>
      ) : (
        <BlogList 
          blogs={blogs}
          onEdit={setSelectedBlog}
          onDelete={handleDelete}
        /> */}
      {/* )} */}
    </div>
  );
};
export default AdminDashboard;