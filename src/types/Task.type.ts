export type Task = {
    userId: number
    id: number
    title: string
    body: string
}


export type TaskList = {
    tasks: Task[]
  }