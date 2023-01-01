export type QuestList = {
  questlist_id: number;
  title: string;
}

export type Quest = {
  quest_id: number;
  title: string;
  questlist: QuestList['questlist_id'];
};
