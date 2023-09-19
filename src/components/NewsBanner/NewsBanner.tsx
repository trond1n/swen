import { formatTimeAgo } from "../../helpers/formatTimeAgo";
import Image from "../Image/Image";
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

const NewsBanner: React.FC<Props> = ({
  item: { title, author, image, published },
}) => {
  return (
    <div className={styles.banner}>
      <Image image={image} />
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.extra}>
        {formatTimeAgo(published)} by {author}
      </p>
    </div>
  );
};
export default NewsBanner;
