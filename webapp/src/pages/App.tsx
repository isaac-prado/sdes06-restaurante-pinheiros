import React from 'react';
import MaterialTable from 'material-table';
import { Switch,Button } from '@material-ui/core';

import { Add, Check, Clear, DeleteOutline, Edit, Search,
  FirstPage, ArrowDownward,
  LastPage,
  ChevronRight,
  ChevronLeft,
  ArrowUpward, 
  RemoveRedEye,
 } from "@material-ui/icons";
import { Table } from '../components/table';
import { customerMock } from '../services/customerService';



interface RowData {
  name: string;
  isActive: boolean;
  credit: number
}

const columns = [
  { title: 'Nome', field: 'name' },
  { title: 'Crédito', field: 'credit' },
  {
    title: 'Ativo',
    field: 'isActive',
    render: (rowData: RowData ) => (
      <Switch checked={rowData.isActive} color="primary" disabled />
    ),
  },
]

const App: React.FC = () => {
  
  return (
    <>
      <div style={{
        display: 'flex', 
        flexDirection: 'row-reverse',
        borderBottom: '2px solid',
        height: '70px',
      }}>
        <div style={{
          display:'flex', 
          justifyContent: 'center',
          alignItems: 'center',
        }}>
          {(new Date()).toUTCString()}
        </div>
      </div>
      <Table title="Gestão de assinaturas" columns={columns} data={customerMock}/>
    </>
  );
};

export default App;
