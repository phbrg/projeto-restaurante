import useApi from '../hooks/useApi'

import { useState } from "react"

const Home = () => {
  const [name, setName] = useState(null);
  const [table, setTable] = useState(null);

  const api = useApi();
  let url = 'http://localhost:3001'
  const data = {name, table}

  const login = async (e) => {
    e.preventDefault();
    try {
      const registerUser = await api.fetchData(`${url}/`, 'POST', data);
      api.login(registerUser.token);
      console.log(registerUser);
    } catch(err) {
      console.log(err);
    }
  }

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center bg-background">
    <form onSubmit={login} className="flex flex-col gap-4 w-64">
      <input type="text" placeholder="Digite o nome" className="p-2 text-sm font-semibold rounded-md border-none outline-none" value={name} onChange={(e) => setName(e.target.value)} />
      <input type="text" placeholder="Digite a mesa" className="p-2 text-sm font-semibold rounded-md border-none outline-none" value={table} onChange={(e) => setTable(e.target.value)} />
      <input type="submit" value="Ir pra o menu" className="p-2 text-sm w-full font-semibold bg-yellow text-white font-semibol border-none rounded-md cursor-pointer" />
    </form>
  </div>
  )
}

export default Home