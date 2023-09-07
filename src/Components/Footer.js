import React from 'react';

function Footer() {
  return (
    <div className="footer">
      <h6 className="text-center mb-0">
        <i className="fas fa-copyright mb-0"></i> 2023
      </h6>
      <h6>
        Photo by{' '}
        <a href="https://unsplash.com/@codioful?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
          Codioful (Formerly Gradienta)
        </a>{' '}
        on{' '}
        <a href="https://unsplash.com/photos/gwE9vXSi7Xw?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
          Unsplash
        </a>
      </h6>
    </div>
  );
}

export default Footer;
