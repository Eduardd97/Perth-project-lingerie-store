import { ChangeEvent, useState } from "react";
import "./LingeriesFilters.css"

export const LingerieFilters = () => {
    const [value, setValue] = useState<number>(55);

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setValue(Number(event.target.value));
    };

    return (
        <div className="content-filters-box">
            <h2 style={{margin: "0 0 40px 0", width: "100%", textAlign: "start"}}>Filters:</h2>
            <div
                className='slider-container'
                style={{ display: "flex", alignItems: "center" }}
            >
                <span style={{ margin: "0 10px 0 0", fontSize: "19px" }}>Price</span>
                <input
                    type='range'
                    min={10}
                    max={100}
                    value={value}
                    onChange={handleChange}
                    style={{ marginRight: "10px" }}
                />
                <span className='value-display' style={{ fontWeight: "bold", fontSize: "17px"}}>
                    {value}$
                </span>
            </div>

            <ul className="filter-box">
                <li className="filter-box-name"><h3 className="fliter-name">Material</h3></li>
                <ul className="filter-categori">
                    <li>Cotton</li>
                    <li>Silk</li>
                    <li>Lace</li>
                    <li>Microfiber</li>
                    <li>Spandex</li>
                    <li>Bamboo</li>
                    <li>Atlas</li>
                    <li>Net</li>
                </ul>
            </ul>

            <ul className="filter-box">
                <li className="filter-box-name"><h3 className="fliter-name">Size</h3></li>
                <ul className="filter-categori">
                    <li>XS</li>
                    <li>S</li>
                    <li>M</li>
                    <li>L</li>
                    <li>XL</li>
                </ul>
            </ul>

            <ul className="filter-box">
                <li className="filter-box-name"><h3 className="fliter-name">Purpose</h3></li>
                <ul className="filter-categori">
                    <li>Daily underwear</li>
                    <li>Sportswear</li>
                    <li>Sleepwear</li>
                    <li>Shapewear</li>
                    <li>Romantic lingerie</li>
                    <li>Classic lingerie</li>
                    <li>Erotic lingerie</li>
                </ul>
            </ul>

            <ul className="filter-box">
                <li className="filter-box-name"><h3 className="fliter-name">Seasonality</h3></li>
                <ul className="filter-categori">
                    <li>Summer collections</li>
                    <li>Winter collections</li>
                    <li>Off-season</li>
                </ul>
            </ul>

            <button className="apply-filters">Apply Filters</button>
        </div>
    );
};



