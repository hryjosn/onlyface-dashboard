// Convert to client component for pagination
'use client';
// 移除 Pagination，改用 infinite scroll
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

type Post = {
  id: string;
  user_id: string | null;
  content: string;
  picture?: string | null;
};

const PostCard = ({
  post,
  onDelete,
}: {
  post: Post;
  onDelete: (id: string) => void;
}) => (
  <div className="group flex h-[380px] flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-xl transition-transform duration-200 hover:scale-[1.03]">
    <div className="relative h-2/3 min-h-[180px] w-full bg-gradient-to-br from-blue-100 to-indigo-100">
      <Image
        alt="Post Image"
        className="rounded-t-2xl object-cover object-center transition-all group-hover:brightness-95"
        fill
        priority={false}
        sizes="(max-width: 768px) 100vw, 20vw"
        src={post.picture || '/placeholder.png'}
      />
    </div>
    <div className="flex flex-1 flex-col justify-between gap-2 p-4">
      <div
        className="truncate font-semibold text-base text-gray-800"
        title={post.content}
      >
        {post.content || <span className="text-gray-400">（無內容）</span>}
      </div>
      <button
        className="mt-2 rounded-lg bg-gradient-to-r from-red-500 to-pink-500 px-4 py-2 font-bold text-sm text-white shadow-lg transition-all hover:from-red-600 hover:to-pink-600 focus:outline-none focus:ring-2 focus:ring-red-300"
        onClick={() => onDelete(post.id)}
        type="button"
      >
        刪除
      </button>
    </div>
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
      const res = await fetch(
        `/api/posts?page=${page}&pageSize=${POSTS_PER_PAGE}`
      );
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
      setError(
        `刪除失敗，請稍後再試${e instanceof Error ? `: ${e.message}` : ''}`
      );
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
    <div className="flex min-h-screen flex-col items-center bg-gradient-to-br from-blue-50 to-indigo-100 px-2 py-8 md:px-8 lg:px-16">
      <h1 className="mb-8 font-bold text-3xl text-gray-800 tracking-tight drop-shadow-sm">
        貼文審核
      </h1>
      <div className="grid min-h-[400px] w-full max-w-screen-2xl grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {posts.length === 0 && !loading ? (
          <div className="col-span-5 flex h-[340px] items-center justify-center text-gray-400 text-lg">
            目前沒有待審核的貼文
          </div>
        ) : (
          posts.map((post) => (
            <PostCard key={post.id} onDelete={handleDelete} post={post} />
          ))
        )}
      </div>
      <div
        className="mt-10 flex min-h-[40px] w-full flex-col items-center"
        ref={loaderRef}
      >
        {error && <span className="mb-2 text-red-500 text-sm">{error}</span>}
        {loading && <SkeletonRow />}
        {deleting && <span className="text-gray-400 text-sm">刪除中...</span>}
        {!(hasMore || loading) && posts.length > 0 && (
          <span className="text-gray-400 text-sm">已載入全部</span>
        )}
      </div>
    </div>
  );
};

function SkeletonRow() {
  return (
    <div className="flex w-full justify-center gap-6">
      {Array.from({ length: 3 }).map((_, i) => (
        <div
          className="h-[380px] w-64 animate-pulse rounded-2xl bg-gray-200"
          key={i}
        />
      ))}
    </div>
  );
}

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
