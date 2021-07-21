import user from "../data/user"

function Links() {
    return (
        <div>
            <h3>Links</h3>
            <a href={user.github}>{user.github}</a>
            <a href={user.linkedin}>{user.linkedin}</a>
        </div>
    )
}

export default Links