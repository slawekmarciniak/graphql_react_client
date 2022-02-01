import { useState } from "react/cjs/react.development";
import { CREATE_USER_MUTATION } from "../GraphQL/Mutations";
import { LOAD_USERS } from "../GraphQL/Queries";
import { useMutation } from "@apollo/client";

const Form = () => {
    const [user, setUser] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
    });

    const [createUser, { error, loading }] = useMutation(CREATE_USER_MUTATION, {
        refetchQueries: [LOAD_USERS],
    });

    const addUser = () => {
        createUser({
            variables: user,
        });
        setUser({ firstName: "", lastName: "", email: "", password: "" });
    };
    return (
        <>
            <div>
                <input
                    type="text"
                    placeholder="First Name"
                    value={user.firstName}
                    onChange={(e) =>
                        setUser({
                            ...user,
                            firstName: e.target.value,
                        })
                    }
                />
                <input
                    type="text"
                    placeholder="Last Name"
                    value={user.lastName}
                    onChange={(e) =>
                        setUser({
                            ...user,
                            lastName: e.target.value,
                        })
                    }
                />
                <input
                    type="text"
                    value={user.email}
                    placeholder="Email"
                    onChange={(e) =>
                        setUser({
                            ...user,
                            email: e.target.value,
                        })
                    }
                />
                <input
                    type="text"
                    placeholder="Password"
                    value={user.password}
                    onChange={(e) =>
                        setUser({
                            ...user,
                            password: e.target.value,
                        })
                    }
                />
                <button onClick={addUser}>Create User</button>
            </div>

            {error && <p>error during submit</p>}
            {loading && <p>submiting...</p>}
        </>
    );
};

export default Form;
