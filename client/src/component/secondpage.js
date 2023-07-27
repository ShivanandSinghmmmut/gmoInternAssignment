import React from 'react'
import { useState,useEffect } from 'react'
import axios from 'axios'
import { DataGrid } from '@mui/x-data-grid';
import { DataGridPro } from '@mui/x-data-grid-pro';



const SecondPage = () => {
    const[users,setUsers] = useState([])
    

    const getUsers = async () => {
        const response = await axios.get(" https://jsonplaceholder.typicode.com/posts")
        // const res1 = {user:response.userId, id:response.id, title:response.title, category:response.body}
        const FinalData =  response.data
        setUsers(FinalData)

    }

    // getUsers();

    useEffect(()=>{
        
        getUsers()
    },[])

    const columns = [
            
        {
          field: 'userId',
          headerName: 'UserId',
          width: 150,
          editable: true,
        },
        {
          field: 'id',
          headerName: 'Id',
          width: 150,
          editable: true,
        },
        {
          field: 'title',
          headerName: 'Title',
          type: 'number',
          width: 110,
          editable: true,
        },
        {
          field: 'body',
          headerName: 'Body',
          description: 'This column has a value getter and is not sortable.',
          sortable: false,
          width: 700,
          
        //   valueGetter: (params) =>
        //     `${params.row.userId || ''} ${params.row.id || ''}`,
        },
      ];


      const rows1 = [

        {
          hierarchy: ['customer_service'],
          id: 1,
        },
        {
          hierarchy: ['customer_service', 'support'],
          id: 2,
        },
        {
          hierarchy: ['customer_service', 'customer_success'],
          id: 3,
        },

        {
          hierarchy: ['design'],
          id: 6,
        },
        {
          hierarchy: ['design', 'graphic_design'],
          id: 8,
        },
        {
          hierarchy: ['design', 'product_design'],
          id: 9,
        },
        {
          hierarchy: ['design', 'web_design'],
          id: 10,
        },
        
      ];

      const columns1 = [
        // { field: 'jobTitle'},
        
      ];
      const getTreeDataPath = (row) => row.hierarchy;
      
  return (

    <>
      <div className='second_page'>
      <div className='second_page_form1'>
        {/* <Box sx={{ height: 400, width: '100%' }}> */}
      <DataGrid
        rows={users}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        // checkboxSelection
        // disableRowSelectionOnClick
      />
    {/* </Box> */}
      </div>

    <div className='second_page_form2'>
    <DataGridPro
        treeData
        rows={rows1}
        columns={columns1}
        getTreeDataPath={getTreeDataPath}
        checkboxSelection
        disableRowSelectionOnClick
      

      />
    </div>
      </div>
    </>
  )
}

export default SecondPage
