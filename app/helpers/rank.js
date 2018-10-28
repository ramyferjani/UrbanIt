export function getRank (elo) {
  if (elo > 0 && elo <= 800) {
    return 1;
  } else if (elo > 800 && elo <= 950) {
    return 2;
  } else if (elo > 950 && elo <= 1100) {
    return 3;
  } else if (elo > 1100 && elo <= 1250) {
    return 4;
  } else if (elo > 1250 && elo <= 1400) {
    return 5;
  } else if (elo > 1400 && elo <= 1550) {
    return 6;
  } else if (elo > 1550 && elo <= 1700) {
    return 7;
  } else if (elo > 1700 && elo <= 1850) {
    return 8;
  } else if (elo > 1850 && elo <= 2000) {
    return 9;
  } else if (elo > 2000) {
    return 10;
  }
}

export function getRankIcon (elo) {
  switch(getRank(elo)) {
    case 1:
      return 'numeric-1-box';
    case 2:
      return 'numeric-2-box';
    case 3:
      return 'numeric-3-box';
    case 4:
      return 'numeric-4-box';
    case 5:
      return 'numeric-5-box';
    case 6:
      return 'numeric-6-box';
    case 7:
      return 'numeric-7-box';
    case 8:
      return 'numeric-8-box';
    case 9:
      return 'numeric-9-box';
    case 10:
      return 'numeric-9-plus-box';
    default:
      return 1;
  }
}