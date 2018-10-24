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