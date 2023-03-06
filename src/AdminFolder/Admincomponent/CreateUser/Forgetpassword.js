import React, { useRef, useState } from "react"
import { Form, Button, Card, Alert } from "react-bootstrap"
import { useAuth } from "../../Admin.service/UserAuth"
import {ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom"
import './User.css'
import HomeNavbar from '../../../components/HomeNavbarmain'



export default function ForgotPassword() {
  const emailRef = useRef()
  const { resetPassword } = useAuth()
  const [error, setError] = useState("")
  const [message, setMessage] = useState("")
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()

    try {
      setMessage("")
      setError("")
      setLoading(true)
      await resetPassword(emailRef.current.value)
      toast.success("Check your inbox for further instructions")
    } catch (e) {
      toast.error(e.message)
    }
    setLoading(false)
  }

  return (

<>
    <HomeNavbar/>
      <ToastContainer position="top-center" />
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
          <h4> Forgot Password</h4>
          <p>Enter your email  and we will send you a Link to reset your password</p>
            </div>
          </h2>
          {error && <Alert variant="danger">{error}</Alert>}
          {message && <Alert variant="success">{message}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" ref={emailRef} required />
            </Form.Group>
            <Button disabled={loading} className="w-100 bg-success" type="submit">
              Reset Password
            </Button>
          </Form>
          <div className="w-100 text-center mt-3">
            <Link to='/login'>Login</Link>
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
