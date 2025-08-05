export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 px-4">
      <div className="flex w-full max-w-md flex-col items-center gap-10 rounded-2xl bg-white/80 p-10 shadow-xl">
        <h1 className="mb-2 text-center font-bold text-3xl text-gray-800 tracking-tight drop-shadow-sm">
          OnlyFace Dashboard
        </h1>
        <p className="mb-4 text-center text-gray-500 text-lg">
          請選擇你要進行的審核項目
        </p>
        <div className="flex w-full flex-col gap-6">
          <a
            className="w-full rounded-xl bg-gradient-to-r from-indigo-500 to-blue-500 px-6 py-4 text-center font-semibold text-white text-xl shadow-lg transition-all duration-200 hover:scale-105 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-indigo-200"
            href="/verify/post"
          >
            審核貼文
          </a>
          <a
            className="w-full rounded-xl bg-gradient-to-r from-pink-500 to-rose-400 px-6 py-4 text-center font-semibold text-white text-xl shadow-lg transition-all duration-200 hover:scale-105 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-pink-200"
            href="/verify/user"
          >
            審核用戶
          </a>
        </div>
      </div>
    </div>
  );
}
