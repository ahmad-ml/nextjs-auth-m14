import { cookies } from "next/headers";

export default async function Theme() {

  const cookieStore = cookies()
  const theme = cookieStore.get('theme')
  const setTheme = theme?.value

  return (
    <div>
      <h1>Theme is set to {setTheme}</h1>
    </div>
  );
}