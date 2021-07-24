export interface ProtoColumn {
  icon: string
  style: string
  title: string
  cardIds: string[]
}

export interface Column extends ProtoColumn {
  id: string
}

export const toProto = (column: Column): ProtoColumn => {
  const { id, ...protoColumn } = column
  return protoColumn
}