import PropTypes from 'prop-types';
function SPUser({ user }) {
    if (user.message) {
        return (<p>User Not Found</p>)
    }
    return (
        <div className='bg-light p-3'>
            <div>
                <img className='rounded-circle'  style={{ width:'100%'}} src={ user.avatar_url } />
            </div>
            <div>
                <p>
                    <a href={ user.html_url }>{user.name}</a>
                </p>
                <p>
                    {user.company} - {user.location} - { user.email }
                </p>
            </div>
        </div>
    );
}

SPUser.propTypes = {
    user: {
        message: PropTypes.string,
        avatar_url: PropTypes.string,
        name: PropTypes.string,
        html_url: PropTypes.string,
        company: PropTypes.string,
        location: PropTypes.string,
        email: PropTypes.string,
    }
}
export default SPUser;