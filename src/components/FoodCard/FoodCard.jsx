

const FoodCard = ({item}) => {
    const{name,image,price,recipe}=item;
    return (
        <div className="card bg-base-100 w-96 shadow-xl relative">
            <figure>
                <img
                    src={image}
                    alt="Shoes" />
            </figure>
            <p className="right-4 top-8 absolute bg-slate-900 text-white">$:{price}</p>
            <div className="card-body flex flex-col items-center ">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-outline border-0 border-b-4 text-[#e9a507] border-b-[#BB8506] bg-[#E8E8E8] uppercase">Add To Cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;