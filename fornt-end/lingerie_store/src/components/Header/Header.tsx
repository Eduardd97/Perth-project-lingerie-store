import { useState } from "react";
import "./Header.css";

export const Header = () => {
    const homePage = {
        title: "Home-page",
        path: "/",
    };
    const headerRoutes = [
        {
            title: "Products",
            path: "/products",
        },
    ];

    const [activeInputClass, setActiveInputClass] = useState(false);

    const addActiveHeaderSearch = () => {
        setActiveInputClass((prevState) => !prevState);
    };

    const inputClass = `header-search-lingerie ${
        activeInputClass ? "active-header-search-lingerie" : ""
    }`;

    return (
        <div className='header-content'>
            <header className='header-box'>
                <a href={homePage.path} className='brand-logo'>
                    YU.KA
                </a>

                <nav className='navigation'>
                    {headerRoutes.map((route) => (
                        <ul key={route.title} className='navigation-list'>
                            <li className='link'>
                                <a href={route.path}>{route.title}</a>
                            </li>
                            <li className='link'>
                                <a href='#'>Colections</a>
                            </li>
                            <li className='link'>
                                <a href='#'>About Us</a>
                            </li>
                            <li className='link'>
                                <a href='#'>Contacts</a>
                            </li>
                        </ul>
                    ))}
                </nav>

                <section className='header-actions'>
                    <span
                        className='header-search'
                        onClick={addActiveHeaderSearch}
                    >
                        Search
                    </span>
                    <span className='header-login'>Log in</span>
                    <div className='header-cart-box'>
                        <span>Cart</span>
                        <span>()</span>
                    </div>
                </section>
            </header>

            <input type='text' name='search-lingerie' className={inputClass} placeholder="Search"/>
        </div>
    );
};
