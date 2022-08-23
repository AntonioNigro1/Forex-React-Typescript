import { ReactNode } from "react";

export interface INavigationProps<T = never> {
  navigate: (screen: string, data?: T) => void;
  goBack: () => void;
  screen: string;
}

export interface HistItemData {
  receiver_id: string;
  sender_id: string;
  usd?: number;
  gpb?: number;
}

//  - - - - - - -  - - - - - - -  - - - - - - -  - - - - - - -  - - - - - - - //
export interface IRequestContextProps {}

export interface IRequestContextProviderProps {
  children: ReactNode;
  isPost?: number;
}
