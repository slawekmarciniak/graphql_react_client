import { useEffect } from "react";
import { useQuery } from "@apollo/client";
import { LOAD_USERS } from "../GraphQL/Queries";
import { useContext } from "react";
import { AppContext } from "../AppContext/AppContext";

const GetUsers = () => {
    const { users, setUsers } = useContext(AppContext);
    const { data, error, loading } = useQuery(LOAD_USERS);

    useEffect(() => {
        data && setUsers([data.getAllUsers[data.getAllUsers.length - 1]]);
    }, [data, setUsers]);
    return (
        <div>
            {users &&
                users.map((e) => {
                    return <h1 key={e.id}>{e.firstName}</h1>;
                })}
            {loading && <p>data is loading</p>}
            {error && <p>some error occurred try again</p>}
        </div>
    );
};

export default GetUsers;
