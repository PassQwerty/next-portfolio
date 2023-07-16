import styles from "./textParagraph.module.scss";

interface Props {
  icoText: string;
  text: string;
}

const TextParagraph = ({ icoText, text }: Props) => {
  return (
    <>
      <div className={styles.textContainer}>
        <label className={styles.textInfo}>
          {/* prettier-ignore */}
          <div>
            <mark>{icoText}</mark>
            <span>{text}</span>
          </div>
        </label>
        <div className={styles.line}></div>
      </div>
    </>
  );
};
export default TextParagraph;
