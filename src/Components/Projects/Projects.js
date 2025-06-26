import { useState, useEffect } from 'react';
import './Projects.css';
import Partners from '../Partners/Partners';
import WhatsAppButton from '../Whatsapp/WhatsAppButton';

const Projects = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [currentSetIndex, setCurrentSetIndex] = useState(0);
    const [lightboxOpen, setLightboxOpen] = useState(false);

    const projectImages = [
        "/images/Prj/prj1.jpeg",
        "/images/Prj/prj7.jpeg",
        "/images/Prj/prj3.jpeg",
        "/images/Prj/prj17.jpeg",
        "/images/Prj/prj5.jpeg",
        "/images/Prj/prj27.jpeg",
        "/images/Prj/prj2.jpeg",
        "/images/Prj/prj8.jpeg",
        "/images/Prj/prj9.jpeg",
        "/images/Prj/prj10.jpeg",
        "/images/Prj/prj11.jpeg",
        "/images/Prj/prj12.jpeg",
        "/images/Prj/prj13.jpeg",
        "/images/Prj/prj14.jpeg",
        "/images/Prj/prj15.jpeg",
        "/images/Prj/prj16.jpeg",
        "/images/Prj/prj5.jpeg",
        "/images/Prj/prj18.jpeg",
        "/images/Prj/prj19.jpeg",
        "/images/Prj/prj20.jpeg",
        "/images/Prj/prj21.jpeg",
        "/images/Prj/prj22.jpeg",
        "/images/Prj/prj23.jpeg",
        "/images/Prj/prj24.jpeg",
        "/images/Prj/prj25.jpeg",
        "/images/Prj/prj26.jpeg",
        "/images/Prj/prj6.jpeg",
        "/images/Prj/prj28.jpeg",
        "/images/Prj/prj29.jpeg",
        "/images/Prj/prj30.jpeg",
        "/images/Prj/prj31.jpeg",
        "/images/Prj/prj32.jpeg",
        "/images/Prj/prj33.jpeg",
        "/images/Prj/prj34.jpeg",
        "/images/Prj/prj35.jpeg",
        "/images/Prj/prj36.jpeg",
        "/images/Prj/prj37.jpeg",
        "/images/Prj/prj38.jpeg",
        "/images/Prj/prj39.jpeg",
        "/images/Prj/prj40.jpeg",
    ];

    const imagesPerSet = 20;

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSetIndex(prev => (prev + 1) % Math.ceil(projectImages.length / imagesPerSet));
        }, 20000);

        return () => clearInterval(interval);
    }, [projectImages.length]);

    // Only prevent image-specific download actions
    useEffect(() => {
        // Prevent right-click only on images
        const handleImageContextMenu = (e) => {
            if (e.target.tagName === 'IMG') {
                e.preventDefault();
                return false;
            }
        };

        // Prevent dragging only images
        const handleImageDragStart = (e) => {
            if (e.target.tagName === 'IMG') {
                e.preventDefault();
                return false;
            }
        };

        // Prevent image-specific keyboard shortcuts only when image is focused
        const handleKeyDown = (e) => {
            const focusedElement = document.activeElement;
            const isImageFocused = focusedElement && focusedElement.tagName === 'IMG';

            if (isImageFocused && (e.ctrlKey || e.metaKey)) {
                if (e.key === 's' || e.key === 'a' || e.key === 'c') {
                    e.preventDefault();
                    return false;
                }
            }
        };

        document.addEventListener('contextmenu', handleImageContextMenu);
        document.addEventListener('dragstart', handleImageDragStart);
        document.addEventListener('keydown', handleKeyDown);

        return () => {
            document.removeEventListener('contextmenu', handleImageContextMenu);
            document.removeEventListener('dragstart', handleImageDragStart);
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

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
                        // Only prevent image-specific interactions
                        onContextMenu={(e) => e.preventDefault()}
                        onDragStart={(e) => e.preventDefault()}
                        draggable={false}
                        // Minimal styling to prevent downloads without blocking inspect
                        style={{
                            userSelect: 'none',
                            WebkitUserDrag: 'none'
                        }}
                    />
                ))}
            </div>

            {lightboxOpen && (
                <div className="lightbox" onClick={closeLightbox}>
                    <span className="close" onClick={closeLightbox}>&times;</span>
                    <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
                        <div className="lightbox-image-wrapper">
                            <img
                                className="lightbox-image"
                                src={projectImages[currentImageIndex]}
                                alt="Project"
                                // Prevent lightbox image downloads
                                onContextMenu={(e) => e.preventDefault()}
                                onDragStart={(e) => e.preventDefault()}
                                draggable={false}
                                style={{
                                    userSelect: 'none',
                                    WebkitUserDrag: 'none',
                                    pointerEvents: 'none'
                                }}
                            />
                            <div className="lightbox-title-overlay">Sarrathi Constructions</div>
                        </div>
                    </div>
                    <button className="prev" onClick={(e) => { e.stopPropagation(); changeImage(-1); }}>&#10094;</button>
                    <button className="next" onClick={(e) => { e.stopPropagation(); changeImage(1); }}>&#10095;</button>
                </div>
            )}
            <Partners />
            <WhatsAppButton
                phone="919840524873"
                message="Hello Sarrathi Constructions, Can I get more info on package details?"
                size={48}
            />
        </section>
    );
};

export default Projects;