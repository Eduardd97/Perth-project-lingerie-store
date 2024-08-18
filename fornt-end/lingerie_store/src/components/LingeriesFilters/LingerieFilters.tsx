import { ChangeEvent, useState } from "react";
import "./LingeriesFilters.css";
import { FilterCategory } from "../../type";

const size: FilterCategory = ["XS", "S", "M", "L", "XL"];
const material: FilterCategory = [
    "Cotton",
    "Silk",
    "Lace",
    "Microfiber",
    "Spandex",
    "Bamboo",
    "Atlas",
];
const purpose: FilterCategory = [
    "Daily underwear",
    "Sportswear",
    "Sleepwear",
    "Shapewear",
    "Romantic lingerie",
    "Classic lingerie",
    "Erotic lingerie",
];
const seasonality: FilterCategory = [
    "Summer collections",
    "Winter collections",
    "Off-season",
];

export const LingerieFilters = () => {
    const [value, setValue] = useState<number>(55);

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setValue(Number(event.target.value));
    };

    const [selectedFilters, setSelectedFilters] = useState<string[]>([]);

    const handleFilterClick = (filterCategory: string) => {
        setSelectedFilters(prevState => {
            // Check if the category is already in the selectedFilters array
            if (prevState.includes(filterCategory)) {
                // If it is, remove it from the array (deselect)
                return prevState.filter(category => category !== filterCategory);
            } else {
                // If it isn't, add it to the array (select)
                return [...prevState, filterCategory];
            }
        });
        console.log(selectedFilters);
    };

    return (
        <div className='content-filters-box'>
            <h2
                style={{
                    margin: "0 0 40px 0",
                    width: "100%",
                    textAlign: "start",
                }}
            >
                Filters:
            </h2>
            <div
                className='slider-container'
                style={{ display: "flex", alignItems: "center" }}
            >
                <span style={{ margin: "0 10px 0 0", fontSize: "19px" }}>
                    Price
                </span>
                <input
                    type='range'
                    min={10}
                    max={100}
                    value={value}
                    onChange={handleChange}
                    style={{ marginRight: "10px" }}
                />
                <span
                    className='value-display'
                    style={{ fontWeight: "bold", fontSize: "17px" }}
                >
                    {value}$
                </span>
            </div>

            <ul className='filter-box'>
                <li className='filter-box-name'>
                    <h3 className='fliter-name'>Material</h3>
                </li>
                {material.map((m, index) => (
                    <ul key={`${m}-${index}`} className='filter-categori'>
                        <li onClick={() => handleFilterClick(m)}>{m}</li>
                    </ul>
                ))}
            </ul>

            <ul className='filter-box'>
                <li className='filter-box-name'>
                    <h3 className='fliter-name'>Size</h3>
                </li>

                {size.map((s, index) => (
                    <ul key={`${s}-${index}`} className='filter-categori'>
                        <li>{s}</li>
                    </ul>
                ))}
            </ul>

            <ul className='filter-box'>
                <li className='filter-box-name'>
                    <h3 className='fliter-name'>Purpose</h3>
                </li>
                {purpose.map((p, index) => (
                    <ul key={`${p}-${index}`} className='filter-categori'>
                        <li>{p}</li>
                    </ul>
                ))}
            </ul>

            <ul className='filter-box'>
                <li className='filter-box-name'>
                    <h3 className='fliter-name'>Seasonality</h3>
                </li>
                {seasonality.map((season, index) => (
                    <ul key={`${season}-${index}`} className='filter-categori'>
                        <li>{season}</li>
                    </ul>
                ))}
            </ul>

            <button className='apply-filters'>Apply Filters</button>
        </div>
    );
};
