import { useNavigate } from 'react-router-dom';
import { Button } from 'antd';

export const BackButton = () => {
    const navigate = useNavigate();
    const handleBack = () => {
        navigate(-1);
    };

    return (
        <Button
            type='primary'
            onClick={handleBack}
        >BACK</Button>
    )
};
