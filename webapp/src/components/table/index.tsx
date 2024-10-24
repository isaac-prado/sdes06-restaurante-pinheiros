import { Add, Edit, DeleteOutline, Check, Clear, ArrowDownward, Search, FirstPage, LastPage, ChevronRight, ChevronLeft, ArrowUpward, RemoveRedEye } from "@material-ui/icons";
import MaterialTable, { Action } from "material-table";
import React from "react";

interface TableProps{
  title: string,
  columns: any[],
  data: any,
  actions?: any | null
}

export const Table: React.FC<TableProps> = (props: TableProps) => {

  const tableIcons: any = {
    Add:React.forwardRef((_) =><Add/>),
    Check:React.forwardRef((_) =><Check/>),
    Clear:React.forwardRef((_) =><Clear/>),
    Delete:React.forwardRef((_) =><DeleteOutline/>),
    Edit:React.forwardRef((_) =><Edit/>),
    Filter:React.forwardRef((_) =><Edit/>),
    FirstPage:React.forwardRef((_) =><FirstPage/>),
    LastPage:React.forwardRef((_) =><LastPage/>),
    NextPage:React.forwardRef((_) =><ChevronRight/>),
    PreviousPage:React.forwardRef((_) =><ChevronLeft/>),
    ResetSearch:React.forwardRef((_) =><Clear/>),
    Search:React.forwardRef((_) =><Search/>),
    SortArrow:React.forwardRef((_) =><ArrowUpward/>),
  }


  return (
    <MaterialTable
      title={props.title}
      columns={props.columns}
      data={props.data}
      icons={tableIcons}
      editable={{
        onRowAdd: async(newData) => {}
      }}
      actions={props.actions}
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
    />
  );

}