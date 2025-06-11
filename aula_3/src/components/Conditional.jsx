import './Conditional.css'
import React, { useState } from 'react';

export default function Conditional() {
    const hugo1 =  './Hugo1.jfif';
    const hugo2 = './Hugo2.webp';
    const hugo3 = './Hugo3.jfif'
    
    const [currentImage, setCurrentImage] = useState(hugo1);
    
    const handleClick = () => {
        setCurrentImage(imagem_atual => {
            if (imagem_atual === hugo1) return hugo2;
            if (imagem_atual === hugo2) return hugo3;
            return hugo1
          });
    };
    
    return ( 
        <>
        <div>
            <div>
                <img src={currentImage} alt="Huguinho delax" className="rotating-image" />
            </div>
            <button onClick={handleClick}>Trocar imagem</button>
        </div>
        </>
      );
    }
