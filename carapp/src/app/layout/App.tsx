import React, { useEffect, useState } from 'react';
import './styles.css';
import axios from 'axios';
import { Container, Header, List } from 'semantic-ui-react';
import { User } from '../models/user';
import NavBar from './NavBar';
import UsersDashboard from '../../features/users/dashboard/UsersDashboard';

function App() {

  const [users, setUsers] = useState<User[]>([]);
  const [selectedUsers, setSelectedUsers] = useState<User>();
  const [editMode, setEditMode] = useState(false);
  
  useEffect(() => {
    axios.get<User[]>('http://localhost:5000/api/Users').then(response => {
      console.log(response);
      setUsers(response.data);
    })
  }, [])

  function handleSelectedUser(user_id: number){
    setSelectedUsers(users.find(x => x.user_id === user_id))
  }

  function handleCancelSelectedUser(){
    setSelectedUsers(undefined)
  }

  function handleFormOpen(user_id?: number){
    user_id ? handleSelectedUser(user_id) : handleCancelSelectedUser();
    setEditMode(true);
  }
  function handleFormClose(){
    setEditMode(false);
  }

  function handleCreateOrEditUser(user: User){
    user.user_id 
    ? setUsers([...users.filter(x => x.user_id !== user.user_id), user])
      :setUsers([...users, user]);
    setEditMode(false);
    setSelectedUsers(user);
  }
  
  function handleDeleteUser(user_id: number){
      setUsers([...users.filter(x => x.user_id !== user_id)])
  }

  return (
    <>
      <NavBar openForm={handleFormOpen}/>
      <Container style={{marginTop:'7em'}}>
          <UsersDashboard 
            users={users}
            selectedUser = {selectedUsers}
            selectUser = {handleSelectedUser}
            cancelSelectUser = {handleCancelSelectedUser}
            editMode = {editMode}
            openForm = {handleFormOpen}
            closeForm = {handleFormClose}
            createOrEdit = {handleCreateOrEditUser}
            deleteUser = {handleDeleteUser}
          />
        </Container>
      </>
  );
}

export default App;
