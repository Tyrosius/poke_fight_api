const { loginRequest } = require("../pokemon.js");
const Login = require(".../login.js");


module.exports = function Login() {

function handleChange(event) {
        setUser((prev) => ({
            ...prev,
            [event.target.name]: event.target.value,
        }));
    }
    const userIsLogged = useContext(LoggedStatusContext);
    async function onsubmit(e) {
        e.preventDefault();
        await loginRequest(user);

        console.log("Login Onsubmit: userStatus", userIsLogged);
        console.log("Onsubmit :user", user);
        window.location.reload();
    }

    const data = localStorage.getItem("name");
    if (data) {
        const status = JSON.parse(data).logged;
        console.log("::::", status);
        // if (status) {
        //     return <h2> Hallo {JSON.parse(data).email}</h2>;
        // }
        if (user === " ") {
            const error = <h1>Please fill out youre email and password</h1>;
            return <h2> Hallo + {error}</h2>;
        }
    }

console.log("Login: userStatus", userIsLogged);

return (
    <div>
        {userIsLogged ? (
            <section>
                {<h1> Sie sind eingeloggt</h1>}
                <Home />
            </section>
        ) : (
            <div>
                <div className="login-container">
                    <form onSubmit={onsubmit}>
                        <input
                            className="input-field"
                            type="text"
                            name="email"
                            placeholder="Deine E-Mail"
                            onChange={handleChange}
                        />
                        <input
                            className="input-field"
                            type="password"
                            name="password"
                            placeholder="Dein Passwort"
                            onChange={handleChange}
                        />
                        <button className="login-button">Login</button>
                    </form>
                </div>
            </div>
        )}
    </div>
);
}
