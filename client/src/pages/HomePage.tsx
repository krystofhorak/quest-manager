import DefaultLayout from '../layout/DefaultLayout';
import Loader from '../components/elements/Loader';

import { useQuestLists } from '../hooks/dataHooks';

const HomePage = (): JSX.Element => {
  const { questsLists, loading } = useQuestLists();
  console.log(questsLists);

  return (
    <DefaultLayout>
      <h1>Home</h1>
      <h2>Quests</h2>
      {loading ? <Loader /> : null}
      {questsLists && !loading ? questsLists.map(questList => (
        <div key={questList.questlist_id}>
          <h3>{questList.title}</h3>
          <ul>
            {questList.quests ? questList.quests.map(quest => (
              <li key={quest.quest_id}>{quest.title}</li>
            )) : null}
          </ul>
        </div>
      )) : null}
    </DefaultLayout>
  );
};

export default HomePage;
