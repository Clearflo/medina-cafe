import { lazy, Suspense, useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Loading from './components/ui/Loading';
import BackToTopButton from './components/ui/BackToTopButton';

// Lazy load pages for better performance
const Home = lazy(() => import('./pages/Home'));
const Menu = lazy(() => import('./pages/Menu'));
const About = lazy(() => import('./pages/About'));

function App() {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Add loading state to handle initial page load
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);
    
    return () => clearTimeout(timer);
  }, []);

  // Add loading indicator when navigating between pages
  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);
    
    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-stone-50 font-body">
      <Header />
      <main className="min-h-[calc(100vh-200px)]">
        <AnimatePresence mode="wait">
          {isLoading ? (
            <Loading />
          ) : (
            <Suspense fallback={<Loading />}>
              <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Home />} />
                <Route path="/menu" element={<Menu />} />
                <Route path="/about" element={<About />} />
              </Routes>
            </Suspense>
          )}
        </AnimatePresence>
      </main>
      <Footer />
      <BackToTopButton />
    </div>
  );
}

export default App;