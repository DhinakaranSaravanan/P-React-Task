import React, { useState } from 'react'

const List = () => {
    const data = [
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
    ] 
    const [text, setText] = useState([
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
    ])
    
    const content = (           
        <div className='content'>
            <p>Under Construction</p>
            <h2>TODO LIST</h2>
            <form>
                <input
                    className='input'
                    type='text'
                    placeholder='Search'
                    required
                />
                <button className='input_button'>+</button>
            </form>
            <hr className='line'/>           
            <ul>
                <li>
                    {data.map(input => {
                         <form key={input.id}>                                                      
                            <input
                                type='checkbox'
                                id='content'
                                name='content'
                                checked={input.checked}
                                
                            />
                            <label>{input.content}</label>
                            <button>DEL</button>
                         </form>                        
                    })}
                </li>
            </ul>            
        </div>
      )
  return content
}

export default List