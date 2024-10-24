import React, { useState, useEffect } from 'react';
import MaterialTable from 'material-table';
import { Switch } from '@material-ui/core';
import { Table } from '../components/table';
import { customerMock } from '../services/customerService';
import './App.css';

interface RowData {
  name: string;
  isActive: boolean;
  credit: number;
}

const columns = [
  { title: 'Nome', field: 'name' },
  { title: 'Crédito', field: 'credit' },
  {
    title: 'Ativo',
    field: 'isActive',
    render: (rowData: RowData) => (
      <Switch checked={rowData.isActive} color="primary" disabled />
    ),
  },
];

const formatDate = (date: Date) => {
  return new Intl.DateTimeFormat('pt-BR', {
    dateStyle: 'full',
    timeStyle: 'medium',
  }).format(date);
};

const App: React.FC = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000); // Atualiza a cada segundo

    return () => clearInterval(interval); // Limpa o intervalo ao desmontar o componente
  }, []);

  return (
    <>
      <div className="header">
        <img src="/logo-small.jpg" alt="Pinheirinho Restaurant" className="logo" />
        <div className="date-container">
          {formatDate(currentTime)}
        </div>
      </div>
      <Table title="Gestão de assinaturas" columns={columns} data={customerMock} />
    </>
  );
};

export default App;
