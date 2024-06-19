export const getLatestLaunches = async (): Promise<Doc[]> => {
  const res = await fetch("https://api.spacexdata.com/v5/launches/query", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: {},
      options: {
        limit: 10,
      },
    }),
  });
  const { docs: launches } = (await res.json()) as ApiSpaceXResponse;

  return launches;
};

export const getLaunchById = async ({ id }: { id: string }): Promise<Doc> => {
  const res = await fetch(`https://api.spacexdata.com/v5/launches/${id}`);
  const launch = (await res.json()) as Doc;

  return launch;
};
