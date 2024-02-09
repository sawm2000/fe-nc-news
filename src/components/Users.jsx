import { useEffect, useState } from "react";
import { getUsers } from "../api";
import UserCard from "./UserCard";
import Loading from "./Loading";

function Users() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getUsers().then((response) => {
      setUsers(response.users);
      setIsLoading(false);
    });
  }, []);
  return (
    <>
      {isLoading ? (
        <Loading loading={"users"} />
      ) : (
        <ul id="user-list">
          {users.map((user) => {
            return (
              <li id="user-item" key={user.username}>
                <UserCard user={user} />
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
}

export default Users;
