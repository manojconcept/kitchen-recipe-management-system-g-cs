import React, { useEffect, useState,useCallback } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

import { GobalContext } from "../../contextApi/Datawrapper";
import { GetRecipeDatas, GetScrollRecipeDatas } from "../../config/api/router/recipeApi";

import Grid from "../../components/Grid";
import Skeleton from "../../components/Loading/Cardskeleton";

const Main = () => {
    const { captureData, setCaptureData } = GobalContext();

    const [items, setItems] = useState([]);
    const [hasMore, setHasMore] = useState(true);
    const [index, setIndex] = useState(1);

    // const fetchData = useCallback(async () => {
    //     if (isLoading) return;
    
    //     setIsLoading(true);
    
    //     axios
    //       .get(`https://api.escuelajs.co/api/v1/products?offset=${index}0&limit=12`)
    //       .then((res) => {
    //         setItems((prevItems) => [...prevItems, ...res.data]);
    //       })
    //       .catch((err) => console.log(err));
    //     setIndex((prevIndex) => prevIndex + 1);
    
    //     setIsLoading(false);
    //   }, [index, isLoading]);

    useEffect(() => {
        const fetchData = async () => {
            await GetRecipeDatas(setCaptureData, 1);
        };

        fetchData();
    }, [setCaptureData]);

    useEffect(() => {
        const fetchMoreData = async () => {
            await GetScrollRecipeDatas(setIndex, setHasMore, setItems, index);
        };

        fetchMoreData();
    }, [index]); 

    if (!captureData || !captureData.data) {
        return (
            <Skeleton
                numCards={12}
            />
        );
    }

    console.log(items);

    return (
        <>
            <InfiniteScroll
                dataLength={items.length}
                next={() => setIndex(prevIndex => prevIndex + 1)} // Increment index for next data fetch
                hasMore={hasMore}
                loader={<Skeleton
                    numCards={12}
                />}
            >
                <Grid
                    captureData={items}
                />
            </InfiniteScroll>
        </>
    );
}

export default Main;
