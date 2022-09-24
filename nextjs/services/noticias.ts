import { useEffect, useState } from "react";

type NoticiaType = {
    userId: number;
    id: number;
    title: string;
    body: string;
}

export const getNoticias = async () => {
    const endpoint = "https://jsonplaceholder.typicode.com/posts";

    try {
        const response = await fetch(endpoint);
        const datos = await response.json();

        return datos as NoticiaType[];
    } catch (error) {
        console.log(error);
        return [];
    }
}

export const getNoticia = async (id?: string | number) => {
    let endpoint = `https://jsonplaceholder.typicode.com/posts/${id}`;

    try {
        const response = await fetch(endpoint);
        const datos = await response.json();

        return datos as NoticiaType;
    } catch (error) {
        console.log(error);
        return null;
    }
}

export const postNoticias = () => {

};


export const useGetNoticias = () => {
    const [items, setItems] = useState<NoticiaType[]>([]);

    useEffect(() => {
        getNoticias().then((elements) => {
            setItems(elements);
        });
    }, []);

    return items;
}

const noticiasService = {
    get: getNoticias,
    post: postNoticias,
};

export default noticiasService;