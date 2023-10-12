

import {cookies} from "next/headers";
import Login from "./components/Login";

export default async function NotificationLayout({
    children,
}: {
  children: React.ReactNode
}) {
  const loginFunction = async (user: string) => {
    "use server";

    cookies().set('login', user);
    return true;
  }

  const login = cookies().get('login');


  return (
    <main>
      <div>{login ? children : <Login setLogin={loginFunction}   />}</div>
    </main>
  )
}