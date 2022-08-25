import React, { useEffect, useState } from "react";

import { Drawer, Header } from "../../core/components";
import { Container, HistContainer } from "../../pageComplements/historyScreen/styles";
import { useDisclosure } from "@chakra-ui/react";
import TransactionItem from "../../pageComplements/historyScreen/Components/TransactionItem";
import { baseURL } from "../../core/services/api";

type Data = {
  sender_id: string | undefined;
  receiver_id: string | undefined;
  date: Date | undefined;
  usd: number | undefined;
  gbp: number | undefined;
};

const History = () => {
  const [filtersActiveds, setFiltersActiveds] = useState<string[]>([]);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [sender_id, setSender_id] = useState<string>();
  const [receiver_id, setReceiver_id] = useState<string>();
  const [exchange, setExchange] = useState<Number>();
  const [date, setDate] = useState<Date>();
  const [usd, setUsd] = useState<Number>();
  const [gbp, setGbp] = useState<Number>();
  const [data, setData] = useState();

  const handleDrawer = () => {
    onOpen();
  };

  const handleHistory = async () => {
    const res = await fetch(`${baseURL}/history`, {
      method: "post",
      headers: { "Content-Type": "application/json" },
      mode: "cors",
      body: JSON.stringify({
        sender_id: "62fe55a52d34aedf5e11a44e",
      }),
    });
    console.log(res.json());
    
    type JSONResponse = {
      data?: {
        transactions: Omit<Data, "fetched">;
      }
      errors?: Array<{messsage: string}>;
    }
    const {data, errors}: JSONResponse = await res.json();
    const historyTransaction:Data ={
      sender_id: data?.transactions.sender_id,
      receiver_id: data?.transactions.receiver_id,
      date: data?.transactions.date,
      usd: data?.transactions.usd,
      gbp: data?.transactions.gbp
    }
    return historyTransaction;
  };

  // async function handleHistory(): Promise<Data> {
  //   const res = await fetch(`${baseURL}/history`, {
  //     method: "post",
  //     headers: { "Content-Type": "application/json" },
  //     mode: "cors",
  //     body: JSON.stringify({
  //       sender_id: "62fe55a52d34aedf5e11a44e",
  //     }),
  //   });

  //   type JSONResponse = {
  //     data?: {
  //       transactions: Omit<Data, "fetched">;
  //     };
  //     errors?: Array<{ message: string }>;
  //   };

  //   const { data, errors }: JSONResponse = await res.json();
  //   if (res.ok) {
  //     const resData = data?.transactions;
  //     if (resData) {
  //       return Object.assign(resData);
  //     } else {
  //       return Promise.reject(new Error("Failed to fetch history"));
  //     }
  //   } else {
  //     const error = new Error(
  //       errors?.map((e) => e.message).join("\n") ?? "unknown"
  //     );
  //     return Promise.reject(error);
  //   }
  // }

  useEffect(() => {
    const hist = handleHistory();
    console.log(hist);
  });

  return (
    <>
      <Drawer isOpen={isOpen} onClose={onClose} />
      <Container>
        <Header handleDrawerButton={handleDrawer} />
      </Container>
      <HistContainer>
        {/* <TransactionItem data={data} ></TransactionItem>  */}
      </HistContainer>
    </>
  );
};

export default History;
