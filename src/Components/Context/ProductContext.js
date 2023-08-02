import { createContext, useContext, useState } from "react";

const productContext = createContext(null);

export const useProduct=()=>useContext(productContext);

export const ProductProvider = ({ children }) => {
    const [product, setProduct] = useState([]);

    return (
        <productContext.Provider
            value={{
                product,
                setProduct
            }
            }
        >
            {children}
        </productContext.Provider>
    )
}