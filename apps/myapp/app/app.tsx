// Uncomment this line to use CSS modules
// import styles from './app.module.css';
import NxWelcome from './nx-welcome';
import { Lib4 } from '@react-demo/lib4';
import { ulib1 } from '@react-demo/ulib1';
import { ulib3 } from '@react-demo/ulib3';

export function App() {
  console.log(ulib1());
  console.log(ulib3());
  return (
    <div>
      <NxWelcome title="@react-demo/myapp" />
      <Lib4></Lib4>
    </div>
  );
}

export default App;
