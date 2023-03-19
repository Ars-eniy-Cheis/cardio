import { React } from 'react';
import { Admin, Resource, ListGuesser } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';

import authProvider from '../../authProvider';

const dataProvider = jsonServerProvider('https://my-json-server.typicode.com/Ars-eniy-Cheis/cardio-admin-test');


function AdminComponent(props) {

  return (
    <div>
      <Resource name='users' list={ListGuesser} />
    </div>
  )
  /*
    return (
      <Admin authProvider={authProvider} dataProvider={dataProvider}>
        
      </Admin>
    )
  */
}

export default AdminComponent
