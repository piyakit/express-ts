class Animal {
  name: string;

  constructor(name: string) {
    this.name = name;
  }
  
  makeSound(): void {
    console.log('Some sound')
  }
}
