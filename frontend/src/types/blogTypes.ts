export interface Blog {
    id: string;
    title: string;
    content: string;
    topic: string;
    createdAt: string;
    updatedAt: string;
    author: string;
    imageUrl?: string;
  }
  
  export type SearchQuery = {
    title?: string;
    topic?: string;
  };