export interface CanonicalizerResult<T extends string | number> {
  canonical: T;
  display: string;
}

export interface CanonicalizerNumberOptions {
  round?: Extract<keyof Math, 'round' | 'floor' | 'ceil'>;
}

export class Canonicalizer {
  public static number(value: number, { round }: CanonicalizerNumberOptions = {}): CanonicalizerResult<number> {
    const roundedValue = round ? Math[round](value) : value;
    return {
      canonical: roundedValue,
      // TODO: Should define locale.
      display: roundedValue.toLocaleString(),
    };
  }
}
