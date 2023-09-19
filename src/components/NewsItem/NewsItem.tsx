import { formatTimeAgo } from "../../helpers/formatTimeAgo";
import styles from "./styles.module.css";
interface Props {
  item: {
    title: string;
    description: string;
    url: string;
    author: string;
    image: string;
    published: string;
  };
}

const NewsItem: React.FC<Props> = ({
  item: { title, author, image, published },
}) => {
  return (
    <li className={styles.item}>
      <div
        className={styles.wrapper}
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      <div className={styles.info}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.extra}>
          {formatTimeAgo(published)} by {author}
        </p>
      </div>
    </li>
  );
};
export default NewsItem;
