import { Coffee } from 'lucide-react';
import { motion } from 'framer-motion';

const Loading = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-[50vh] flex flex-col items-center justify-center"
    >
      <Coffee size={48} className="text-primary-700 animate-bounce-slow" />
      <p className="mt-4 text-accent-700 font-medium">Loading...</p>
    </motion.div>
  );
};

export default Loading;