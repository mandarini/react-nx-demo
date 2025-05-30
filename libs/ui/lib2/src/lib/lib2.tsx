import styles from './lib2.module.css';
import { Lib3 } from '@react-demo/lib3';

export function Lib2() {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Lib2!</h1>
      <Lib3 />
    </div>
  );
}

export default Lib2;
