export type NodeValue = unknown
export type Callback = (val: NodeValue) => void
export type NextNode = LinkedListNode | null

export default class LinkedListNode {
  value: NodeValue
  next: NextNode

  constructor(value: NodeValue, next: NextNode = null) {
    this.value = value
    this.next = next
  }

  toString(callback: Callback) {
    return callback ? callback(this.value) : `${this.value}`
  }
}
