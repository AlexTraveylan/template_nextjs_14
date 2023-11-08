
import { LogoutButton } from "./LoginButton"
import { getRequiredAuthSession } from "../lib/auth"

export const User = async () => {
    const session = await getRequiredAuthSession()

    if (!session?.user) {
        return <p>No user</p>
    }

    return (
        <div>
            <h1>Hi {session.user.name }!</h1>
            <p className="text-xs">{session.user.id}</p>
            <p>{session.user.email }</p>
            <img src={session.user.image ?? ""} />
            <LogoutButton />
        </div>
    )
}
