export type Reaction = 'thumb' | 'haha' | 'sad' | 'party' | 'love'

export type ReactionOptions = [Reaction, string][]

export type ReactionMap = {
  [reaction in Reaction]?: string[]
}

export interface ProtoCard {
  flag: boolean
  reactions: ReactionMap
  text: string
}

export interface Card extends ProtoCard {
  id: string
}

export const toProtoCard = (card: Card): ProtoCard => {
  const { id, ...protoCard } = card
  return protoCard
}