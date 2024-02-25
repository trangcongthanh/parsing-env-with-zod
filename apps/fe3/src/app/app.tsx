// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';

import NxWelcome from './nx-welcome';
import { env } from '../env';

export function App() {
  return (
    <div>
      <NxWelcome title="fe3" />
      <pre>{JSON.stringify(env, null, 2)}</pre>
    </div>
  );
}

export default App;
