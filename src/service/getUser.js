export const getUser = async () => {
    // const baseUrl = import.meta.env.VITE_REACT_URL; // Use VITE_ prefix
    const baseUrl = "https://run.mocky.io/v3/0526d494-49e9-4cf2-9ba7-b8252039bec0"
    const url = `${baseUrl}/user`; // Declare 'url' using const

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

        return response.json();

    } catch (error) {
        // console.error('Error during signup:', error);
        return null;
    }
};


