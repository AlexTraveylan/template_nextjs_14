import { authConfig } from "@/pages/api/auth/[...nextauth]"
import { LoginButton } from "@/src/auth/LoginButton"
import { User } from "@/src/auth/User"
import { getServerSession } from "next-auth"

export default async function Home() {
  const session = await getServerSession(authConfig)

  if (session) {
    return <User />
  }

  return (
    <div>
      <LoginButton />
    </div>
  )
}
