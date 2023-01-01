export type Quest = {
  quest_id: number;
  title: string;
  questlist: number;
};

export type QuestList = {
  questlist_id: number;
  title: string;
  quests: Quest[];
}
