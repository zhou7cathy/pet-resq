import React from 'react'

function Navigation({ currentPage, handlePageChange }) {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <a
              href="#About-us"
              onClick={() => handlePageChange('AboutUs')}
              className={currentPage === 'AboutUs' ? 'nav-link active' : 'nav-link'}
            >
              About Us
            </a>
          </li>
          <li>
            <a
              href="#Lost"
              onClick={() => handlePageChange('Lost')}
              className={currentPage === 'Lost' ? 'nav-link active' : 'nav-link'}
            >
              Lost
            </a>
          </li>
          <li>
            <a
              href="#Found"
              onClick={() => handlePageChange('Found')}
              className={currentPage === 'Found' ? 'nav-link active' : 'nav-link'}
            >
              Found
            </a>
          </li>
          <li>
            <a
              href="#FAQs"
              onClick={() => handlePageChange('FAQs')}
              className={currentPage === 'FAQs' ? 'nav-link active' : 'nav-link'}
            >
              FAQs
            </a>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Navigation;