import React, { useEffect, useState } from 'react'
import { FaTrashAlt } from "react-icons/fa";

const List = () => {      
    const data = JSON.parse(localStorage.getItem('todo'))
      
    const [name, setName] = useState(/* [
        {
            id : 1,
            content : "learing React",
            checked : true
        
        },
        {
            id : 2,
            content : "learing Git",
            checked : false
        
        },
        {
            id : 3,
            content : "learing Node JS",
            checked : true
        
        },
    ] */data || [])
    const [addName, setAddName] = useState('')  
    const [search, setSearch] =useState('')

    const match = name.filter((input) => (input.content).toLowerCase().includes(search.toLowerCase()))

    
     const matchNumber = match.length === 1 ? `${match.length} item match`: match.length >1 ? `${match.length} Items match`: `Zero Item match`
    
    const listNumber = !name.length ? 'No Item to Display' : name.length === 1 ? `Number of List : ${name.length} List` : `Number of List : ${name.length} Lists` 
    
    

 
    //handling 
    const handleCheck = (e) => {
        const list = name.map(input => input.id===e ? {...input, checked:!input.checked} : input)
        localStorage.setItem('todo', JSON.stringify(list))
        setName(list)
    }
    const handleDelete = (e) => {
        const list = name.filter(input => input.id !== e)
        localStorage.setItem('todo', JSON.stringify(list))
        setName(list)
    }   
    const handleAdd = (e) => {
        e.preventDefault()  
        if(!addName)return;      
        const NameId = name.length ? name[name.length - 1].id+1: 1 
        console.log(NameId);
        const newItem = {id:NameId,content:addName,checked:false}
        const allItem = [...name,newItem]
        setName(allItem) 
        localStorage.setItem('todo', JSON.stringify(allItem))       
        setAddName('')
       
        
    }
    
    const content = (           
        <div className='content'>           
            <h2 style={{marginBottom:'5px'}}>TODO LIST</h2>
            <form onSubmit={handleAdd}>
                <input
                    className='input'
                    name='name'
                    id='name'
                    type='text'
                    placeholder='Add Item here...'
                    required
                    value={addName}
                    onChange={(e) => setAddName(e.target.value)}
                />
                <button 
                    className='input_button'
                    type='submit'
                    aria-label='add item'
                >+</button>
            </form>
            <input 
                className='input_search'
                type='text'
                id='search'
                name='search'
                placeholder='Search...'
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
            <hr className='line1'/>  
                      
            <h4>{search.length ? (matchNumber) : listNumber}</h4>
            {listNumber !== 'No Item to Display' ? <hr className='line1'/> : null} 

            <div className='lst' >                 
                <ul>
                    {match.map((input) => (
                    <li className=' nav list' key={input.id}>
                        <input
                            type='checkbox'
                            id='content'
                            name='content'
                            onChange={() => handleCheck(input.id)}
                            checked={input.checked}
                                    
                        />
                        <label>{input.content}</label>
                        <FaTrashAlt 
                            role='button'
                            tabIndex={0}
                            onClick={() => handleDelete(input.id)}
                        />
                    </li>
                    )).reverse()}
                </ul>
                
            </div>              
        </div>
      )
  return content
}

export default List