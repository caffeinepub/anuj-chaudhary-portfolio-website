# Specification

## Summary
**Goal:** Make the Home section “Download Resume” CTA reliably open the intended resume PDF as a static asset in production (including Internet Computer deployment).

**Planned changes:**
- Add/confirm the intended resume PDF is located in the frontend’s public static assets and accessible via an absolute path (e.g., `/assets/Anuj_Chaudhary_Resume.pdf`).
- Update the “Download Resume” CTA link/click handling to open the PDF in the browser (new tab/window acceptable) without failing silently or producing console errors.

**User-visible outcome:** Clicking “Download Resume” consistently opens the correct resume PDF in the browser after deployment.
