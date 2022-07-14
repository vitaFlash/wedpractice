export class User {
  
   constructor(private _name: string, private _age: number, private _email: string, private _gender: Gender) {}

   public get name(): string {
      return this._name;
   }
   public set name(value: string) {
      this._name = value;
   }
   public get gender(): Gender {
      return this._gender;
   }
   public set gender(value: Gender) {
      this._gender = value;
   }
   public get email(): string {
      return this._email;
   }
   public set email(value: string) {
      this._email = value;
   }
   public get age(): number {
      return this._age;
   }
   public set age(value: number) {
      this._age = value;
   }

}

export enum Gender {
   masculino, femenino, no_binario
}