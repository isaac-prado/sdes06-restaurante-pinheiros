import React from 'react';
import MaterialTable from 'material-table';
import { Switch,Button } from '@material-ui/core';

import { Add, Check, Clear, DeleteOutline, Edit, SaveAlt, Search,
  FirstPage, ArrowDownward,
  LastPage,
  ChevronRight,
  ChevronLeft, 
 } from "@material-ui/icons";



interface RowData {
  name: string;
  isActive: boolean;
}

const columns = [
  { title: 'Nome', field: 'name' },
  {
    title: 'Ativo',
    field: 'isActive',
    render: (rowData: RowData ) => (
      <Switch checked={rowData.isActive} color="primary" disabled />
    ),
  },
]

const App: React.FC = () => {
  const [customers, setData] = React.useState<RowData[]>([
    { name: 'John', isActive: true},
    { name: 'Ellen', isActive: true},
  ]);

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
      <MaterialTable
          title="Gestão de Clientes"
          columns={columns}
          data={customers}
          options={{
            actionsColumnIndex: -1,
            headerStyle: {
              backgroundColor: '#1976d2',
              color: '#FFF',
            },
            rowStyle: {
              backgroundColor: '#EEE',
            },
          }}
          icons={{
            Add:React.forwardRef((obj, ref) =><Add/>),
            Edit:React.forwardRef((obj, ref) =><Edit/>),
            Delete:React.forwardRef((obj, ref) =><DeleteOutline/>),
            Check:React.forwardRef((obj, ref) =><Check/>),
            Clear:React.forwardRef((obj, ref) =><Clear/>),
            SortArrow:React.forwardRef((obj, ref) =><ArrowDownward/>),
            Search:React.forwardRef((obj, ref) =><Search/>),
            FirstPage:React.forwardRef((obj, ref) =><FirstPage/>),
            LastPage:React.forwardRef((obj, ref) =><LastPage/>),
            NextPage:React.forwardRef((obj, ref) =><ChevronRight/>),
            PreviousPage:React.forwardRef((obj, ref) =><ChevronLeft/>),
          }}
  
          editable={{
            onRowAdd: async(newData) => {}
          }}
        />
    </>
  );
};

export default App;
