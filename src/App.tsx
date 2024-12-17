import  { useState } from 'react';
import { Layout } from './components/Layout/Layout';
import { Sidebar } from './components/Layout/Sidebar';
// import AddForm from './components/AddForm/AddForm';
import UserData from './page/UserData';
import { Routes, Route } from 'react-router-dom'
import { UserForm } from './components/userForm/UserForm';


function App() {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  return (
    
    <Layout
      sidebar={
        <Sidebar 
          isCollapsed={isSidebarCollapsed} 
          onToggle={() => setIsSidebarCollapsed(!isSidebarCollapsed)} 
        />
      }
    >
      <div className="p-6">
        <div className="max-w-7xl mx-auto ">

        <Routes>
        <Route path="/" element={  <UserData/>} />
        <Route path="/user/:id" element={ <UserForm/> } />
       
      </Routes>
          
  
          
        </div>
      </div>
    </Layout>
  );
}

export default App;