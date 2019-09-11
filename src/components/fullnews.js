import React,{useEffect,useState} from 'react';
import AppLayout from "../components/app.layout";


const FullNews =(props)=>{
    const [parent,setparent] = useState(false);
    useEffect(() => {
        console.log(window.location.href);
        if(window.location.href === 'http://localhost:3000/' ) 
        {
            setparent(true);
        }
        window.history.pushState('','',`/${props.title}`)
    }, [])
    
return (
    setparent? <AppLayout/>:
    <div>
        <h1>{props.title}</h1>
        <div dangerouslySetInnerHTML={{__html:props.news}} />
    </div>
)

}

export default FullNews;