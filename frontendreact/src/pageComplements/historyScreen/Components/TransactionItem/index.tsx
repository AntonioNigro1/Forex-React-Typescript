import { stringify } from "querystring";
import React, { useState } from "react";
import { GiPayMoney, GiReceiveMoney, GiTakeMyMoney } from "react-icons/gi";
import { RiExchangeDollarFill } from "react-icons/ri";
import { Info, Infobox } from "./style";

interface Data {
  sender_id: string;
  receiver_id: string;
  exchange: number;
  date: Date;
  usd: number;
  gbp: number;
}

const TansactionItem = (data: any) => {
  const [type, setType] = useState<string>();
  const [icon, setIcon] = useState<JSX.Element>();
  const [date] = useState<Date>(data.date);
  console.log(data);
  // if (data.sender_id === data.receiver_id) {
  //   if (data.usd != 0) {
  //     const dataUSD = data.usd > 0 ? "deposit USD" : "withdraw USD";
  //     setType(dataUSD);
  //   } else if (data.gbp != 0) {
  //     const dataGBP = data.gbp > 0 ? "deposit GBP" : "withdraw GBP";
  //     setType(dataGBP);
  //   }
  // } else {
  //   setType(data.usd > 0 && data.gbp === 0 ? "Pay USD" : "Pay GBP");
  // }

  // if (data.exchange === 1) {
  //   setType(
  //     data.usd > 0 && data.gbp === 0
  //       ? "Exchanged USD to GBP"
  //       : "Exchanged GBP to USD"
  //   );
  // }

  // if (type === ("deposit USD" || "deposit GBP")) {
  //   setIcon(<GiPayMoney size={20} color="#00a1ff" />);
  // } else if (type === ("withdraw USD" || "withdraw GBP")) {
  //   setIcon(<GiReceiveMoney size={20} color="#00a1ff" />);
  // } else if (type === ("Pay USD" || "Pay GBP")) {
  //   setIcon(<GiTakeMyMoney size={20} color="#00a1ff" />);
  // } else if (type == ("Exchanged USD to GBP" || "Exchanged GBP to USD")) {
  //   setIcon(<RiExchangeDollarFill size={20} color="#00a1ff" />);
  // }

  return (
    <>
      <Infobox>
        {icon}
        <Info>{type}</Info>
        <Info>
          Amout: {data.gbp > 0 ? data.gbp : ""}
          {data.usd > 0 ? data.usd : ""}
        </Info>
        <Info>{`Date:` + date}</Info>
      </Infobox>
    </>
  );
};

export default TansactionItem;
