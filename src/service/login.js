export const getToken = async (email, password) => {
    const baseUrl = import.meta.env.VITE_REACT_URL;
    const url = `${baseUrl}/api/v1/auth/token`;

    const userObj = {
        username: 'string',
        password: password,
    };

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userObj),
        });

        if (!response.ok) {
            const errorData = await response.json();
            return {
                success: false,
                message: `${errorData.detail}!!!`
            };
        }

        const data = await response.json();
        sessionStorage.setItem('userData', JSON.stringify(data));
        return {
            success: true,
            message: `login successfull!!!`
        };

    } catch (error) {
        return {
            success: false,
            message: 'An error occurred while fetching user data.'
        };
    }
};
