import { motion } from 'framer-motion';

const Loading = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-[50vh] flex flex-col items-center justify-center bg-stone-50"
    >
      <div className="relative">
        {/* Animated spinning outer ring */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute inset-0 w-20 h-20 border-4 border-transparent border-t-amber-600 border-r-amber-600 rounded-full"
        />
        
        {/* Pulsing sheesha icon */}
        <motion.div
          animate={{ 
            scale: [1, 1.1, 1],
            rotateY: [0, 180, 360]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="flex items-center justify-center w-20 h-20"
        >
          <img 
            src="/images/adobe-express-sheesha1-icon.png"
            alt="Loading Sheesha"
            className="w-10 h-10 object-contain filter drop-shadow-md"
          />
        </motion.div>
      </div>
      
      {/* Animated loading text */}
      <motion.p 
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="mt-6 text-amber-700 font-medium text-lg tracking-wide"
      >
        Loading...
      </motion.p>

      {/* Animated dots */}
      <div className="flex space-x-1 mt-2">
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            animate={{ 
              y: [0, -8, 0],
              opacity: [0.4, 1, 0.4]
            }}
            transition={{
              duration: 1.2,
              repeat: Infinity,
              delay: i * 0.2,
              ease: "easeInOut"
            }}
            className="w-2 h-2 bg-amber-600 rounded-full"
          />
        ))}
      </div>
    </motion.div>
  );
};

export default Loading;