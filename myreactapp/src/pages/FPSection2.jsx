import FPCard from "./FPCard"

const users = [
    {
        id: 1,
        name: "Ahmd Hossam",
        logo: "user1.jpg"
    },
    {
        id: 2,
        name: "Ahmd Hossam",
        logo: "user1.jpg"
    }
];

function FPSection2() {
    return (
        <div id="home-section" className="section justify-content-center">
            {users.map(u => <FPCard key={u.id} user={ u }  />) }
        </div>
    );
}

export default FPSection2;