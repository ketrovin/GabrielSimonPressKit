document.addEventListener("DOMContentLoaded", () => {
    
    // --- 1. Biography Toggling ---
    const bioButtons = document.querySelectorAll(".bio-toggle-btn");
    const bioTexts = document.querySelectorAll(".bio-text");

    bioButtons.forEach(button => {
        button.addEventListener("click", () => {
            const length = button.getAttribute("data-length");
            
            // Toggle buttons
            bioButtons.forEach(btn => btn.classList.remove("active"));
            button.classList.add("active");
            
            // Toggle texts
            bioTexts.forEach(txt => txt.classList.remove("active"));
            document.getElementById(`bio-${length}`).classList.add("active");
        });
    });

    // --- 2. Copy to Clipboard & Toast Alert ---
    const toast = document.getElementById("toast");
    const copyButtons = document.querySelectorAll(".btn-copy");

    function showToast(message = "Copied to clipboard!") {
        toast.textContent = message;
        toast.classList.remove("hidden");
        setTimeout(() => {
            toast.classList.add("hidden");
        }, 2500);
    }

    copyButtons.forEach(button => {
        button.addEventListener("click", () => {
            let textToCopy = "";
            const target = button.getAttribute("data-copy-target");
            const staticText = button.getAttribute("data-copy-text");

            if (staticText) {
                textToCopy = staticText;
            } else if (target === "active-bio") {
                // Find which bio is currently visible
                const activeBioText = document.querySelector(".bio-text.active");
                if (activeBioText) {
                    textToCopy = activeBioText.innerText;
                }
            } else if (target) {
                const element = document.getElementById(target);
                if (element) {
                    textToCopy = element.innerText;
                }
            }

            if (textToCopy) {
                navigator.clipboard.writeText(textToCopy)
                    .then(() => showToast())
                    .catch(err => {
                        console.error("Failed to copy text: ", err);
                        showToast("Failed to copy. Please manually copy the text.");
                    });
            }
        });
    });

    // --- 3. Accordion for Q&A Section ---
    const qaQuestions = document.querySelectorAll(".qa-question");

    qaQuestions.forEach(question => {
        question.addEventListener("click", () => {
            const item = question.parentElement;
            const isActive = item.classList.contains("active");
            
            // Collapse all Q&A items first
            document.querySelectorAll(".qa-item").forEach(el => {
                el.classList.remove("active");
            });
            
            // If it wasn't active, expand it
            if (!isActive) {
                item.classList.add("active");
            }
        });
    });

    // --- 4. Press Release Expansion ---
    const btnShowPr = document.getElementById("btn-show-pr");
    const btnClosePr = document.getElementById("btn-close-pr");
    const prViewer = document.getElementById("pr-viewer");

    if (btnShowPr && prViewer && btnClosePr) {
        btnShowPr.addEventListener("click", () => {
            prViewer.classList.remove("hidden");
            // Scroll to the press release box smoothly
            prViewer.scrollIntoView({ behavior: "smooth" });
        });

        btnClosePr.addEventListener("click", () => {
            prViewer.classList.add("hidden");
        });
    }

    // --- 5. Lightbox Modal for Covers ---
    const modal = document.getElementById("image-modal");
    const modalImg = document.getElementById("modal-img");
    const modalCaption = document.getElementById("modal-caption");
    const closeBtn = document.querySelector(".modal-close");
    const coverImages = document.querySelectorAll("img[data-modal='true']");

    coverImages.forEach(img => {
        img.addEventListener("click", () => {
            modal.classList.remove("hidden");
            modalImg.src = img.src.replace("._AC_.*\\.", "."); // Ensure highest quality
            modalCaption.textContent = img.alt.replace(" Cover", "");
        });
    });

    if (closeBtn && modal) {
        const closeModal = () => {
            modal.classList.add("hidden");
        };

        closeBtn.addEventListener("click", closeModal);
        modal.addEventListener("click", (e) => {
            if (e.target === modal) {
                closeModal();
            }
        });
        
        // Escape key to close
        document.addEventListener("keydown", (e) => {
            if (e.key === "Escape" && !modal.classList.contains("hidden")) {
                closeModal();
            }
        });
    }

    // --- 6. Mobile Nav Toggle & Drawer ---
    const mobileNavToggle = document.querySelector(".mobile-nav-toggle");
    const mobileDrawer = document.querySelector(".mobile-drawer");
    const drawerLinks = document.querySelectorAll(".mobile-drawer-link");

    if (mobileNavToggle && mobileDrawer) {
        const toggleDrawer = () => {
            const isHidden = mobileDrawer.classList.contains("hidden");
            if (isHidden) {
                mobileDrawer.classList.remove("hidden");
                mobileNavToggle.classList.add("active");
                document.body.style.overflow = "hidden"; // Prevent background scroll
            } else {
                mobileDrawer.classList.add("hidden");
                mobileNavToggle.classList.remove("active");
                document.body.style.overflow = "";
            }
        };

        mobileNavToggle.addEventListener("click", toggleDrawer);
        
        drawerLinks.forEach(link => {
            link.addEventListener("click", () => {
                mobileDrawer.classList.add("hidden");
                mobileNavToggle.classList.remove("active");
                document.body.style.overflow = "";
            });
        });
    }

    // --- 7. Intersection Observer for Scroll Effects ---
    const fadeElements = document.querySelectorAll(".fade-in");
    
    const fadeObserverOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const fadeObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target); // Only trigger once
            }
        });
    }, fadeObserverOptions);

    fadeElements.forEach(el => fadeObserver.observe(el));

    // --- 8. Nav Link Active State Highlighting ---
    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll(".nav-link");

    const sectionObserverOptions = {
        root: null,
        rootMargin: "-40% 0px -50% 0px", // Detect when section is in the middle of viewport
        threshold: 0
    };

    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const activeId = entry.target.getAttribute("id");
                
                navLinks.forEach(link => {
                    link.classList.remove("active");
                    if (link.getAttribute("href") === `#${activeId}`) {
                        link.classList.add("active");
                    }
                });
            }
        });
    }, sectionObserverOptions);

    sections.forEach(sec => sectionObserver.observe(sec));
});
