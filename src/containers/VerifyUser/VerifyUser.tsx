'use client';
import NextImage from 'next/image';
import { useEffect, useRef, useState } from 'react';
const USERS_PER_PAGE = 15;


type User = {
  id: string
  password: string
  user_name: string
  avatar: string
  verify_photo: string
  verify: boolean
  created_at: string
  updated_at: string
  email: string
  emailOTP: boolean
}



function UserCard({ user }: { user: User }) {
  return (
    <div className="flex flex-col bg-white shadow-lg rounded-xl overflow-hidden border border-gray-200 transition-transform hover:scale-105 duration-200 h-[420px]">
      <div className="flex flex-col items-center gap-2 p-3 bg-gray-50 border-b border-gray-100">
        <div className="relative w-32 h-32 overflow-hidden border border-gray-200 bg-white">
          <NextImage
            src={user.avatar || '/placeholder.png'}
            alt="Avatar"
            fill
            className="object-cover object-center"
            sizes="128px"
          />
        </div>
        <span className="font-semibold text-gray-800 text-base mt-2">{user.user_name || 'Unknown'}</span>
      </div>
      <div className="relative w-full h-48 bg-gray-100">
        <NextImage
          src={user.verify_photo || '/placeholder.png'}
          alt="Verify Photo"
          fill
          className="object-cover object-center"
          sizes="(max-width: 768px) 100vw, 20vw"
        />
      </div>
    </div>
  );
}




export function VerifyUser() {
  const [users, setUsers] = useState<User[]>([]);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch(`/api/guest?page=${page}&pageSize=${USERS_PER_PAGE}`);
        
        if (!res.ok) throw new Error('無法取得用戶資料');
        const data = await res.json();
        console.log('data>', data);
        if (page === 1) {
          setUsers(data.guests || []);
        } else {
          setUsers((prev) => [...prev, ...(data.guests || [])]);
        }
        setTotal(data.total || 0);
        setHasMore((data.guests?.length || 0) === USERS_PER_PAGE);
      } catch (e) {
        setError('取得用戶資料失敗，請稍後再試');
      } finally {
        setLoading(false);
      }
    };
    fetchUsers();
  }, [page]);

  // IntersectionObserver for infinite scroll
  const loaderRef = useInfiniteScroll(() => {
    if (!loading && hasMore) {
      setPage((prev) => prev + 1);
    }
  });

  return (
    <div className="px-2 md:px-6 lg:px-12 py-6 bg-gradient-to-br from-gray-50 to-blue-50 min-h-screen">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 min-h-[400px]">
        {users.length === 0 && !loading ? (
          <div className="col-span-5 flex justify-center items-center h-[340px] text-gray-400 text-lg">No users found.</div>
        ) : (
          users.map((user) => (
            <UserCard key={user.id} user={user} />
          ))
        )}
      </div>
      <div ref={loaderRef} className="flex flex-col items-center mt-10 min-h-[40px]">
        {error && <span className="text-red-500 text-sm mb-2">{error}</span>}
        {loading && <span className="text-gray-400 text-lg">Loading...</span>}
        {!hasMore && !loading && users.length > 0 && <span className="text-gray-400 text-sm">已載入全部</span>}
      </div>
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



