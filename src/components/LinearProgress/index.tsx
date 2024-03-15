import styles from "./styles.module.scss";
import clsx from "clsx";

interface ILinearProgress {
  className?: string;
}

const LinearProgress = (props: ILinearProgress) => {
  const { className } = props;
  return (
    <progress
      className={clsx('w-full', styles.pureMaterialProgressLinear, {
        [`${className}`]: !!className,
      })}
    />
  );
};

export default LinearProgress;
