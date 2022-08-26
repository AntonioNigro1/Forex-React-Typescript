import { stringify } from "querystring";
import React, { useState } from "react";
import { GiPayMoney, GiReceiveMoney, GiTakeMyMoney } from "react-icons/gi";
import { RiExchangeDollarFill } from "react-icons/ri";
import { Info, Infobox } from "./style";

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
type Props = {
source: JSONResponse;
}

const TansactionItem:  React.FC<Props> =({source}) => {
  const [type, setType] = useState<string>();
  const [icon, setIcon] = useState<JSX.Element>();
  const [date] = useState<Date>();

  for (let i = 0; i >= source.length; i++) {
    if (source.data.sender_id === source.data.receiver_id) {
      if (source.data.usd != 0) {
        const dataUSD = source.data.usd > 0 ? "deposit USD" : "withdraw USD";
        setType(dataUSD);
      } else if (source.data.gbp != 0) {
        const dataGBP = source.data.gbp > 0 ? "deposit GBP" : "withdraw GBP";
        setType(dataGBP);
      }
    } else {
      setType(source.data.usd > 0 && source.data.gbp === 0 ? "Pay USD" : "Pay GBP");
    }

    if (source.data.exchange === 1) {
      setType(
        source.data.usd > 0 && source.data.gbp === 0
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
  }

  return (
    <>
      <Infobox>
        {icon}
        <Info>{type}</Info>
        <Info>
          Amout: {source.data.gbp > 0 ? source.data.gbp : ""}
          {source.data.usd > 0 ? source.data.usd : ""}
        </Info>
        <Info>{`Date:` + date}</Info>
      </Infobox>
    </>
  );
};

export default TansactionItem;
