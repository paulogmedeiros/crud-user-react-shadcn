'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { PlusIcon, Pencil, Trash2 } from 'lucide-react'


type User = {
  id: number
  name: string
  email: string
  role: string
}


const initialUsers: User[] = [
  { id: 1, name: 'Alice Silva', email: 'alice@example.com', role: 'Admin' },
  { id: 2, name: 'Bob Santos', email: 'bob@example.com', role: 'User' },
  { id: 3, name: 'Carol Oliveira', email: 'carol@example.com', role: 'Editor' },
]

export  function UserTable() {
  const [users, setUsers] = useState<User[]>(initialUsers)
  const [userToDelete, setUserToDelete] = useState<User | null>(null)
 
  const handleDelete = (user: User) => {
    setUserToDelete(user)
  }

  const confirmDelete = () => {
    if (userToDelete) {
      setUsers(users.filter(u => u.id !== userToDelete.id))
      setUserToDelete(null)
    }
  }

  const handleEdit = (user: User) => {
    // Implementação da edição (pode ser expandida com um formulário em um Dialog)
    console.log('Editar usuário:', user)
  }

  const handleCreate = () => {
    // Implementação da criação (pode ser expandida com um formulário em um Dialog)
    console.log('Criar novo usuário')
  }

  return (
    <div className="container mx-auto py-10">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Usuários</h1>
        <Button onClick={handleCreate}>
          <PlusIcon className="mr-2 h-4 w-4" /> Criar Usuário
        </Button>
      </div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Nome</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Função</TableHead>
              <TableHead className="text-right">Ações</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {users.map((user) => (
              <TableRow key={user.id}>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.role}</TableCell>
                <TableCell className="text-right">
                  <Button variant="ghost" size="icon" onClick={() => handleEdit(user)}>
                    <Pencil className="h-4 w-4" />
                    <span className="sr-only">Editar</span>
                  </Button>
                  <Button variant="ghost" size="icon" onClick={() => handleDelete(user)}>
                    <Trash2 className="h-4 w-4" />
                    <span className="sr-only">Excluir</span>
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <Dialog open={!!userToDelete} onOpenChange={() => setUserToDelete(null)}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Confirmar exclusão</DialogTitle>
            <DialogDescription>
              Tem certeza que deseja excluir o usuário {userToDelete?.name}? Esta ação não pode ser desfeita.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button variant="outline" onClick={() => setUserToDelete(null)}>Cancelar</Button>
            <Button variant="destructive" onClick={confirmDelete}>Excluir</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}