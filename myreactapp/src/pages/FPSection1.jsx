import { Link } from "react-router-dom";
function FPSection1() {
    return (
        <div className="section container">
            <div>
                <div>
                    <h3>Coligo Challenge</h3>
                </div>
                <div className='mt-5'>
                    <p>Programming is the process of designing, writing, and implementing instructions or code that enables computers and other digital devices to perform specific tasks and solve problems. </p>
                </div>
                <div className='mt-5 d-flex justify-content-around'>
                    <a href="#home-section">
                        <button className='btn btn-primary'>Home Section</button>
                    </a>
                    <Link to='/GitHub'>
                        <button className='btn btn-outline-info'>GitHub</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default FPSection1;