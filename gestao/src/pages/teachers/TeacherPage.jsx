import { useNavigate } from 'react-router-dom';


const TeacherPage = () => {
    const navigate = useNavigate();

    const goToHome = () => {
        navigate('/');
    }

    return (
        <div>
            <h1><button data-testid="page-button" onClick={goToHome}>Teacher Page</button></h1>
        </div>
    );
}

export default TeacherPage;
