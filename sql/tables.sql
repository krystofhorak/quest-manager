CREATE TABLE QuestLists(
  questlist_id SERIAL PRIMARY KEY,
  title VARCHAR(96) NOT NULL
);

CREATE TABLE Quests(
  quest_id SERIAL PRIMARY KEY,
  title VARCHAR(96) NOT NULL,
  questlist INT
);
