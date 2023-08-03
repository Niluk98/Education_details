import React from 'react'
import { useProduct } from '../Context/ProductContext'
import { useDispatch, useSelector } from 'react-redux';
import { addTodo,removeTodo } from '../../redux/reducer/todoSlice';

const Home = () => {
  const {todos}=useSelector((state)=>state.todoSlice)
    const {product,setProduct}=useProduct();
    const dispatch=useDispatch();

    console.log("todos",todos);

    const addHandler=()=>{
        dispatch(removeTodo(2))
    }
    


    const handleDelete=(idx)=>{
        const deleteProduct=[...product];
        deleteProduct.splice(idx,1);
        setProduct(deleteProduct);
    }
    
  return (
    <div className='container'>
      <button onClick={addHandler}>Add</button>
        {product.length>0?<table class="table table-dark">
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Category</th>
      <th scope="col">Bussiness</th>
      <th scope="col">City</th>
      <th scope="col">Product Name</th>
      <th scope="col">Price</th>
      <th>#</th>
      <th>#</th>
    </tr>
  </thead>
  <tbody>
    {product?.map((item,index)=>{
        return <tr key={index}>
        <td>{item.category}</td> 
        <td>{item.subCategory}</td>
        <td>{item.business}</td>
        <td>{item.city}</td>
        <td>{item.productName}</td>
        <td>{item.productPrice}</td>
        <td><button className='btn btn-primary'>Edit</button></td>
        <td><button className='btn btn-danger' onClick={()=>handleDelete(index)}>Delete</button></td>
        
      </tr>
    })}
    
  </tbody>
</table>:null}
    </div>
  )
}

export default Home
