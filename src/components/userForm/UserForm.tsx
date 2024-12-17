import React, { useState } from 'react';
import {  User, UserFormData } from '../../types/user';
import { LEAGUES, POSITIONS, STATUSES } from '../../constants/formOptions';
import { RadioGroup } from './RadioGroup';
import { CheckboxGroup } from './CheckboxGroup';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { useNavigate, useParams } from 'react-router-dom';
import { addUser, editUser } from '../../store/playerSlice';


// interface UserFormProps {
 
//   onCancel: () => void;
// }

export const UserForm: React.FC = () => {
    const { id } = useParams<{ id: string }>()
    const users = useSelector((state: RootState) => state.players.users)
    const [isLeaguesOpen, setIsLeaguesOpen] = useState(false);
    const [isStatusOpen, setIsStatusOpen] = useState(false);
    const [isPositionOpen, setIsPositionOpen] = useState(false)

    const dispatch=useDispatch()

    const navigate=useNavigate();

 
    const initialData = users.find(u => u.id === id)


    

  const [formData, setFormData] = useState<UserFormData>({
    id,
    name: initialData?.name || '',
    dateOfBirth: initialData?.dateOfBirth || '',
    leagues: initialData?.leagues || [] ,
    status: initialData?.status || 'Active',
    height: initialData?.height || '',
    position: initialData?.position || 'Forward',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // console.log(formData)

    if(id !="new"){
      dispatch(editUser(formData as User));
      navigate("/")

    }else{

      console.log("first")
      dispatch(addUser(formData as User))
      navigate("/")

    }
   
    
  };

  return (
    <div className="min-h-screen bg-white p-4">
       <div className="max-w-4xl">

    <form onSubmit={handleSubmit} className="relative grid gap-6 mb-6 md:grid-cols-2">
      <div className='relative'>
      <label htmlFor="name" className="bg-white px-2  absolute -top-3 left-4 block text-sm   mb-1">
         Name
        </label>
        <input
          type="text"
          id="name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="w-full px-3 py-3 border border-gray-300 rounded-sm shadow-sm focus:outline-none "
          required
        />
      </div>

      <div className='relative'>
      <label htmlFor="dateOfBirth" className="absolute bg-white px-2   -top-3 left-4 block text-sm  text-gray-400 mb-1">
      Date of Birth
        </label>
        <input
          type="date"
          id="dateOfBirth"
          value={formData.dateOfBirth}
          onChange={(e) => setFormData({ ...formData, dateOfBirth: e.target.value })}
          className="w-full px-3 py-3 border border-gray-300 rounded-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          required
          placeholder="DD/MM/YYYY"

        />
      </div>

      <div className='relative'>
       <label htmlFor="height " className="absolute bg-white px-2 left-3 -top-3 text-sm  text-gray-400 mb-1">
        Height (in meters)
       </label>
        <input
          type="text"
          id="height"
          value={formData.height}
          onChange={(e) => setFormData({ ...formData, height: e.target.value })}
          placeholder="1.80"
          className="w-full px-3 py-3 border border-gray-300 rounded-sm shadow-sm focus:outline-none "
          required
        />
      </div>

      <div className='relative'>
      <label className="absolute z-10 bg-white px-2 left-3 -top-3 text-sm  text-gray-400 mb-1">
      Position
     </label>
     <button
     type="button"
    onClick={() => setIsPositionOpen(!isPositionOpen)}
    className="w-full bg-white px-3 py-3 border border-gray-300 rounded-md shadow-sm text-left "
                    >
   <span className="block  truncate  text-gray-400">
     {formData.position || 'Select position'}
   </span>
    </button>
    {
      isPositionOpen &&  <RadioGroup
      options={POSITIONS}
      name="position"
      value={formData.position}
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      onChange={(value) => setFormData({ ...formData, position: value as any })}
      
    />

    }

      </div>

    <div className="relative">
    <label className="absolute bg-white px-2 left-3 -top-3 z-10 text-sm text-gray-400  mb-1">
     Status
    </label>
  <button
  type="button"
  onClick={() => setIsStatusOpen(!isStatusOpen)}
  className="w-full bg-white px-3 py-3 border border-gray-300 rounded-sm shadow-sm text-left focus:outline-none  "
>
<span className="block trunca  text-gray-400">
  {formData.status || 'Select status'}
</span>
</button>

{
  isStatusOpen && 
<RadioGroup
        options={STATUSES}
        name="status"
        value={formData.status}
         // eslint-disable-next-line @typescript-eslint/no-explicit-any
        onChange={(value) => setFormData({ ...formData, status: value as any })}
        
        
      />
}
    
 </div >  

     

      

      <div className="relative">
      <label className="block bg-white px-2  absolute -top-3 left-4 text-sm  text-gray-400 mb-1">
              Leagues Played
      </label>

      <button
        type="button"                  
        onClick={() => setIsLeaguesOpen(!isLeaguesOpen)}
        className="w-full bg-white px-3 py-3 border border-gray-300 rounded-sm shadow-sm text-left focus:outline-none "
       >
        <span className="block truncate  text-gray-400">
        {(formData.leagues).length > 0 
        ? formData.leagues.join(', ') 
        : 'Select leagues'}
         </span>
         </button>

         {
        isLeaguesOpen && 
        <CheckboxGroup
        setIsLeaguesOpen={setIsLeaguesOpen}
        options={LEAGUES}
        values={formData.leagues}
         // eslint-disable-next-line @typescript-eslint/no-explicit-any
        onChange={(values) => setFormData({ ...formData, leagues: values as any })}
       
      />
      }  
      </div>

     
      

      <div className="flex justify-end space-x-3">
        <button
          type="button"
          onClick={handleSubmit}
          className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          {initialData ? 'Update' : 'Create'} User
        </button>
      </div>
    </form>
    </div>
    </div>
  );
};