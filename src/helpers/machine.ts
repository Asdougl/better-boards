import { v4 as uuidv4 } from 'uuid'

export const getMachineId = () => {
  let id = localStorage.getItem('bb_machine_id')
  if (!id) {
    id = uuidv4()
    localStorage.setItem('bb_machine_id', id)
  }
  return id
}