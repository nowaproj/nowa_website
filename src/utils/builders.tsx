import { Fragment, ReactNode } from "react";
export const seperatedBuilder = (
  builderFunc: (idx: number) => ReactNode,
  seperatorFunc: (idx: number) => ReactNode,
  listLength: number,
  key: string
) => {
  return Array(listLength)
    .fill("")
    .map((_, idx) => (
      <Fragment key={key + idx + "seperator"}>
        {builderFunc(idx)}
        {idx !== listLength - 1 && seperatorFunc(idx)}
      </Fragment>
    ));
};
