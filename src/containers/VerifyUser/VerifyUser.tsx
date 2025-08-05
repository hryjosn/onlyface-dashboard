'use client';
import NextImage from 'next/image';
import { useEffect, useRef, useState } from 'react';

const USERS_PER_PAGE = 15;

type User = {
  id: string;
  password: string;
  user_name: string;
  avatar: string;
  verify_photo: string;
  verify: boolean;
  created_at: string;
  updated_at: string;
  email: string;
  emailOTP: boolean;
};

function UserCard({
  user,
  onVerify,
}: {
  user: User;
  onVerify: (id: string) => void;
}) {
  return (
    <div className="group flex h-[640px] flex-col overflow-hidden rounded-2xl border border-gray-200 bg-gradient-to-br from-white to-blue-50 shadow-xl transition-transform duration-200 hover:scale-[1.03] hover:shadow-2xl">
      <div className="relative flex flex-col items-center gap-3 border-gray-100 border-b bg-gradient-to-t from-gray-50 to-white p-5 pb-4">
        <div className="relative h-32 w-32 overflow-hidden rounded-full border-4 border-blue-200 bg-white shadow-md">
          <NextImage
            alt="Avatar"
            className="h-full w-full object-cover object-center"
            fill
            priority
            sizes="128px"
            src={user.avatar || '/placeholder.png'}
          />
        </div>
        <span className="mt-2 font-bold text-gray-800 text-lg tracking-wide">
          {user.user_name || 'Unknown'}
        </span>
        <span className="text-gray-500 text-xs">{user.email}</span>
        <div className="mt-1 flex gap-2">
          {user.verify && (
            <span className="inline-flex items-center rounded bg-green-100 px-2 py-0.5 font-medium text-green-700 text-xs">
              已驗證
            </span>
          )}
          {user.emailOTP && (
            <span className="inline-flex items-center rounded bg-blue-100 px-2 py-0.5 font-medium text-blue-700 text-xs">
              Email已驗證
            </span>
          )}
        </div>
        <button
          className="mt-4 rounded-lg bg-gradient-to-r from-green-400 to-green-600 px-6 py-2 font-semibold text-base text-white shadow-lg transition-all duration-150 hover:from-green-500 hover:to-green-700 focus:outline-none focus:ring-2 focus:ring-green-300"
          onClick={() => onVerify(user.id)}
          type="button"
        >
          驗證本人
        </button>
      </div>
      <div className="relative flex w-full flex-1 items-center justify-center bg-gray-100">
        <div className="relative flex h-full max-h-[400px] min-h-[320px] w-full items-center justify-center">
          <NextImage
            alt="Verify Photo"
            className="rounded-lg border border-gray-200 bg-white object-contain object-center shadow-sm"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 20vw"
            src={user.verify_photo || '/placeholder.png'}
          />
        </div>
      </div>
    </div>
  );
}

export function VerifyUser() {
  const [users, setUsers] = useState<User[]>([]);
  const [page, setPage] = useState(1);
  // const [total, setTotal] = useState(0); // removed unused variable
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [verifying, setVerifying] = useState<string | null>(null);

  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch(
          `/api/guest?page=${page}&pageSize=${USERS_PER_PAGE}`
        );
        if (!res.ok) throw new Error('無法取得用戶資料');
        const data = await res.json();
        if (page === 1) {
          setUsers(data.guests || []);
        } else {
          setUsers((prev) => [...prev, ...(data.guests || [])]);
        }
        // setTotal(data.total || 0); // removed unused variable
        setHasMore((data.guests?.length || 0) === USERS_PER_PAGE);
      } catch {
        setError('取得用戶資料失敗，請稍後再試');
      } finally {
        setLoading(false);
      }
    };
    fetchUsers();
  }, [page]);

  // 驗證本人 handler
  const handleVerify = async (id: string) => {
    setVerifying(id);
    setError(null);
    try {
      const res = await fetch('/api/guest/warning', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ guestId: id }),
      });
      if (!res.ok) throw new Error('驗證失敗');
      setUsers((prev) => prev.filter((p) => p.id !== id));
    } catch {
      setError('驗證失敗，請稍後再試');
    } finally {
      setVerifying(null);
    }
  };

  // IntersectionObserver for infinite scroll
  const loaderRef = useInfiniteScroll(() => {
    if (!loading && hasMore) {
      setPage((prev) => prev + 1);
    }
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 px-2 py-6 md:px-6 lg:px-12">
      <div className="grid min-h-[400px] grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {users.length === 0 && !loading ? (
          <div className="col-span-5 flex h-[340px] items-center justify-center text-gray-400 text-lg">
            No users found.
          </div>
        ) : (
          users.map((user) => (
            <UserCard key={user.id} onVerify={handleVerify} user={user} />
          ))
        )}
      </div>
      <div
        className="mt-10 flex min-h-[40px] flex-col items-center"
        ref={loaderRef}
      >
        {error && <span className="mb-2 text-red-500 text-sm">{error}</span>}
        {loading && <span className="text-gray-400 text-lg">Loading...</span>}
        {verifying && <span className="text-green-500 text-sm">驗證中...</span>}
        {!(hasMore || loading) && users.length > 0 && (
          <span className="text-gray-400 text-sm">已載入全部</span>
        )}
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
