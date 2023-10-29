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

export type ApiBet = {
  C: string;
  D: string;
  DAY: string;
  LN: string;
  N: string;
  NID: string;
  OCG: { [key: string]: BetGroup };
  T: string;
};

export type Bet = {
  C: string;
  D: string;
  DAY: string;
  LN: string;
  MBS: string;
  N: string;
  NID: string;
  T: string;
  betOptions: BetOption[];
};

// Since I don't have ID's for all options, I had to use names to iterate
export const betOptionNames: string[] = [
  "1",
  "X",
  "2",
  "Alt",
  "Üst",
  "H1",
  "1(H)",
  "X(H)",
  "2(H)",
  "H2",
  "1-X",
  "1-2",
  "X-2",
  "Var",
  "Yok",
  "99+",
];
