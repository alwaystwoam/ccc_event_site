/* ============================================================
   CYPRESS CODE CAMP — Minimal JS
   ============================================================ */

(() => {
  'use strict';

  /* ── Config / Placeholders ────────────────────────────── */
  const CONFIG = {
    date: 'February 28',
    location: "Eric's House",
    registrationUrl: '#',       // replace with real URL
    contactUrl: '#',            // replace with real email/link
  };

  /* ── Apply config placeholders ────────────────────────── */
  function applyConfig() {
    document.querySelectorAll('[data-placeholder="date"]').forEach(el => {
      el.textContent = CONFIG.date;
    });
    document.querySelectorAll('[data-placeholder="location"]').forEach(el => {
      el.textContent = CONFIG.location;
    });
    document.querySelectorAll('[data-placeholder="registration_url"]').forEach(el => {
      el.href = CONFIG.registrationUrl;
    });
    document.querySelectorAll('[data-placeholder="contact"]').forEach(el => {
      el.href = CONFIG.contactUrl;
    });

    const yearEl = document.getElementById('year');
    if (yearEl) yearEl.textContent = new Date().getFullYear();
  }

  /* ── Smooth scroll for anchor links ───────────────────── */
  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(link => {
      link.addEventListener('click', e => {
        const id = link.getAttribute('href');
        if (id === '#') return;
        const target = document.querySelector(id);
        if (!target) return;
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        history.pushState(null, '', id);
      });
    });
  }

  /* ── Schedule accordion (mobile only by behavior, CSS handles desktop) ── */
  function initSchedule() {
    const items = document.querySelectorAll('.schedule-item');
    const isMobile = () => window.matchMedia('(max-width: 699px)').matches;

    items.forEach(item => {
      const header = item.querySelector('.schedule-header');
      const body = item.querySelector('.schedule-body');
      if (!header || !body) return;

      header.addEventListener('click', () => {
        if (!isMobile()) return;

        const isOpen = item.classList.contains('open');

        items.forEach(other => {
          other.classList.remove('open');
          const otherBody = other.querySelector('.schedule-body');
          const otherHeader = other.querySelector('.schedule-header');
          if (otherBody) otherBody.style.maxHeight = null;
          if (otherHeader) otherHeader.setAttribute('aria-expanded', 'false');
          const otherBodyDiv = other.querySelector('.schedule-body');
          if (otherBodyDiv) otherBodyDiv.setAttribute('aria-hidden', 'true');
        });

        if (!isOpen) {
          item.classList.add('open');
          body.style.maxHeight = body.scrollHeight + 'px';
          header.setAttribute('aria-expanded', 'true');
          body.setAttribute('aria-hidden', 'false');
        }
      });
    });
  }

  /* ── FAQ accordion ────────────────────────────────────── */
  function initFaq() {
    const items = document.querySelectorAll('.faq-item');

    items.forEach(item => {
      const question = item.querySelector('.faq-question');
      const answer = item.querySelector('.faq-answer');
      if (!question || !answer) return;

      question.addEventListener('click', () => {
        const isOpen = item.classList.contains('open');

        items.forEach(other => {
          other.classList.remove('open');
          const otherAnswer = other.querySelector('.faq-answer');
          const otherQuestion = other.querySelector('.faq-question');
          if (otherAnswer) otherAnswer.style.maxHeight = null;
          if (otherQuestion) otherQuestion.setAttribute('aria-expanded', 'false');
          if (otherAnswer) otherAnswer.setAttribute('aria-hidden', 'true');
        });

        if (!isOpen) {
          item.classList.add('open');
          answer.style.maxHeight = answer.scrollHeight + 'px';
          question.setAttribute('aria-expanded', 'true');
          answer.setAttribute('aria-hidden', 'false');
        }
      });
    });
  }

  /* ── Copy buttons ─────────────────────────────────────── */
  function initCopyButtons() {
    document.querySelectorAll('.copy-btn').forEach(btn => {
      btn.addEventListener('click', async () => {
        const text = btn.dataset.copy;
        if (!text) return;

        try {
          await navigator.clipboard.writeText(text);
        } catch {
          const textarea = document.createElement('textarea');
          textarea.value = text;
          textarea.style.position = 'fixed';
          textarea.style.opacity = '0';
          document.body.appendChild(textarea);
          textarea.select();
          document.execCommand('copy');
          document.body.removeChild(textarea);
        }

        const original = btn.textContent;
        btn.textContent = 'COPIED';
        btn.classList.add('copied');
        setTimeout(() => {
          btn.textContent = original;
          btn.classList.remove('copied');
        }, 1500);
      });
    });
  }

  /* ── RSVP Modal ────────────────────────────────────────── */
  function initRsvpModal() {
    const modal = document.getElementById('rsvp-modal');
    if (!modal) return;

    const backdrop = modal.querySelector('.rsvp-modal-backdrop');
    const closeBtn = modal.querySelector('.rsvp-modal-close');
    const content = modal.querySelector('.rsvp-modal-content');

    function openModal() {
      modal.classList.remove('closing');
      modal.classList.add('active');
      modal.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';

      const ring = document.createElement('div');
      ring.className = 'rsvp-modal-ring';
      content.appendChild(ring);
      ring.addEventListener('animationend', () => ring.remove());
    }

    function closeModal() {
      modal.classList.add('closing');
      modal.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';

      const onEnd = () => {
        modal.classList.remove('active', 'closing');
        content.removeEventListener('animationend', onEnd);
      };

      if (prefersReducedMotion()) {
        modal.classList.remove('active', 'closing');
      } else {
        content.addEventListener('animationend', onEnd);
        setTimeout(() => {
          modal.classList.remove('active', 'closing');
        }, 350);
      }
    }

    document.querySelectorAll('.rsvp-trigger').forEach(btn => {
      btn.addEventListener('click', e => {
        e.preventDefault();
        openModal();
      });
    });

    if (backdrop) backdrop.addEventListener('click', closeModal);
    if (closeBtn) closeBtn.addEventListener('click', closeModal);

    document.addEventListener('keydown', e => {
      if (e.key === 'Escape' && modal.classList.contains('active')) {
        closeModal();
      }
    });
  }

  /* ── Reduced motion check ─────────────────────────────── */
  function prefersReducedMotion() {
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }

  /* ── Override smooth scroll if reduced motion ─────────── */
  function initMotionSafe() {
    if (prefersReducedMotion()) {
      document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener('click', e => {
          const id = link.getAttribute('href');
          if (id === '#') return;
          const target = document.querySelector(id);
          if (!target) return;
          e.preventDefault();
          target.scrollIntoView({ behavior: 'auto', block: 'start' });
          history.pushState(null, '', id);
        });
      });
    }
  }

  /* ── Init ──────────────────────────────────────────────── */
  function init() {
    applyConfig();
    initSmoothScroll();
    initSchedule();
    initFaq();
    initCopyButtons();
    initRsvpModal();
    initMotionSafe();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
