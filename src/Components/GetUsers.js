import { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { LOAD_USERS } from "../GraphQL/Queries";
import { useContext } from "react";
import { AppContext } from "../AppContext/AppContext";

const GetUsers = (props) => {
    const { isLogged } = useContext(AppContext);
    const { error, loading, data } = useQuery(LOAD_USERS);
    const [users, setUsers] = useState(null);
    console.log(error, loading);
    console.log(isLogged);
    useEffect(() => {
        console.log("get users render");
        data && setUsers([data.getAllUsers[data.getAllUsers.length - 1]]);
    }, [data]);
    return (
        <div>
            {users &&
                users.map((e) => {
                    return <h1 key={e.id}>{e.firstName}</h1>;
                })}
        </div>
    );
};

export default GetUsers;
