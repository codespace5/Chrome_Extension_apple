// import React, { useState } from 'react';
// import { Table, Button } from 'antd';

// interface AccountData {
//   account: string;
//   appleId: string;
//   balance: string;
// }

// const DatabasePage: React.FC = () => {
//   // Use the provided data
//   const [data] = useState<AccountData[]>([
//     { account: 'usa', appleId: 'YHQX ZGXJ RDHK WMDC', balance: '0' },
//     { account: 'usa', appleId: 'YRMQ ZZJY QLNP TTPJ', balance: '0' },
//     { account: 'usa', appleId: 'YZKC HYWM XMCR XZRQ', balance: '0' },
//   ]);

//   const replacer = (key: string, value: any) => (value === null ? '' : value);

//   const columns = [
//     {
//       title: 'Account',
//       dataIndex: 'account',
//       key: 'account',
//     },
//     {
//       title: 'Apple ID',
//       dataIndex: 'appleId',
//       key: 'appleId',
//     },
//     {
//       title: 'Balance',
//       dataIndex: 'balance',
//       key: 'balance',
//     },
//   ];

//   return (
//     <div style={{ padding: '20px' }}>
//       <Table dataSource={data} columns={columns} rowKey="appleId" />
//     </div>
//   );
// };

// export default DatabasePage;


import React, { useEffect, useState } from 'react';
import { Table, message } from 'antd';
import axios from 'axios';

interface AccountData {
  account: string;
  appleId: string;
  balance: string;
}

const DatabasePage: React.FC = () => {
  const [data, setData] = useState<AccountData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  // Function to fetch data from the Flask API
  const fetchData = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:5000/get_cards');
      const cards = response.data.map((card: any) => ({
        account: 'usa', // assuming account is static, adjust as necessary
        appleId: card.card_number,
        balance: card.balance,
      }));
      setData(cards);
      setLoading(false);
    } catch (error) {
      message.error('Failed to fetch data from the server.');
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData(); // Fetch data on component mount
  }, []);

  const columns = [
    {
      title: 'Account',
      dataIndex: 'account',
      key: 'account',
    },
    {
      title: 'Apple ID',
      dataIndex: 'appleId',
      key: 'appleId',
    },
    {
      title: 'Balance',
      dataIndex: 'balance',
      key: 'balance',
    },
  ];

  return (
    <div style={{ padding: '20px' }}>
      <Table
        dataSource={data}
        columns={columns}
        rowKey="appleId"
        loading={loading}
      />
    </div>
  );
};

export default DatabasePage;
