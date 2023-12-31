/***
 * VISTA: Es lo que el usuario ve, la interfaz gráfica. 
 * Muestra los datos del modelo al usuario y envía comandos al controlador.
 */

// necesitamos retornar el html completo

export const builtTweet = (tweet) => {
    return `
    <span>${tweet.handler}</span>
    <span>${tweet.date}</span>
    <img src="${tweet.photo}" alt="tweet image">
    <p>${tweet.message}</p>
    <p>${tweet.likes}</p>`
}


export const emptyTweets = () => {
    return `<h3>No hay tweets disponibles</h3>`
}