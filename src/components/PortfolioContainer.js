import { useState } from 'react';
import About from './pages/About';
import Contact from './pages/Contact';
import Nav from './pages/Nav';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('Home');

  // Check the value of `currentPage` and return the corresponding component to render.
  const renderPage = () => {
    
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Portfolio') {
      return <Portfolio />;
    }
    if (currentPage === 'Contact') {
      return <Contact />;
    }
    return <Resume />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      {/* Passing currentPage from state and the function handlePageChange to update it */}
      <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* Method to return a component  */}
      {renderPage()}
    </div>
  );
}
