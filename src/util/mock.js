const productos = [


    //Gabinetes
    
    {
        id: 1,
        photoUrl: "https://luisacuadrado.com/media/gamer/gabinetes-gamer/gab-aureox-orion-350g-arx-GAB._AUREOX_ORION_350G_ARX_2cStXg7.jpg",
        title : 'GAB. AUREOX ORION 350G ARX',
        description: "Gabinete",
        precio : 7621.73

    },
    {
        id: 2,
        photoUrl: "https://luisacuadrado.com/media/gamer/gabinetes-gamer/gab-raidmax-galaxy-x230fab-GAB._RAIDMAX_GALAXY_X230FAB.jpg",
        title : 'GAB. RAIDMAX GALAXY X230FAB',
        description: "Gabinete",
        precio : 9834.79
    
    },
    {
        id: 3,
        photoUrl: "https://luisacuadrado.com/media/gamer/gabinetes-gamer/gab-redragon-tailgate-gc-702-GAB._REDRAGON_TAILGATE_GC-702.jpg",
        title : 'GAB. REDRAGON TAILGATE GC-702',
        description: "Gabinete",
        precio : 13371.30
    
    },
    {
        id: 4,
        photoUrl: "https://luisacuadrado.com/media/informatica/gabinetes/gab-thermaltake-h200-GAB._THERMALTAKE_H200_ufg0w91.jpg",
        title : 'GAB. THERMALTAKE H200',
        description: "Gabinete",
        precio : 13284.93
    
    },
    {
        id: 5,
        photoUrl: "https://luisacuadrado.com/media/gamer/gabinetes-gamer/gab-raidmax-galaxy-x230fab-GAB._RAIDMAX_GALAXY_X230FAB.jpg",
        title : 'GAB. RAIDMAX GALAXY X230FAB',
        description: "Gabinete",
        precio : 9834.79
    
    },
    {
        id: 6,
        photoUrl: "https://luisacuadrado.com/media/informatica/gabinetes/gab-thermaltake-h100-H100.jpg",
        title : 'GAB. THERMALTAKE H100',
        description: "Gabinete",
        precio : 11520.29
    
    },




    // Perifericos
    {
        id: 7,
        photoUrl: "htps://htp2.mlstatic.com/D_NQ_NP_705847-MLA47167166169_082021-O.webp",
        title  : 'teclado',
        description: "teclado",
    
    },
    {
        id: 8,
        photoUrl: "htps://htp2.mlstatic.com/D_NQ_NP_705847-MLA47167166169_082021-O.webp",
        title  : 'teclado',
        description: "teclado",

    },

    //Monitores
    {
        id: 9,
        photoUrl: "htps://htp2.mlstatic.com/D_NQ_NP_705847-MLA47167166169_082021-O.webp",
        title  : 'Monitor',
        description: "Monitor",
    

    },
    {
        id: 10,
        photoUrl: "htps://htp2.mlstatic.com/D_NQ_NP_705847-MLA47167166169_082021-O.webp",
        title  : 'Monitor',
        description: "Monitor",
    },
];

export const getFetch = new Promise((resolve, reject) => {

    let respuesta = "200";

    if (respuesta === "200") {

       setTimeout(() => resolve(productos), 3000);

        

    } else {
        reject("400")
    }

});


const product = {
    id: 11,
        photoUrl: "https://luisacuadrado.com/media/gamer/gabinetes-gamer/gab-aureox-orion-350g-arx-GAB._AUREOX_ORION_350G_ARX_2cStXg7.jpg",
        title : 'GAB. AUREOX ORION 350G ARX',
        description: "Gabinete",
        precio : 7621.73
    
}

export const getFetchUno = new Promise((resolve) => {
   setTimeout(() => {
        resolve(product)
    }, 5000)
})