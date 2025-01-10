

const ComponenteMultiple = ({ opcion, dias }) => { //componente

    const calculoCosteHotel = () => { //funcion de calculo hotel
        
        let coste = dias * 50;

        if (dias > 5) coste -= 35;
        else if (dias > 3) coste -= 25;
        
        return <p>Coste estancia Hotel: {coste}</p>

    }


    const calculoAlquilerCoche = () => { //funcion de calculo coche
        
        let coste = dias * 45;
        
        if (dias > 5) coste -= 30;
        else if (dias > 3) coste -= 15;
        
        return <p>Coste alquiler coche: {coste}</p>

    }

    //1===1 : el triple igual en javascript es una comprobacion tanto de valor como de tipo

    return <div>{opcion===1?calculoCosteHotel():opcion===2?calculoAlquilerCoche():""}</div>

}

export default ComponenteMultiple;
