// ApiContext.tsx

import React, { createContext, useContext, useState, ReactNode } from 'react';
import axios from 'axios';

type ApiContextType = {
  data: any | null;
  loading: boolean;
  error: Error | null;
  postData: (url: string,data:any) => Promise<void>;
  fetchData: (url: string,data:any) => Promise<void>;
};

const ApiContext = createContext<ApiContextType | undefined>(undefined);

export const useApi = () => {
  const context = useContext(ApiContext);
  if (context === undefined) {
    throw new Error('useApi must be used within an ApiProvider');
  }
  return context;
};

type ApiProviderProps = {
  children: ReactNode;
};

export function ApiProvider({ children }: ApiProviderProps) {
  const [data, setData] = useState<any | null>({});
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  const postData = async (url: string,data:any) => {

    try {
      setLoading(true);
      const response = await axios.post(url,data);
      setData(response.data);
      setLoading(false);
    } catch (err: any) {
      setError(err);
      setLoading(false);
    }
  };
  const fetchData = async (url: string,data:any) => {
  
    try {
      setLoading(true);
      // const response = await axios.post(url,data);
      setData('response.data');
      setLoading(false);
    } catch (err: any) {
      setError(err);
      setLoading(false);
    }
  };

  return (
    <ApiContext.Provider value={{ data, loading, error, postData,fetchData }}>
      {children}
    </ApiContext.Provider>
  );
}
