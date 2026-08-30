/* ==========================================================================
   CONTACT.JS — contact page only
   Enquiry form submit handler.
   ========================================================================== */

function handleSubmit(e) {
    e.preventDefault();
    const btn = e.target.querySelector('button');
    btn.textContent = 'Submitted ✓';
    btn.style.background = 'linear-gradient(135deg, #22c55e, #16a34a)';
    setTimeout(() => {
        btn.textContent = 'Submit Enquiry →';
        btn.style.background = '';
        e.target.reset();
    }, 2500);
}
