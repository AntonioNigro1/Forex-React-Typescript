import React, { useEffect, useState } from "react";

import { Drawer, Header } from "../../core/components";
import {
  Container,
  HistContainer,
} from "../../pageComplements/historyScreen/styles";
import { useDisclosure } from "@chakra-ui/react";
import { baseURL } from "../../core/services/api";
import { GiPayMoney, GiReceiveMoney, GiTakeMyMoney } from "react-icons/gi";
import { RiExchangeDollarFill } from "react-icons/ri";
import { Infobox } from "../../pageComplements/historyScreen/Components/TransactionItem/style";

interface JSONResponse extends Array<JSONResponse> {
  data: {
    sender_id: string;
    receiver_id: string;
    exchange: number;
    date: Date;
    usd: number;
    gbp: number;
  };
}
const History = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [type, setType] = useState<string>();
  const [icon, setIcon] = useState<JSX.Element>();
  const [date, setDate] = useState<Date>();
  const [amount, setAmount] = useState<number>();

  const handleDrawer = () => {
    onOpen();
  };

  const handleHistory = async () => {
    const reply = await fetch(`${baseURL}/history`, {
      method: "post",
      headers: { "Content-Type": "application/json" },
      mode: "cors",
      body: JSON.stringify({
        sender_id: "62fe55a52d34aedf5e11a44e",
      }),
    });
    if (reply.ok) {
      const res: JSONResponse = await reply.json();

      for (let i = 0; i >= res.length; i++) {
        if (res[i].data.sender_id === res[i].data.receiver_id) {
          if (res[i].data.usd != 0) {
            let dataUSD = res[i].data.usd > 0 ? "deposit USD" : "withdraw USD";
            setType(dataUSD);
          } else if (res[i].data.gbp != 0) {
            let dataGBP = res[i].data.gbp > 0 ? "deposit GBP" : "withdraw GBP";
            setType(dataGBP);
          }
        }
        if (res[i].data.exchange === 1) {
          setType(
            res.data.usd > 0 && res.data.gbp === 0
              ? "Exchanged USD to GBP"
              : "Exchanged GBP to USD"
          );
        }

        if (type === ("deposit USD" || "deposit GBP")) {
          setIcon(<GiPayMoney size={20} color="#00a1ff" />);
        } else if (type === ("withdraw USD" || "withdraw GBP")) {
          setIcon(<GiReceiveMoney size={20} color="#00a1ff" />);
        } else if (type === ("Pay USD" || "Pay GBP")) {
          setIcon(<GiTakeMyMoney size={20} color="#00a1ff" />);
        } else if (type == ("Exchanged USD to GBP" || "Exchanged GBP to USD")) {
          setIcon(<RiExchangeDollarFill size={20} color="#00a1ff" />);
        }
        setDate(res[i].data.date);
        if (res[i].data.usd > 0) setAmount(res[i].data.usd);
        if (res[i].data.gbp > 0) setAmount(res[i].data.gbp);

        let list = + React.createElement(
          Infobox,
          {},
          icon,
          type,
          amount,
          date?.toString()
        );
      }
      return 
    }
  };

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
        createElement()
      </HistContainer>
    </>
  );
};

export default History;
