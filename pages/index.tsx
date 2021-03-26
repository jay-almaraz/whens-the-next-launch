import Layout from "@components/Layout";
import SpaceXLogo from "@components/SpaceXLogo";
import { getNextLaunch, Launch, LaunchDatePrecision } from "@lib/launches";
import { Box, Heading, Label, Select } from "@theme-ui/components";
import { IANA_TIMEZONES } from "@utils/timezones";
import { DateTime, LocalZone } from "luxon";
import { useEffect, useState } from "react";

interface HomeProps {
  data: Launch;
}

const LabelSpan = ({ children, ...rest }) => {
  return (
    <Box
      role="text"
      as="span"
      sx={{
        //
        fontSize: 16,
        margin: 0,
        padding: 0,
        marginTop: 2,
        ...rest.sx,
      }}
    >
      {children}
      <br />
    </Box>
  );
};

const EmphSpan = ({ children }) => {
  return (
    <Box
      role="text"
      as="span"
      sx={{
        //
        fontSize: 39,
        fontWeight: "bold",
        margin: 0,
        padding: 0,
        marginTop: 1,
        overflow: "visible",
      }}
    >
      {children}
      <br />
    </Box>
  );
};

interface EmphClockProps {
  dateTime: DateTime;
}

const EmphClock = (props: EmphClockProps) => {
  const { dateTime } = props;
  const hour = dateTime.toFormat("hh");
  const minute = dateTime.toFormat("mm");
  const meridiem = dateTime.toFormat("a").toLocaleLowerCase();

  const [tick, setTick] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setTick((prev) => !prev);
    }, 1000);
    return () => clearTimeout(timer);
  }, [tick]);

  return (
    <Box
      role="text"
      as="span"
      sx={{
        //
        fontSize: 36,
        fontWeight: "bold",
        margin: 0,
        padding: 0,
        marginTop: 1,
        overflow: "visible",
      }}
    >
      {hour}
      <Box as="span" sx={{ opacity: tick ? 0 : 1 }}>
        :
      </Box>
      {minute} {meridiem}
      <br />
    </Box>
  );
};

interface TimezoneSelectProps {
  localZone: string;
  timeZone: string;
  handleTimezoneChange: (tz: string) => void;
}

const TimezoneSelect = (props: TimezoneSelectProps) => {
  const { localZone, timeZone, handleTimezoneChange } = props;
  const hasLocalSelected = localZone === timeZone;
  return (
    <Box as="form">
      <Label
        sx={{
          //
          fontSize: 12,
          fontWeight: "bold",
          margin: 0,
          padding: 0,
          marginTop: 2,
          marginBottom: 2,
        }}
      >
        {hasLocalSelected ? "your local time" : "in your selected timezone"}
      </Label>
      <Select
        defaultValue={localZone}
        onChange={(event) => handleTimezoneChange(event.target.value)}
      >
        {IANA_TIMEZONES.map((tz) => (
          <option key={tz}>{tz}</option>
        ))}
      </Select>
    </Box>
  );
};

function getQuarterFromMonth(month: number): number {
  if (month < 4) return 1;
  if (month < 7) return 2;
  if (month < 10) return 3;
  return 4;
}

const MONTH_PRECISION_FORMAT = {
  ...DateTime.DATE_FULL,
  day: undefined,
  weekday: undefined,
};

const DAY_PRECISION_FORMAT = Object.assign(DateTime.DATE_FULL, {
  weekday: "long",
});

function getDateTextAtPrecision(
  dateTimeUTC: DateTime,
  datePrecision: LaunchDatePrecision
) {
  if (datePrecision === "year") {
    return `~ ${dateTimeUTC.toFormat("yyyy")}`;
  }
  if (datePrecision === "half") {
    const isFirstHalf = dateTimeUTC.month <= 6;
    const qBlockText = isFirstHalf ? "[Q1|Q2]" : "[Q3|Q4]";
    return `~ ${qBlockText} ${dateTimeUTC.toFormat("yyyy")}`;
  }
  if (datePrecision === "quarter") {
    const quarter = getQuarterFromMonth(dateTimeUTC.month);
    const qBlockText = `Q${quarter}`;
    return `~ ${qBlockText} ${dateTimeUTC.toFormat("yyyy")}`;
  }
  if (datePrecision === "month") {
    return `~ ${dateTimeUTC.toLocaleString(MONTH_PRECISION_FORMAT)}`;
  }
  if (datePrecision === "day") {
    return `~ ${dateTimeUTC.toLocaleString(DAY_PRECISION_FORMAT)}`;
  }
  return dateTimeUTC.toLocaleString(DAY_PRECISION_FORMAT);
}

const EmphDate = (props: {
  dateTimeUTC: DateTime;
  datePrecision: LaunchDatePrecision;
  timeZone: string;
}) => {
  const { dateTimeUTC, datePrecision, timeZone } = props;

  const dateTimeLocal = dateTimeUTC.setZone(timeZone);

  return (
    <EmphSpan>
      {getDateTextAtPrecision(
        datePrecision === "hour" ? dateTimeLocal : dateTimeUTC,
        datePrecision
      )}
    </EmphSpan>
  );
};

const SubjectToChangeWarning = ({ symbol }) => (
  <LabelSpan
    sx={{
      maxWidth: 148,
      textTransform: "uppercase",
      color: "#FFC700",
      fontWeight: "bold",
    }}
  >
    {symbol} This information may be subject to change
  </LabelSpan>
);

export default function Home(props: HomeProps) {
  const {
    data: { name, date_utc, details, date_precision },
  } = props;

  const localZone = new LocalZone();
  const [timeZone, setTimeZone] = useState<string>(localZone.name);
  const dateTimeUTC = DateTime.fromISO(date_utc, { zone: "utc" });
  const showTimezoneSelect = date_precision === "hour";

  function handleTimezoneChange(tz: string) {
    setTimeZone(tz);
  }

  return (
    <Layout>
      <Heading as="h1" sx={{ padding: 0, margin: 0, fontSize: "0px" }}>
        When's the next launch?
      </Heading>
      <Box
        as="p"
        sx={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Box
          aria-hidden
          as="span"
          sx={{ width: ["100%", 500], overflow: "hidden" }}
        >
          <SpaceXLogo />
        </Box>
        <Box
          sx={{ fontSize: "0px", height: 0 }}
          as="span"
          role="text"
          id="spaceXLogoAriaDescription"
        >
          SpaceX{" "}
        </Box>
        <LabelSpan>has scheduled the </LabelSpan>
        <EmphSpan>{name} </EmphSpan>
        <LabelSpan>mission for </LabelSpan>
        <EmphDate
          dateTimeUTC={dateTimeUTC}
          datePrecision={date_precision}
          timeZone={timeZone}
        />
        {showTimezoneSelect ? (
          <>
            <LabelSpan>at</LabelSpan>
            <EmphClock dateTime={dateTimeUTC.setZone(timeZone)} />
          </>
        ) : null}
      </Box>

      {showTimezoneSelect ? (
        <TimezoneSelect
          localZone={localZone.name}
          timeZone={timeZone}
          handleTimezoneChange={handleTimezoneChange}
        />
      ) : (
        <Box as="p" sx={{ maxWidth: 196 }}>
          <LabelSpan>
            A more accurate date and time will be released closer to the launch
          </LabelSpan>
        </Box>
      )}

      <Box marginTop={4}>
        <SubjectToChangeWarning symbol="!" />
        {date_precision === "day" ? (
          <SubjectToChangeWarning symbol="$" />
        ) : null}
        {date_precision === "hour" ? (
          <>
            <SubjectToChangeWarning symbol="$" />
            <SubjectToChangeWarning symbol="\" />
          </>
        ) : null}
      </Box>
    </Layout>
  );
}

export const getStaticProps = async () => {
  const data = await getNextLaunch();
  return {
    props: {
      data,
    },
  };
};
