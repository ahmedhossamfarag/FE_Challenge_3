import { useState, useEffect } from "react";

const useFetch = (username) => {
    const [user, setUser] = useState(undefined)
    const [uname, setUname] = useState(username)
    useEffect(() => {
        if (uname && uname != "") {
            fetch(`https://api.github.com/users/${uname}`)
                .then((r) => r.json())
                .then((data) => setUser(data));
        }
        else {
            setUser(undefined)
        }
    }, [uname]);

    return [user, setUname];
};

export default useFetch;