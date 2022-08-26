import { convert }from "exchange-rates-api";

function onError(ws, err) {
  console.error(`onError: ${err.message}`);
}

async function onMessage(ws, data) {
  let amount: number;
  let cur: number;
  if (data[0] === "U") {
    cur = parseInt(data.splice(3, data.lenght()));
    amount = await convert(cur, "USD", "GBP");
  }
  if (data[0] === "G") {
    cur = parseInt(data.splice(3, data.lenght()));
    amount = await convert(cur, "GBP", "USD");
  }

  ws.send(amount);
}

export default function onConnection(ws, req) {
  ws.on("message", (data) => onMessage(ws, data));
  ws.on("error", (error) => onError(ws, error));
  console.log(`onConnection`);
}