import { useEffect, useState } from "react"; // Ensure React is imported if using JSX
import { Button } from "./Button";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Users = () => {

    const [users, setUsers] = useState([])
    const [filter,setFilter] = useState("");

    useEffect(()=>{
        axios.get(`http://localhost:3000/api/v1/user/bulk?filter=${filter}`)
        .then(response =>{
            setUsers(response.data.user)
        } )

        .catch(error => {
            console.error("There was error fetching the users!", error);
        })
    },[filter]);

    

    return (
        <>
            <div className="mt-6 text-lg font-bold">Users</div>
            <div className="my-2">
                <input
                    onChange={(e)=> setFilter(e.target.value)}
                    type="text"
                    placeholder="Search users..."
                    className="w-full px-2 py-1 border rounded border-slate-200"
                />
            </div>
            <div>
                {users.map(user=><User key={user._id} user={user}/> )}
            </div>
        </>
    );
};


export default Users

function User({user}) {
    const navigate = useNavigate();

    return (
        <div className="flex justify-between">
            <div className="flex">
                <div className="flex justify-center w-12 h-12 mt-1 mr-2 rounded-full bg-slate-200">
                    <div className="flex flex-col justify-center h-full text-xl">
                        {user.firstName[0]}
                    </div>
                </div>
                <div className="flex flex-col justify-center h-full">
                    <div>
                        {user.firstName} {user.lastName}
                    </div>
                </div>
            </div>
            <div className="flex flex-col justify-center h-full">
                <Button onClick={() => navigate(`/send?id=${user._id}&name=${user.firstName}`)} label="Send Money" />
            </div>
        </div>
    );
}
