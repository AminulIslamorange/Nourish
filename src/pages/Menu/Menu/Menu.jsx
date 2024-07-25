import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import menuImg from '../../../assets/menu/banner3.jpg'
import dessertImg from '../../../assets/menu/dessert-bg.jpeg'
import pizzaImg from '../../../assets/menu/pizza-bg.jpg'
import saladImg from '../../../assets/menu/salad-bg.jpg'
import soupImg from '../../../assets/menu/soup-bg.jpg'
import useMenu from "../../../hooks/useMenu";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuCategory from "../MenuCategory/MenuCategory";


const Menu = () => {
    const[menu]=useMenu();
    const dessert=menu.filter(item=>item.category==='dessert');
    const pizza=menu.filter(item=>item.category==='pizza');
    const salad=menu.filter(item=>item.category==='salad');
    const soup=menu.filter(item=>item.category==='soup');
    const offered=menu.filter(item=>item.category==='offered');
    
    return (
        <div>
            <Helmet>
                <title>Nourish Bistro | Menu</title>
            </Helmet>

            <Cover img={menuImg} title={'OUR MENU'} details={'Would you like to try a dish?'}>
            </Cover>
            {/* Main Cover End */}
           <SectionTitle subHeading={"---Don't miss---"} heading={"TODAY'S OFFER"}> 
           </SectionTitle>
             {/* Offerd cover section */}
            <MenuCategory items={offered}>

            </MenuCategory>
            {/* dessert menu Itams */}

            <MenuCategory items={dessert} title={"DESSERTS"} details={" when an unknown printer took a galley of type and scrambled it to make a type specimen book."} img={dessertImg}></MenuCategory>


            <MenuCategory items={pizza} title={"PIZZA"} details={" standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."} img={pizzaImg}></MenuCategory>



            <MenuCategory items={salad} title={"SALADS"} details={"when an unknown printer took a galley of type and scrambled it to make a type specimen book."} img={saladImg}></MenuCategory>



            <MenuCategory items={soup} title={"SOUPS"} details={" standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."} img={soupImg}></MenuCategory>
            
        </div>
    );
};

export default Menu;