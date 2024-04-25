/* eslint-disable react/prop-types */
function FPCard({ user }) {
    return (
        <div className="card br-10 col-3 d-flex flex-column gap-3">
            <div className='d-flex justify-content-between p-3'>
                <div>
                    { user.name }
                </div>
                <div>
                    <img className='rounded-circle' style={{ width: 50, height: 50 }} title="logo" src={`/src/assets/users/${user.logo}`} />
                </div>
            </div>
            <div className='row'>
                <button className='btn btn-light col-6 br-0'><i className="fas fa-envelope me-3"></i>Email</button>
                <button className='btn btn-light col-6 br-0'><i className="fas fa-phone me-3"></i>Call</button>
            </div>
        </div>
    );
}

export default FPCard;