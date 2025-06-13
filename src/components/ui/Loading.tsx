import { motion } from 'framer-motion';

const Loading = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-[50vh] flex flex-col items-center justify-center"
    >
      <div className="animate-bounce-slow">
        <img 
          src="/images/Adobe Express - sheesha icon.png" 
          alt="Loading" 
          className="w-12 h-12 object-contain"
          style={{ filter: 'brightness(0) saturate(100%) invert(58%) sepia(38%) saturate(492%) hue-rotate(18deg) brightness(92%) contrast(85%)' }}
        />
      </div>
      <p className="mt-4 text-accent-700 font-medium">Loading...</p>
    </motion.div>
  );
};

export default Loading;