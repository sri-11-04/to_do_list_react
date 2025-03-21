//  to do parent main

import { useState } from "react";
import Todolist,{RecentList} from "./to_do_list";

export default function ToDoMain(){
    const [data,setData] = useState([])

    // onSubmit on form event handle (create)
    function change(event){
        event.preventDefault()  // it prevent the default action i.e is refresh

        if(event.target[0].value){
            if (data.length != 0){
                const temp = data.filter(ele => ele.list === event.target[0].value)
                if (temp.length != 0){
                    event.target[0].value=''
                    return
                }
            }
            let time = new Date().toLocaleTimeString(),
            date = new Date().toLocaleDateString(),
        
            tempData = {list:event.target[0].value,time:time,date:date}
            if(data){
                setData([...data,tempData])
            }
            else{
                setData([tempData])
            }
            event.target[0].value=''
        }
        
    }

    // delete function onClick the check box
    function deLete(para){
        // console.log(para)
        let temp = data.filter((list)=>{
            return list.list!=para.list
        })
        // console.log(temp)
        setData(temp)

        const checkBoxes = document.querySelectorAll('.check')

        checkBoxes.forEach(ele =>{
            ele.checked = false
        })
    }

    console.log(data)

    return(
        <div className="toDoMain">
            <Todolist func={change}/>
            <RecentList list={data} func={deLete}/>
            
        </div>
    )
}