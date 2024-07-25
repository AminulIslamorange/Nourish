import Cover from "../../Shared/Cover/Cover";
import MenuItem from "../../Shared/MenuItem/MenuItem";


const MenuCategory = ({items,title,img,details}) => {
    return (
        <div className="pt-8">
           {title && <Cover img={img} title={title} details={details}></Cover>}
            <div className="grid md:grid-cols-2 gap-6 my-12">
                {items.map(item=><MenuItem 
                key={item._id} 
                item={item}>

                </MenuItem>)}
                </div>
        </div>
    );
};

export default MenuCategory;