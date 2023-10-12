import React, {useState} from "react";

function Products() {
    let [productsList, setProductsList] = useState([])
    let [newProductName, setNewProductName] = useState('');
    const onBtnAddClick = () => {
        setProductsList([...productsList, newProductName])
    };
    const removeProduct = (pn) => {
        setProductsList(productsList.filter(p => p !== pn))
    };
    let productListItems = productsList.map((pn, idx) => <li key={idx}>
        <span>{pn}</span>
        <button onClick={() => removeProduct(pn)}>X</button>
    </li>)
    return (
        <div>
            <h3>Products</h3>
            <input type="text" onInput={evt => setNewProductName(evt.target.value)} />
            <button onClick={onBtnAddClick}>Add</button>
            <ul>
                {productListItems}
            </ul>
        </div>
    )
}
export default Products;