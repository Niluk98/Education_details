import React, { useEffect, useState } from 'react'
import axios from 'axios';
import ReactPaginate from 'react-paginate';  
const Categories = () => {

const[data,setData]=useState([]);
const [index,setIndex]=useState(0);
const [pages,setPages]=useState(0);

const fetchData=()=>{
  axios.get('https://fakestoreapi.com/products')
  .then((response)=>{
    const newData=response.data;
    const slicedData=newData.slice(index,index+5);
    setPages((pages)=>newData.length/5)
    setData(slicedData);
    console.log(slicedData)
  })
  .catch((error)=>{
    console.log(error);
  })
}

useEffect(()=>{
  fetchData();
},[index]);

const handleChange=()=>{
  setIndex((index)=>index+5);

}




  return (
    <div className='container' style={{width:'100%',display:'flex',flexDirection:'column',justifyContent:'center'}}>
      <div className="items" style={{marginleft:'20rem',padding:'0 10rem',display:'grid',gridTemplateColumns:'1fr 1fr'}}>
      {data?.map((item,index)=>{
        return <div key={index} class="card" style={{width:'20rem',height:'30rem',margin:'2rem 0'}}>
        <img class="card-img-top" src={item.image} style={{height:'15rem'}} alt="Card image cap"/>
        <div class="card-body">
          <h5 class="card-title">{item.title}</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>
      })}

      </div>
      




      <ReactPaginate  
        breakLabel="..."  
        nextLabel="next >"  
        onPageChange={handleChange}  
        Displayed Page Range = {5}  
        pageCount={pages}  
        previousLabel="< previous"  
        renderOnZeroPageCount={null}  
        breakClassName={'page-item'}
 breakLinkClassName={'page-link'}
 containerClassName={'pagination'}
 pageClassName={'page-item'}
 pageLinkClassName={'page-link'}
 previousClassName={'page-item'}
 previousLinkClassName={'page-link'}
 nextClassName={'page-item'}
 nextLinkClassName={'page-link'}
 activeClassName={'active'}
      />
    </div>
  )
}

export default Categories
