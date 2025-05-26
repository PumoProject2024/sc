import React, { useState, useEffect } from 'react';
import './Projects.css';

const Projects = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [currentSetIndex, setCurrentSetIndex] = useState(0);
    const [lightboxOpen, setLightboxOpen] = useState(false);

    const projectImages = [
        "https://images.pexels.com/photos/1643384/pexels-photo-1643384.jpeg",
        "https://5.imimg.com/data5/UU/HY/SX/ANDROID-93999975/product-jpeg-500x500.jpg",
        "https://5.imimg.com/data5/SELLER/Default/2023/5/309458320/SF/UP/JV/158380123/53926f73-40a4-4bc8-b742-3e8b480798d3-500x500.jpg",
        "https://res.cloudinary.com/upwork-cloud/image/upload/c_scale,w_1000/v1712687194/catalog/1777763284673695744/o1bzjzidhnaiiz86ufml.jpg",
        "https://5.imimg.com/data5/SELLER/Default/2024/8/441591068/GK/TR/EG/36279264/3d-floor-plan-services-1000x1000.jpg",
        "https://lh3.googleusercontent.com/p/AF1QipOT1nXUh4_C4i0z1j4nA8FBwDlRGscYzdrYhM6V=w141-h235-n-k-no-nu",
        "https://media.designcafe.com/wp-content/uploads/2020/07/21162738/bathroom-interior-design-with-floral-mosaic-tiles.jpg",
        "https://lh3.googleusercontent.com/p/AF1QipO_b4kBN0ppR5T9OpAK3T-CgSgDbsYvWQh92Qjl=w408-h671-k-no",
        "https://lh3.googleusercontent.com/p/AF1QipNzjKx_U3kenlYa850nDdA0w7KahRn98vtaJrEq=w141-h235-n-k-no-nu",
        "https://lh3.googleusercontent.com/p/AF1QipM5FKvBdNyyNMFnMDJswXV5hNKTNMbJ9RauL034=w141-h235-n-k-no-nu",
        "https://lh3.googleusercontent.com/p/AF1QipPcgdZY7G0qg9EuFsGTE0sWSWGrYtCmqwX_LnKP=w141-h101-n-k-no-nu",
        "https://lh3.googleusercontent.com/p/AF1QipMXw1bRgImw7b6WtW0JWKW5GzIhV8ARExrQZwjn=w141-h101-n-k-no-nu",
        "https://lh3.googleusercontent.com/p/AF1QipMYXzUVP_7BD1oy-cdknf_lmzzTAyIMc0YFMmkr=w141-h101-n-k-no-nu",
        "https://lh3.googleusercontent.com/p/AF1QipPRdjYlV8r6UKCdvRpr3kl4yx__tOC36tBc1ZRj=w141-h235-n-k-no-nu",
        "https://lh3.googleusercontent.com/p/AF1QipOKhJivQ9i9GD6M6itC1QmYNVmBFsat_OvIoJ67=w141-h235-n-k-no-nu",
        "https://lh3.googleusercontent.com/p/AF1QipNhJD0fpiPGT5dtLHPmKkY3dp92ErqntUF9OjDa=w141-h235-n-k-no-nu"
    ];

    const imagesPerSet = 10;

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSetIndex(prev => (prev + 1) % Math.ceil(projectImages.length / imagesPerSet));
        }, 20000);

        return () => clearInterval(interval);
    }, [projectImages.length]);

    const openLightbox = (index) => {
        setCurrentImageIndex(index);
        setLightboxOpen(true);
    };

    const closeLightbox = () => {
        setLightboxOpen(false);
    };

    const changeImage = (direction) => {
        setCurrentImageIndex(prev => {
            let newIndex = prev + direction;
            if (newIndex < 0) newIndex = projectImages.length - 1;
            if (newIndex >= projectImages.length) newIndex = 0;
            return newIndex;
        });
    };

    const getCurrentImages = () => {
        const start = currentSetIndex * imagesPerSet;
        const end = start + imagesPerSet;
        return projectImages.slice(start, end);
    };

    return (
        <section id="projects" className="projects-section">
            <h1>Recent Projects</h1>
            <div className="project-gallery">
                {getCurrentImages().map((src, index) => (
                    <img
                        key={index}
                        src={src}
                        alt={`Project ${currentSetIndex * imagesPerSet + index + 1}`}
                        onClick={() => openLightbox(currentSetIndex * imagesPerSet + index)}
                    />
                ))}
            </div>

            {lightboxOpen && (
                <div className="lightbox" onClick={closeLightbox}>
                    <span className="close" onClick={closeLightbox}>&times;</span>
                    <img
                        className="lightbox-image"
                        src={projectImages[currentImageIndex]}
                        alt="Project"
                        onClick={(e) => e.stopPropagation()}
                    />
                    <button className="prev" onClick={(e) => { e.stopPropagation(); changeImage(-1); }}>&#10094;</button>
                    <button className="next" onClick={(e) => { e.stopPropagation(); changeImage(1); }}>&#10095;</button>

                </div>
            )}
        </section>
    );
};

export default Projects;