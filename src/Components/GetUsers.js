import { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { LOAD_USERS } from "../GraphQL/Queries";

const GetUsers = () => {
    const { error, loading, data } = useQuery(LOAD_USERS);
    const [users, setUsers] = useState(null);
    console.log(error, loading);
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
