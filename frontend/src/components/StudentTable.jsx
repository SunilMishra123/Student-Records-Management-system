function StudentTable({ students, onDelete }) {
  return (
    <table border="1" cellPadding="10">
      <thead><tr><th>ID</th><th>Name</th><th>Email</th><th>Course</th><th>Action</th></tr></thead>
      <tbody>
        {students.map(s => (
          <tr key={s.id}><td>{s.id}</td><td>{s.name}</td><td>{s.email}</td><td>{s.course}</td>
          <td><button onClick={()=>onDelete(s.id)}>Delete</button></td></tr>
        ))}
      </tbody>
    </table>
  )
}
export default StudentTable