import { GetServerSideProps } from "next";
import { Button, Header } from "ui";
import api from "../services/api";

const getData = async () => {
  const res = await api("/homepage", {
    cache: "no-cache"
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
