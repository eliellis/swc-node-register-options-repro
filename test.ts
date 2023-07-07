const decorate = () => {
  return (target: any, propertyKey: string, descriptor: PropertyDescriptor) => {
    console.log("\n\nhello from decorator!\n\n");
  };
};

class Test {
  @decorate()
  public test() {}
}
