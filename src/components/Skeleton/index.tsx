const Skeleton: React.FC<{ height: string }> = ({ height }) => {
  return (
    <div className="flex flex-col justify-between gap-8 border-b pb-9 w-full">
      <div className="animate-pulse flex space-x-4">
        <div className="flex-1 space-y-6 py-1">
          <div className={`h-[${height}] bg-gray-400 rounded w-full`}></div>
        </div>
      </div>
    </div>
  );
};

export default Skeleton;
