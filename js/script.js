// ══════════════════════════════════════
// LOADING SCREEN — Option 2
// ══════════════════════════════════════
document.body.style.overflow = 'hidden';

window.addEventListener('load', function () {
    const screen = document.getElementById('loadingScreen');
    if (!screen) return;
    setTimeout(function () {
        screen.classList.add('hide');
        setTimeout(function () {
            screen.style.display = 'none';
            document.body.style.overflow = '';
        }, 650);
    }, 2600);
});

// ══════════════════════════════════════
// SCROLL TO TOP ON LOAD
// ══════════════════════════════════════
window.onload = function() { window.scrollTo(0, 0); };
if ('scrollRestoration' in history) history.scrollRestoration = 'manual';

// ══════════════════════════════════════
// SCROLL REVEAL
// ══════════════════════════════════════
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(e => {
        if (!e.isIntersecting) return;
        if (e.target.classList.contains('reveal-left'))  e.target.classList.add('animate-left');
        if (e.target.classList.contains('reveal-right')) e.target.classList.add('animate-right');
    });
}, { threshold: 0.1 });
document.querySelectorAll('.reveal-left, .reveal-right').forEach(el => revealObserver.observe(el));

// ══════════════════════════════════════
// MOBILE MENU
// ══════════════════════════════════════
function toggleMobileMenu() {
    const nav = document.querySelector('.main-nav');
    nav.classList.toggle('mobile-open');
}

// Close mobile menu when a nav link is tapped
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.main-nav a').forEach(link => {
        link.addEventListener('click', () => {
            const nav = document.querySelector('.main-nav');
            if (nav.classList.contains('mobile-open')) {
                nav.classList.remove('mobile-open');
            }
        });
    });
});

// ══════════════════════════════════════
// SERVICES IMAGE MODAL
// ══════════════════════════════════════
function openModal(src) {
    document.getElementById('modalImg').src = src;
    document.getElementById('imageModal').style.display = 'flex';
    document.body.style.overflow = 'hidden';
}
function closeModal() {
    document.getElementById('imageModal').style.display = 'none';
    document.body.style.overflow = '';
}

// ══════════════════════════════════════
// PROJECTS DATA
// ══════════════════════════════════════
const projects = [
    {
        title: "Nilda Jordan",
        type: "Residential",
        year: 2022,
        img: "Full Gallery Photo/Amampacang Jordan/mrs. Nilda Jordan.jpg",
        desc: "A modern residential building at brgy. Amampacang Calbayog City.",
        interiors: [
            { img: "Full Gallery Photo/Amampacang Jordan/LIVING AREA1.jpg", label: "Living Room" },
            { img: "Full Gallery Photo/Amampacang Jordan/MASTERS BEDROOM.jpg", label: "Master's Bedroom" },
            { img: "Full Gallery Photo/Amampacang Jordan/KITCHEN AREA.jpg", label: "Kitchen" },
            { img: "Full Gallery Photo/Amampacang Jordan/DINING AREA.jpg", label: "Dining Area" },
            { img: "Full Gallery Photo/Amampacang Jordan/BEDROOM1.jpg", label: "Bedroom 1" },
            { img: "Full Gallery Photo/Amampacang Jordan/BEDROOM2.jpg", label: "Bedroom 2" },
            { img: "Full Gallery Photo/Amampacang Jordan/TYPICAL T&B.jpg", label: "Toilet & Bath" }
        ]
    },
    {
        title: "Mayor Aquino's Residence",
        type: "Residential",
        year: 2023,
        img: "Full Gallery Photo/MAYOR AQUINO/P1.jpg",
        desc: "Luxury 2-story residence with modern concrete finishes.",
        interiors: [
            { img: "Full Gallery Photo/MAYOR AQUINO/BEDROOM 1.jpg", label: "Bedroom 1" },
            { img: "Full Gallery Photo/MAYOR AQUINO/BEDROOM 2.jpg", label: "Bedroom 2" },
            { img: "Full Gallery Photo/MAYOR AQUINO/BEDROOM 3.jpg", label: "Bedroom 3" },
            { img: "Full Gallery Photo/MAYOR AQUINO/BEDROOM 4.jpg", label: "Bedroom 4" },
            { img: "Full Gallery Photo/MAYOR AQUINO/DINING AREA.jpg", label: "Dinning Area" },
            { img: "Full Gallery Photo/MAYOR AQUINO/LIVING AREA.jpg", label: "Living Area" },
            { img: "Full Gallery Photo/MAYOR AQUINO/FAMILY AREA.jpg", label: "Family Area" },
            { img: "Full Gallery Photo/MAYOR AQUINO/KITCHEN FINAL.jpg", label: "Kitchen" }
        ]
    },
    {
        title: "Brgy. Pena",
        type: "Residential",
        year: 2024,
        img: "Full Gallery Photo/Brgy. Pena/pers 4.jpg",
        desc: "Designed to withstand coastal environments with style.",
        interiors: [
            { img: "Full Gallery Photo/Brgy. Pena/LIVING AREA0.png", label: "Living Room" },
            { img: "Full Gallery Photo/Brgy. Pena/MB 1.jpg", label: "Master's Bedroom" },
            { img: "Full Gallery Photo/Brgy. Pena/KITCHEN AREA2.png", label: "Kitchen" },
            { img: "Full Gallery Photo/Brgy. Pena/DINING AREA1.png", label: "Dining Area" },
            { img: "Full Gallery Photo/Brgy. Pena/bedroom 1.jpg", label: "Bedroom 1" },
            { img: "Full Gallery Photo/Brgy. Pena/bedroom 2.1.jpg", label: "Bedroom 2" },
            { img: "Full Gallery Photo/Brgy. Pena/T&B mb 1.jpg", label: "Toilet & Bath" }
        ]
    },
    {
        title: "San Policarpo Gianetta Residence",
        type: "Residential",
        year: 2024,
        img: "Full Gallery Photo/San Policarpo Gianetta/4.jpg",
        desc: "Large scale warehouse with heavy-duty structural frames.",
        interiors: [
            { img: "Full Gallery Photo/San Policarpo Gianetta/Living Area.jpg", label: "Living Room" },
            { img: "Full Gallery Photo/San Policarpo Gianetta/mastersbedroom.png", label: "Masters Bedroom" },
            { img: "Full Gallery Photo/San Policarpo Gianetta/Kitchen Area.jpg", label: "Kitchen" },
            { img: "Full Gallery Photo/San Policarpo Gianetta/Dirty Kitchen.jpg", label: "Dirty Kitchen" },
            { img: "Full Gallery Photo/San Policarpo Gianetta/dinning area.jpg", label: "Dining Area" },
            { img: "Full Gallery Photo/San Policarpo Gianetta/BR1.png", label: "Bedroom 1" },
            { img: "Full Gallery Photo/San Policarpo Gianetta/BR2.png", label: "Bedroom 2" },
            { img: "Full Gallery Photo/San Policarpo Gianetta/Theater Room.jpg", label: "Theater Room" },
            { img: "Full Gallery Photo/San Policarpo Gianetta/Comfort Room.jpg", label: "Toilet & Bath" }
        ]
    },
    {
        title: "Chin's Residence",
        type: "Renovation",
        year: 2024,
        img: "Professional Services Thumbnail/Mr. Chin Manila.jpg",
        desc: "Eco-friendly materials used in a rural setting.",
        interiors: [
            { img: "Full Gallery Photo/Manila Chin/2LIVING AREA 1.jpg", label: "Living Room" },
            { img: "Full Gallery Photo/Manila Chin/2MASTER'S BEDROOM 3.jpg", label: "Masters Bedroom" },
            { img: "Full Gallery Photo/Manila Chin/2KITCHEN 2.jpg", label: "Kitchen" },
            { img: "Full Gallery Photo/Manila Chin/2DINING.jpg", label: "Dining Area" },
            { img: "Full Gallery Photo/Manila Chin/1Enscape_2022-01-08-12-00-56.jpg", label: "Eldersroom" },
            { img: "Full Gallery Photo/Manila Chin/2BEDROOM 1-1.jpg", label: "Bedroom 1" },
            { img: "Full Gallery Photo/Manila Chin/3BEDROOM 2-1.jpg", label: "Bedroom 2" },
            { img: "Full Gallery Photo/Manila Chin/3BEDROOM 3-1.jpg", label: "Bedroom 3" },
            { img: "Full Gallery Photo/Manila Chin/3BEDROOM 4.jpg", label: "Bedroom 4" },
            { img: "Full Gallery Photo/Manila Chin/3BEDROOM 5-1.jpg", label: "Bedroom 5" },
            { img: "Full Gallery Photo/Manila Chin/3BEDROOM 6.jpg", label: "Bedroom 6" },
            { img: "Full Gallery Photo/Manila Chin/4BEDROOM 7.jpg", label: "Bedroom 7" },
            { img: "Full Gallery Photo/Manila Chin/4BEDROOM 8.jpg", label: "Bedroom 8" },
            { img: "Full Gallery Photo/Manila Chin/4BEDROOM 9.jpg", label: "Bedroom 9" },
            { img: "Full Gallery Photo/Manila Chin/4BEDROOM 10.jpg", label: "Bedroom 10" },
            { img: "Manila Chin/5TOILET & BATH.jpg", label: "Toilet & Bath" }
        ]
    },
    {
        title: "Camilon Residence",
        type: "Residential",
        year: 2024,
        img: "Full Gallery Photo/Awang Camilon/Perspective.jpg",
        desc: "Retail center focused on high-traffic durability.",
        interiors: [
            { img: "Full Gallery Photo/Awang Camilon/Living Area.png", label: "Living Room" },
            { img: "Full Gallery Photo/Awang Camilon/Master's Bedroom.png", label: "Masters Bedroom" },
            { img: "Full Gallery Photo/Awang Camilon/Kitchen.png", label: "Kitchen" },
            { img: "Full Gallery Photo/Awang Camilon/Dining.png", label: "Dining Area" },
            { img: "Full Gallery Photo/Awang Camilon/Bedroom 1.png", label: "Bedroom 1" },
            { img: "Full Gallery Photo/Awang Camilon/Bedroom 2.png", label: "Bedroom 2" },
            { img: "Full Gallery Photo/Awang Camilon/Toilet & Bath.png", label: "Toilet & Bath" }
        ]
    },
    {
        title: "Guarino Residence",
        type: "Residential",
        year: 2024,
        img: "Full Gallery Photo/Payahan Guarino/PERSPECTIVE.jpg",
        desc: "Classic masonry meeting contemporary design.",
        interiors: [
            { img: "Full Gallery Photo/Payahan Guarino/LIVING ROOM.jpg", label: "Living Room" },
            { img: "Full Gallery Photo/Payahan Guarino/KITCHEN AREA.jpg", label: "Kitchen" },
            { img: "Full Gallery Photo/Payahan Guarino/DINING TO HALLWAY.jpg", label: "Dining Area" },
            { img: "Full Gallery Photo/Payahan Guarino/BEDROOM 1.jpg", label: "Bedroom 1" },
            { img: "Full Gallery Photo/Payahan Guarino/T&B.jpg", label: "Toilet & Bath" }
        ]
    },
    {
        title: "Ynota's Residence",
        type: "Residential",
        year: 2024,
        img: "Full Gallery Photo/Sta. Margarita Ynota/Mrs. Ynota.jpg",
        desc: "Seaside getaway project with reinforced balconies.",
        interiors: [
            { img: "Full Gallery Photo/Sta. Margarita Ynota/1_LIVING AREA 3.jpg", label: "Living Room" },
            { img: "Full Gallery Photo/Sta. Margarita Ynota/1_MASTER'S BEDROOM 2.jpg", label: "Master's Bedroom" },
            { img: "Amampacang Jordan/KITCHEN AREA.jpg", label: "Kitchen" },
            { img: "Full Gallery Photo/Sta. Margarita Ynota/2_DINING 2.jpg", label: "Dining Area" },
            { img: "Full Gallery Photo/Sta. Margarita Ynota/Bedroom 1.jpg", label: "Bedroom 1" },
            { img: "Full Gallery Photo/Sta. Margarita Ynota/BEDROOM 2.jpg", label: "Bedroom 2" },
            { img: "Full Gallery Photo/Sta. Margarita Ynota/GUEST'S ROOM - BATHROOM 1.jpg", label: "Toilet & Bath" }
        ]
    },
    {
        title: "Gandara Proposal",
        type: "Residential",
        year: 2024,
        img: "Gandara/Arial View.jpg",
        desc: "Contemporary home emphasizing open-space living.",
        interiors: [
            { img: "Gandara/Living Room.jpg", label: "Living Room" },
            { img: "Gandara/Master's Bedroom.jpg", label: "Master's Bedroom" },
            { img: "Gandara/Front View.jpg", label: "Front View" },
            { img: "Gandara/Pool View.jpg", label: "Pool View" },
            { img: "Gandara/Top View.jpg", label: "Top View" },
            { img: "Gandara/Bedroom1.jpg", label: "Bedroom 1" },
            { img: "Gandara/Walkin Closet.jpg", label: "Walkin Closet" }
        ]
    }
];

// ══════════════════════════════════════
// PROJECTS THUMBNAIL GALLERY
// ══════════════════════════════════════
let currentIndex = 0;

function initGallery() {
    const container = document.getElementById('thumbContainer');
    container.innerHTML = projects.map((p, i) => `
        <div onclick="updateProject(${i})" class="thumb-item flex items-center gap-4 p-4 rounded-2xl cursor-pointer hover:bg-slate-50 transition-all">
            <img src="${p.img}" class="w-16 h-16 rounded-xl object-cover flex-shrink-0">
            <div>
                <h5 class="font-bold text-xs text-slate-900">${p.title}</h5>
                <p class="text-[10px] text-red-600 font-bold uppercase">${p.type}</p>
            </div>
        </div>
    `).join('');
    updateProject(0);
}

function updateProject(idx) {
    currentIndex = idx;
    const mainImg = document.getElementById('mainProjectImg');
    mainImg.style.opacity = '0';
    setTimeout(() => {
        mainImg.src = projects[idx].img;
        document.getElementById('projectTitle').innerText = projects[idx].title;
        document.getElementById('projectDesc').innerText  = projects[idx].desc;
        mainImg.style.opacity = '1';
    }, 300);
    document.querySelectorAll('.thumb-item').forEach((t, i) => {
        t.classList.toggle('active-thumb', i === idx);
        if (i === idx) t.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    });
}

function nextProject() { updateProject((currentIndex + 1) % projects.length); }
function prevProject() { updateProject((currentIndex - 1 + projects.length) % projects.length); }

document.addEventListener('DOMContentLoaded', initGallery);

// ══════════════════════════════════════
// OVERLAY 1 — FULL GALLERY
// ══════════════════════════════════════
// ══════════════════════════════════════
// OVERLAY 1 — FULL GALLERY
// with year filter + category filter + pagination
// ══════════════════════════════════════

const GALLERY_PER_PAGE = 15;
let galleryActiveYear = 'All';
let galleryActiveCat  = 'All';
let galleryPage       = 1;

function openGallery() {
    document.getElementById('galleryOverlay').style.display = 'block';
    document.body.style.overflow = 'hidden';

    // Build year filter buttons from unique years in projects array
    buildYearFilters();

    // Reset filters and render
    galleryActiveYear = 'All';
    galleryActiveCat  = 'All';
    galleryPage       = 1;
    syncCatButtons('All');
    renderGallery();
}

function closeGallery() {
    document.getElementById('galleryOverlay').style.display = 'none';
    document.body.style.overflow = '';
}

function buildYearFilters() {
    const row = document.getElementById('yearFilterRow');
    if (!row || row.dataset.built) return; // build once only
    row.dataset.built = 'true';

    // Get sorted unique years from projects array
    const years = ['All', ...new Set(
        projects.map(p => p.year).filter(Boolean).sort((a, b) => b - a)
    )];

    row.innerHTML = years.map(y => `
        <button
            onclick="filterByYear('${y}')"
            class="pop-filter-btn year-filter-btn ${y === 'All' ? 'active-pop' : ''}"
            data-year="${y}">
            ${y}
        </button>
    `).join('');
}

function filterByYear(year) {
    galleryActiveYear = String(year);
    galleryPage = 1;

    // Update year button active state
    document.querySelectorAll('.year-filter-btn').forEach(btn => {
        btn.classList.toggle('active-pop', btn.dataset.year === galleryActiveYear);
    });

    renderGallery();
}

function filterGallery(category) {
    galleryActiveCat = category;
    galleryPage = 1;
    syncCatButtons(category);
    renderGallery();
}

function syncCatButtons(category) {
    document.querySelectorAll('.pop-filter-btn:not(.year-filter-btn)').forEach(btn => {
        btn.classList.toggle('active-pop', btn.textContent.trim() === category);
    });
}

function getFilteredProjects() {
    return projects.filter(p => {
        const yearMatch = galleryActiveYear === 'All' || String(p.year) === galleryActiveYear;
        const catMatch  = galleryActiveCat  === 'All' || p.type === galleryActiveCat;
        return yearMatch && catMatch;
    });
}

function renderGallery() {
    const filtered = getFilteredProjects();
    const total    = filtered.length;
    const pages    = Math.max(1, Math.ceil(total / GALLERY_PER_PAGE));
    if (galleryPage > pages) galleryPage = pages;

    const start = (galleryPage - 1) * GALLERY_PER_PAGE;
    const slice = filtered.slice(start, start + GALLERY_PER_PAGE);

    // Render cards
    document.getElementById('galleryGrid').innerHTML = slice.map(p => {
        const idx = projects.indexOf(p);
        return `
            <div onclick="openDetail(${idx})"
                 style="position:relative; aspect-ratio:1; border-radius:12px; overflow:hidden;
                        background:#1a1a1a; border:1px solid #2a2a2a; cursor:pointer;">
                <img src="${p.img}"
                     style="width:100%; height:100%; object-fit:cover; opacity:0.75;
                            transition:opacity 0.3s, transform 0.3s;"
                     onmouseover="this.style.opacity='1'; this.style.transform='scale(1.05)'"
                     onmouseout="this.style.opacity='0.75'; this.style.transform='scale(1)'">

                <!-- Year badge -->
                <div style="position:absolute; top:8px; left:8px; background:#b91c1c;
                            color:#fff; font-size:0.6rem; font-weight:700; padding:2px 8px;
                            border-radius:4px; letter-spacing:0.1em; text-transform:uppercase;">
                    ${p.year || ''}
                </div>

                <!-- Title overlay -->
                <div style="position:absolute; bottom:0; left:0; right:0; padding:12px 10px 8px;
                            background:linear-gradient(to top, rgba(0,0,0,0.9), transparent);
                            pointer-events:none;">
                    <p style="font-size:0.6rem; color:#e8001d; font-weight:700;
                               text-transform:uppercase; margin:0 0 2px;">${p.type}</p>
                    <p style="font-size:0.72rem; color:#fff; font-weight:700;
                               text-transform:uppercase; margin:0;
                               white-space:nowrap; overflow:hidden; text-overflow:ellipsis;">${p.title}</p>
                </div>

                <!-- Hover plus icon -->
                <div class="card-hint-layer"
                     style="position:absolute; inset:0; display:flex; align-items:center;
                            justify-content:center; opacity:0; transition:opacity 0.3s; pointer-events:none;">
                    <div style="background:rgba(232,0,29,0.9); border-radius:50%; width:40px; height:40px;
                                display:flex; align-items:center; justify-content:center;">
                        <svg width="18" height="18" fill="none" stroke="white" stroke-width="2.5" viewBox="0 0 24 24">
                            <path d="M12 5v14M5 12h14"/>
                        </svg>
                    </div>
                </div>
            </div>
        `;
    }).join('');

    // Re-attach hover events for hint layer
    document.querySelectorAll('#galleryGrid > div').forEach(card => {
        const hint = card.querySelector('.card-hint-layer');
        if (!hint) return;
        card.addEventListener('mouseenter', () => hint.style.opacity = '1');
        card.addEventListener('mouseleave', () => hint.style.opacity = '0');
    });

    // Results info
    const from = total === 0 ? 0 : start + 1;
    const to   = Math.min(start + GALLERY_PER_PAGE, total);
    document.getElementById('galleryResultsInfo').textContent =
        total === 0
            ? 'No projects found for this filter.'
            : `Showing ${from}–${to} of ${total} project${total !== 1 ? 's' : ''}`;

    // Pagination
    renderGalleryPagination(pages);

    // Stagger entrance animation
    document.querySelectorAll('#galleryGrid > div').forEach((el, i) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(16px)';
        el.style.transition = `opacity 0.35s ease ${i * 0.03}s, transform 0.35s ease ${i * 0.03}s`;
        requestAnimationFrame(() => {
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
        });
    });
}

function renderGalleryPagination(pages) {
    const pg = document.getElementById('galleryPagination');
    if (!pg) return;
    if (pages <= 1) { pg.innerHTML = ''; return; }

    const btnBase = `
        padding:6px 14px; border-radius:8px; font-size:0.75rem; font-weight:700;
        cursor:pointer; border:1.5px solid #333; background:transparent;
        color:#aaa; transition:all 0.2s;
    `;
    const btnActive = `
        padding:6px 14px; border-radius:8px; font-size:0.75rem; font-weight:700;
        cursor:pointer; border:1.5px solid #b91c1c; background:#b91c1c;
        color:#fff; transition:all 0.2s;
    `;

    let html = `
        <button onclick="setGalleryPage(${galleryPage - 1})"
                ${galleryPage === 1 ? 'disabled' : ''}
                style="${btnBase} opacity:${galleryPage === 1 ? '0.3' : '1'}">‹</button>
    `;

    for (let i = 1; i <= pages; i++) {
        html += `
            <button onclick="setGalleryPage(${i})"
                    style="${i === galleryPage ? btnActive : btnBase}">${i}</button>
        `;
    }

    html += `
        <button onclick="setGalleryPage(${galleryPage + 1})"
                ${galleryPage === pages ? 'disabled' : ''}
                style="${btnBase} opacity:${galleryPage === pages ? '0.3' : '1'}">›</button>
    `;

    pg.innerHTML = html;
}

function setGalleryPage(page) {
    const filtered = getFilteredProjects();
    const pages = Math.max(1, Math.ceil(filtered.length / GALLERY_PER_PAGE));
    if (page < 1 || page > pages) return;
    galleryPage = page;
    renderGallery();

    // Scroll gallery overlay back to top
    document.getElementById('galleryOverlay').scrollTop = 0;
}

// ══════════════════════════════════════
// OVERLAY 2 — PROJECT DETAIL + INTERIORS
// ══════════════════════════════════════
function openDetail(idx) {
    const p = projects[idx];
    document.getElementById('detailHero').src        = p.img;
    document.getElementById('detailCat').innerText   = p.type;
    document.getElementById('detailName').innerText  = p.title;
    document.getElementById('detailDesc').innerText  = p.desc;
    document.getElementById('detailInteriors').innerHTML = p.interiors.map((int, i) => `
        <div class="interior-card" onclick="openLightbox(${idx}, ${i})">
            <img src="${int.img}" alt="${int.label}" loading="lazy">
            <div class="interior-card-label">${int.label}</div>
        </div>
    `).join('');
    document.getElementById('detailBox').scrollTop = 0;
    document.getElementById('detailOverlay').style.display = 'flex';
}
function closeDetail() {
    document.getElementById('detailOverlay').style.display = 'none';
}

// ══════════════════════════════════════
// OVERLAY 3 — INTERIOR LIGHTBOX (with swipe)
// ══════════════════════════════════════
let lightboxProjectIdx = 0;
let lightboxImgIdx = 0;

function openLightbox(projectIdx, imgIdx) {
    lightboxProjectIdx = projectIdx;
    lightboxImgIdx = imgIdx;
    updateLightboxImage();
    document.getElementById('lightboxOverlay').style.display = 'flex';
}

function updateLightboxImage() {
    const interiors = projects[lightboxProjectIdx].interiors;
    const int = interiors[lightboxImgIdx];
    const imgEl = document.getElementById('lightboxImg');
    imgEl.style.opacity = '0';
    setTimeout(() => {
        imgEl.src = int.img;
        imgEl.alt = int.label;
        imgEl.style.opacity = '1';
    }, 150);

    const counter = document.getElementById('lightboxCounter');
    if (counter) {
        counter.innerText = `${lightboxImgIdx + 1} / ${interiors.length}`;
    }

    const label = document.getElementById('lightboxLabel');
    if (label) {
        label.innerText = int.label;
    }

    const prevBtn = document.getElementById('lightboxPrev');
    const nextBtn = document.getElementById('lightboxNext');
    if (prevBtn) prevBtn.style.opacity = lightboxImgIdx === 0 ? '0.3' : '1';
    if (nextBtn) nextBtn.style.opacity = lightboxImgIdx === interiors.length - 1 ? '0.3' : '1';
}

function lightboxPrev() {
    if (lightboxImgIdx > 0) {
        lightboxImgIdx--;
        updateLightboxImage();
    }
}

function lightboxNext() {
    const interiors = projects[lightboxProjectIdx].interiors;
    if (lightboxImgIdx < interiors.length - 1) {
        lightboxImgIdx++;
        updateLightboxImage();
    }
}

function closeLightbox() {
    document.getElementById('lightboxOverlay').style.display = 'none';
}

// Touch swipe support for lightbox
let lbTouchStartX = 0;
let lbTouchStartY = 0;
document.addEventListener('DOMContentLoaded', () => {
    const overlay = document.getElementById('lightboxOverlay');

    overlay.addEventListener('touchstart', (e) => {
        lbTouchStartX = e.touches[0].clientX;
        lbTouchStartY = e.touches[0].clientY;
    }, { passive: true });

    overlay.addEventListener('touchend', (e) => {
        const dx = e.changedTouches[0].clientX - lbTouchStartX;
        const dy = e.changedTouches[0].clientY - lbTouchStartY;
        if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy)) {
            if (dx < 0) {
                lightboxNext();
            } else {
                lightboxPrev();
            }
        }
    }, { passive: true });
});

// ══════════════════════════════════════
// ABOUT POPUP — opened by "Learn More"
// ══════════════════════════════════════
function openAboutPopup() {
    document.getElementById('aboutPopup').style.display = 'block';
    document.body.style.overflow = 'hidden';
    document.getElementById('aboutPopup').scrollTop = 0;
}
function closeAboutPopup() {
    document.getElementById('aboutPopup').style.display = 'none';
    document.body.style.overflow = '';
}

// ══════════════════════════════════════
// KEYBOARD & BACKDROP CLOSE
// ══════════════════════════════════════
document.addEventListener('keydown', e => {
    if (e.key !== 'Escape') return;
    if (document.getElementById('aboutPopup').style.display       === 'block') { closeAboutPopup(); return; }
    if (document.getElementById('lightboxOverlay').style.display  === 'flex')  { closeLightbox();   return; }
    if (document.getElementById('detailOverlay').style.display    === 'flex')  { closeDetail();     return; }
    if (document.getElementById('galleryOverlay').style.display   === 'block') { closeGallery();    return; }
    if (document.getElementById('imageModal').style.display       === 'flex')  { closeModal();      return; }

    // Arrow keys in lightbox
    if (document.getElementById('lightboxOverlay').style.display === 'flex') {
        if (e.key === 'ArrowLeft') lightboxPrev();
        if (e.key === 'ArrowRight') lightboxNext();
    }
});

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('detailOverlay').addEventListener('click', function(e) {
        if (e.target === this) closeDetail();
    });
    document.getElementById('lightboxOverlay').addEventListener('click', function(e) {
        if (e.target === this) closeLightbox();
    });
    document.getElementById('aboutPopup').addEventListener('click', function(e) {
        if (e.target === this) closeAboutPopup();
    });
});

// ══════════════════════════════════════════════════════
// EMAILJS — INQUIRY FORM
// ══════════════════════════════════════════════════════
const EMAILJS_SERVICE_ID  = 'service_lmalf52';
const EMAILJS_TEMPLATE_ID = 'template_polqmca';
const EMAILJS_PUBLIC_KEY  = 'FVRNQyfy3RKNnUAij';

document.addEventListener('DOMContentLoaded', function () {

    const ejsScript = document.createElement('script');
    ejsScript.src = 'https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js';
    ejsScript.onload = function () {
        emailjs.init(EMAILJS_PUBLIC_KEY);
    };
    document.head.appendChild(ejsScript);

    const form       = document.getElementById('inquiryForm');
    const submitBtn  = document.getElementById('submitBtn');
    const btnText    = document.getElementById('btnText');
    const btnLoader  = document.getElementById('btnLoader');
    const btnIcon    = document.getElementById('btnIcon');
    const successMsg = document.getElementById('formSuccess');
    const errorMsg   = document.getElementById('formError');

    if (!form) return;

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        successMsg.classList.add('hidden');
        errorMsg.classList.add('hidden');

        submitBtn.disabled = true;
        btnText.classList.add('hidden');
        btnIcon.classList.add('hidden');
        btnLoader.classList.remove('hidden');

        const templateParams = {
            client_name:     document.getElementById('f_name').value,
            client_phone:    document.getElementById('f_phone').value,
            client_email:    document.getElementById('f_email').value || 'Not provided',
            client_location: document.getElementById('f_location').value,
            project_type:    document.getElementById('f_type').value,
            project_budget:  document.getElementById('f_budget').value || 'Not specified',
            project_details: document.getElementById('f_message').value,
        };

        emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams)
            .then(function () {
                successMsg.classList.remove('hidden');
                form.reset();
                submitBtn.disabled = false;
                btnText.classList.remove('hidden');
                btnIcon.classList.remove('hidden');
                btnLoader.classList.add('hidden');
                successMsg.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            })
            .catch(function (error) {
                console.error('EmailJS error:', error);
                errorMsg.classList.remove('hidden');
                submitBtn.disabled = false;
                btnText.classList.remove('hidden');
                btnIcon.classList.remove('hidden');
                btnLoader.classList.add('hidden');
            });
    });
});
/* ════════════════════════════════════════════════
   HEMASUTO BUILDERS — PREMIUM ANIMATION SYSTEM
   Paste this at the BOTTOM of your js/script.js
════════════════════════════════════════════════ */

(function () {

    // ── 1. SCROLL PROGRESS BAR ──────────────────
    const progressBar = document.createElement('div');
    progressBar.id = 'hb-scroll-progress';
    document.body.prepend(progressBar);

    window.addEventListener('scroll', () => {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        progressBar.style.width = (scrollTop / docHeight * 100) + '%';
    }, { passive: true });


    // ── 2. SCROLL-TRIGGERED REVEAL ──────────────
    // Add animation classes to elements throughout the page
    function tagElements() {

        // Hero section
        const heroEl = document.querySelector('#home .max-w-4xl');
        if (heroEl) {
            Array.from(heroEl.children).forEach((el, i) => {
                el.classList.add('hb-anim', 'hb-fade-up', `hb-delay-${i + 1}`);
            });
        }

        // About section stats
        document.querySelectorAll('#journey .flex.gap-10 > div').forEach((el, i) => {
            el.classList.add('hb-anim', 'hb-zoom-in', `hb-delay-${i + 1}`);
        });

        // About section image
        const aboutImg = document.querySelector('#journey .reveal-right .relative');
        if (aboutImg) aboutImg.classList.add('hb-anim', 'hb-fade-right');

        // About heading
        const aboutH2 = document.querySelector('#journey h2');
        if (aboutH2) aboutH2.classList.add('hb-anim', 'hb-fade-left');

        // About paragraph
        const aboutP = document.querySelector('#journey p.text-slate-400');
        if (aboutP) aboutP.classList.add('hb-anim', 'hb-fade-left', 'hb-delay-2');

        // Learn more button
        const learnBtn = document.querySelector('#journey button');
        if (learnBtn) learnBtn.classList.add('hb-anim', 'hb-fade-up', 'hb-delay-3', 'hb-magnetic');

        // Services heading
        const servH2 = document.querySelector('#services .text-center h3');
        if (servH2) servH2.classList.add('hb-anim', 'hb-fade-down');
        const servSub = document.querySelector('#services .text-center h2');
        if (servSub) servSub.classList.add('hb-anim', 'hb-fade-down', 'hb-delay-1');

        // Services cards — staggered
        document.querySelectorAll('#services .grid > div').forEach((el, i) => {
            el.classList.add('hb-anim', 'hb-fade-up', `hb-delay-${i + 1}`, 'hb-card-hover');
        });

        // Projects heading
        const projH2 = document.querySelector('#projects h2');
        if (projH2) projH2.classList.add('hb-anim', 'hb-fade-left');

        // Projects main image area
        const projMain = document.querySelector('#projects .lg\\:col-span-7');
        if (projMain) projMain.classList.add('hb-anim', 'hb-fade-left');

        // Projects gallery panel
        const projPanel = document.querySelector('#projects .lg\\:col-span-5');
        if (projPanel) projPanel.classList.add('hb-anim', 'hb-fade-right', 'hb-delay-2');

        // View More Projects button
        const viewMoreBtn = document.querySelector('#projects .mt-10 button');
        if (viewMoreBtn) viewMoreBtn.classList.add('hb-anim', 'hb-zoom-in', 'hb-delay-1', 'hb-magnetic');

        // Inquiry form heading
        const inqH2 = document.querySelector('#inquiry h2');
        if (inqH2) inqH2.classList.add('hb-anim', 'hb-fade-left');
        const inqP = document.querySelector('#inquiry .mb-12 p');
        if (inqP) inqP.classList.add('hb-anim', 'hb-fade-left', 'hb-delay-1');

        // Inquiry form box
        const inqForm = document.querySelector('#inquiry .bg-\\[\\#120000\\]');
        if (inqForm) inqForm.classList.add('hb-anim', 'hb-zoom-in', 'hb-delay-2');

        // Contact section
        const contactBox = document.querySelector('#contact-section .bg-slate-900');
        if (contactBox) contactBox.classList.add('hb-anim', 'hb-fade-up');

        const contactItems = document.querySelectorAll('#contact-section .space-y-6 > div');
        contactItems.forEach((el, i) => {
            el.classList.add('hb-anim', 'hb-fade-left', `hb-delay-${i + 1}`);
        });

        // Social icons stagger
        document.querySelectorAll('#contact-section .flex.flex-wrap.gap-5 > a').forEach((el, i) => {
            el.classList.add('hb-anim', 'hb-zoom-in', `hb-delay-${i + 1}`);
        });

        // Footer
        const footer = document.querySelector('footer p');
        if (footer) footer.classList.add('hb-anim', 'hb-fade-up');
    }

    tagElements();

    // ── 3. INTERSECTION OBSERVER (triggers animations) ──
    const animObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('hb-visible');
                animObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

    function observeAll() {
        document.querySelectorAll('.hb-anim').forEach(el => animObserver.observe(el));
    }
    observeAll();


    // ── 4. ANIMATED NUMBER COUNTERS ─────────────
    function animateCounter(el, target, duration) {
        const start = performance.now();
        const startVal = 0;

        function update(now) {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            // Ease out cubic
            const eased = 1 - Math.pow(1 - progress, 3);
            const current = Math.floor(startVal + (target - startVal) * eased);
            el.textContent = current + '+';
            if (progress < 1) requestAnimationFrame(update);
            else el.textContent = target + '+';
        }
        requestAnimationFrame(update);
    }

    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            const el = entry.target;
            const text = el.textContent.trim();
            const num = parseInt(text.replace(/\D/g, ''));
            if (!isNaN(num)) {
                animateCounter(el, num, 2000);
            }
            counterObserver.unobserve(el);
        });
    }, { threshold: 0.5 });

    // Target the stat numbers (100+ and 20+)
    document.querySelectorAll('#journey .flex.gap-10 span.block').forEach(el => {
        counterObserver.observe(el);
    });


    // ── 5. MAGNETIC BUTTON EFFECT ───────────────
    function initMagnetic() {
        document.querySelectorAll('.hb-magnetic').forEach(btn => {
            btn.addEventListener('mousemove', (e) => {
                const rect = btn.getBoundingClientRect();
                const x = e.clientX - rect.left - rect.width / 2;
                const y = e.clientY - rect.top - rect.height / 2;
                btn.style.transform = `translate(${x * 0.25}px, ${y * 0.25}px)`;
            });
            btn.addEventListener('mouseleave', () => {
                btn.style.transform = '';
            });
        });
    }
    initMagnetic();


    // ── 6. PARALLAX ON ABOUT IMAGE ──────────────
    const parallaxImg = document.querySelector('#journey .reveal-right img');
    if (parallaxImg) {
        parallaxImg.classList.add('hb-parallax-img');
        window.addEventListener('scroll', () => {
            const rect = parallaxImg.closest('section').getBoundingClientRect();
            const scrolled = -rect.top * 0.12;
            parallaxImg.style.transform = `scale(1.15) translateY(${scrolled}px)`;
        }, { passive: true });
    }


    // ── 7. CURSOR GLOW EFFECT ───────────────────
    const cursor = document.createElement('div');
    cursor.id = 'hb-cursor';
    cursor.style.cssText = `
        position:fixed; width:20px; height:20px; border-radius:50%;
        border:2px solid rgba(185,28,28,0.6); pointer-events:none;
        z-index:99997; transition:transform 0.15s ease, opacity 0.3s ease;
        transform:translate(-50%,-50%); mix-blend-mode:difference;
        will-change:left,top;
    `;
    document.body.appendChild(cursor);

    const cursorDot = document.createElement('div');
    cursorDot.id = 'hb-cursor-dot';
    cursorDot.style.cssText = `
        position:fixed; width:5px; height:5px; border-radius:50%;
        background:#b91c1c; pointer-events:none; z-index:99997;
        transform:translate(-50%,-50%); transition:transform 0.05s ease;
        will-change:left,top;
    `;
    document.body.appendChild(cursorDot);

    let mouseX = 0, mouseY = 0;
    let cursorX = 0, cursorY = 0;

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        cursorDot.style.left = mouseX + 'px';
        cursorDot.style.top  = mouseY + 'px';
    });

    function animateCursor() {
        cursorX += (mouseX - cursorX) * 0.12;
        cursorY += (mouseY - cursorY) * 0.12;
        cursor.style.left = cursorX + 'px';
        cursor.style.top  = cursorY + 'px';
        requestAnimationFrame(animateCursor);
    }
    animateCursor();

    // Cursor grows on hoverable elements
    document.querySelectorAll('a, button, .group, .thumb-item, .interior-card').forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursor.style.transform = 'translate(-50%,-50%) scale(2.5)';
            cursor.style.borderColor = 'rgba(185,28,28,1)';
            cursor.style.background = 'rgba(185,28,28,0.08)';
        });
        el.addEventListener('mouseleave', () => {
            cursor.style.transform = 'translate(-50%,-50%) scale(1)';
            cursor.style.borderColor = 'rgba(185,28,28,0.6)';
            cursor.style.background = 'transparent';
        });
    });

    // Hide on mobile
    if ('ontouchstart' in window) {
        cursor.style.display = 'none';
        cursorDot.style.display = 'none';
    }


    // ── 8. SECTION HEADING WORD SPLIT ANIMATION ──
    function splitWords(selector) {
        document.querySelectorAll(selector).forEach(el => {
            if (el.dataset.split) return;
            el.dataset.split = true;
            const words = el.innerText.split(' ');
            el.innerHTML = words.map((w, i) =>
                `<span class="hb-word" style="transition-delay:${i * 0.06}s">${w}</span>`
            ).join(' ');
        });
    }

    const wordObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            entry.target.querySelectorAll('.hb-word').forEach(w => w.classList.add('hb-word-visible'));
            wordObserver.unobserve(entry.target);
        });
    }, { threshold: 0.3 });

    // Apply word split to main section headings
    setTimeout(() => {
        splitWords('#journey h2');
        splitWords('#projects h2');
        document.querySelectorAll('#journey h2, #projects h2').forEach(el => wordObserver.observe(el));
    }, 100);


    // ── 9. SMOOTH HOVER ON SERVICE IMAGES ───────
    document.querySelectorAll('#services .group').forEach(card => {
        const img = card.querySelector('img');
        if (!img) return;
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = ((e.clientX - rect.left) / rect.width - 0.5) * 8;
            const y = ((e.clientY - rect.top) / rect.height - 0.5) * 8;
            img.style.transform = `scale(1.12) rotate(${x * 0.3}deg) translateX(${x}px) translateY(${y}px)`;
        });
        card.addEventListener('mouseleave', () => {
            img.style.transform = '';
        });
    });


    // ── 10. STAGGER CHILDREN on gallery open ────
    const originalOpenGallery = window.openGallery;
    if (typeof originalOpenGallery === 'function') {
        window.openGallery = function () {
            originalOpenGallery();
            setTimeout(() => {
                document.querySelectorAll('#galleryGrid > div').forEach((el, i) => {
                    el.style.opacity = '0';
                    el.style.transform = 'translateY(20px)';
                    el.style.transition = `opacity 0.4s ease ${i * 0.04}s, transform 0.4s ease ${i * 0.04}s`;
                    requestAnimationFrame(() => {
                        el.style.opacity = '1';
                        el.style.transform = 'translateY(0)';
                    });
                });
            }, 50);
        };
    }


    // ── 11. HEADER SHRINK ON SCROLL ─────────────
    const header = document.querySelector('header');
    if (header) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 80) {
                header.style.padding = '8px 16px';
                header.style.boxShadow = '0 4px 30px rgba(185,28,28,0.15)';
            } else {
                header.style.padding = '';
                header.style.boxShadow = '';
            }
        }, { passive: true });
    }


    // ── 12. SMOOTH SECTION TRANSITIONS ──────────
    // Add subtle background transition as sections come into view
    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.transition = 'opacity 0.5s ease';
                entry.target.style.opacity = '1';
            }
        });
    }, { threshold: 0.05 });

    document.querySelectorAll('main > section, main > div').forEach(section => {
        sectionObserver.observe(section);
    });

})();
