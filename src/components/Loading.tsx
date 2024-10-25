const Loading: React.FC = () => {
  return (
    <div className="absolute top-0 left-0 w-full h-screen bg-blue-500 flex items-center justify-center z-50">
      <div className="text-5xl text-white font-bold">Loading...</div>
    </div>
  );
};

export default Loading;
