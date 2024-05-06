import { useNavigate } from 'react-router-dom';

const DiscPage = () => {
        const navigate = useNavigate();
    
        const goToHome = () => {
            navigate('/');
        }

    return (
        <div>
            <h1><button data-testid = 'page-button' onClick={goToHome}>Disciplines</button></h1>
        </div>
    );
}  

export default DiscPage;