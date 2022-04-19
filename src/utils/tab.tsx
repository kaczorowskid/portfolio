import { Tab } from '@components';

export const tab = (val: number): Array<JSX.Element> => {
  return Array.from({ length: val }, () => null).map((_, i) => <Tab key={i} />)
}