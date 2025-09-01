import React, { useState, useEffect } from 'react';

// =============================================
// FILE: src/data/menuData.js
// In a real project, you'd export this 
// export const menuData = { ... };
// =============================================
const menuData = {
  cakes: [
    { id: 1, name: 'Chocolate Truffle Cake', description: 'Rich chocolate sponge with a smooth truffle icing.', price: '₹800', image: '/images/choclate cake.webp' },
    { id: 2, name: 'Red Velvet Cake', description: 'Classic red velvet with a tangy cream cheese frosting.', price: '₹950', image: '/images/red velvet.jpg' },
    { id: 3, name: 'Pineapple Paradise', description: 'Light vanilla sponge with fresh pineapple chunks.', price: '₹750', image: '/images/pineapple cake.jpg' },
    { id: 4, name: 'Black Forest Cake', description: 'Layers of chocolate, whipped cream, and cherries.', price: '₹850', image: '/images/black forest cake.JPG' },
  ],
  pastries: [
    { id: 5, name: 'Classic Croissant', description: 'Buttery, flaky, and perfect with coffee.', price: '₹120', image: 'https://placehold.co/400x400/D2B48C/000000?text=Croissant' },
    { id: 6, name: 'Almond Danish', description: 'Sweet pastry with a rich almond filling.', price: '₹150', image: 'https://placehold.co/400x400/E6BE8A/FFFFFF?text=Danish' },
    { id: 7, name: 'Chocolate Eclair', description: 'Choux pastry filled with cream and topped with chocolate.', price: '₹180', image: 'https://placehold.co/400x400/6B2E05/FFFFFF?text=Eclair' },
     { id: 8, name: 'Cinnamon Roll', description: 'Soft, gooey, and topped with a sweet glaze.', price: '₹160', image: 'https://placehold.co/400x400/C68642/FFFFFF?text=Cinnamon+Roll' },
  ],
  breads: [
    { id: 9, name: 'Sourdough Loaf', description: 'Artisanal sourdough with a chewy crust.', price: '₹250', image: 'https://placehold.co/400x400/B8860B/FFFFFF?text=Sourdough' },
    { id: 10, name: 'Multigrain Bread', description: 'Healthy and hearty bread packed with seeds.', price: '₹200', image: 'https://placehold.co/400x400/808000/FFFFFF?text=Multigrain' },
    { id: 11, name: 'Garlic Breadsticks', description: 'Warm and savory sticks, perfect as a side.', price: '₹180', image: 'https://placehold.co/400x400/F4A460/000000?text=Garlic+Bread' },
    { id: 12, name: 'French Baguette', description: 'Classic long loaf with a crisp crust.', price: '₹150', image: 'https://placehold.co/400x400/DEB887/000000?text=Baguette' },
  ],
};


// =============================================
// FILE: src/components/Icons.jsx
// You would typically export each icon.
// export const MenuIcon = () => { ... };
// =============================================
const MenuIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
    </svg>
);

const CloseIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    </svg>
);

const PhoneIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 mr-2">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
  </svg>
);


// =============================================
// FILE: src/components/OrderPopup.jsx
// import React from 'react';
// import { PhoneIcon } from './Icons';
//
// const OrderPopup = ({ onClose }) => { ... };
// export default OrderPopup;
// =============================================
const OrderPopup = ({ onClose }) => (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50 p-4">
        <div className="bg-white rounded-xl shadow-2xl p-8 max-w-sm w-full text-center transform transition-all scale-100 opacity-100">
            <h2 className="text-2xl font-bold text-gray-800 mb-3">Order Information</h2>
            <p className="text-gray-600 mb-6">
                At this moment, we are only accepting orders over the phone.
            </p>
            <a href="tel:+911234567890" className="inline-flex items-center justify-center w-full px-6 py-3 bg-pink-500 text-white font-semibold rounded-lg hover:bg-pink-600 transition-colors duration-300 shadow-lg">
                <PhoneIcon />
                Call Us to Order
            </a>
            <button
                onClick={onClose}
                className="mt-4 text-sm text-gray-500 hover:text-gray-700"
            >
                Continue to Website
            </button>
        </div>
    </div>
);

// =============================================
// FILE: src/components/Header.jsx
// import React, { useState } from 'react';
// import { MenuIcon, CloseIcon } from './Icons';
//
// const Header = () => { ... };
// export default Header;
// =============================================
const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navLinks = [
        { href: '#cakes', text: 'Cakes' },
        { href: '#pastries', text: 'Pastries' },
        { href: '#breads', text: 'Breads' },
        { href: '#contact', text: 'Contact' }
    ];

    return (
        <header className="bg-white/80 backdrop-blur-md sticky top-0 z-40 shadow-sm">
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                <a href="#" className="text-2xl font-bold text-gray-800 tracking-wider">
                    Aman Bakery
                </a>
                <nav className="hidden md:flex items-center space-x-8">
                    {navLinks.map(link => (
                        <a key={link.href} href={link.href} className="text-gray-600 hover:text-pink-500 transition-colors duration-300">{link.text}</a>
                    ))}
                </nav>
                <div className="md:hidden">
                    <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-600 focus:outline-none">
                        {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
                    </button>
                </div>
            </div>
            {isMenuOpen && (
                <div className="md:hidden bg-white py-4">
                    {navLinks.map(link => (
                        <a key={link.href} href={link.href} onClick={() => setIsMenuOpen(false)} className="block text-center py-2 px-6 text-gray-600 hover:bg-pink-50 hover:text-pink-500">{link.text}</a>
                    ))}
                </div>
            )}
        </header>
    );
};

// =============================================
// FILE: src/components/HeroSection.jsx
// import React from 'react';
//
// const HeroSection = () => { ... };
// export default HeroSection;
// =============================================
const HeroSection = () => (
    <section className="bg-pink-50">
        <div className="container mx-auto px-6 py-20 md:py-32 text-center">
            <h1 className="text-4xl md:text-6xl font-extrabold text-gray-800 mb-4 leading-tight">
                Baked with Love, Just for You
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-8">
                Discover our delightful range of cakes, pastries, and breads, all made from scratch with the finest ingredients.
            </p>
            <a href="#cakes" className="bg-pink-500 text-white font-bold py-3 px-8 rounded-full hover:bg-pink-600 transition-transform duration-300 transform hover:scale-105 shadow-lg">
                Explore Our Menu
            </a>
        </div>
    </section>
);

// =============================================
// FILE: src/components/MenuItemCard.jsx
// import React from 'react';
//
// const MenuItemCard = ({ item }) => { ... };
// export default MenuItemCard;
// =============================================
const MenuItemCard = ({ item }) => (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 group">
        <img className="w-full h-56 object-cover" src={item.image} alt={item.name} onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/400x400/F0F0F0/AAAAAA?text=Image+Not+Found'; }} />
        <div className="p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-2">{item.name}</h3>
            <p className="text-gray-600 text-sm mb-4">{item.description}</p>
            <div className="text-lg font-semibold text-pink-500">
                {item.price}
            </div>
        </div>
    </div>
);

// =============================================
// FILE: src/components/MenuSection.jsx
// import React from 'react';
// import MenuItemCard from './MenuItemCard';
//
// const MenuSection = ({ title, id, items }) => { ... };
// export default MenuSection;
// =============================================
const MenuSection = ({ title, id, items }) => (
    <section id={id} className="py-16 sm:py-20">
        <div className="container mx-auto px-6">
            <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-12">
                {title}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {items.map(item => <MenuItemCard key={item.id} item={item} />)}
            </div>
        </div>
    </section>
);

// =============================================
// FILE: src/components/Footer.jsx
// import React from 'react';
// import { PhoneIcon } from './Icons';
//
// const Footer = () => { ... };
// export default Footer;
// =============================================
const Footer = () => (
    <footer id="contact" className="bg-gray-800 text-white">
        <div className="container mx-auto px-6 py-12 text-center">
            <h3 className="text-2xl font-bold mb-2">The Bake Shop</h3>
            <p className="text-gray-400 mb-4">
                123 Bakery Lane, Sweetville, CA 90210
            </p>
            <div className="flex justify-center items-center space-x-4 mb-6">
                <PhoneIcon />
                <a href="tel:+911234567890" className="text-lg text-pink-400 hover:text-pink-300">+91 12345 67890</a>
            </div>
             <div className="text-gray-500 text-sm">
                &copy; {new Date().getFullYear()} The Bake Shop. All Rights Reserved.
            </div>
        </div>
    </footer>
);

// =============================================
// FILE: src/App.jsx
// This is the main component that brings everything together.
//
// import React, { useState, useEffect } from 'react';
// import { menuData } from '../data/menuData';
// import OrderPopup from './components/OrderPopup';
// import Header from './components/Header';
// import HeroSection from './components/HeroSection';
// import MenuSection from './components/MenuSection';
// import Footer from './components/Footer';
// =============================================
export default function App() {
    const [showPopup, setShowPopup] = useState(false);

    useEffect(() => {
        const popupShown = sessionStorage.getItem('popupShown');
        if (!popupShown) {
            setShowPopup(true);
            sessionStorage.setItem('popupShown', 'true');
        }
    }, []);

    const handleClosePopup = () => {
        setShowPopup(false);
    };

    return (
        <div className="bg-gray-50 font-sans antialiased">
            {showPopup && <OrderPopup onClose={handleClosePopup} />}
            
            <Header />
            
            <main>
                <HeroSection />
                <MenuSection title="Our Special Cakes" id="cakes" items={menuData.cakes} />
                <div className="border-t border-gray-200 container mx-auto"></div>
                <MenuSection title="Fresh Pastries" id="pastries" items={menuData.pastries} />
                 <div className="border-t border-gray-200 container mx-auto"></div>
                <MenuSection title="Artisanal Breads" id="breads" items={menuData.breads} />
            </main>
            
            <Footer />
        </div>
    );
}