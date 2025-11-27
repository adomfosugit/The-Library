'use client'

type Props = {}

const Loading = (props: Props) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      <div className="relative">
        {/* Animated glow effect */}
        <div className="absolute inset-0 blur-2xl opacity-50 animate-pulse">
          <div className="w-32 h-32 bg-green-400 rounded-full"></div>
        </div>
        
        {/* Logo container with rotation */}
        <div className="relative animate-bounce">
          <svg 
            className="w-24 h-24 text-green-400 animate-spin-slow" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2"
            style={{ animationDuration: '3s' }}
          >
            <path 
              d="M12 2L12 12M12 12L17 7M12 12L7 7" 
              strokeLinecap="round" 
              strokeLinejoin="round"
              className="animate-pulse"
            />
            <path 
              d="M12 12C12 12 8 14 8 18C8 20.2091 9.79086 22 12 22C14.2091 22 16 20.2091 16 18C16 14 12 12 12 12Z" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
      
      {/* Brand name with gradient */}
      <div className="mt-8 flex flex-col items-center gap-3">
        <span className="text-4xl font-bold bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent animate-pulse">
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
  );
};

export default Loading;