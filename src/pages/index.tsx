// pages/index.tsx
import { useEffect, useState } from 'react'

type User = {
  id: number
  name: string
  email: string
}

export default function HomePage() {
  const [users, setUsers] = useState<User[]>([])

  useEffect(() => {
    fetch('/api/users')
      .then(res => res.json())
      .then(data => setUsers(data))
  }, [])

  return (
    <div style={{ padding: 20 }}>
      <h1>Lista de Usuarios</h1>
      {users.map(user => (
        <div key={user.id}>
          <strong>{user.name}</strong> - {user.email}
        </div>
      ))}
    </div>
  )
}