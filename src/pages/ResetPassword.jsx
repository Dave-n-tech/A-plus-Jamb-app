import { useState } from "react"

export default function ResetPassword() {
  const [email, setEmail] = useState("")

  const handleChange = (e) => {
    setEmail(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(email)
    setEmail("")
  }

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <input type="email" placeholder="enter your email" value={email} onChange={handleChange}/>
        <button>Reset Password</button>
      </form>
    </section>
  )
}
