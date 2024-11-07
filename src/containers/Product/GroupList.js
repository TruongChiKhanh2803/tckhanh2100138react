import React, { useEffect, useState } from 'react';
import axios from 'axios';

const GroupList = () => {
    const [groups, setGroups] = useState([]);

    useEffect(() => {
        axios.get('/api/groups')
            .then(response => setGroups(response.data))
            .catch(error => console.error('Error fetching groups:', error));
    }, []);

    return (
        <div>
            <h2>Nhóm sản phẩm</h2>
            <ul>
                {groups.map(group => (
                    <li key={group.idnhom}>{group.ten}</li>
                ))}
            </ul>
        </div>
    );
};

export default GroupList;
