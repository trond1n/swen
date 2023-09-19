import styles from "./styles.module.css";
interface Props {
  image: string;
}

const Image: React.FC<Props> = ({ image }) => {
  return (
    <div className={styles.wrapper}>
      {image ? <img src={image} alt="news" className={styles.image} /> : null}
    </div>
  );
};
export default Image;
