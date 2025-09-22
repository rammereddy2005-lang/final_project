/* =========================
   Global Variables & Themes
========================= */
:root {
  /* Brand Colors */
  --clr-primary: #7f5af0;
  --clr-success: #2bbf6a;
  --clr-success-dark: #229d57;
  --clr-error: #ef476f;
  --clr-error-dark: #d62852;
  --clr-info: #3a86ff;
  --clr-info-dark: #265df2;

  /* UI Tokens */
  --radius-sm: 6px;
  --radius-md: 12px;
  --shadow-toast: 0 12px 24px rgba(0, 0, 0, 0.25);
  --transition-fast: 0.2s ease;
  --transition-base: 0.35s ease;
  --font-size-base: 1rem;
  --font-size-sm: 0.875rem;
  --font-size-lg: 1.1rem;
}

/* =========================
   Menu Toggle Button
========================= */
.menu-toggle {
  cursor: pointer;
  background: transparent;
  border: none;
  font-size: 1.8rem;
  color: var(--clr-primary);
  transition: transform var(--transition-base);
}

.menu-toggle.active {
  transform: rotate(90deg) scale(1.15);
}

/* =========================
   Form Inputs & Textareas
========================= */
input,
textarea {
  width: 100%;
  font-size: var(--font-size-base);
  padding: 0.7rem 1rem;
  border: 2px solid transparent;
  border-radius: var(--radius-sm);
  background-color: #fff;
  color: #222;
  transition: border-color var(--transition-base), box-shadow var(--transition-base);
}

input::placeholder,
textarea::placeholder {
  color: #aaa;
  font-size: var(--font-size-sm);
}

input:focus,
textarea:focus {
  border-color: var(--clr-primary);
  box-shadow: 0 0 0 3px rgba(127, 90, 240, 0.2);
  outline: none;
}

/* Input States */
input.success,
textarea.success {
  border-color: var(--clr-success);
  background-color: #eafff4;
}

input.error,
textarea.error {
  border-color: var(--clr-error);
  background-color: #fff3f6;
}

/* =========================
   Toast Notifications
========================= */
.toast {
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  display: flex;
  align-items: center;
  gap: 0.8rem;
  padding: 1rem 1.25rem;
  min-width: 300px;
  max-width: 360px;
  border-radius: var(--radius-md);
  background-color: var(--clr-primary);
  color: #fff;
  font-size: var(--font-size-base);
  font-weight: 500;
  line-height: 1.5;
  box-shadow: var(--shadow-toast);
  opacity: 0;
  transform: translateY(20px) scale(0.95);
  pointer-events: none;
  z-index: 9999;
  transition: opacity var(--transition-base), transform var(--transition-base);
}

/* Show state */
.toast.show {
  opacity: 1;
  transform: translateY(0) scale(1);
  pointer-events: auto;
  animation: slideIn 0.45s ease, fadeOut 0.45s ease 4s forwards;
}

/* Toast Variants */
.toast.success {
  background: linear-gradient(135deg, var(--clr-success), var(--clr-success-dark));
}

.toast.error {
  background: linear-gradient(135deg, var(--clr-error), var(--clr-error-dark));
}

.toast.info {
  background: linear-gradient(135deg, var(--clr-info), var(--clr-info-dark));
}

/* Toast Icon (Optional) */
.toast::before {
  content: "ℹ️";
  font-size: 1.2rem;
}

/* Toast Type Icons */
.toast.success::before { content: "✅"; }
.toast.error::before { content: "❌"; }
.toast.info::before { content: "🔔"; }

/* =========================
   Keyframe Animations
========================= */
@keyframes slideIn {
  from {
    transform: translateY(40px) scale(0.9);
    opacity: 0;
  }
  to {
    transform: translateY(0) scale(1);
    opacity: 1;
  }
}

@keyframes fadeOut {
  to {
    opacity: 0;
    transform: translateY(20px) scale(0.95);
  }
}
