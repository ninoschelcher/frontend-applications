//Reusable function to fetch data from API and turning it into JSON, thanks Laurens :)
export const fetchData = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  };