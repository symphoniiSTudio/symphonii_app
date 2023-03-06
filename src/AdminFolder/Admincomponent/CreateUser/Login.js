import React, { useRef, useState } from "react"
import { Form, Button, Card} from "react-bootstrap"
import { useAuth } from "../../Admin.service/UserAuth"
import {ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link, useHistory } from "react-router-dom"
import './User.css'
import HomeNavbar from '../../../components/HomeNavbarmain'



export default function Login() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const { login } = useAuth()
  const [loading, setLoading] = useState(false)
  const history = useHistory()

  async function handleSubmit(e) {
    e.preventDefault()

    try {
      setLoading(true)
      await login(emailRef.current.value, passwordRef.current.value)
      toast.success('Welcome Back')
      
      history.push("/check")
    } catch (e) {
      toast.error(e.message)
    }

    setLoading(false)
  }

  return (

<>
    <HomeNavbar/>
      <ToastContainer position="Bottom-left" />
      <div className="reactmain">
        <div className="regboy">
          <div className="regsection">
            <div className=" mainusers11">
              <div className="maingss">
              <Card>
        <Card.Body>
          <h2 className="text-center mb-4">
          <div className="registerheader">
              <img src="/img/logo.png" alt="" />
          <h4>Login</h4>
          <p>Let’s get you started!</p>
            </div>
          </h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" ref={emailRef} required />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" ref={passwordRef} required />
            </Form.Group>
            <Button disabled={loading} className="w-100 bg-success" type="submit">
              Log In
            </Button>
          </Form>
          <div className="w-100 text-center mt-3">
            <Link to="/forget_password">Forgot Password?</Link>
          </div>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        Need an account? <Link to="/register">Sign Up</Link>
      </div>
              </div>
            </div>
          </div>
          <div className="imagesection">
            <img src="/img/newp.png" alt="" />
          </div>
        </div>
      </div>
    </>


  )
}