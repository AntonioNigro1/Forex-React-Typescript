interface currency {
  usd?: number,
  gbp?: number
}

export interface transaction extends currency {
  _id: string,
  sender_id: string,
  receiver_id: string
}
export interface User extends currency {
  _id: string,
  name: string,
  email: string,
  password: string
}
