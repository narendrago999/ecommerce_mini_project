// ApiContext.tsx
export {}
import React, { createContext, useContext, useState, ReactNode } from 'react';
import axios from 'axios';

type ApiContextType = {
  data: any | null;
  getdata:any |null;
  deleteResponse:any |null;
  loading: boolean;
  error: Error | null;
  postData: (url: string,data:any) => Promise<void>;
  fetchData: (url: string,data:any) => Promise<void>;
  deleteData: (url: string,detail:any,data:any) => Promise<void>;
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
  const [getdata, setgetData] = useState<any | null>([]);
  const [deleteResponse, setdeleteResponse] = useState<any | null>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  const postData = async (url: string,data:any) => {
    console.log(url, data);
    
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
  const fetchData = async (url: string,token:any) => {
  
  
    try {
      setLoading(true);
      const response = await axios.get(url,{headers:{Authorization:token}});
      console.log("response",response.data.data);
      setgetData(response.data.data);
      setLoading(false);
    } catch (err: any) {
      setError(err);
      setLoading(false);
    }
  };
  const deleteData = async (url: string,token:any) => {
  console.log("here");
  
    try {
      setLoading(true);
      const response = await axios.delete(url,{headers:{Authorization:token}});
      console.log("response",response.data.data);
      setdeleteResponse(response.data.data);
      setLoading(false);
    } catch (err: any) {
      setError(err);
      setLoading(false);
    }
  };

  return (
    <ApiContext.Provider value={{ data,getdata,deleteResponse, loading, error, postData,fetchData ,deleteData}}>
      {children}
    </ApiContext.Provider>
  );
}
