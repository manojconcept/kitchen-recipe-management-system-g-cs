import React, { useEffect, useState, useCallback } from "react";
import { GetScrollRecipeDatas } from "../../config/api/router/recipeApi";
import Grid from "../../components/Grid";
import Skeleton from "../../components/Loading/Cardskeleton";
import SecondNav from "../../components/Navbar/SecondNav";

const Main = () => {

    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [index, setIndex] = useState(2);

    const fetchData = useCallback(async () => {
        if (isLoading) return;
        setIsLoading(true);
        await GetScrollRecipeDatas(setItems, index); 
        setIsLoading(false);
        setIndex(prevIndex => prevIndex + 1);
    }, [index, isLoading]);

    useEffect(() => {
        const getData = async () => {
            setIsLoading(true);
            await GetScrollRecipeDatas(setItems); 
            setIsLoading(false);
        };
        getData();
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            const { scrollTop, clientHeight, scrollHeight } = document.documentElement;
            if (scrollTop + clientHeight >= scrollHeight - 20) {
                fetchData();
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [fetchData]);

    if (isLoading || items.length === 0) {
        return (
            <Skeleton numCards={12} />
        );
    }

    return (
        <>
        <SecondNav/>
            <Grid
                captureData={items}
                isLoading={isLoading}
            />
        </>
    );
}

export default Main;
