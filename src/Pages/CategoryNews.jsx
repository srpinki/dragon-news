import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import NewsCard from '../Components/NewsCard';

const CategoryNews = () => {
    const {id} = useParams();
    const data = useLoaderData();
    const [catNews, setCatNews] = useState([]);
    console.log(catNews);
    
    useEffect(() => {
        if (id == 0) {
            setCatNews(data)
            return;
        } else if (id == 1) {
            const filteredCategory = data.filter(news => news.others.is_today_pick == true);
        setCatNews(filteredCategory);
        } else {
            const filteredCategory = data.filter(news => news.category_id == id);
        setCatNews(filteredCategory);
        }
        
        
    }, [data, id])
    

    return (
        <div>
            <h2 className='mb-5'>Total <span className='text-secondary font-bold'>{catNews.length}</span> News found.</h2>

            <div className='grid grid-cols-1 gap-5'>
                {
                    catNews.map(news => <NewsCard key={news.category_id} news = {news}></NewsCard>)
                }
            </div>
        </div>
    );
};

export default CategoryNews;