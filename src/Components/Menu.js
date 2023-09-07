import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import menuitems from './menuData';
import Row from 'react-bootstrap/Row';
import face from '../images/6861718.png';
import SingleMenuItem from './SingleMenuItem';

const allCats = ['all', ...new Set(menuitems.map((item) => item.category))];

function Menu() {
  const [search, setSearch] = useState('');
  const searchResults = menuitems.filter((val) => {
    if (search === '') {
      return true; // Show all items when search is empty
    } else if (val.title.toLowerCase().includes(search.toLowerCase())) {
      return true; // Show items that match the search
    }
    return false; // Hide items that don't match the search
  });

  return (
    <>
      <div className="title text-center menuSection">
        <h1>Menu</h1>
        <div className="searchAndFilter">
          <input
            type="text"
            className="search"
            placeholder="Search menu ..."
            onChange={(e) => setSearch(e.target.value)}
          />
          <Container className="menuItems">
            <Row className="menu">
              {searchResults.length > 0 ? (
                searchResults.map((val) => (
                  <SingleMenuItem val={val} key={val.id} />
                ))
              ) : (
                <div className="sorrySection">
                  <div className="sorryContainer">
                    <img src={face} alt="sad face" className="sorry" />
                    <h2>Sorry </h2>
                  </div>
                  <h5>We do not carry that item on our menu</h5>
                </div>
              )}
            </Row>
          </Container>
        </div>
        <Container className="menuItems"></Container>
      </div>
    </>
  );
}

export default Menu;
