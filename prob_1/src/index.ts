// import { Response } from "./interface/interface";
interface Response {
  [index: number]: {
    title: string;
    timeframes: {
      daily: {
        current: number;
        previous: number;
      };
      weekly: {
        current: number;
        previous: number;
      };
      monthly: {
        current: number;
        previous: number;
      };
    };
  };
}

type TimePeriod = "daily" | "weekly" | "monthly";

const fetchData = async (): Promise<Response> => {
  const req = await fetch(
    "https://gist.githubusercontent.com/carmandomx/b27e23332eda1d061feb3cdada26afc0/raw/438d33407442d2abbf605e87336f48a83ccff3f5/data.json"
  );

  const data = await req.json();
  return data;
};

const setData = async (index: number, timePeriod: TimePeriod) => {
  // Get the data
  const data = await fetchData();
  // DOM elements
  const title = document.querySelector(`.title-${index}`);
  const currentHours = document.querySelector(`.current-hours-${index}`);
  const previousHours = document.querySelector(`.previous-hours-${index}`);

  // Set title
  title!.textContent = data[index].title;

  switch (timePeriod) {
    // Check if time period is daily
    case "daily":
      currentHours!.textContent = `${data[
        index
      ].timeframes.daily.current.toString()}hrs`;
      previousHours!.textContent = `Last week - ${data[
        index
      ].timeframes.daily.previous.toString()}`;
      break;

    // Check if time period is weekly
    case "weekly":
      currentHours!.textContent = `${data[
        index
      ].timeframes.weekly.current.toString()}hrs`;
      previousHours!.textContent = `Last week - ${data[
        index
      ].timeframes.weekly.previous.toString()}`;
      break;

    // Check if time period is monthly
    case "monthly":
      currentHours!.textContent = `${data[
        index
      ].timeframes.monthly.current.toString()}hrs`;
      previousHours!.textContent = `Last week - ${data[
        index
      ].timeframes.monthly.previous.toString()}`;
      break;
  }
};

// Function to place all the cards using a for loop
const placeCards = () => {
  for (let i = 0; i <= 5; i++) {
    setData(i, "daily");
  }
};

placeCards();

// setData(0, "daily");

// Link: https://gist.githubusercontent.com/carmandomx/b27e23332eda1d061feb3cdada26afc0/raw/438d33407442d2abbf605e87336f48a83ccff3f5/data.json
