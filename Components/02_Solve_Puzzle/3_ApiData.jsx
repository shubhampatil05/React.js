const Data = [
  {
    id: 1,
    Question:
      "There are two ducks in front of a duck, two ducks behind a duck and a duck in the middle. How many ducks are there?",
    Answer:
      "Three. Two ducks are in front of the last duck; the first duck has two ducks behind; one duck is between the other two.",
  },
  {
    id: 2,
    Question:
      "Five people were eating apples, A finished before B, but behind C. D finished before E, but behind B. What was the finishing order?",
    Answer:
      "CABDE. Putting the first three in order, A finished in front of B but behind C, so CAB. Then, we know D finished before B, so CABD. We know E finished after D, so CABDE",
  },
  {
    id: 3,
    Question:
      "Jack is looking at Anne. Anne is looking at George. Jack is married, George is not, and we don’t know if Anne is married. Is a married person looking at an unmarried person?",
    Answer:
      "Yes. If Anne is married, then she is married and looking at George, who is unmarried. If Anne is unmarried, then Jack, who is married, is looking at her. Either way, the statement is correct.",
  },
  {
    id: 4,
    Question:
      "A man has 53 socks in his drawer: 21 identical blue, 15 identical black and 17 identical red. The lights are out and he is completely in the dark. How many socks must he take out to make 100 percent certain he has at least one pair of black socks?",
    Answer:
      "40 socks. If he takes out 38 socks (adding the two biggest amounts, 21 and 17), although it is very unlikely, it is possible they could all be blue and red. To make 100 percent certain that he also has a pair of black socks he must take out a further two socks.",
  },
  {
    id: 5,
    Question:
      "The day before two days after the day before tomorrow is Saturday. What day is it today?",
    Answer:
      " Friday. The “day before tomorrow” is today; “the day before two days after” is really one day after. So if “one day after today is Saturday,” then it must be Friday.",
  },
];

export { Data };
