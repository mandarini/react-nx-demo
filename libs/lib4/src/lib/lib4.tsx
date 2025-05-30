import styles from './lib4.module.css';
import { Lib1 } from '@react-demo/lib1';
import { Lib2 } from '@react-demo/lib2';

export function Lib4() {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Lib4!</h1>
      <Lib1 />
      <Lib2 />
    </div>
  );
}

export default Lib4;
