import { useState } from "react/cjs/react.development";
import { CREATE_USER_MUTATION } from "../GraphQL/Mutations";
import { LOAD_USERS } from "../GraphQL/Queries";
import { useMutation, useQuery } from "@apollo/client";

const Form = () => {
    // const { refetch } = useQuery(LOAD_USERS);

    const [newData, setNewData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
    });

    const [createUser, { error, loading }] = useMutation(CREATE_USER_MUTATION, {
        refetchQueries: [LOAD_USERS, "getAllUsers"],
    });

    const addUser = () => {
        createUser({
            variables: newData,
        });
        // refetch();
    };
    return (
        <div>
            <input
                type="text"
                placeholder="First Name"
                onChange={(e) =>
                    setNewData({
                        ...newData,
                        firstName: e.target.value,
                    })
                }
            />
            <input
                type="text"
                placeholder="Last Name"
                onChange={(e) =>
                    setNewData({
                        ...newData,
                        lastName: e.target.value,
                    })
                }
            />
            <input
                type="text"
                placeholder="Email"
                onChange={(e) =>
                    setNewData({
                        ...newData,
                        email: e.target.value,
                    })
                }
            />
            <input
                type="text"
                placeholder="Password"
                onChange={(e) =>
                    setNewData({
                        ...newData,
                        password: e.target.value,
                    })
                }
            />
            <button onClick={addUser}>Create User</button>
        </div>
    );
};

export default Form;
