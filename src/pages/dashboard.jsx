import React, { useEffect, useState } from 'react'
import CustomForm from '../components/CustomForm'
import CustomLoading from '../components/CustomLoading';
import { getUser } from '../service/getUser';

export default function Dashboard() {

    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        const getData = async () => {
            try {
                const data = await getUser();
                setUserData(data.results);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching user data:', error);
                setLoading(false);
            }
        };
        getData();
    }, []);

    if (loading) {
        return <div><CustomLoading /></div>;
      }

    return (
        <div><CustomForm userData={userData} /></div>
    )
}
