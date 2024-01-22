import { NavLink, useNavigate } from 'react-router-dom'
import React ,{useState} from 'react'
import{auth, db} from '../../firebase'
//firebase
import {createUserWithEmailAndPassword, sendEmailVerification, updateProfile} from 'firebase/auth'
import {doc, setDoc} from 'firebase/firestore'

import imgSrc from '../../images/pics'
import { toast } from 'react-toastify'

function Register(props) {
    const [user,setUser] = useState({
        name:"",
        email:"",
        pass:""
    })
    
    // navigate ref
    const navigate = useNavigate()

    // handler
    const readData = async (e) => {
        const {name,value} = e.target
        setUser({...user, [name]: value})
    } 

    //submit handler=
    const submitHandler = async (e) => {
        e.preventDefault()
        try {
            console.log(`user=`,user)
            let email = user.email
            let password = user.pass
            
            // store user credentials 
            const res = await createUserWithEmailAndPassword(auth,email,password)

            // verification email link sent to the user email id
            await sendEmailVerification(email).then(res => {
                toast.success("Verification email sent successfully")
            }).catch

            //stores the users data in firestore
            await setDoc(doc(db,"users",res.user.uid),{
                uid: res.user.uid,
                displayName: user.name,
                email,
                photoURL: "https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png"
                
            })
            //create empty chat objects for user
            await setDoc(doc(db,"userChats",res.user.uid), {})
           
            
            toast.success(`User registered successfully`)
            
            navigate(`/login`)
            
        } catch (err) {
            toast.error(err.message)
        }
    }

    return (
        <div className="container">
            <div className="wrapper">
                <span className="logo">React-Chat-App</span>
            </div>
            
            <div className="form-wrapper">
                <div className="left">
                    <img src={imgSrc.signUpImage1} alt="no image" />
                </div>
                <div className="right">
                    <div className="title">
                        Register Here
                    </div>
                    <form autoComplete="off">
                        <div className="form-item">
                            <label htmlFor="name">Full Name</label>
                            <input type="text" name="name" id="name" value={user.name} onChange={readData} className="form-input" placeholder='Enter Name Here' required />
                        </div>
                        <div className="form-item">
                            <label htmlFor="email">Email</label>
                            <input type="email" name="email" id="email" value={user.email} onChange={readData} className="form-input" placeholder='Enter email id' required />
                        </div>
                        <div className="form-item">
                            <label htmlFor="pass">Password</label>
                            <input type="password" name="pass" id="pass" value={user.pass} onChange={readData} className="form-input" placeholder='Enter password' required />
                        </div>
                        <div className="form-item">
                            <input type="submit" value="Register" className="btn btn-green" />
                        </div>
                    </form>
                    <div className="block">
                        <NavLink to={`/login`} className="btn-link">
                            Already Registered..Login Here..
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register