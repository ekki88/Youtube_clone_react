import React, { useRef } from 'react';
import styles from './search_header.module.css';

const SearchHeader = ({onSearch}) => {
    const inputRef = useRef();
    const handleSearch = () =>{
        const value = inputRef.current.value;
        onSearch(value);
    }
    const onClick = () => {
        handleSearch();
    };

    const onKeyPress = (event) => {
        if (event.key === 'enter') {
            handleSearch();
        }
    };
    return (
        <header className={styles.header}>
            <div className={styles.logo}>
            <img className={styles.img} src='https://ekki88.github.io/Youtube_clone_react/images/logo.png' alt='logo' />
            <h1 className={styles.title}> Youtube</h1>
            </div>
            <input 
            ref={inputRef}
            className={styles.input} 
            type="search" 
            placeholder='Search..' 
            onKeyPress={onKeyPress}/>
            <button className={styles.button} type='submit' onClick={onClick}>
                <img 
                className={styles.btnimg} 
                src='https://ekki88.github.io/Youtube_clone_react/images/search.png' 
                alt='search'/>
            </button>
        </header>
    )
}

export default SearchHeader;