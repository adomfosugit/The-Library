'use client'

type Props = {}

const Loading = (props: Props) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      <div className="relative">
        {/* Animated glow effect */}
        <div className="absolute inset-0 blur-2xl opacity-50 animate-pulse">
          <div className="w-32 h-32 bg-primary rounded-full"></div>
        </div>
        
      
      {/* Brand name with gradient */}
      <div className="mt-8 flex flex-col items-center gap-3">
        <span className="font-serif text-4xl font-bold bg-gradient-to-r from-primary to-green-600 bg-clip-text text-transparent animate-pulse">
          Bloomforge
        </span>
        
        {/* Loading dots */}
        <div className="flex gap-2">
          <div className="w-2 h-2 bg-green-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
          <div className="w-2 h-2 bg-green-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
          <div className="w-2 h-2 bg-green-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
        </div>
      </div>
      
      <style>{`
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .animate-spin-slow {
          animation: spin-slow 3s linear infinite;
        }
      `}</style>
    </div>
    </div>
  );
};

export default Loading;