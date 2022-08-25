import type { NextPage } from "next";
import { useContext } from 'react';
import { useAuth } from '../contexts/Auth/Auth';
import HomeComponent from './Home';
import Login from "./Login";

const Index: NextPage = () => {
  const authContext = useAuth();
  return <Login />;
};

export default Index;
