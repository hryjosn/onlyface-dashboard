

// Convert to client component for pagination
"use client";
// 移除 Pagination，改用 infinite scroll
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

type Post = {
  id: string;
  user_id: string | null;
  content: string;
  picture?: string | null;
};

const PostCard = ({ post, onDelete }: { post: Post; onDelete: (id: string) => void }) => (
  <div className="flex flex-col bg-white shadow-lg rounded-xl overflow-hidden border border-gray-200 transition-transform hover:scale-105 duration-200 h-[340px]">
    <div className="relative w-full h-full bg-gray-100">
      <Image
        src={post.picture || '/placeholder.png'}
        alt="Post Image"
        fill
        className="object-cover object-center"
        sizes="(max-width: 768px) 100vw, 20vw"
      />
    </div>
    <button
      type="button"
      className="m-3 mt-2 px-3 py-1.5 bg-red-500 text-white rounded-lg shadow hover:bg-red-600 transition-colors text-sm"
      onClick={() => onDelete(post.id)}
    >
      刪除
    </button>
  </div>
);



const POSTS_PER_PAGE = 15;

export const VerifyPost = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [deleting, setDeleting] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  
  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await fetch(`/api/posts?page=${page}&pageSize=${POSTS_PER_PAGE}`);
      const data = await res.json();
      if (page === 1) {
        setPosts(data.posts);
      } else {
        setPosts((prev) => [...prev, ...data.posts]);
      }
      setTotal(data.total);
      setHasMore(data.posts.length === POSTS_PER_PAGE);
      setLoading(false);
    };
    fetchPosts();
     
  }, [page]);

  const handleDelete = async (id: string) => {
    
    setDeleting(id);
    setError(null);
    try {
      const res = await fetch('/api/posts/delete', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id }),
      });
      if (!res.ok) throw new Error('刪除失敗');
      setPosts((prev) => prev.filter((p) => p.id !== id));
      setTotal((prev) => prev - 1);
    } catch (e) {
      setError('刪除失敗，請稍後再試');
    } finally {
      setDeleting(null);
    }
  };

  // IntersectionObserver for infinite scroll
  const loaderRef = useInfiniteScroll(() => {
    if (!loading && hasMore) {
      setPage((prev) => prev + 1);
    }
  });

  // 無需 handleChange, pageCount

  return (
    <div className="px-2 md:px-6 lg:px-12 py-6 bg-gradient-to-br from-gray-50 to-blue-50 min-h-screen">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 min-h-[400px]">
        {posts.length === 0 && !loading ? (
          <div className="col-span-5 flex justify-center items-center h-[340px] text-gray-400 text-lg">No posts found.</div>
        ) : (
          posts.map((post) => (
            <PostCard key={post.id} post={post} onDelete={handleDelete} />
          ))
        )}
      </div>
      <div ref={loaderRef} className="flex flex-col items-center mt-10 min-h-[40px]">
        {error && <span className="text-red-500 text-sm mb-2">{error}</span>}
        {loading && <span className="text-gray-400 text-lg">Loading...</span>}
        {deleting && <span className="text-gray-400 text-sm">刪除中...</span>}
        {!hasMore && !loading && posts.length > 0 && <span className="text-gray-400 text-sm">已載入全部</span>}
      </div>
    </div>
  );
};

// custom hook for infinite scroll
function useInfiniteScroll(onLoadMore: () => void) {
  const ref = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    if (!ref.current) return;
    const observer = new window.IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          onLoadMore();
        }
      },
      { threshold: 1 }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [onLoadMore]);
  return ref;
}

