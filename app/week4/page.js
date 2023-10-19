import React from 'react';
import NewItem from './new-item';

const Page = () => {
    return (
        <div style={styles.container}>
            <h1 style={styles.header}>Add New Item</h1>
            <NewItem />
        </div>
    );
};

const styles = {
    container: {
        fontFamily: 'Arial, sans-serif',
        backgroundColor: '#f4f4f4',
        padding: '20px',
        borderRadius: '5px',
        boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
        maxWidth: '500px',
        margin: '40px auto'
    },
    header: {
        borderBottom: '2px solid #333',
        paddingBottom: '10px',
        marginBottom: '20px'
    }
};

export default Page;