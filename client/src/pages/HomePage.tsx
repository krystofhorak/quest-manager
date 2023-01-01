import DefaultLayout from '../layout/DefaultLayout';
import Loader from '../components/elements/Loader';

import { useQuests } from '../hooks/dataHooks';

const HomePage = (): JSX.Element => {
  const { quests, loading } = useQuests();

  return (
    <DefaultLayout>
      <h1>Home</h1>
      <h2>Quests</h2>
      {loading ? <Loader /> : null}
      {quests && !loading ? quests.map(quest => (
        <div key={quest.quest_id}>
          <h3>{quest.title}</h3>
        </div>
      )) : null}
    </DefaultLayout>
  );
};

export default HomePage;
