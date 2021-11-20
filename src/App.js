import axios from "axios";
import { useEffect, useState } from "react";
import UserList from "./component/userlist/UserList";
import "bootstrap/dist/css/bootstrap.min.css";
import { Spinner } from "react-bootstrap";
import './App.css'

function App() {
  const [User, setUser] = useState([]);
  const [loading, setLoading] = useState(true);

  const getUserList = async () => {
    try {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/users`
      );
      setTimeout(function () {
        setUser(response.data);
      setLoading(false);
    }, 2000);
      
    } catch (error) {}
  };
  useEffect(() => {
    getUserList();
  }, []);

  return (
    <div className="App">
      {loading ? (
        <div className='load'>
          <Spinner  animation="border" />

        </div>
      ) : (
        <UserList userList={User} />
      )}
    </div>
  );
}

export default App;
