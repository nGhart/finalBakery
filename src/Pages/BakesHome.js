import React from 'react';

function BakesHome() {
  return (
    <div className="homeSection title">
      <div className="homeContainer">
        <h1>Bakes</h1>
        <div className="homeText">
          <h4>Baking goodness since 1942</h4>
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum."
          </p>
          <p className="smallImage small">
            Photo by{' '}
            <a href="https://unsplash.com/@biglaughkitchen?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
              Deva Williamson
            </a>{' '}
            on{' '}
            <a href="https://unsplash.com/photos/rHz-DkDgA1k?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
              Unsplash
            </a>
          </p>
          <p className="bigImage small">
            Photo by{' '}
            <a href="https://unsplash.com/@caities_cakes_amsterdam?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
              Caitlyn de Wild
            </a>{' '}
            on{' '}
            <a href="https://unsplash.com/photos/sxIVqaksdfE?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
              Unsplash
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default BakesHome;
