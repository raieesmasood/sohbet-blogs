import React from 'react'
import { Blog } from '../../types/blogTypes'
import BlogCard from '../BlogCard'

const BlogList = ({ blogs }: { blogs: Blog[] }) => {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {blogs.map(blog => (
        <BlogCard key={blog.id} blog={blog} />
      ))}
    </div>
  )
}
export default BlogList