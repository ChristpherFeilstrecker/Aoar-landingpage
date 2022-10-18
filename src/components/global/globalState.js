import { useEffect, useState } from "react";
import GlobalContext from "./globalContext";
import useRequestData from "../hooks/useRequestData";
import { BASE_URL } from "../constants/BaseURL";

export default function GlobalState(props) {
    
    /*
    const galerias = useRequestData(BASE_URL+"/galerias/")
    const parametros = useRequestData(BASE_URL+"/parametros/")
    const json = useRequestData(BASE_URL+"/produto/")
    const produtos = json && JSON.parse(json)
    
    let destaques = [
        { id: 0, imagem: img1, descricao: "Um bom desafio tem em si sua recompensa" },
        { id: 1, imagem: img2, descricao: "Na estratégia, decisiva é a aplicação" },
        { id: 2, imagem: img3, descricao: "A dedicação é fruto da persistência" },
        { id: 3, imagem: img4, descricao: "Turkienicz Advogados Associados" }
    ]
    
*/

//let areas = useRequestData(BASE_URL+"/servicos")

    /*   
      const removeFromCart = (item) => {
          const index = cart.findIndex((i) => item.id === i.id)
          const newCart = [...cart]
          newCart.splice(index, 1)
          setCart(newCart)
      }
  
      const addCountProduct = ((id) => {
          const newCart = [...cart]
          const index = newCart.findIndex((i) => id === i.id)
  
          const newQtd = Number(newCart[index].quantidade) + 1
  
          newCart[index].quantidade = newQtd
          setCart(newCart)
      })
  
      const removeCountProduct = ((id) => {
          const newCart = [...cart]
          const index = newCart.findIndex((i) => id === i.id)
  
          if (newCart[index].quantidade === 0) {
              return newCart
          } else {
              const newQtd = Number(newCart[index].quantidade) - 1
              newCart[index].quantidade = newQtd
  
          }
          setCart(newCart)
  
      })
  */
    /*
        useEffect(() => {
            const data = localStorage.getItem('cart')
            if (data) {
                setCart(JSON.parse(data))
            }
        }, [])
    
        
        useEffect(() => {
            localStorage.setItem('cart', JSON.stringify(cart))
        }, [cart])
   
*/
 
 

    const data = {
       
    }

    return (<GlobalContext.Provider value={data}>
        {props.children}
    </GlobalContext.Provider>
    )
}

