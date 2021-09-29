import * as styled from '../style';

export const tab = (val: number): Array<JSX.Element> => {
    return Array.from({ length: val }, () => null).map((_, i) => <styled.Tab key={i} /> )
}