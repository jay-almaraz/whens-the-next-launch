import React from "react";
import { DateTime } from "luxon";

interface DateProps {
  dateString: string;
}

const Date = (props: DateProps) => {
  const { dateString } = props;
  const date = DateTime.fromISO(dateString);

  return <time dateTime={dateString}>{date.toFormat("LLLL d, yyyy")}</time>;
};

export { Date };
