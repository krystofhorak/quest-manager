import { useQuests } from '../hooks/dataHooks';

const HomePage = (): JSX.Element => {
  const { quests } = useQuests();
  console.log(quests);  

  return (
    <>
      <h1>Home</h1>
    </>
  );
};

export default HomePage;
