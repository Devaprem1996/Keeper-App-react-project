import React from 'react';


function Footer() {
    let d = new Date();
    let Years = d.getFullYear();
    return <footer>
        <p>copyright © {Years}</p>
    </footer>;
};
 
export default Footer;