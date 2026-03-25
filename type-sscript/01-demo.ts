/* slint */


// Tupla
{
  const t1: [string, number] = ["Juan", 2];
}
//Union Type (tipo unión) Union (|) Intersection (&)
{
  const t2: string | number = "Juan"; //o string o number solo coge uno de los dos
  const t22: string | number = 2;

  let valor: string | number;

  valor = "Hola"; // ✅ válido
  valor = 25; // ✅ válido
  // valor = true;   // ❌ error
}
// OBJETO IMUTABLE
{
  const config = {
    api_url: `https/google.com`,
    api_key: `34659865963`,
  };
  config.api_key = `2`;
  config.api_url = `fuu`;

  const user1: {
    readonly id: string | number;
    name: string;
    age: number;
  } = {
    id: 151613,
    name: `Juan`,
    age: 30,
  };
}

// alias type
{
  type ID = string | number;
  type Role = `user` | `editor` | `admin`;

  type user = {
    readonly Id: string | number;
    readonly name: string | number;
    age: number;
    job: string;
    role: Role;
  };
}

// interface
{
 interface User {
    readonly Id: string | number;
    readonly name: string | number;
    age?: number;
    job?: string;
    role?: Role;
 }
}


// pascaleCase userCase investiga esa cosas
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  