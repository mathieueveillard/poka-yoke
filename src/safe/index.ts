type Fraction = {
  numerator: number;
  denominator: number;
};

const evaluateFraction = ({ numerator, denominator }: Fraction): number => {
  return numerator / denominator;
};

// No mistake possible
evaluateFraction({ numerator: 1, denominator: 2 }); // 0.5
