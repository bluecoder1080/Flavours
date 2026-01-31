import React from 'react';
import { Link, useLocation } from 'react-router';

const Navigation = () => {
  const location = useLocation();

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/About', label: 'About Us' },
    { path: '/Groceries', label: 'Groceries' },
    { path: '/Contact', label: 'Contact Us' }
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav>
      <ul className="flex gap-8 items-center">
        {navLinks.map(({ path, label }) => (
          <li key={path}>
            <Link
              to={path}
              className={`
                relative text-lg font-medium transition-all duration-300
                ${isActive(path) ? 'text-[var(--color-primary)]' : 'text-white'}
                hover:text-[var(--color-primary)]
                after:content-[''] after:absolute after:bottom-[-4px] after:left-0
                after:w-0 after:h-[2px] after:bg-[var(--color-primary)]
                after:transition-all after:duration-300
                hover:after:w-full
                ${isActive(path) ? 'after:w-full' : ''}
              `}
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
