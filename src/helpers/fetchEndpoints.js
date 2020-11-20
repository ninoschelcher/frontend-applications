//Reusable function to fetch data from API and turning it into JSON, thanks Laurens :)
export const fetchEndpoints = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  };