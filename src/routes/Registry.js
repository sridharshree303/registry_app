import React,{useState,useEffect} from "react";
import { Link } from "react-router-dom";


function Registry(){

    const [data,setData] = useState([]);
    const [textinput,setTextInput] = useState("");
    const [error,setError] = useState(false);

    const addItem = (e) => {
        e.preventDefault();
        if(error) return ;
        const tempdata = [...data];
        tempdata.push(textinput);
        setData(tempdata);
        setTextInput("");
    }

    useEffect(()=>{
        if(textinput.length > 10) setError(true);
        else setError(false);
    },[textinput]);
    
    const removeItem = (index) => {
        let newData = [...data];
        newData.splice(index,1);
        setData(newData);
    }

    const editItem = (index) =>{
        if(error) return ;

        let newDta = [...data];
        newDta[index] = textinput;

        setData(newDta);
    }
    return(
        <div>
            <h1>Registry</h1>
            <Link to="/">Click here to go to Home</Link><br/><br/>
            <form onSubmit={addItem}>
                <label>
                    Text input : 
                    &nbsp; <input type="text" value={textinput} onChange={(e)=>setTextInput(e.target.value)}/>
                </label>&nbsp; &nbsp;
                <input type="submit" value="Submit"/>
            </form>
            {error ? <span style={{color:"red"}}><h2>Error occured..</h2></span>:null} <br/>
            {data.map((item,index)=>{
                return(
                    <li key={index}>{item} &nbsp; &nbsp;
                        <button onClick={()=>removeItem(index)}> remove </button> &nbsp;
                        <button onClick={()=>editItem(index)}> edit </button>
                    </li>
                )
            })}
        </div>
    )
}

export default Registry;