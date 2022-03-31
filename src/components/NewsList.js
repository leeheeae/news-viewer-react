import { useState, useEffect } from "react";
import styled from "styled-components";
import NewsItem from "./NewsItem";
import axios from "axios";

const NewsListBlock = styled.div`
    box-sizing: border-box;
    padding-bottom: 3rem;
    width: 768px;
    margin: 2rem auto 0;

    @media screen and (max-width: 768px) {
        width: 100%;
        padding: 0 1rem;
    }
`;

const NewsList = ({ category }) => {
    const [articles, setArticles] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const query = category === "all" ? "" : `&category=${category}`;
                const response = await axios.get(
                    `https://newsapi.org/v2/top-headlines?country=kr${query}&apikey=4f46e736be174af89f54440638fe7956`
                );
                setArticles(response.data.articles);
            } catch (err) {
                console.error(err);
            }
            setLoading(false);
        };
        fetchData();
    }, [category]);

    //대기중일때
    if (loading) {
        return <NewsListBlock>대기중...</NewsListBlock>;
    }

    //아직 articles 값이 설정되지 않았을 때
    if (!articles) {
        return null;
    }

    return (
        <NewsListBlock>
            {articles.map((article) => (
                <NewsItem key={article.url} article={article} />
            ))}
        </NewsListBlock>
    );
};

export default NewsList;
