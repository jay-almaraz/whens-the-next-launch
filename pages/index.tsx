import Layout from "@components/Layout";
import SpaceXLogo from "@components/SpaceXLogo";
import { getNextLaunch, Launch } from "@lib/launches";
import { Box, Label, Select } from "@theme-ui/components";
import { IANA_TIMEZONES } from "@utils/timezones";
import { DateTime, LocalZone } from "luxon";
import Head from "next/head";
import { useEffect, useState } from "react";

export const SITE_TITLE = "When's the next launch?";

const HtmlHead = () => (
  <Head>
    <title>{SITE_TITLE}</title>
    <meta
      name="description"
      content="Learn how to build a personal website using Next.js"
    />

    <link rel="preconnect" href="https://fonts.gstatic.com" />
    <link
      href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@400;700&display=swap"
      rel="stylesheet"
    />
    <link rel="icon" href="/favicon.ico" />

    <meta
      property="og:image"
      content={`https://og-image.vercel.app/${encodeURI(
        SITE_TITLE
      )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
    />
    <meta name="og:title" content={SITE_TITLE} />
    <meta name="twitter:card" content="summary_large_image" />
  </Head>
);

interface HomeProps {
  data: Launch;
}

const LabelSpan = ({ children }) => {
  return (
    <Box
      as="span"
      sx={{
        //
        fontSize: 13,
        margin: 0,
        padding: 0,
        marginTop: 2,
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

const LOCAL_FORMAT = Object.assign(DateTime.DATE_FULL, { weekday: "long" });

export default function Home(props: HomeProps) {
  const {
    data: { name, date_utc, details, date_precision },
  } = props;

  const localZone = new LocalZone();
  const [timeZone, setTimeZone] = useState<string>(localZone.name);
  const dateTimeUTC = DateTime.fromISO(date_utc, { zone: "utc" });
  const dateTimeLocal = dateTimeUTC.setZone(timeZone);
  const localDate = dateTimeLocal.toLocaleString(LOCAL_FORMAT);

  function handleTimezoneChange(tz: string) {
    setTimeZone(tz);
  }

  return (
    <Layout>
      <HtmlHead />

      <Box
        as="p"
        sx={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Box as="span" sx={{ width: ["100%", 500], overflow: "hidden" }}>
          <SpaceXLogo />
        </Box>
        <LabelSpan>has scheduled the</LabelSpan>
        <EmphSpan>{name}</EmphSpan>
        <LabelSpan>mission for</LabelSpan>
        <EmphSpan>{localDate}</EmphSpan>
        <LabelSpan>at</LabelSpan>
        <EmphClock dateTime={dateTimeLocal} />
      </Box>
      <TimezoneSelect
        localZone={localZone.name}
        timeZone={timeZone}
        handleTimezoneChange={handleTimezoneChange}
      />
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
