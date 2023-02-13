import {React,useEffect, useState} from 'react'
import { useLocation} from "react-router-dom";
import { TableContainer,Table,TableHead,TableBody,TableCell,TableRow,Paper } from '@mui/material';


const SecondPage = () => {

    const[data,setData]=useState([]);
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then((res)=>{
            return res.json().then((data)=>{
                console.log(data)
                setData(data);
            })
        })
    },[])

    const location = useLocation();

    useEffect(() => {
      const userDetails = localStorage.getItem("userDetails");
      if (!userDetails) {
        alert("You must enter your details before accessing this page.");
        window.location.replace( location.search = "/")
      }
    }, []);

  return (
    <div>
      <TableContainer component={Paper}>
      <Table>
      <TableHead>
       <TableRow>
            <TableCell>Id</TableCell>
            <TableCell>User Id</TableCell>
            <TableCell>Title</TableCell>
            <TableCell>Body</TableCell>
        </TableRow>
        </TableHead>
        <TableBody>
        {
            data.map((item)=>{
                return(
                <TableRow key={item.id} sx={{'&:last-child td, &:last-child th':{border:0}}}>
                    <TableCell>{item.id}</TableCell>
                    <TableCell>{item.userId}</TableCell>
                    <TableCell>{item.title}</TableCell>
                    <TableCell>{item.body}</TableCell>
                </TableRow>
                );
            })
        }
        </TableBody>
        </Table>
       
      </TableContainer>
    </div>
  )
}

export default SecondPage
