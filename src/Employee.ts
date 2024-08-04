class Employee {
  //  Attributes
  private _empCode: number;
  private _empName: string;

  //  Getter
  public get empCode(): number {
    return this._empCode;
  }

  //  Gettter
  public get empName(): string {
    return this._empName;
  }

  //  Constructor is how you create an instance of the class.
  //  Can't be overloaded.  Weird TS rule
  constructor(code: number, name: string) {
    this._empName = name;
    this._empCode = code;
  }

  //  This is a method available in the class.
  getSalary(): number {
    return 10000;
  }

  //  Create a method that will write to the console... and return a void
  displayName(): void {
    console.log(
      "Name = " + this._empName + ", Employee Code = " + this._empCode
    );
  }
}

//  Create instance of Employee

let emp1 = new Employee(1, "Bert");
let emp2 = new Employee(2, "Joe");
