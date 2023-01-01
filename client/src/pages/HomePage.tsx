import DefaultLayout from '../layout/DefaultLayout';

import { useQuests } from '../hooks/dataHooks';

const HomePage = (): JSX.Element => {
  const { quests } = useQuests();
  console.log(quests);  

  return (
    <DefaultLayout>
      <h1>Home</h1>
    </DefaultLayout>
  );
};

export default HomePage;
