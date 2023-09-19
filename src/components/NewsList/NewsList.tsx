import NewsItem from "../NewsItem/NewsItem";
import styles from "./styles.module.css";
interface NewsItem {
  id: string;
  title: string;
  description: string;
  url: string;
  author: string;
  image: string;
  published: string;
  language: string;
  category: string[];
}

// Определение интерфейса для пропсов компонента
interface NewsListProps {
  news: NewsItem[]; // Ожидаем массив новостей в пропсах
}

const NewsList: React.FC<NewsListProps> = ({ news }) => {
  return (
    <ul className={styles.list}>
      {news.map((item) => {
        return <NewsItem key={item.id} item={item}/>;
      })}
    </ul>
  );
};
export default NewsList;
