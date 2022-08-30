import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Button } from '@mui/material';

import "../styles/datagrid.scss";

const columns = [
    { field: 'items', headerName: 'items', width: 150 },
    {
        field: 'desc',
        headerName: 'Description',
        width: 1000,
        editable: true,
    },
    {
        field: 'amount',
        headerName: 'Amount',
        width: 200,
        editable: true,
    },
    {
        field: 'status',
        headerName: 'Status',
        sortable: false,
        width: 160,
        renderCell: (params) => {
            return (
                <Button
                    variant="contained"
                    color="primary"
                    size="small"
                    style={{ marginLeft: 16 }}
                >
                    Pay Now
                </Button>
            )
        }
    },
];

const rows = [
    { items: 1, desc: 'Snow', amount: 'Jon'},
    { items: 2, desc: 'Lannister', amount: 'Cersei' },
    { items: 3, desc: 'Lannister', amount: 'Jaime'},
    { items: 4, desc: 'Stark', amount: 'Arya' },
    { items: 5, desc: 'Targaryen', amount: 'Daenerys' },
    { items: 6, desc: 'Melisandre', amount: null },
    { items: 7, desc: 'Clifford', amount: 'Ferrara'},
    { items: 8, desc: 'Frances', amount: 'Rossini' },
    { items: 9, desc: 'Roxie', amount: 'Harvey'},
];

export default function Table() {
    return (
        <div style={{ 
            height: 400,
            width:"100%"
         }}>
            <DataGrid
            sx={{
                '.MuiDataGrid-columnSeparator': {
                  display: 'none',
                },
                '&.MuiDataGrid-root': {
                  border: 'none',
                },
                '.MuiDataGrid-columnHeaderTitleContainer':{
                    backgroundColor:"#E8E9EB"
                }
              }}
                rows={rows}
                getRowId={(row) => row.items}
                columns={columns}
                pageSize={5}
                disableSelectionOnClick
            />
        </div>
    );
}
