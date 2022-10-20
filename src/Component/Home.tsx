import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Iwish } from "../Models/wish";
import { addWish, editWish, trashWish, updateWish } from "../Redux/Action/action";
import { WishSchema } from "../Validation/wishSchema";


const Home : React.FC<{}> = () => {
  
    const initialValue : Iwish = { title: "", discription: "" }
    const dispatch = useDispatch();
    const wishes = useSelector((state):any=>state)
    let list = wishes.authReducer.saved;
    let id = wishes?.authReducer?.id;
    console.log(123,wishes?.authReducer?.id)
    const formikRef = useRef();
    const trash = (id:number) =>{
        dispatch(trashWish(id))
    }

    const Modify = (id:number) =>{
        dispatch(editWish(id))
    }

    
  return (
    <div className="main-wr">
      <h1 style={{textAlign:"center"}}>TypeScript + Redux + formik + crud</h1>
      <div className="content-area">
      <div className="left-content">
        <h2>Add Wish</h2>
      <Formik
        initialValues ={initialValue}
        validationSchema={WishSchema}
        onSubmit={(values, { resetForm  ,setSubmitting }) => {
            if(id){
                dispatch(updateWish(id,values))
            }else{
                dispatch(addWish(values))
            }
            setSubmitting(false);
            resetForm();
        }}
      >
        {function Show({ isSubmitting ,values ,setFieldValue, touched, errors }){
             
            useEffect(()=>{
                if(id){
                    setFieldValue("title",wishes?.authReducer?.currentObject?.title)
                    setFieldValue("discription",wishes?.authReducer?.currentObject?.discription)
                }
            },[wishes ,id])
            
        return (
          <Form>
            <div className="form-field">
            <Field name="title"
             placeholder="Enter_title"
              value={values.title}
            />
            {errors.title && touched.title ? 
            <div className="error-msg">{errors.title}</div> : null}
            </div>

            <div className="form-field">
            <Field name="discription" 
                placeholder="Enter_discription"
                value={values.discription}
            />
            {errors.discription && touched.discription ? 
            (<div className="error-msg">{errors.discription}</div>) : null}
            </div>

            <div className="form-field">
            <button type="submit" disabled={isSubmitting}>
            {
                id ? "Update wish" : "add Wish"
            }
            </button>
            </div>
          </Form>
        )}}
      </Formik>
      </div>
      <div className="right-content">
        <h2>Display wish List</h2>
        {
                list.length > 0 ? <>
        <table>
            <thead>
                <tr>
                    <th>Index</th>
                    <th>Title</th>
                    <th>Discription</th>
                    <th>Action</th>
                </tr>
            </thead>
            
            <tbody>
                {
                    list.map((item:Iwish,id:number)=>{
                        return(
                            <tr key={id+1}>
                                <td>{id+1}</td>
                                <td>{item.title}</td>
                                <td>{item.discription}</td>
                                <td>
                                    <button onClick={()=>Modify(id+1)}>modify</button>
                                    <button onClick={()=>trash(id+1)}>Trash</button>
                                </td>
                            </tr>
                        )
                    })
                }
            </tbody>     
        </table>
        </> : <><p style={{color:"tomato"}}>No Record Found</p></>
    }
      </div>
      </div>
    </div>
  );
};

export default Home;
