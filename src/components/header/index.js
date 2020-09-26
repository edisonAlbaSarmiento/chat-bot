import React, { Component } from 'react'
import { Contenedor } from './style';
import { ContenedorMenu } from './style';
import { ContenedorLinea } from './style';
import { ContenedorLogo } from './style';


class Header extends Component {
    render() {
        return (
            <Contenedor>
                 <ContenedorLogo>   
                    <div>
                        <img src="https://themes.muffingroup.com/be/party3/wp-content/uploads/2020/02/party3.png" data-height="100" alt="party3" data-no-retina="">
                            </img>  
                    </div>  
                </ContenedorLogo>                     
                <ContenedorMenu>  
                    <div>                   
                        <ContenedorLinea>                        
                        Inicio
                        Nosotros
                        Galeria
                        Contacto                     
                        </ContenedorLinea> 
                    </div>  
                </ContenedorMenu>  
            </Contenedor>
        )
    }
}

export default Header
