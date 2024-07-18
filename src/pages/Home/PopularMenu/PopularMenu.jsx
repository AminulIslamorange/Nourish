import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";


const PopularMenu = () => {
    const[menu,setMenu]=useState([]);
    useEffect(()=>{
        fetch('menu.json')
        .then(res=>res.json())
        .then(data=>{
            const popularItem=data.filter(item=>item.category==='popular')
            setMenu(popularItem)})
    },[])
    return (
        <section>
            <SectionTitle subHeading={'---Check it out---'} heading={'FROM OUR MENU'}>
            </SectionTitle>

            <p>{menu.length}</p>

        </section>
    );
};

export default PopularMenu;