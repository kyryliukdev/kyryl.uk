export default async function api(path: string, params?: any) {
  const defaultParams = {
    headers: {
      authorization: `Bearer ${process.env["STRAPI_TOKEN"]}`
    }
  };
  return fetch(`${process.env["API_URL"]}${path}`, {
    ...defaultParams,
    ...(params ?? {})
  });
}
