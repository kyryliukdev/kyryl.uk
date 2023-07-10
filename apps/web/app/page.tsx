import { GetServerSideProps } from "next";
import { Button, Header } from "ui";
import api, { PromisedResponse } from "../services/api";
import { Homepage } from "../../strapi/src/api/homepage/content-types/homepage/homepage";

const getData = async (): PromisedResponse<Homepage> => {
  const res = await api("/homepage", {
    cache: "no-store"
  });
  return res.json();
};

export default async function Page() {
  const data = await getData();
  console.log(data);

  return (
    <>
      <Header text={data?.data?.attributes?.Header ?? "Header"} />
      <Button />
    </>
  );
}
