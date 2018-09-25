export default class Stack {
  constructor() {
    this.items = []
  }

  isEmpty() {
    return this.items === []
  }

  push(item) {
    this.items.push(item)
  }

  pop() {
    if (this.isEmpty()) { return undefined }

    return this.items.pop()
  }

  peek() {
    if (this.isEmpty()) { return undefined }

    return this.items[this.items.length - 1]
  }

  size() {
    return this.items.length
  }
}
