import React from 'react';
import MaterialTable from 'material-table';

interface RowData {
  name: string;
  age: number;
  city: string;
}

const App: React.FC = () => {
  const [data, setData] = React.useState<RowData[]>([
    { name: 'John', age: 30, city: 'New York' },
    { name: 'Alice', age: 25, city: 'Los Angeles' },
    { name: 'Bob', age: 27, city: 'Chicago' }
  ]);

  return (
    <>
    <div style={{ display:'flex', flexDirection: 'column', maxWidth: '100%' }}>
      <header>
        <p>{(new Date()).toUTCString()}</p>
      </header>
      <MaterialTable
        title="Example Table"
        columns={[
          { title: 'Name', field: 'name' },
          { title: 'Age', field: 'age', type: 'numeric' },
          { title: 'City', field: 'city' }
        ]}
        data={data}
      />
    </div>
    </>
  );
};

export default App;
