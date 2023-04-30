import React, { useState } from 'react';
import Navigation from './sections/Navigation'
import Footer from './sections/Footer'
import AboutUs from './pages/AboutUs'
import Lost from './pages/Lost'
import Found from './pages/Found'
import FAQs from './pages/FAQs'

export default function Container() {
    const [currentPage, setCurrentPage] = useState('AboutUs');
  
    const renderPage = () => {
      if (currentPage === 'AboutUs') {
        return <AboutUs />;
      }
      if (currentPage === 'Lost') {
        return <Lost />;
      }
      if (currentPage === 'Found') {
        return <Found />;
      }
      if (currentPage === 'FAQs') {
        return <FAQs />;
      }
      return <AboutUs />;
    };
  
    const handlePageChange = (page) => setCurrentPage(page);
  
    return (
      <div>
        <h1>Pet ResQ</h1>
        <Navigation currentPage={currentPage} handlePageChange={handlePageChange} />
        {renderPage()}
        <Footer />
      </div>
    )
  }