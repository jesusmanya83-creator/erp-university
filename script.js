// Add interactivity for menu toggle
document.querySelectorAll('.menu-item').forEach(item => {
    item.addEventListener('click', function() {
        document.querySelectorAll('.menu-item').forEach(i => i.classList.remove('active'));
        this.classList.add('active');
    });
});

// Semester dropdown change
const semesterSelect = document.querySelector('.semester-select select');
if (semesterSelect) {
    semesterSelect.addEventListener('change', function() {
        console.log('Semester changed to:', this.value);
    });
}

// Modal functions
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
}

// Close modal when clicking outside
document.querySelectorAll('.modal').forEach(modal => {
    modal.addEventListener('click', function(e) {
        if (e.target === this) {
            closeModal(this.id);
        }
    });
});

// Escape key to close modals
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        document.querySelectorAll('.modal.active').forEach(modal => {
            closeModal(modal.id);
        });
    }
});

// Add click event to "Reporte de Notas Detalladas" link
document.addEventListener('DOMContentLoaded', function() {
    // Link for detailed grades report
    const detailedGradesLink = document.getElementById('detailedGradesLink');
    if (detailedGradesLink) {
        detailedGradesLink.addEventListener('click', function(e) {
            e.preventDefault();
            openModal('gradesModal');
        });
    }

    // Links for maintenance pages
    const maintenanceLinks = document.querySelectorAll('.report-link[data-maintenance="true"]');
    maintenanceLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            openModal('maintenanceModal');
        });
    });
});
