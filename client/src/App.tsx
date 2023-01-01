import { useQuests } from './hooks/dataHooks';

const App = (): JSX.Element => {
  const { quests } = useQuests();
  console.log(quests);  

  return (
    <>
      <h1>Initial Commit</h1>
    </>
  );
};

export default App;
