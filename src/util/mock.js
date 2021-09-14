const productos = [{
        id: 1,
        foto: "https://http2.mlstatic.com/D_NQ_NP_705847-MLA47167166169_082021-O.webp",
        description: "Gabinete",
    },
    {
        id: 2,
        foto: "https://http2.mlstatic.com/D_NQ_NP_705847-MLA47167166169_082021-O.webp",
        description: "Gabinete",
    },
    {
        id: 3,
        foto: "https://http2.mlstatic.com/D_NQ_NP_705847-MLA47167166169_082021-O.webp",
        description: "Gabinete",
    },
    {
        id: 4,
        foto: "https://http2.mlstatic.com/D_NQ_NP_705847-MLA47167166169_082021-O.webp",
        description: "Gabinete",
    },
    {
        id: 5,
        foto: "https://http2.mlstatic.com/D_NQ_NP_705847-MLA47167166169_082021-O.webp",
        description: "Gabinete",
    },
    {
        id: 6,
        foto: "https://http2.mlstatic.com/D_NQ_NP_705847-MLA47167166169_082021-O.webp",
        description: "Gabinete",
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
    id: 7,
    foto: "https://http2.mlstatic.com/D_NQ_NP_705847-MLA47167166169_082021-O.webp",
    description: "Gabinete",
    
}

export const getFetchUno = new Promise((resolve) => {
    setTimeout(() => {
        resolve(product)
    }, 5000)
})