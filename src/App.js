import React from 'react';
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import Home from './pages and components/Home';
import Header from './pages and components/Header';
import NotFound from './pages and components/NotFound';
import Products from './pages and components/Products';
import SideBar from './pages and components/SideBar';
import CreateP from './pages and components/Create';
import Update from './pages and components/Update';

const Layout = () => (
  <div className="MyAPP">
    <Header />
    <div className="app-container">
      <SideBar />
      <Outlet />
    </div>
  </div>
);

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="products" element={<Products />} />
          <Route path="products/create" element={<CreateP />} />
          <Route path="products/:Pid/edit" element={<Update />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;