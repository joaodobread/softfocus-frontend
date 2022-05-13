export enum CouseOfLoss {
  excessive_rain = 'excessive_rain',
  frost = 'frost',
  hail = 'hail',
  dry = 'dry',
  gale = 'gale',
  ray = 'ray',
}

export const causeOfLossMapping: { [x: string]: string } = {
  excessive_rain: 'Excessive Rain',
  frost: 'Frost',
  hail: 'Hail',
  dry: 'Dry',
  gale: 'Gale',
  ray: 'Ray',
};

export const getCouseOfLoss = (couse: string) => {
  return causeOfLossMapping[couse];
};
