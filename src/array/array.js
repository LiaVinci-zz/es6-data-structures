class DynamicArray {
  constructor() {
    this.elementCount = 0
    this.arrayCapacity = 1
    this.array = []
  }

  push(data) {
    this.array.push(data)
  }
}
