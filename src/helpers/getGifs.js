

export const getGifs = async( category ) => {
    
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI( category )}&limit=10&api_key=KBt4eeR7tLn3PUUO4gsWJyjNaTm7N3qE`;
    const resp = await fetch( url );
    const { data } = await resp.json();

    const gifs = data.map( img => {
      return {
        id : img.id,
        title : img.title,
        url : img.images?.downsized_medium.url
      }
    })

    return gifs;
  }