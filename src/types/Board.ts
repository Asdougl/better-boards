export interface Board {
  id: string
  by: string
  owner: string
  shared: boolean
  subtitle: string
  title: string
  columnIds: string[]
}

export type ProtoBoard = Pick<
  Board,
  'by' | 'owner' | 'shared' | 'subtitle' | 'title'
>
