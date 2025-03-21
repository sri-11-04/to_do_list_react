//  to do child (work space)

export default function ToDoList({func}){
    
    return(
        <div>
            <h1>TodoList</h1>
            <form onSubmit={func}>
                <textarea placeholder="add your list"></textarea>
                <input type="submit" value='add to the list' name='submit'/>
            </form>
        </div>
    )
}

export function RecentList({list,func}){
    return(
        <div className="recentList">
            <h1>RecentList</h1>

            <div className="task">
                {list.length == 0 ? <div className="empty">
                            <p>empty</p>
                        </div> 
                   : list.map((list,index)=>(
                        <div key={index+1}>
                        <section>
                            <p>Task</p>
                            <section>
                                <span>date:{list.date}</span>
                                <span>time:{list.time}</span>
                            </section>
                        </section>
                        
                        <ul>
                            <li>{list.list}</li>
                            <input type="checkbox" name="checkbox" className="check" onClick={()=>func(list)} />
                        </ul>
                    </div>
                    ))
                }
            </div>
        </div>
    )
}


