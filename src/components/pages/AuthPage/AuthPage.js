import React,{useState,useRef,useContext, useEffect} from 'react'
import classes from './AuthPage.module.css'
import { useHistory } from 'react-router-dom';
import AuthContext from '../../../store/authContext/AuthContext';
import LoaderEl from '../../Loader/Loader';

function AuthPage() {
    const [isLogin, setIsLogin] = useState(true);
    const [isLoading, setIsLoading] = useState(false)
    const [error,setError] = useState(false)
    const enteredEmail = useRef();
    const enteredPassword = useRef();
    const history = useHistory()
    const switchAuthModeHandler = () => {
        setIsLogin((prevState) => !prevState);
      };
      const {token,updateTheToken} = useContext(AuthContext)

    
      const submitHandler = async(e)=>{
        e.preventDefault()
        setError(false)
        const email = enteredEmail.current.value;
        const password = enteredPassword.current.value;

        if(isLogin){
         
          try{
            //AIzaSyAD5XZ9JBj35vvXcq3Ot7rGwwCWNHhFUa8
            setIsLoading(true)
            const response = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAD5XZ9JBj35vvXcq3Ot7rGwwCWNHhFUa8',{
              method:'POST',
              body:JSON.stringify({
                email,
                password,
                returnSecureToken:true
              }),
              headers:{
                'Content-Type':'application/json'
              }
            })
            setIsLoading(false)
           if(response.ok){
            history.replace('/store')
          
           }else{
            setError(true)
            return;
           }

           const data = await response.json()
           console.log(data)
           localStorage.setItem('token',data.idToken)
           updateTheToken(localStorage.getItem('token'))


          }catch(err){
            console.log(err)
          
          }
        }else{

          try{
            //AIzaSyAD5XZ9JBj35vvXcq3Ot7rGwwCWNHhFUa8
            setIsLoading(true)
            const response = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAD5XZ9JBj35vvXcq3Ot7rGwwCWNHhFUa8',{
              method:'POST',
              body:JSON.stringify({
                email,
                password,
                returnSecureToken:true
              }),
              headers:{
                'Content-Type':'application/json'
              }
            })
            setIsLoading(false)
            if(response.ok){
            
            
             }else{
              setError(true)
             }
           
          }catch(err){
            console.log(err)
          }
        }
      }
  return (
    <div> {isLoading && <LoaderEl/>}
    <section className={classes.auth}>
     
    <h1>{isLogin ? "Login" : "Sign Up"}</h1>
    <form onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor="email">Your Email</label>
        <input type="email" id="email" ref={enteredEmail} required />
      </div>
      <div className={classes.control}>
        <label htmlFor="password">Your Password</label>
        <input type="password" id="password" ref={enteredPassword} required />
       
      </div>
      {error && <p className='text-danger'>Authantication failed ...</p>}
      <div className={classes.actions}>
    
        <button

          type="submit">
          {isLogin ? "Log In" : "Sign Up"}
        </button>
        <button
          type="button"
          className={classes.toggle}
          onClick={switchAuthModeHandler}
        >
          {isLogin ? "Create new account" : "Login with existing account"}
        </button>
      </div>
    </form>
  </section>
  </div>
  )
}

export default AuthPage