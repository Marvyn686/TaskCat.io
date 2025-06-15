import { useState, useEffect } from "react";
import { fetchRandomCat } from "../api/fetchRandomCat";
import { fetchRandomName } from "../api/fetchRandomName";

export function useCats() {
    const [cats, setCats] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const savedCats = localStorage.getItem('cats');
        if (savedCats) setCats(JSON.parse(savedCats));
    }, []);

    useEffect(() => {
        localStorage.setItem('cats', JSON.stringify(cats));
    }, [cats]);

    const addCat = async () => {
        setLoading(true);
        setError(null);
        try {
            const [imgUrl, nameCat] = await Promise.all([
                fetchRandomCat(),
                fetchRandomName()
            ]);

            setCats(prevCats => [
                ...prevCats,
                {
                    id: Math.random(),//можно заменить на Random.random() - пока что не завезли в JS
                    imageUrl: imgUrl,
                    name: nameCat
                }
            ]);
            // eslint-disable-next-line no-unused-vars
        } catch (err) {
            setError('Ошибка при загрузке');
        } finally {
            setLoading(false);
        }
    };

    const deleteCat = (id) => {
        setCats(prevCats => prevCats.filter(cat => cat.id !== id));
    };

    return { cats, loading, error, addCat, deleteCat };
}