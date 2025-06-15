export const fetchRandomCat = async () => {
    const response = await fetch(
        'https://api.thecatapi.com/v1/images/search?limit=1&api_key=live_pdHLr8uP5Pf1z77olEDT6O5vGVessjo4KCqD63BI4kdaH2E0eB09H6iLS3lHTfbr'
    );
    const data = await response.json();
    return data[0].url;
};