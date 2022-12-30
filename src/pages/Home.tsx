import BasicThreadList from '../components/BasicThreadList';
import MenuAppBar from "../components/MenuAppBar";
import React from 'react';

const Home: React.FC = () => {
    return (
        <>
            <MenuAppBar />
            <br />
            <BasicThreadList />
        </>
    );
};

export default Home;
