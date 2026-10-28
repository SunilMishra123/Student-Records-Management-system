import { useState } from 'react'

function StudentForm({ onAdd }) {
  const [form, setForm] = useState({ name: '', email: '', course: '' })
  const [error, setError] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    // Form validation - resume point
    if (!form.name || !form.email.includes('@')) {
      setError('Valid Name and Email required!')
      return
    }
    setError('')
    onAdd(form)
    setForm({ name: '', email: '', course: '' })
  }

  return (
    <form onSubmit={handleSubmit}>
      <input value={form.name} placeholder="Name" onChange={e=>setForm({...form,name:e.target.value})} />
      <input value={form.email} placeholder="Email" onChange={e=>setForm({...form,email:e.target.value})} />
      <input value={form.course} placeholder="Course" onChange={e=>setForm({...form,course:e.target.value})} />
      <button type="submit">Add</button>
      {error && <p style={{color:'red'}}>{error}</p>}
    </form>
  )
}
export default StudentForm