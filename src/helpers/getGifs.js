export const getGifs = async(category) => {

    const url = `https://api.giphy.com/v1/gifs/search?api_key=cYLLnmUhpzCXhRzVkCG9qMjIJLH3KAyt&q=${category}&limit=10`;

    const responseApiGifs = await fetch(url);

    const {data} = await responseApiGifs.json();

    const gifs = data.map( img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url,
    }));

    console.log(gifs);

    return gifs;

}