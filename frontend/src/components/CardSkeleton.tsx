export const CardSkeleton = () => {
  return (
    <div className="w-64 h-40 bg-white border rounded-xl p-4 animate-pulse">
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
        <div className="h-4 w-32 bg-gray-300 rounded"></div>
      </div>

      <div className="mt-6 h-3 w-3/4 bg-gray-300 rounded"></div>
      <div className="mt-3 h-3 w-1/2 bg-gray-300 rounded"></div>

      <div className="mt-6 flex justify-end gap-3">
        <div className="w-5 h-5 bg-gray-300 rounded"></div>
        <div className="w-5 h-5 bg-gray-300 rounded"></div>
      </div>
    </div>
  );
};