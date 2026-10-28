import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  const [students, setStudents] = useState([])
  const [search, setSearch] = useState('')
  const [form, setForm] = useState({ name:'', roll_no:'', email:'', phone:'', branch:'CSE', semester:'5', cgpa:'', skills:'', github:'', linkedin:'', photo:'' })

  const fetchData = async () => {
    const res = await axios.get('http://localhost:5000/api/students')
    setStudents(res.data)
  }
  useEffect(()=>{fetchData()},[])

  const handlePhoto = (e) => {
    const file = e.target.files[0]
    if(!file) return
    const reader = new FileReader()
    reader.onload = () => setForm({...form, photo: reader.result})
    reader.readAsDataURL(file)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if(!form.name || !form.roll_no || !form.email) return alert("Name, Roll, Email required")
    await axios.post('http://localhost:5000/api/students', form)
    setForm({ name:'', roll_no:'', email:'', phone:'', branch:'CSE', semester:'5', cgpa:'', skills:'', github:'', linkedin:'', photo:'' })
    fetchData()
    setSearch('') 
  }

  const del = async (id) => { if(confirm("Delete this profile?")){ await axios.delete(`http://localhost:5000/api/students/${id}`); fetchData()} }

  
  const filtered = search.trim() === '' ? [] : students.filter(s => 
    s.name.toLowerCase().includes(search.toLowerCase()) || 
    s.roll_no.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="bg">
      <header className="top">
        <h1>🎓 B.Tech Student Hub</h1>
        <input className="mainSearch" placeholder="Search by Name or Roll No..." value={search} onChange={e=>setSearch(e.target.value)} />
      </header>

      <div className="container">
        <div className="left">
          {search.trim() === '' ? (
            <div className="emptyState">
              <div className="bigIcon">🔍</div>
              <h2>Search Student</h2>
              <p className="count">Total Saved Profiles: {students.length}</p>
            </div>
          ) : (
            <>
              <h3>Result for "{search}" - {filtered.length} found</h3>
              <div className="grid">
                {filtered.map(s=>(
                  <div key={s.id} className="card animate">
                    <div className="cardImg">
                      {s.photo ? <img src={s.photo} /> : <div className="avatarText">{s.name[0]?.toUpperCase()}</div>}
                    </div>
                    <h4>{s.name}</h4>
                    <p className="small">{s.roll_no} | {s.branch} - Sem {s.semester}</p>
                    <p className="small">CGPA: {s.cgpa || 'N/A'}</p>
                    <p className="skills">💻 {s.skills || 'No skills'}</p>
                    <p className="small">📧 {s.email}</p>
                    <div className="btns">
                      {s.github && <a href={s.github} target="_blank">GitHub</a>}
                      {s.linkedin && <a href={s.linkedin} target="_blank">LinkedIn</a>}
                    </div>
                    <button className="del" onClick={()=>del(s.id)}>Delete</button>
                  </div>
                ))}
              </div>
              {filtered.length===0 && <p className="no">"{search}" doesnot found</p>}
            </>
          )}
        </div>

        <div className="right">
          <form className="formBox" onSubmit={handleSubmit}>
            <h3>➕ Add Student Profile</h3>
            <label>Profile Photo</label>
            <input type="file" accept="image/*" onChange={handlePhoto} />
            {form.photo && <img src={form.photo} className="preview" />}
            <input placeholder="Full Name *" value={form.name} onChange={e=>setForm({...form,name:e.target.value})} required />
            <input placeholder="Roll No *" value={form.roll_no} onChange={e=>setForm({...form,roll_no:e.target.value})} required />
            <input placeholder="Email *" type="email" value={form.email} onChange={e=>setForm({...form,email:e.target.value})} required />
            <input placeholder="Phone" value={form.phone} onChange={e=>setForm({...form,phone:e.target.value})} />
            <div className="row">
              <select value={form.branch} onChange={e=>setForm({...form,branch:e.target.value})}><option>CSE</option><option>ECE</option><option>IT</option><option>ME</option><option>EE</option></select>
              <select value={form.semester} onChange={e=>setForm({...form,semester:e.target.value})}><option>1</option><option>2</option><option>3</option><option>4</option><option>5</option><option>6</option><option>7</option><option>8</option></select>
            </div>
            <input placeholder="CGPA e.g. 8.5" value={form.cgpa} onChange={e=>setForm({...form,cgpa:e.target.value})} />
            <input placeholder="Skills e.g. React, Flask, Python" value={form.skills} onChange={e=>setForm({...form,skills:e.target.value})} />
            <input placeholder="GitHub Link" value={form.github} onChange={e=>setForm({...form,github:e.target.value})} />
            <input placeholder="LinkedIn Link" value={form.linkedin} onChange={e=>setForm({...form,linkedin:e.target.value})} />
            <button type="submit">Save Profile</button>
          </form>
        </div>
      </div>
    </div>
  )
}
export default App