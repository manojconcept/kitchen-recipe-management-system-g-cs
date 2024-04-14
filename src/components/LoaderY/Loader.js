import React from 'react';
import Footer from '../Footer';
import './loader.css';

const LoaderContainer = ({ children }) => {
    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh', // Full viewport height
            }}
        >
            {children}
        </div>
    );
};

const Loader = () => {
    return (
        <>
            <LoaderContainer>
                <div className="custom-loader"></div>
            </LoaderContainer>
            <Footer></Footer>
        </>

    );
};

export default Loader;
