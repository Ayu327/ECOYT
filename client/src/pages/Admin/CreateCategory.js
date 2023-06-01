import React from 'react'
import Layout from '../../component/Layout/Layout'
import AdminMenu from '../../component/Layout/AdminMenu'

const CreateCategory = () => {
  return (
    <Layout title={"Dashboard - Create Category"}>
    <div className='container-fluid m-3 p-3'>
      <div className='row'>
        <div className='col-md-3'>
          <AdminMenu/>
        </div>
        <div className='cold-md-9'>
          <h1>Create Category</h1>
        </div>
      </div>
      
    </div>
    </Layout>
  )
}

export default CreateCategory