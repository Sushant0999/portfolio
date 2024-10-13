export const getUser = async () => {
    const baseUrl = import.meta.env.VITE_REACT_URL;
    const url = `${baseUrl}/api/v1/user/get/user?emailId=string`;

    try {
        const response = await fetch(url, {
            method: 'GET',
        });

        if (!response.ok) {
            const errorData = await response.json();
            return {
                message: `${errorData.detail}!!!`
            };
        }
        const userData = await response.json();
        return userData;

    } catch (error) {
        return null;
    }
};


