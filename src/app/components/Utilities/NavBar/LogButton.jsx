import Link from "next/link"
import { authUserSession } from "@/library/auth"

const LogButton = async() => {
    const user = await authUserSession()
    const label = user ? "Sign Out" : "Sign In"
    const linkURL = user ? "api/auth/signout" : "api/auth/signin"

    return (
        <div className="flex justify-between items-center gap-6 text-white">
            {
                user ? <Link className="text-lg hover:underline" href="/users/dashboard">Dashboard</Link> : null
            }
            <Link href={linkURL} className="bg-color-gelap text-lg text-white p-2 rounded-lg border-2 border-color-gelap hover:bg-transparent transition-all">{label}</Link>
        </div>
    )
}

export default LogButton