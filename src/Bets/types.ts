export type BetOption = {
  ID: string;
  N: string;
  O: string;
};

export type BetGroup = {
  ID: string;
  MBS: string;
  N: string;
  OC: { [key: string]: BetOption };
};

export type Bet = {
  D: string;
  DAY: string;
  LN: string;
  C: string;
  T: string;
  N: string;
  NID: string;
  OCG: { [key: string]: BetGroup };
};
