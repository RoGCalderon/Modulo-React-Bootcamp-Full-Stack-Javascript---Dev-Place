import { createContext } from 'react';
//createContext es una función de react para crear un contexto.

//creación del contexto

export const ProductosContext = createContext();

export const ProductosProvider = ({children}) =>{
    return(
        <ProductosContext.Provider value={{}}> 
            {children}
        </ProductosContext.Provider> 
    )
}

