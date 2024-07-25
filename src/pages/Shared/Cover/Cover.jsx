
import { Parallax } from 'react-parallax';
const Cover = ({ img, title,details }) => {
    return (
        <Parallax
            blur={{ min: -50, max: 50 }}
            bgImage={img}
            bgImageAlt="the dog"
            strength={-200}
            
              
        >
            <div
                className="hero h-[500px]" 
            >
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-neutral-content text-center">
                    <div className="p-4" style={{ width: '820px', height: '150px',background: 'rgba(21, 21, 21, 0.60)' }}>
                        <h1 className="mb-5 text-5xl font-bold uppercase">{title}</h1>
                        <p className="mb-5">
                            {details}
                        </p>

                    </div>
                </div>
            </div>
        </Parallax>

    );
};

export default Cover;