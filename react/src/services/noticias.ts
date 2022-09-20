import { useEffect, useState } from "react";

type NoticiaType = {
    userId: number;
    id: number;
    title: string;
    body: string;
}

export const getNoticias = async () => {
    try {
        const response = await fetch(process.env.REACT_APP_API_NOTICIAS_ENDPOINT ?? "");
        const datos = await response.json();

        return datos as NoticiaType[];
    } catch (error) {
        console.log(error);
        return [];
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