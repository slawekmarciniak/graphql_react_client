import { useState } from "react/cjs/react.development";
import { CREATE_USER_MUTATION } from "../GraphQL/Mutations";
import { useMutation } from "@apollo/client";

const Form = () => {
    const [data, setData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
    });

    const [createUser, { error }] = useMutation(CREATE_USER_MUTATION);

    const addUser = () => {
        createUser({
            variables: data,
        });

        // if (error) {
        //     console.log(error);
        // }
    };
    return (
        <div>
            <input
                type="text"
                placeholder="First Name"
                onChange={(e) =>
                    setData({
                        ...data,
                        firstName: e.target.value,
                    })
                }
            />
            <input
                type="text"
                placeholder="Last Name"
                onChange={(e) =>
                    setData({
                        ...data,
                        lastName: e.target.value,
                    })
                }
            />
            <input
                type="text"
                placeholder="Email"
                onChange={(e) =>
                    setData({
                        ...data,
                        email: e.target.value,
                    })
                }
            />
            <input
                type="text"
                placeholder="Password"
                onChange={(e) =>
                    setData({
                        ...data,
                        password: e.target.value,
                    })
                }
            />
            <button onClick={addUser}>Create User</button>
        </div>
    );
};

export default Form;
