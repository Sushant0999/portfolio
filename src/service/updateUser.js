export const updateUser = async (userData) => {
    const baseUrl = import.meta.env.VITE_REACT_URL;
    const url = `${baseUrl}/api/v1/user/update/user?emailId=string`;

    const token = sessionStorage.getItem('token').replaceAll('\"', "");

    console.log(formDataToJSON(userData));

    try {
        const response = await fetch(url, {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
            body: formDataToJSON(userData),
        });

        console.log(response);

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
            message: `updated successfull!!!`
        };

    } catch (error) {
        return {
            success: false,
            message: 'An error occurred while fetching user data.'
        };
    }
};




const formDataToJSON = (userData) => {
    const formData = {
        name: userData?.name || '',
        email: userData?.email || '',
        password: userData?.password || '',
        bio: userData?.bio || '',
        profilePic: userData?.profilePic || '',
        location: userData?.location || '',
        linkedinUrl: userData?.linkedinUrl || '',
        githubUrl: userData?.githubUrl || '',
        projects: userData?.projects || [],
        skills: userData?.skills || [],
        experiences: userData?.experiences || [],
        educationList: userData?.educationList || [],
        contacts: userData?.contacts || [],
        certificates: userData?.certificates || [],
    };

    return JSON.stringify(formData);
};
