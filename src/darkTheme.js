export const darkStyles = `
html {
    background-color: #181a1b !important;
}
html {
    color-scheme: dark !important;
}
html, body {
    background-color: #181a1b;
}
html, body {
    border-color: #736b5e;
    color: #e8e6e3;
}
a {
    color: #3391ff;
}
table {
    border-color: #545b5e;
}
::placeholder {
    color: #b2aba1;
}
input:-webkit-autofill,
textarea:-webkit-autofill,
select:-webkit-autofill {
    background-color: #404400 !important;
    color: #e8e6e3 !important;
}
::-webkit-scrollbar {
    background-color: #202324;
    color: #aba499;
}
::-webkit-scrollbar-thumb {
    background-color: #454a4d;
}
::-webkit-scrollbar-thumb:hover {
    background-color: #575e62;
}
::-webkit-scrollbar-thumb:active {
    background-color: #484e51;
}
::-webkit-scrollbar-corner {
    background-color: #181a1b;
}
::selection {
    background-color: #004daa !important;
    color: #e8e6e3 !important;
}
::-moz-selection {
    background-color: #004daa !important;
    color: #e8e6e3 !important;
}

/* Invert Style */
.jfk-bubble.gtx-bubble, .captcheck_answer_label > input + img, span#closed_text > img[src^="https://www.gstatic.com/images/branding/googlelogo"], span[data-href^="https://www.hcaptcha.com/"] > #icon, #bit-notification-bar-iframe, ::-webkit-calendar-picker-indicator {
    filter: invert(100%) hue-rotate(180deg) contrast(90%) !important;
}

/* Variables Style */
:root {
   --darkreader-neutral-background: #131516;
   --darkreader-neutral-text: #d8d4cf;
   --darkreader-selection-background: #004daa;
   --darkreader-selection-text: #e8e6e3;
}

/* Modified CSS */
:root {
    --bs-blue: #0d6efd; --bs-indigo: #6610f2; --bs-purple: #6f42c1; --bs-pink: #d63384; --bs-red: #dc3545; --bs-orange: #fd7e14; --bs-yellow: #ffc107; --bs-green: #198754; --bs-teal: #20c997; --bs-cyan: #0dcaf0; --bs-white: #fff; --bs-gray: #6c757d; --bs-gray-dark: #343a40; --bs-primary: #0d6efd; --bs-secondary: #6c757d; --bs-success: #198754; --bs-info: #0dcaf0; --bs-warning: #ffc107; --bs-danger: #dc3545; --bs-light: #f8f9fa; --bs-dark: #212529; --bs-font-sans-serif: system-ui,-apple-system,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans","Liberation Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"; --bs-font-monospace: SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",
    monospace;
    --darkreader-bgimg--bs-gradient: linear-gradient(180deg,
    rgba(24, 26, 27, 0.15),
    rgba(24, 26, 27, 0));
}
body {
    color: rgb(209, 205, 199);
    background-color: rgb(24, 26, 27);
    -webkit-tap-highlight-color: transparent;
}
hr {
    color: inherit;
    background-color: currentcolor;
    border-color: initial;
}
abbr[data-bs-original-title],
abbr[title] {
    text-decoration-color: initial;
}
.mark,
mark {
    background-color: rgb(47, 40, 5);
}
a {
    color: rgb(35, 148, 253);
    text-decoration-color: initial;
}
a:hover {
    color: rgb(85, 169, 247);
}
a:not([href]):not([class]),
a:not([href]):not([class]):hover {
    color: inherit;
    text-decoration-color: initial;
}
pre code {
    color: inherit;
}
code {
    color: rgb(218, 70, 143);
}
a > code {
    color: inherit;
}
kbd {
    color: rgb(232, 230, 227);
    background-color: rgb(28, 30, 31);
}
caption {
    color: rgb(158, 150, 137);
}
tbody,
td,
tfoot,
th,
thead,
tr {
    border-color: inherit;
}
button:focus:not(:focus-visible) {
    outline-color: initial;
}
fieldset {
    border-color: initial;
}
iframe {
    border-color: initial;
}
.list-unstyled {
    list-style-image: initial;
}
.list-inline {
    list-style-image: initial;
}
.blockquote-footer {
    color: rgb(158, 150, 137);
}
.img-thumbnail {
    background-color: rgb(24, 26, 27);
    border-color: rgb(56, 61, 63);
}
.figure-caption {
    color: rgb(158, 150, 137);
}
.row {
    --bs-gutter-x: 1.5rem;
    --bs-gutter-y: 0;
}
.g-0,
.gx-0 {
    --bs-gutter-x: 0;
}
.g-0,
.gy-0 {
    --bs-gutter-y: 0;
}
.g-1,
.gx-1 {
    --bs-gutter-x: 0.25rem;
}
.g-1,
.gy-1 {
    --bs-gutter-y: 0.25rem;
}
.g-2,
.gx-2 {
    --bs-gutter-x: 0.5rem;
}
.g-2,
.gy-2 {
    --bs-gutter-y: 0.5rem;
}
.g-3,
.gx-3 {
    --bs-gutter-x: 1rem;
}
.g-3,
.gy-3 {
    --bs-gutter-y: 1rem;
}
.g-4,
.gx-4 {
    --bs-gutter-x: 1.5rem;
}
.g-4,
.gy-4 {
    --bs-gutter-y: 1.5rem;
}
.g-5,
.gx-5 {
    --bs-gutter-x: 3rem;
}
.g-5,
.gy-5 {
    --bs-gutter-y: 3rem;
}
@media (min-width: 576px) {
    .g-sm-0,
    .gx-sm-0 {
        --bs-gutter-x: 0;
    }
    .g-sm-0,
    .gy-sm-0 {
        --bs-gutter-y: 0;
    }
    .g-sm-1,
    .gx-sm-1 {
        --bs-gutter-x: 0.25rem;
    }
    .g-sm-1,
    .gy-sm-1 {
        --bs-gutter-y: 0.25rem;
    }
    .g-sm-2,
    .gx-sm-2 {
        --bs-gutter-x: 0.5rem;
    }
    .g-sm-2,
    .gy-sm-2 {
        --bs-gutter-y: 0.5rem;
    }
    .g-sm-3,
    .gx-sm-3 {
        --bs-gutter-x: 1rem;
    }
    .g-sm-3,
    .gy-sm-3 {
        --bs-gutter-y: 1rem;
    }
    .g-sm-4,
    .gx-sm-4 {
        --bs-gutter-x: 1.5rem;
    }
    .g-sm-4,
    .gy-sm-4 {
        --bs-gutter-y: 1.5rem;
    }
    .g-sm-5,
    .gx-sm-5 {
        --bs-gutter-x: 3rem;
    }
    .g-sm-5,
    .gy-sm-5 {
        --bs-gutter-y: 3rem;
    }
}
@media (min-width: 768px) {
    .g-md-0,
    .gx-md-0 {
        --bs-gutter-x: 0;
    }
    .g-md-0,
    .gy-md-0 {
        --bs-gutter-y: 0;
    }
    .g-md-1,
    .gx-md-1 {
        --bs-gutter-x: 0.25rem;
    }
    .g-md-1,
    .gy-md-1 {
        --bs-gutter-y: 0.25rem;
    }
    .g-md-2,
    .gx-md-2 {
        --bs-gutter-x: 0.5rem;
    }
    .g-md-2,
    .gy-md-2 {
        --bs-gutter-y: 0.5rem;
    }
    .g-md-3,
    .gx-md-3 {
        --bs-gutter-x: 1rem;
    }
    .g-md-3,
    .gy-md-3 {
        --bs-gutter-y: 1rem;
    }
    .g-md-4,
    .gx-md-4 {
        --bs-gutter-x: 1.5rem;
    }
    .g-md-4,
    .gy-md-4 {
        --bs-gutter-y: 1.5rem;
    }
    .g-md-5,
    .gx-md-5 {
        --bs-gutter-x: 3rem;
    }
    .g-md-5,
    .gy-md-5 {
        --bs-gutter-y: 3rem;
    }
}
@media (min-width: 992px) {
    .g-lg-0,
    .gx-lg-0 {
        --bs-gutter-x: 0;
    }
    .g-lg-0,
    .gy-lg-0 {
        --bs-gutter-y: 0;
    }
    .g-lg-1,
    .gx-lg-1 {
        --bs-gutter-x: 0.25rem;
    }
    .g-lg-1,
    .gy-lg-1 {
        --bs-gutter-y: 0.25rem;
    }
    .g-lg-2,
    .gx-lg-2 {
        --bs-gutter-x: 0.5rem;
    }
    .g-lg-2,
    .gy-lg-2 {
        --bs-gutter-y: 0.5rem;
    }
    .g-lg-3,
    .gx-lg-3 {
        --bs-gutter-x: 1rem;
    }
    .g-lg-3,
    .gy-lg-3 {
        --bs-gutter-y: 1rem;
    }
    .g-lg-4,
    .gx-lg-4 {
        --bs-gutter-x: 1.5rem;
    }
    .g-lg-4,
    .gy-lg-4 {
        --bs-gutter-y: 1.5rem;
    }
    .g-lg-5,
    .gx-lg-5 {
        --bs-gutter-x: 3rem;
    }
    .g-lg-5,
    .gy-lg-5 {
        --bs-gutter-y: 3rem;
    }
}
@media (min-width: 1200px) {
    .g-xl-0,
    .gx-xl-0 {
        --bs-gutter-x: 0;
    }
    .g-xl-0,
    .gy-xl-0 {
        --bs-gutter-y: 0;
    }
    .g-xl-1,
    .gx-xl-1 {
        --bs-gutter-x: 0.25rem;
    }
    .g-xl-1,
    .gy-xl-1 {
        --bs-gutter-y: 0.25rem;
    }
    .g-xl-2,
    .gx-xl-2 {
        --bs-gutter-x: 0.5rem;
    }
    .g-xl-2,
    .gy-xl-2 {
        --bs-gutter-y: 0.5rem;
    }
    .g-xl-3,
    .gx-xl-3 {
        --bs-gutter-x: 1rem;
    }
    .g-xl-3,
    .gy-xl-3 {
        --bs-gutter-y: 1rem;
    }
    .g-xl-4,
    .gx-xl-4 {
        --bs-gutter-x: 1.5rem;
    }
    .g-xl-4,
    .gy-xl-4 {
        --bs-gutter-y: 1.5rem;
    }
    .g-xl-5,
    .gx-xl-5 {
        --bs-gutter-x: 3rem;
    }
    .g-xl-5,
    .gy-xl-5 {
        --bs-gutter-y: 3rem;
    }
}
@media (min-width: 1400px) {
    .g-xxl-0,
    .gx-xxl-0 {
        --bs-gutter-x: 0;
    }
    .g-xxl-0,
    .gy-xxl-0 {
        --bs-gutter-y: 0;
    }
    .g-xxl-1,
    .gx-xxl-1 {
        --bs-gutter-x: 0.25rem;
    }
    .g-xxl-1,
    .gy-xxl-1 {
        --bs-gutter-y: 0.25rem;
    }
    .g-xxl-2,
    .gx-xxl-2 {
        --bs-gutter-x: 0.5rem;
    }
    .g-xxl-2,
    .gy-xxl-2 {
        --bs-gutter-y: 0.5rem;
    }
    .g-xxl-3,
    .gx-xxl-3 {
        --bs-gutter-x: 1rem;
    }
    .g-xxl-3,
    .gy-xxl-3 {
        --bs-gutter-y: 1rem;
    }
    .g-xxl-4,
    .gx-xxl-4 {
        --bs-gutter-x: 1.5rem;
    }
    .g-xxl-4,
    .gy-xxl-4 {
        --bs-gutter-y: 1.5rem;
    }
    .g-xxl-5,
    .gx-xxl-5 {
        --bs-gutter-x: 3rem;
    }
    .g-xxl-5,
    .gy-xxl-5 {
        --bs-gutter-y: 3rem;
    }
}
.table {
    --darkreader-bg--bs-table-bg: rgba(0, 0, 0, 0);
    --darkreader-bg--bs-table-accent-bg: rgba(0, 0, 0, 0);
    --darkreader-text--bs-table-striped-color: #d1cdc7;
    --darkreader-bg--bs-table-striped-bg: rgba(0, 0, 0, 0.05);
    --darkreader-text--bs-table-active-color: #d1cdc7;
    --darkreader-bg--bs-table-active-bg: rgba(0, 0, 0, 0.1);
    --darkreader-text--bs-table-hover-color: #d1cdc7;
    --darkreader-bg--bs-table-hover-bg: rgba(0, 0, 0, 0.07);
    color: rgb(209, 205, 199);
    border-color: rgb(56, 61, 63);
}
.table > :not(caption) > * > * {
    background-color: var(--darkreader-bg--bs-table-bg);
    box-shadow: inset 0 0 0 9999px var(--darkreader-bg--bs-table-accent-bg);
}
.table > :not(:last-child) > :last-child > * {
    border-bottom-color: currentcolor;
}
.table-striped > tbody > tr:nth-of-type(2n+1) {
    --darkreader-bg--bs-table-accent-bg: var(--darkreader-bg--bs-table-striped-bg);
    color: var(--darkreader-text--bs-table-striped-color);
}
.table-active {
    --darkreader-bg--bs-table-accent-bg: var(--darkreader-bg--bs-table-active-bg);
    color: var(--darkreader-text--bs-table-active-color);
}
.table-hover > tbody > tr:hover {
    --darkreader-bg--bs-table-accent-bg: var(--darkreader-bg--bs-table-hover-bg);
    color: var(--darkreader-text--bs-table-hover-color);
}
.table-primary {
    --darkreader-bg--bs-table-bg: #26292a;
    --darkreader-bg--bs-table-striped-bg: #2c3032;
    --darkreader-text--bs-table-striped-color: #e8e6e3;
    --darkreader-bg--bs-table-active-bg: #333739;
    --darkreader-text--bs-table-active-color: #e8e6e3;
    --darkreader-bg--bs-table-hover-bg: #2f3335;
    --darkreader-text--bs-table-hover-color: #e8e6e3;
    color: rgb(232, 230, 227);
    border-color: rgb(35, 58, 96);
}
.table-secondary {
    --darkreader-bg--bs-table-bg: #282b2c;
    --darkreader-bg--bs-table-striped-bg: #2e3233;
    --darkreader-text--bs-table-striped-color: #e8e6e3;
    --darkreader-bg--bs-table-active-bg: #35393b;
    --darkreader-text--bs-table-active-color: #e8e6e3;
    --darkreader-bg--bs-table-hover-bg: #313537;
    --darkreader-text--bs-table-hover-color: #e8e6e3;
    color: rgb(232, 230, 227);
    border-color: rgb(62, 67, 70);
}
.table-success {
    --darkreader-bg--bs-table-bg: #203d33;
    --darkreader-bg--bs-table-striped-bg: #2a4139;
    --darkreader-text--bs-table-striped-color: #e8e6e3;
    --darkreader-bg--bs-table-active-bg: #31463f;
    --darkreader-text--bs-table-active-color: #e8e6e3;
    --darkreader-bg--bs-table-hover-bg: #2d443c;
    --darkreader-text--bs-table-hover-color: #e8e6e3;
    color: rgb(232, 230, 227);
    border-color: rgb(64, 69, 72);
}
.table-info {
    --darkreader-bg--bs-table-bg: #05404d;
    --darkreader-bg--bs-table-striped-bg: #15424b;
    --darkreader-text--bs-table-striped-color: #e8e6e3;
    --darkreader-bg--bs-table-active-bg: #20464e;
    --darkreader-text--bs-table-active-color: #e8e6e3;
    --darkreader-bg--bs-table-hover-bg: #1a444c;
    --darkreader-text--bs-table-hover-color: #e8e6e3;
    color: rgb(232, 230, 227);
    border-color: rgb(38, 84, 93);
}
.table-warning {
    --darkreader-bg--bs-table-bg: #3d2e00;
    --darkreader-bg--bs-table-striped-bg: #3a300d;
    --darkreader-text--bs-table-striped-color: #e8e6e3;
    --darkreader-bg--bs-table-active-bg: #3c3215;
    --darkreader-text--bs-table-active-color: #e8e6e3;
    --darkreader-bg--bs-table-hover-bg: #3b3111;
    --darkreader-text--bs-table-hover-color: #e8e6e3;
    color: rgb(232, 230, 227);
    border-color: rgb(96, 81, 34);
}
.table-danger {
    --darkreader-bg--bs-table-bg: #430c11;
    --darkreader-bg--bs-table-striped-bg: #44191d;
    --darkreader-text--bs-table-striped-color: #e8e6e3;
    --darkreader-bg--bs-table-active-bg: #462527;
    --darkreader-text--bs-table-active-color: #e8e6e3;
    --darkreader-bg--bs-table-hover-bg: #442023;
    --darkreader-text--bs-table-hover-color: #e8e6e3;
    color: rgb(232, 230, 227);
    border-color: rgb(85, 45, 47);
}
.table-light {
    --darkreader-bg--bs-table-bg: #1b1e1f;
    --darkreader-bg--bs-table-striped-bg: #222526;
    --darkreader-text--bs-table-striped-color: #e8e6e3;
    --darkreader-bg--bs-table-active-bg: #2a2d2f;
    --darkreader-text--bs-table-active-color: #e8e6e3;
    --darkreader-bg--bs-table-hover-bg: #26292b;
    --darkreader-text--bs-table-hover-color: #e8e6e3;
    color: rgb(232, 230, 227);
    border-color: rgb(57, 61, 64);
}
.table-dark {
    --darkreader-bg--bs-table-bg: #1c1e1f;
    --darkreader-bg--bs-table-striped-bg: #242729;
    --darkreader-text--bs-table-striped-color: #e8e6e3;
    --darkreader-bg--bs-table-active-bg: #2c3032;
    --darkreader-text--bs-table-active-color: #e8e6e3;
    --darkreader-bg--bs-table-hover-bg: #282c2d;
    --darkreader-text--bs-table-hover-color: #e8e6e3;
    color: rgb(232, 230, 227);
    border-color: rgb(121, 112, 99);
}
.form-text {
    color: rgb(158, 150, 137);
}
.form-control {
    color: rgb(209, 205, 199);
    background-color: rgb(24, 26, 27);
    border-color: rgb(60, 65, 68);
}
.form-control:focus {
    color: rgb(209, 205, 199);
    background-color: rgb(24, 26, 27);
    border-color: rgb(1, 57, 137);
    outline-color: initial;
    box-shadow: rgba(2, 80, 196, 0.25) 0px 0px 0px 0.25rem;
}
.form-control::placeholder {
    color: rgb(158, 150, 137);
}
.form-control:disabled,
.form-control[readonly] {
    background-color: rgb(35, 38, 39);
}
.form-control::file-selector-button {
    color: rgb(209, 205, 199);
    background-color: rgb(35, 38, 39);
    border-color: inherit;
}
.form-control:hover:not(:disabled):not([readonly])::file-selector-button {
    background-color: rgb(42, 45, 47);
}
.form-control::-webkit-file-upload-button {
    color: rgb(209, 205, 199);
    background-color: rgb(35, 38, 39);
    border-color: inherit;
}
.form-control:hover:not(:disabled):not([readonly])::-webkit-file-upload-button {
    background-color: rgb(42, 45, 47);
}
.form-control-plaintext {
    color: rgb(209, 205, 199);
    background-color: transparent;
    border-color: transparent;
}
.form-select {
    color: rgb(209, 205, 199);
    background-color: rgb(24, 26, 27);
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23343a40' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M2 5l6 6 6-6'/%3e%3c/svg%3e");
    border-color: rgb(60, 65, 68);
}
.form-select:focus {
    border-color: rgb(1, 57, 137);
    outline-color: initial;
    box-shadow: rgba(2, 80, 196, 0.25) 0px 0px 0px 0.25rem;
}
.form-select[multiple],
.form-select[size]:not([size="1"]) {
    background-image: none;
}
.form-select:disabled {
    background-color: rgb(35, 38, 39);
}
.form-check-input {
    background-color: rgb(24, 26, 27);
    border-color: rgba(140, 130, 115, 0.25);
}
.form-check-input:focus {
    border-color: rgb(1, 57, 137);
    outline-color: initial;
    box-shadow: rgba(2, 80, 196, 0.25) 0px 0px 0px 0.25rem;
}
.form-check-input:checked {
    background-color: rgb(2, 80, 196);
    border-color: rgb(1, 71, 174); 
}
.form-check-input:checked[type="checkbox"] {
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3e%3cpath fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='M6 10l3 3l6-6'/%3e%3c/svg%3e"); 
}
.form-check-input:checked[type="radio"] {
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='2' fill='%23fff'/%3e%3c/svg%3e"); 
}
.form-check-input[type="checkbox"]:indeterminate {
    background-color: rgb(2, 80, 196);
    border-color: rgb(1, 71, 174);
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3e%3cpath fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='M6 10h8'/%3e%3c/svg%3e");
}
.form-switch .form-check-input {
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='rgba%280, 0, 0, 0.25%29'/%3e%3c/svg%3e");
}
.form-switch .form-check-input:focus {
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='%2386b7fe'/%3e%3c/svg%3e");
}
.form-switch .form-check-input:checked {
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='%23fff'/%3e%3c/svg%3e");
}
.form-range {
    background-color: transparent;
}
.form-range:focus {
    outline-color: initial;
}
.form-range:focus::-webkit-slider-thumb {
    box-shadow: rgb(24, 26, 27) 0px 0px 0px 1px,
    rgba(2, 80, 196, 0.25) 0px 0px 0px 0.25rem;
}
.form-range::-webkit-slider-thumb {
    background-color: rgb(2, 80, 196);
    border-color: initial;
}
.form-range::-webkit-slider-thumb:active {
    background-color: rgb(45, 49, 51);
}
.form-range::-webkit-slider-runnable-track {
    color: transparent;
    background-color: rgb(40, 44, 45);
    border-color: transparent;
}
.form-range:disabled::-webkit-slider-thumb {
    background-color: rgb(66, 71, 74);
}
.form-floating > label {
    border-color: transparent;
}
.form-floating > .form-control::placeholder {
    color: transparent;
}
.input-group-text {
    color: rgb(209, 205, 199);
    background-color: rgb(35, 38, 39);
    border-color: rgb(60, 65, 68);
}
.valid-feedback {
    color: rgb(117, 230, 178);
}
.valid-tooltip {
    color: rgb(232, 230, 227);
    background-color: rgba(20, 108, 67, 0.9);
}
.form-control.is-valid,
.was-validated .form-control:valid {
    border-color: rgb(32, 175, 109);
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%23198754' d='M2.3 6.73L.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z'/%3e%3c/svg%3e");
}
.form-control.is-valid:focus,
.was-validated .form-control:valid:focus {
    border-color: rgb(32, 175, 109);
    box-shadow: rgba(20, 108, 67, 0.25) 0px 0px 0px 0.25rem;
}
.form-select.is-valid,
.was-validated .form-select:valid {
    border-color: rgb(32, 175, 109);
}
.form-select.is-valid:not([multiple]):not([size]),
.form-select.is-valid:not([multiple])[size="1"],
.was-validated .form-select:valid:not([multiple]):not([size]),
.was-validated .form-select:valid:not([multiple])[size="1"] {
}
.form-select.is-valid:focus,
.was-validated .form-select:valid:focus {
    border-color: rgb(32, 175, 109);
    box-shadow: rgba(20, 108, 67, 0.25) 0px 0px 0px 0.25rem;
}
.form-check-input.is-valid,
.was-validated .form-check-input:valid {
    border-color: rgb(32, 175, 109);
}
.form-check-input.is-valid:checked,
.was-validated .form-check-input:valid:checked {
    background-color: rgb(20, 108, 67);
}
.form-check-input.is-valid:focus,
.was-validated .form-check-input:valid:focus {
    box-shadow: rgba(20, 108, 67, 0.25) 0px 0px 0px 0.25rem;
}
.form-check-input.is-valid ~ .form-check-label,
.was-validated .form-check-input:valid ~ .form-check-label {
    color: rgb(117, 230, 178);
}
.invalid-feedback {
    color: rgb(223, 70, 85);
}
.invalid-tooltip {
    color: rgb(232, 230, 227);
    background-color: rgba(165, 29, 42, 0.9);
}
.form-control.is-invalid,
.was-validated .form-control:invalid {
    border-color: rgb(148, 26, 37);
    background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMTIiIGhlaWdodD0iMTIiPjxkZWZzPjxmaWx0ZXIgaWQ9ImRhcmtyZWFkZXItaW1hZ2UtZmlsdGVyIj48ZmVDb2xvck1hdHJpeCB0eXBlPSJtYXRyaXgiIHZhbHVlcz0iMC4yNDkgLTAuNjE0IC0wLjY3MiAwLjAwMCAxLjAzNSAtMC42NDYgMC4yODggLTAuNjY0IDAuMDAwIDEuMDIwIC0wLjYzNiAtMC42MDkgMC4yNTAgMC4wMDAgMC45OTQgMC4wMDAgMC4wMDAgMC4wMDAgMS4wMDAgMC4wMDAiIC8+PC9maWx0ZXI+PC9kZWZzPjxpbWFnZSB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIGZpbHRlcj0idXJsKCNkYXJrcmVhZGVyLWltYWdlLWZpbHRlcikiIHhsaW5rOmhyZWY9ImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM2NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgMTIgMTInIHdpZHRoPScxMicgaGVpZ2h0PScxMicgZmlsbD0nbm9uZScgc3Ryb2tlPSclMjNkYzM1NDUnJTNlJTNjY2lyY2xlIGN4PSc2JyBjeT0nNicgcj0nNC41Jy8lM2UlM2NwYXRoIHN0cm9rZS1saW5lam9pbj0ncm91bmQnIGQ9J001LjggMy42aC40TDYgNi41eicvJTNlJTNjY2lyY2xlIGN4PSc2JyBjeT0nOC4yJyByPScuNicgZmlsbD0nJTIzZGMzNTQ1JyBzdHJva2U9J25vbmUnLyUzZSUzYy9zdmclM2UiIC8+PC9zdmc+");
}
.form-control.is-invalid:focus,
.was-validated .form-control:invalid:focus {
    border-color: rgb(148, 26, 37);
    box-shadow: rgba(165, 29, 42, 0.25) 0px 0px 0px 0.25rem;
}
.form-select.is-invalid,
.was-validated .form-select:invalid {
    border-color: rgb(148, 26, 37);
}
.form-select.is-invalid:not([multiple]):not([size]),
.form-select.is-invalid:not([multiple])[size="1"],
.was-validated .form-select:invalid:not([multiple]):not([size]),
.was-validated .form-select:invalid:not([multiple])[size="1"] {
}
.form-select.is-invalid:focus,
.was-validated .form-select:invalid:focus {
    border-color: rgb(148, 26, 37);
    box-shadow: rgba(165, 29, 42, 0.25) 0px 0px 0px 0.25rem;
}
.form-check-input.is-invalid,
.was-validated .form-check-input:invalid {
    border-color: rgb(148, 26, 37);
}
.form-check-input.is-invalid:checked,
.was-validated .form-check-input:invalid:checked {
    background-color: rgb(165, 29, 42);
}
.form-check-input.is-invalid:focus,
.was-validated .form-check-input:invalid:focus {
    box-shadow: rgba(165, 29, 42, 0.25) 0px 0px 0px 0.25rem;
}
.form-check-input.is-invalid ~ .form-check-label,
.was-validated .form-check-input:invalid ~ .form-check-label {
    color: rgb(223, 70, 85);
}
.btn {
    color: rgb(209, 205, 199);
    text-decoration-color: initial;
    background-color: transparent;
    border-color: transparent;
}
.btn:hover {
    color: rgb(209, 205, 199);
}
.btn-check:focus + .btn,
.btn:focus {
    outline-color: initial;
    box-shadow: rgba(2, 80, 196, 0.25) 0px 0px 0px 0.25rem;
}
.btn-primary {
    color: rgb(232, 230, 227);
    background-color: rgb(2, 80, 196);
    border-color: rgb(1, 71, 174);
}
.btn-primary:hover {
    color: rgb(232, 230, 227);
    background-color: rgb(9, 75, 172);
    border-color: rgb(9, 79, 182);
}
.btn-check:focus + .btn-primary,
.btn-primary:focus {
    color: rgb(232, 230, 227);
    background-color: rgb(9, 75, 172);
    border-color: rgb(9, 79, 182);
    box-shadow: rgba(2, 72, 174, 0.5) 0px 0px 0px 0.25rem;
}
.btn-check:active + .btn-primary,
.btn-check:checked + .btn-primary,
.btn-primary.active,
.btn-primary:active,
.show > .btn-primary.dropdown-toggle {
    color: rgb(232, 230, 227);
    background-color: rgb(8, 70, 162);
    border-color: rgb(10, 81, 185);
}
.btn-check:active + .btn-primary:focus,
.btn-check:checked + .btn-primary:focus,
.btn-primary.active:focus,
.btn-primary:active:focus,
.show > .btn-primary.dropdown-toggle:focus {
    box-shadow: rgba(2, 72, 174, 0.5) 0px 0px 0px 0.25rem;
}
.btn-primary.disabled,
.btn-primary:disabled {
    color: rgb(232, 230, 227);
    background-color: rgb(2, 80, 196);
    border-color: rgb(1, 71, 174);
}
.btn-secondary {
    color: rgb(232, 230, 227);
    background-color: rgb(88, 95, 99);
    border-color: rgb(102, 94, 83);
}
.btn-secondary:hover {
    color: rgb(232, 230, 227);
    background-color: rgb(75, 81, 84);
    border-color: rgb(109, 102, 90);
}
.btn-check:focus + .btn-secondary,
.btn-secondary:focus {
    color: rgb(232, 230, 227);
    background-color: rgb(75, 81, 84);
    border-color: rgb(109, 102, 90);
    box-shadow: rgba(90, 98, 102, 0.5) 0px 0px 0px 0.25rem;
}
.btn-check:active + .btn-secondary,
.btn-check:checked + .btn-secondary,
.btn-secondary.active,
.btn-secondary:active,
.show > .btn-secondary.dropdown-toggle {
    color: rgb(232, 230, 227);
    background-color: rgb(70, 76, 79);
    border-color: rgb(111, 103, 91);
}
.btn-check:active + .btn-secondary:focus,
.btn-check:checked + .btn-secondary:focus,
.btn-secondary.active:focus,
.btn-secondary:active:focus,
.show > .btn-secondary.dropdown-toggle:focus {
    box-shadow: rgba(90, 98, 102, 0.5) 0px 0px 0px 0.25rem;
}
.btn-secondary.disabled,
.btn-secondary:disabled {
    color: rgb(232, 230, 227);
    background-color: rgb(88, 95, 99);
    border-color: rgb(102, 94, 83);
}
.btn-success {
    color: rgb(232, 230, 227);
    background-color: rgb(20, 108, 67);
    border-color: rgb(32, 175, 109);
}
.btn-success:hover {
    color: rgb(232, 230, 227);
    background-color: rgb(17, 92, 57);
    border-color: rgb(34, 183, 113);
}
.btn-check:focus + .btn-success,
.btn-success:focus {
    color: rgb(232, 230, 227);
    background-color: rgb(17, 92, 57);
    border-color: rgb(34, 183, 113);
    box-shadow: rgba(48, 122, 88, 0.5) 0px 0px 0px 0.25rem;
}
.btn-check:active + .btn-success,
.btn-check:checked + .btn-success,
.btn-success.active,
.btn-success:active,
.show > .btn-success.dropdown-toggle {
    color: rgb(232, 230, 227);
    background-color: rgb(16, 86, 54);
    border-color: rgb(35, 184, 115);
}
.btn-check:active + .btn-success:focus,
.btn-check:checked + .btn-success:focus,
.btn-success.active:focus,
.btn-success:active:focus,
.show > .btn-success.dropdown-toggle:focus {
    box-shadow: rgba(48, 122, 88, 0.5) 0px 0px 0px 0.25rem;
}
.btn-success.disabled,
.btn-success:disabled {
    color: rgb(232, 230, 227);
    background-color: rgb(20, 108, 67);
    border-color: rgb(32, 175, 109);
}
.btn-info {
    color: rgb(232, 230, 227);
    background-color: rgb(10, 162, 192);
    border-color: rgb(9, 143, 170);
}
.btn-info:hover {
    color: rgb(232, 230, 227);
    background-color: rgb(11, 145, 172);
    border-color: rgb(10, 136, 162);
}
.btn-check:focus + .btn-info,
.btn-info:focus {
    color: rgb(232, 230, 227);
    background-color: rgb(11, 145, 172);
    border-color: rgb(10, 136, 162);
    box-shadow: rgba(9, 138, 163, 0.5) 0px 0px 0px 0.25rem;
}
.btn-check:active + .btn-info,
.btn-check:checked + .btn-info,
.btn-info.active,
.btn-info:active,
.show > .btn-info.dropdown-toggle {
    color: rgb(232, 230, 227);
    background-color: rgb(10, 139, 164);
    border-color: rgb(10, 136, 162);
}
.btn-check:active + .btn-info:focus,
.btn-check:checked + .btn-info:focus,
.btn-info.active:focus,
.btn-info:active:focus,
.show > .btn-info.dropdown-toggle:focus {
    box-shadow: rgba(9, 138, 163, 0.5) 0px 0px 0px 0.25rem;
}
.btn-info.disabled,
.btn-info:disabled {
    color: rgb(232, 230, 227);
    background-color: rgb(10, 162, 192);
    border-color: rgb(9, 143, 170);
}
.btn-warning {
    color: rgb(232, 230, 227);
    background-color: rgb(150, 112, 0);
    border-color: rgb(176, 132, 0);
}
.btn-warning:hover {
    color: rgb(232, 230, 227);
    background-color: rgb(133, 100, 0);
    border-color: rgb(169, 126, 0);
}
.btn-check:focus + .btn-warning,
.btn-warning:focus {
    color: rgb(232, 230, 227);
    background-color: rgb(133, 100, 0);
    border-color: rgb(169, 126, 0);
    box-shadow: rgba(174, 131, 5, 0.5) 0px 0px 0px 0.25rem;
}
.btn-check:active + .btn-warning,
.btn-check:checked + .btn-warning,
.btn-warning.active,
.btn-warning:active,
.show > .btn-warning.dropdown-toggle {
    color: rgb(232, 230, 227);
    background-color: rgb(127, 95, 0);
    border-color: rgb(169, 126, 0);
}
.btn-check:active + .btn-warning:focus,
.btn-check:checked + .btn-warning:focus,
.btn-warning.active:focus,
.btn-warning:active:focus,
.show > .btn-warning.dropdown-toggle:focus {
    box-shadow: rgba(174, 131, 5, 0.5) 0px 0px 0px 0.25rem;
}
.btn-warning.disabled,
.btn-warning:disabled {
    color: rgb(232, 230, 227);
    background-color: rgb(150, 112, 0);
    border-color: rgb(176, 132, 0);
}
.btn-danger {
    color: rgb(232, 230, 227);
    background-color: rgb(165, 29, 42);
    border-color: rgb(148, 26, 37);
}
.btn-danger:hover {
    color: rgb(232, 230, 227);
    background-color: rgb(150, 36, 47);
    border-color: rgb(153, 37, 48);
}
.btn-check:focus + .btn-danger,
.btn-danger:focus {
    color: rgb(232, 230, 227);
    background-color: rgb(150, 36, 47);
    border-color: rgb(153, 37, 48);
    box-shadow: rgba(147, 26, 38, 0.5) 0px 0px 0px 0.25rem;
}
.btn-check:active + .btn-danger,
.btn-check:checked + .btn-danger,
.btn-danger.active,
.btn-danger:active,
.show > .btn-danger.dropdown-toggle {
    color: rgb(232, 230, 227);
    background-color: rgb(141, 34, 44);
    border-color: rgb(156, 38, 49);
}
.btn-check:active + .btn-danger:focus,
.btn-check:checked + .btn-danger:focus,
.btn-danger.active:focus,
.btn-danger:active:focus,
.show > .btn-danger.dropdown-toggle:focus {
    box-shadow: rgba(147, 26, 38, 0.5) 0px 0px 0px 0.25rem;
}
.btn-danger.disabled,
.btn-danger:disabled {
    color: rgb(232, 230, 227);
    background-color: rgb(165, 29, 42);
    border-color: rgb(148, 26, 37);
}
.btn-light {
    color: rgb(232, 230, 227);
    background-color: rgb(27, 30, 31);
    border-color: rgb(50, 54, 56);
}
.btn-light:hover {
    color: rgb(232, 230, 227);
    background-color: rgb(27, 29, 30);
    border-color: rgb(49, 54, 56);
}
.btn-check:focus + .btn-light,
.btn-light:focus {
    color: rgb(232, 230, 227);
    background-color: rgb(27, 29, 30);
    border-color: rgb(49, 54, 56);
    box-shadow: rgba(48, 52, 54, 0.5) 0px 0px 0px 0.25rem;
}
.btn-check:active + .btn-light,
.btn-check:checked + .btn-light,
.btn-light.active,
.btn-light:active,
.show > .btn-light.dropdown-toggle {
    color: rgb(232, 230, 227);
    background-color: rgb(27, 29, 30);
    border-color: rgb(49, 54, 56);
}
.btn-check:active + .btn-light:focus,
.btn-check:checked + .btn-light:focus,
.btn-light.active:focus,
.btn-light:active:focus,
.show > .btn-light.dropdown-toggle:focus {
    box-shadow: rgba(48, 52, 54, 0.5) 0px 0px 0px 0.25rem;
}
.btn-light.disabled,
.btn-light:disabled {
    color: rgb(232, 230, 227);
    background-color: rgb(27, 30, 31);
    border-color: rgb(50, 54, 56);
}
.btn-dark {
    color: rgb(232, 230, 227);
    background-color: rgb(28, 30, 31);
    border-color: rgb(128, 119, 105);
}
.btn-dark:hover {
    color: rgb(232, 230, 227);
    background-color: rgb(24, 26, 27);
    border-color: rgb(130, 121, 107);
}
.btn-check:focus + .btn-dark,
.btn-dark:focus {
    color: rgb(232, 230, 227);
    background-color: rgb(24, 26, 27);
    border-color: rgb(130, 121, 107);
    box-shadow: rgba(52, 57, 59, 0.5) 0px 0px 0px 0.25rem;
}
.btn-check:active + .btn-dark,
.btn-check:checked + .btn-dark,
.btn-dark.active,
.btn-dark:active,
.show > .btn-dark.dropdown-toggle {
    color: rgb(232, 230, 227);
    background-color: rgb(22, 24, 25);
    border-color: rgb(131, 121, 107);
}
.btn-check:active + .btn-dark:focus,
.btn-check:checked + .btn-dark:focus,
.btn-dark.active:focus,
.btn-dark:active:focus,
.show > .btn-dark.dropdown-toggle:focus {
    box-shadow: rgba(52, 57, 59, 0.5) 0px 0px 0px 0.25rem;
}
.btn-dark.disabled,
.btn-dark:disabled {
    color: rgb(232, 230, 227);
    background-color: rgb(28, 30, 31);
    border-color: rgb(128, 119, 105);
}
.btn-outline-primary {
    color: rgb(35, 148, 253);
    border-color: rgb(1, 71, 174);
}
.btn-outline-primary:hover {
    color: rgb(232, 230, 227);
    background-color: rgb(2, 80, 196);
    border-color: rgb(1, 71, 174);
}
.btn-check:focus + .btn-outline-primary,
.btn-outline-primary:focus {
    box-shadow: rgba(2, 80, 196, 0.5) 0px 0px 0px 0.25rem;
}
.btn-check:active + .btn-outline-primary,
.btn-check:checked + .btn-outline-primary,
.btn-outline-primary.active,
.btn-outline-primary.dropdown-toggle.show,
.btn-outline-primary:active {
    color: rgb(232, 230, 227);
    background-color: rgb(2, 80, 196);
    border-color: rgb(1, 71, 174);
}
.btn-check:active + .btn-outline-primary:focus,
.btn-check:checked + .btn-outline-primary:focus,
.btn-outline-primary.active:focus,
.btn-outline-primary.dropdown-toggle.show:focus,
.btn-outline-primary:active:focus {
    box-shadow: rgba(2, 80, 196, 0.5) 0px 0px 0px 0.25rem;
}
.btn-outline-primary.disabled,
.btn-outline-primary:disabled {
    color: rgb(35, 148, 253);
    background-color: transparent;
}
.btn-outline-secondary {
    color: rgb(158, 150, 137);
    border-color: rgb(102, 94, 83);
}
.btn-outline-secondary:hover {
    color: rgb(232, 230, 227);
    background-color: rgb(88, 95, 99);
    border-color: rgb(102, 94, 83);
}
.btn-check:focus + .btn-outline-secondary,
.btn-outline-secondary:focus {
    box-shadow: rgba(88, 95, 99, 0.5) 0px 0px 0px 0.25rem;
}
.btn-check:active + .btn-outline-secondary,
.btn-check:checked + .btn-outline-secondary,
.btn-outline-secondary.active,
.btn-outline-secondary.dropdown-toggle.show,
.btn-outline-secondary:active {
    color: rgb(232, 230, 227);
    background-color: rgb(88, 95, 99);
    border-color: rgb(102, 94, 83);
}
.btn-check:active + .btn-outline-secondary:focus,
.btn-check:checked + .btn-outline-secondary:focus,
.btn-outline-secondary.active:focus,
.btn-outline-secondary.dropdown-toggle.show:focus,
.btn-outline-secondary:active:focus {
    box-shadow: rgba(88, 95, 99, 0.5) 0px 0px 0px 0.25rem;
}
.btn-outline-secondary.disabled,
.btn-outline-secondary:disabled {
    color: rgb(158, 150, 137);
    background-color: transparent;
}
.btn-outline-success {
    color: rgb(117, 230, 178);
    border-color: rgb(32, 175, 109);
}
.btn-outline-success:hover {
    color: rgb(232, 230, 227);
    background-color: rgb(20, 108, 67);
    border-color: rgb(32, 175, 109);
}
.btn-check:focus + .btn-outline-success,
.btn-outline-success:focus {
    box-shadow: rgba(20, 108, 67, 0.5) 0px 0px 0px 0.25rem;
}
.btn-check:active + .btn-outline-success,
.btn-check:checked + .btn-outline-success,
.btn-outline-success.active,
.btn-outline-success.dropdown-toggle.show,
.btn-outline-success:active {
    color: rgb(232, 230, 227);
    background-color: rgb(20, 108, 67);
    border-color: rgb(32, 175, 109);
}
.btn-check:active + .btn-outline-success:focus,
.btn-check:checked + .btn-outline-success:focus,
.btn-outline-success.active:focus,
.btn-outline-success.dropdown-toggle.show:focus,
.btn-outline-success:active:focus {
    box-shadow: rgba(20, 108, 67, 0.5) 0px 0px 0px 0.25rem;
}
.btn-outline-success.disabled,
.btn-outline-success:disabled {
    color: rgb(117, 230, 178);
    background-color: transparent;
}
.btn-outline-info {
    color: rgb(39, 209, 243);
    border-color: rgb(9, 143, 170);
}
.btn-outline-info:hover {
    color: rgb(232, 230, 227);
    background-color: rgb(10, 162, 192);
    border-color: rgb(9, 143, 170);
}
.btn-check:focus + .btn-outline-info,
.btn-outline-info:focus {
    box-shadow: rgba(10, 162, 192, 0.5) 0px 0px 0px 0.25rem;
}
.btn-check:active + .btn-outline-info,
.btn-check:checked + .btn-outline-info,
.btn-outline-info.active,
.btn-outline-info.dropdown-toggle.show,
.btn-outline-info:active {
    color: rgb(232, 230, 227);
    background-color: rgb(10, 162, 192);
    border-color: rgb(9, 143, 170);
}
.btn-check:active + .btn-outline-info:focus,
.btn-check:checked + .btn-outline-info:focus,
.btn-outline-info.active:focus,
.btn-outline-info.dropdown-toggle.show:focus,
.btn-outline-info:active:focus {
    box-shadow: rgba(10, 162, 192, 0.5) 0px 0px 0px 0.25rem;
}
.btn-outline-info.disabled,
.btn-outline-info:disabled {
    color: rgb(39, 209, 243);
    background-color: transparent;
}
.btn-outline-warning {
    color: rgb(255, 199, 30);
    border-color: rgb(176, 132, 0);
}
.btn-outline-warning:hover {
    color: rgb(232, 230, 227);
    background-color: rgb(150, 112, 0);
    border-color: rgb(176, 132, 0);
}
.btn-check:focus + .btn-outline-warning,
.btn-outline-warning:focus {
    box-shadow: rgba(150, 112, 0, 0.5) 0px 0px 0px 0.25rem;
}
.btn-check:active + .btn-outline-warning,
.btn-check:checked + .btn-outline-warning,
.btn-outline-warning.active,
.btn-outline-warning.dropdown-toggle.show,
.btn-outline-warning:active {
    color: rgb(232, 230, 227);
    background-color: rgb(150, 112, 0);
    border-color: rgb(176, 132, 0);
}
.btn-check:active + .btn-outline-warning:focus,
.btn-check:checked + .btn-outline-warning:focus,
.btn-outline-warning.active:focus,
.btn-outline-warning.dropdown-toggle.show:focus,
.btn-outline-warning:active:focus {
    box-shadow: rgba(150, 112, 0, 0.5) 0px 0px 0px 0.25rem;
}
.btn-outline-warning.disabled,
.btn-outline-warning:disabled {
    color: rgb(255, 199, 30);
    background-color: transparent;
}
.btn-outline-danger {
    color: rgb(223, 70, 85);
    border-color: rgb(148, 26, 37);
}
.btn-outline-danger:hover {
    color: rgb(232, 230, 227);
    background-color: rgb(165, 29, 42);
    border-color: rgb(148, 26, 37);
}
.btn-check:focus + .btn-outline-danger,
.btn-outline-danger:focus {
    box-shadow: rgba(165, 29, 42, 0.5) 0px 0px 0px 0.25rem;
}
.btn-check:active + .btn-outline-danger,
.btn-check:checked + .btn-outline-danger,
.btn-outline-danger.active,
.btn-outline-danger.dropdown-toggle.show,
.btn-outline-danger:active {
    color: rgb(232, 230, 227);
    background-color: rgb(165, 29, 42);
    border-color: rgb(148, 26, 37);
}
.btn-check:active + .btn-outline-danger:focus,
.btn-check:checked + .btn-outline-danger:focus,
.btn-outline-danger.active:focus,
.btn-outline-danger.dropdown-toggle.show:focus,
.btn-outline-danger:active:focus {
    box-shadow: rgba(165, 29, 42, 0.5) 0px 0px 0px 0.25rem;
}
.btn-outline-danger.disabled,
.btn-outline-danger:disabled {
    color: rgb(223, 70, 85);
    background-color: transparent;
}
.btn-outline-light {
    color: rgb(228, 226, 222);
    border-color: rgb(50, 54, 56);
}
.btn-outline-light:hover {
    color: rgb(232, 230, 227);
    background-color: rgb(27, 30, 31);
    border-color: rgb(50, 54, 56);
}
.btn-check:focus + .btn-outline-light,
.btn-outline-light:focus {
    box-shadow: rgba(27, 30, 31, 0.5) 0px 0px 0px 0.25rem;
}
.btn-check:active + .btn-outline-light,
.btn-check:checked + .btn-outline-light,
.btn-outline-light.active,
.btn-outline-light.dropdown-toggle.show,
.btn-outline-light:active {
    color: rgb(232, 230, 227);
    background-color: rgb(27, 30, 31);
    border-color: rgb(50, 54, 56);
}
.btn-check:active + .btn-outline-light:focus,
.btn-check:checked + .btn-outline-light:focus,
.btn-outline-light.active:focus,
.btn-outline-light.dropdown-toggle.show:focus,
.btn-outline-light:active:focus {
    box-shadow: rgba(27, 30, 31, 0.5) 0px 0px 0px 0.25rem;
}
.btn-outline-light.disabled,
.btn-outline-light:disabled {
    color: rgb(228, 226, 222);
    background-color: transparent;
}
.btn-outline-dark {
    color: rgb(209, 205, 199);
    border-color: rgb(128, 119, 105);
}
.btn-outline-dark:hover {
    color: rgb(232, 230, 227);
    background-color: rgb(28, 30, 31);
    border-color: rgb(128, 119, 105);
}
.btn-check:focus + .btn-outline-dark,
.btn-outline-dark:focus {
    box-shadow: rgba(28, 30, 31, 0.5) 0px 0px 0px 0.25rem;
}
.btn-check:active + .btn-outline-dark,
.btn-check:checked + .btn-outline-dark,
.btn-outline-dark.active,
.btn-outline-dark.dropdown-toggle.show,
.btn-outline-dark:active {
    color: rgb(232, 230, 227);
    background-color: rgb(28, 30, 31);
    border-color: rgb(128, 119, 105);
}
.btn-check:active + .btn-outline-dark:focus,
.btn-check:checked + .btn-outline-dark:focus,
.btn-outline-dark.active:focus,
.btn-outline-dark.dropdown-toggle.show:focus,
.btn-outline-dark:active:focus {
    box-shadow: rgba(28, 30, 31, 0.5) 0px 0px 0px 0.25rem;
}
.btn-outline-dark.disabled,
.btn-outline-dark:disabled {
    color: rgb(209, 205, 199);
    background-color: transparent;
}
.btn-link {
    color: rgb(35, 148, 253);
    text-decoration-color: initial;
}
.btn-link:hover {
    color: rgb(85, 169, 247);
}
.btn-link.disabled,
.btn-link:disabled {
    color: rgb(158, 150, 137);
}
.dropdown-toggle::after {
    border-top-color: initial;
    border-right-color: transparent;
    border-bottom-color: initial;
    border-left-color: transparent;
}
.dropdown-menu {
    color: rgb(209, 205, 199);
    list-style-image: initial;
    background-color: rgb(24, 26, 27);
    border-color: rgba(140, 130, 115, 0.15);
}
.dropdown-menu-start {
    --bs-position: start;
}
.dropdown-menu-end {
    --bs-position: end;
}
@media (min-width: 576px) {
    .dropdown-menu-sm-start {
        --bs-position: start;
    }
    .dropdown-menu-sm-end {
        --bs-position: end;
    }
}
@media (min-width: 768px) {
    .dropdown-menu-md-start {
        --bs-position: start;
    }
    .dropdown-menu-md-end {
        --bs-position: end;
    }
}
@media (min-width: 992px) {
    .dropdown-menu-lg-start {
        --bs-position: start;
    }
    .dropdown-menu-lg-end {
        --bs-position: end;
    }
}
@media (min-width: 1200px) {
    .dropdown-menu-xl-start {
        --bs-position: start;
    }
    .dropdown-menu-xl-end {
        --bs-position: end;
    }
}
@media (min-width: 1400px) {
    .dropdown-menu-xxl-start {
        --bs-position: start;
    }
    .dropdown-menu-xxl-end {
        --bs-position: end;
    }
}
.dropup .dropdown-toggle::after {
    border-top-color: initial;
    border-right-color: transparent;
    border-bottom-color: initial;
    border-left-color: transparent;
}
.dropend .dropdown-toggle::after {
    border-top-color: transparent;
    border-right-color: initial;
    border-bottom-color: transparent;
    border-left-color: initial;
}
.dropstart .dropdown-toggle::before {
    border-top-color: transparent;
    border-right-color: initial;
    border-bottom-color: transparent;
}
.dropdown-divider {
    border-top-color: rgba(140, 130, 115, 0.15);
}
.dropdown-item {
    color: rgb(209, 205, 199);
    text-decoration-color: initial;
    background-color: transparent;
    border-color: initial;
}
.dropdown-item:focus,
.dropdown-item:hover {
    color: rgb(211, 207, 201);
    background-color: rgb(35, 38, 39);
}
.dropdown-item.active,
.dropdown-item:active {
    color: rgb(232, 230, 227);
    text-decoration-color: initial;
    background-color: rgb(2, 80, 196);
}
.dropdown-item.disabled,
.dropdown-item:disabled {
    color: rgb(185, 179, 170);
    background-color: transparent;
}
.dropdown-header {
    color: rgb(158, 150, 137);
}
.dropdown-item-text {
    color: rgb(209, 205, 199);
}
.dropdown-menu-dark {
    color: rgb(214, 210, 205);
    background-color: rgb(44, 47, 49);
    border-color: rgba(140, 130, 115, 0.15);
}
.dropdown-menu-dark .dropdown-item {
    color: rgb(214, 210, 205);
}
.dropdown-menu-dark .dropdown-item:focus,
.dropdown-menu-dark .dropdown-item:hover {
    color: rgb(232, 230, 227);
    background-color: rgba(24, 26, 27, 0.15);
}
.dropdown-menu-dark .dropdown-item.active,
.dropdown-menu-dark .dropdown-item:active {
    color: rgb(232, 230, 227);
    background-color: rgb(2, 80, 196);
}
.dropdown-menu-dark .dropdown-item.disabled,
.dropdown-menu-dark .dropdown-item:disabled {
    color: rgb(185, 179, 170);
}
.dropdown-menu-dark .dropdown-divider {
    border-color: rgba(140, 130, 115, 0.15);
}
.dropdown-menu-dark .dropdown-item-text {
    color: rgb(214, 210, 205);
}
.dropdown-menu-dark .dropdown-header {
    color: rgb(185, 179, 170);
}
.nav {
    list-style-image: initial;
}
.nav-link {
    color: rgb(35, 148, 253);
    text-decoration-color: initial;
}
.nav-link:focus,
.nav-link:hover {
    color: rgb(85, 169, 247);
}
.nav-link.disabled {
    color: rgb(158, 150, 137);
}
.nav-tabs {
    border-bottom-color: rgb(56, 61, 63);
}
.nav-tabs .nav-link {
    background-image: initial;
    background-color: initial;
    border-color: transparent;
}
.nav-tabs .nav-link:focus,
.nav-tabs .nav-link:hover {
    border-color: rgb(53, 58, 60) rgb(53, 58, 60) rgb(56, 61, 63);
}
.nav-tabs .nav-link.disabled {
    color: rgb(158, 150, 137);
    background-color: transparent;
    border-color: transparent;
}
.nav-tabs .nav-item.show .nav-link,
.nav-tabs .nav-link.active {
    color: rgb(181, 175, 166);
    background-color: rgb(24, 26, 27);
    border-color: rgb(56, 61, 63) rgb(56, 61, 63) rgb(48, 52, 54);
}
.nav-pills .nav-link {
    background-image: initial;
    background-color: initial;
    border-color: initial;
}
.nav-pills .nav-link.active,
.nav-pills .show > .nav-link {
    color: rgb(232, 230, 227);
    background-color: rgb(2, 80, 196);
}
.navbar-brand {
    text-decoration-color: initial;
}
.navbar-nav {
    list-style-image: initial;
}
.navbar-toggler {
    background-color: transparent;
    border-color: transparent;
}
.navbar-toggler:hover {
    text-decoration-color: initial;
}
.navbar-toggler:focus {
    text-decoration-color: initial;
    outline-color: initial;
}
.navbar-light .navbar-brand {
    color: rgba(232, 230, 227, 0.9);
}
.navbar-light .navbar-brand:focus,
.navbar-light .navbar-brand:hover {
    color: rgba(232, 230, 227, 0.9);
}
.navbar-light .navbar-nav .nav-link {
    color: rgba(232, 230, 227, 0.55);
}
.navbar-light .navbar-nav .nav-link:focus,
.navbar-light .navbar-nav .nav-link:hover {
    color: rgba(232, 230, 227, 0.7);
}
.navbar-light .navbar-nav .nav-link.disabled {
    color: rgba(232, 230, 227, 0.3);
}
.navbar-light .navbar-nav .nav-link.active,
.navbar-light .navbar-nav .show > .nav-link {
    color: rgba(232, 230, 227, 0.9);
}
.navbar-light .navbar-toggler {
    color: rgba(232, 230, 227, 0.55);
    border-color: rgba(140, 130, 115, 0.1);
}
.navbar-light .navbar-toggler-icon {
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%280, 0, 0, 0.55%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e");
}
.navbar-light .navbar-text {
    color: rgba(232, 230, 227, 0.55);
}
.navbar-light .navbar-text a,
.navbar-light .navbar-text a:focus,
.navbar-light .navbar-text a:hover {
    color: rgba(232, 230, 227, 0.9);
}
.navbar-dark .navbar-brand {
    color: rgb(232, 230, 227);
}
.navbar-dark .navbar-brand:focus,
.navbar-dark .navbar-brand:hover {
    color: rgb(232, 230, 227);
}
.navbar-dark .navbar-nav .nav-link {
    color: rgba(232, 230, 227, 0.55);
}
.navbar-dark .navbar-nav .nav-link:focus,
.navbar-dark .navbar-nav .nav-link:hover {
    color: rgba(232, 230, 227, 0.75);
}
.navbar-dark .navbar-nav .nav-link.disabled {
    color: rgba(232, 230, 227, 0.25);
}
.navbar-dark .navbar-nav .nav-link.active,
.navbar-dark .navbar-nav .show > .nav-link {
    color: rgb(232, 230, 227);
}
.navbar-dark .navbar-toggler {
    color: rgba(232, 230, 227, 0.55);
    border-color: rgba(48, 52, 54, 0.1);
}
.navbar-dark .navbar-toggler-icon {
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%28255, 255, 255, 0.55%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e");
}
.navbar-dark .navbar-text {
    color: rgba(232, 230, 227, 0.55);
}
.navbar-dark .navbar-text a,
.navbar-dark .navbar-text a:focus,
.navbar-dark .navbar-text a:hover {
    color: rgb(232, 230, 227);
}
.card {
    background-color: rgb(24, 26, 27);
    border-color: rgba(140, 130, 115, 0.13);
}
.card > .list-group {
    border-top-color: inherit;
    border-bottom-color: inherit;
}
.card > .card-header + .list-group,
.card > .list-group + .card-footer {
    border-top-color: initial;
}
.card-link:hover {
    text-decoration-color: initial;
}
.card-header {
    background-color: rgba(0, 0, 0, 0.03);
    border-bottom-color: rgba(140, 130, 115, 0.13);
}
.card-footer {
    background-color: rgba(0, 0, 0, 0.03);
    border-top-color: rgba(140, 130, 115, 0.13);
}
.card-header-tabs {
    border-bottom-color: initial;
}
@media (min-width: 576px) {
    .card-group > .card + .card {
        border-left-color: initial;
    }
}
.accordion-button {
    color: rgb(209, 205, 199);
    background-color: rgb(24, 26, 27);
    border-color: initial;
}
.accordion-button:not(.collapsed) {
    color: rgb(70, 160, 245);
    background-color: rgb(31, 33, 35);
    box-shadow: rgba(0, 0, 0, 0.13) 0px -1px 0px inset;
}
.accordion-button:not(.collapsed)::after {
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%230c63e4'%3e%3cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e");
}
.accordion-button::after {
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23212529'%3e%3cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e");
}
.accordion-button:focus {
    border-color: rgb(1, 57, 137);
    outline-color: initial;
    box-shadow: rgba(2, 80, 196, 0.25) 0px 0px 0px 0.25rem;
}
.accordion-item {
    background-color: rgb(24, 26, 27);
    border-color: rgba(140, 130, 115, 0.13);
}
.accordion-item:not(:first-of-type) {
    border-top-color: initial;
}
.accordion-flush .accordion-item {
    border-right-color: initial;
    border-left-color: initial;
}
.accordion-flush .accordion-item:first-child {
    border-top-color: initial;
}
.accordion-flush .accordion-item:last-child {
    border-bottom-color: initial;
}
.breadcrumb {
    list-style-image: initial;
}
.breadcrumb-item + .breadcrumb-item::before {
    color: rgb(158, 150, 137);
}
.breadcrumb-item.active {
    color: rgb(158, 150, 137);
}
.pagination {
    list-style-image: initial;
}
.page-link {
    color: rgb(35, 148, 253);
    text-decoration-color: initial;
    background-color: rgb(24, 26, 27);
    border-color: rgb(56, 61, 63);
}
.page-link:hover {
    color: rgb(85, 169, 247);
    background-color: rgb(35, 38, 39);
    border-color: rgb(56, 61, 63);
}
.page-link:focus {
    color: rgb(85, 169, 247);
    background-color: rgb(35, 38, 39);
    outline-color: initial;
    box-shadow: rgba(2, 80, 196, 0.25) 0px 0px 0px 0.25rem;
}
.page-item.active .page-link {
    color: rgb(232, 230, 227);
    background-color: rgb(2, 80, 196);
    border-color: rgb(1, 71, 174);
}
.page-item.disabled .page-link {
    color: rgb(158, 150, 137);
    background-color: rgb(24, 26, 27);
    border-color: rgb(56, 61, 63);
}
.badge {
    color: rgb(232, 230, 227);
}
.alert {
    border-color: transparent;
}
.alert-heading {
    color: inherit;
}
.alert-primary {
    color: rgb(115, 184, 248);
    background-color: rgb(38, 41, 42);
    border-color: rgb(2, 52, 123);
}
.alert-primary .alert-link {
    color: rgb(133, 193, 249);
}
.alert-secondary {
    color: rgb(188, 182, 173);
    background-color: rgb(40, 43, 44);
    border-color: rgb(60, 65, 67);
}
.alert-secondary .alert-link {
    color: rgb(197, 192, 184);
}
.alert-success {
    color: rgb(202, 197, 190);
    background-color: rgb(32, 61, 51);
    border-color: rgb(46, 88, 69);
}
.alert-success .alert-link {
    color: rgb(208, 204, 197);
}
.alert-info {
    color: rgb(200, 195, 188);
    background-color: rgb(5, 64, 77);
    border-color: rgb(6, 99, 119);
}
.alert-info .alert-link {
    color: rgb(206, 202, 196);
}
.alert-warning {
    color: rgb(251, 222, 134);
    background-color: rgb(61, 46, 0);
    border-color: rgb(124, 92, 0);
}
.alert-warning .alert-link {
    color: rgb(205, 201, 195);
}
.alert-danger {
    color: rgb(223, 122, 131);
    background-color: rgb(67, 12, 17);
    border-color: rgb(106, 17, 26);
}
.alert-danger .alert-link {
    color: rgb(227, 140, 147);
}
.alert-light {
    color: rgb(169, 162, 151);
    background-color: rgb(25, 27, 28);
    border-color: rgb(34, 34, 69);
}
.alert-light .alert-link {
    color: rgb(182, 175, 166);
}
.alert-dark {
    color: rgb(218, 215, 210);
    background-color: rgb(49, 53, 55);
    border-color: rgb(66, 72, 75);
}
.alert-dark .alert-link {
    color: rgb(221, 218, 213);
}
.progress {
    background-color: rgb(35, 38, 39);
}
.progress-bar {
    color: rgb(232, 230, 227);
    background-color: rgb(2, 80, 196);
}
.progress-bar-striped {
    background-image: linear-gradient(45deg,
    rgba(24, 26, 27, 0.15) 25%,
    rgba(0, 0, 0, 0) 25%,
    rgba(0, 0, 0, 0) 50%,
    rgba(24, 26, 27, 0.15) 50%,
    rgba(24, 26, 27, 0.15) 75%,
    rgba(0, 0, 0, 0) 75%,
    rgba(0, 0, 0, 0));
}
.list-group-item-action {
    color: rgb(181, 175, 166);
}
.list-group-item-action:focus,
.list-group-item-action:hover {
    color: rgb(181, 175, 166);
    text-decoration-color: initial;
    background-color: rgb(27, 30, 31);
}
.list-group-item-action:active {
    color: rgb(209, 205, 199);
    background-color: rgb(35, 38, 39);
}
.list-group-item {
    color: rgb(209, 205, 199);
    text-decoration-color: initial;
    background-color: rgb(24, 26, 27);
    border-color: rgba(140, 130, 115, 0.13);
}
.list-group-item.disabled,
.list-group-item:disabled {
    color: rgb(158, 150, 137);
    background-color: rgb(24, 26, 27);
}
.list-group-item.active {
    color: rgb(232, 230, 227);
    background-color: rgb(2, 80, 196);
    border-color: rgb(1, 71, 174);
}
.list-group-item-primary {
    color: rgb(115, 184, 248);
    background-color: rgb(38, 41, 42);
}
.list-group-item-primary.list-group-item-action:focus,
.list-group-item-primary.list-group-item-action:hover {
    color: rgb(115, 184, 248);
    background-color: rgb(51, 55, 57);
}
.list-group-item-primary.list-group-item-action.active {
    color: rgb(232, 230, 227);
    background-color: rgb(6, 53, 122);
    border-color: rgb(10, 85, 197);
}
.list-group-item-secondary {
    color: rgb(188, 182, 173);
    background-color: rgb(40, 43, 44);
}
.list-group-item-secondary.list-group-item-action:focus,
.list-group-item-secondary.list-group-item-action:hover {
    color: rgb(188, 182, 173);
    background-color: rgb(53, 57, 59);
}
.list-group-item-secondary.list-group-item-action.active {
    color: rgb(232, 230, 227);
    background-color: rgb(53, 57, 59);
    border-color: rgb(117, 109, 96);
}
.list-group-item-success {
    color: rgb(202, 197, 190);
    background-color: rgb(32, 61, 51);
}
.list-group-item-success.list-group-item-action:focus,
.list-group-item-success.list-group-item-action:hover {
    color: rgb(202, 197, 190);
    background-color: rgb(49, 70, 63);
}
.list-group-item-success.list-group-item-action.active {
    color: rgb(232, 230, 227);
    background-color: rgb(12, 65, 40);
    border-color: rgb(124, 115, 102);
}
.list-group-item-info {
    color: rgb(200, 195, 188);
    background-color: rgb(5, 64, 77);
}
.list-group-item-info.list-group-item-action:focus,
.list-group-item-info.list-group-item-action:hover {
    color: rgb(200, 195, 188);
    background-color: rgb(32, 70, 78);
}
.list-group-item-info.list-group-item-action.active {
    color: rgb(232, 230, 227);
    background-color: rgb(4, 65, 77);
    border-color: rgb(123, 115, 101);
}
.list-group-item-warning {
    color: rgb(251, 222, 134);
    background-color: rgb(61, 46, 0);
}
.list-group-item-warning.list-group-item-action:focus,
.list-group-item-warning.list-group-item-action:hover {
    color: rgb(251, 222, 134);
    background-color: rgb(60, 50, 21);
}
.list-group-item-warning.list-group-item-action.active {
    color: rgb(232, 230, 227);
    background-color: rgb(82, 62, 2);
    border-color: rgb(217, 164, 6);
}
.list-group-item-danger {
    color: rgb(223, 122, 131);
    background-color: rgb(67, 12, 17);
}
.list-group-item-danger.list-group-item-action:focus,
.list-group-item-danger.list-group-item-action:hover {
    color: rgb(223, 122, 131);
    background-color: rgb(70, 37, 39);
}
.list-group-item-danger.list-group-item-action.active {
    color: rgb(232, 230, 227);
    background-color: rgb(106, 26, 33);
    border-color: rgb(166, 40, 51);
}
.list-group-item-light {
    color: rgb(169, 162, 151);
    background-color: rgb(25, 27, 28);
}
.list-group-item-light.list-group-item-action:focus,
.list-group-item-light.list-group-item-action:hover {
    color: rgb(169, 162, 151);
    background-color: rgb(39, 42, 44);
}
.list-group-item-light.list-group-item-action.active {
    color: rgb(232, 230, 227);
    background-color: rgb(75, 81, 84);
    border-color: rgb(107, 100, 88);
}
.list-group-item-dark {
    color: rgb(218, 215, 210);
    background-color: rgb(49, 53, 55);
}
.list-group-item-dark.list-group-item-action:focus,
.list-group-item-dark.list-group-item-action:hover {
    color: rgb(218, 215, 210);
    background-color: rgb(60, 65, 68);
}
.list-group-item-dark.list-group-item-action.active {
    color: rgb(232, 230, 227);
    background-color: rgb(17, 18, 19);
    border-color: rgb(133, 123, 109);
}
.btn-close {
    color: rgb(232, 230, 227);
    background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMTUwIiBoZWlnaHQ9IjE1MCI+PGRlZnM+PGZpbHRlciBpZD0iZGFya3JlYWRlci1pbWFnZS1maWx0ZXIiPjxmZUNvbG9yTWF0cml4IHR5cGU9Im1hdHJpeCIgdmFsdWVzPSIwLjI0OSAtMC42MTQgLTAuNjcyIDAuMDAwIDEuMDM1IC0wLjY0NiAwLjI4OCAtMC42NjQgMC4wMDAgMS4wMjAgLTAuNjM2IC0wLjYwOSAwLjI1MCAwLjAwMCAwLjk5NCAwLjAwMCAwLjAwMCAwLjAwMCAxLjAwMCAwLjAwMCIgLz48L2ZpbHRlcj48L2RlZnM+PGltYWdlIHdpZHRoPSIxNTAiIGhlaWdodD0iMTUwIiBmaWx0ZXI9InVybCgjZGFya3JlYWRlci1pbWFnZS1maWx0ZXIpIiB4bGluazpocmVmPSJkYXRhOmltYWdlL3N2Zyt4bWwsJTNjc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDE2IDE2JyBmaWxsPSclMjMwMDAnJTNlJTNjcGF0aCBkPSdNLjI5My4yOTNhMSAxIDAgMDExLjQxNCAwTDggNi41ODYgMTQuMjkzLjI5M2ExIDEgMCAxMTEuNDE0IDEuNDE0TDkuNDE0IDhsNi4yOTMgNi4yOTNhMSAxIDAgMDEtMS40MTQgMS40MTRMOCA5LjQxNGwtNi4yOTMgNi4yOTNhMSAxIDAgMDEtMS40MTQtMS40MTRMNi41ODYgOCAuMjkzIDEuNzA3YTEgMSAwIDAxMC0xLjQxNHonLyUzZSUzYy9zdmclM2UiIC8+PC9zdmc+");
    background-color: transparent;
    border-color: initial;
}
.btn-close:hover {
    color: rgb(232, 230, 227);
    text-decoration-color: initial;
}
.btn-close:focus {
    outline-color: initial;
    box-shadow: rgba(2, 80, 196, 0.25) 0px 0px 0px 0.25rem;
}
.toast {
    background-color: rgba(24, 26, 27, 0.85);
    border-color: rgba(140, 130, 115, 0.1);
    box-shadow: rgba(0, 0, 0, 0.15) 0px 0.5rem 1rem;
}
.toast-header {
    color: rgb(158, 150, 137);
    background-color: rgba(24, 26, 27, 0.85);
    border-bottom-color: rgba(140, 130, 115, 0.05);
}
.modal {
    outline-color: initial;
}
.modal-content {
    background-color: rgb(24, 26, 27);
    border-color: rgba(140, 130, 115, 0.2);
    outline-color: initial;
}
.modal-backdrop {
    background-color: rgb(0, 0, 0);
}
.modal-header {
    border-bottom-color: rgb(56, 61, 63);
}
.modal-footer {
    border-top-color: rgb(56, 61, 63);
}
.modal-fullscreen .modal-content {
    border-color: initial;
}
@media (max-width: 575.98px) {
    .modal-fullscreen-sm-down .modal-content {
        border-color: initial;
    }
}
@media (max-width: 767.98px) {
    .modal-fullscreen-md-down .modal-content {
        border-color: initial;
    }
}
@media (max-width: 991.98px) {
    .modal-fullscreen-lg-down .modal-content {
        border-color: initial;
    }
}
@media (max-width: 1199.98px) {
    .modal-fullscreen-xl-down .modal-content {
        border-color: initial;
    }
}
@media (max-width: 1399.98px) {
    .modal-fullscreen-xxl-down .modal-content {
        border-color: initial; 
    }
}
.tooltip {
    text-decoration-color: initial; text-shadow: none; 
}
.tooltip .tooltip-arrow::before {
    border-color: transparent; 
}
.bs-tooltip-auto[data-popper-placement^="top"] .tooltip-arrow::before,
.bs-tooltip-top .tooltip-arrow::before {
    border-top-color: rgb(140, 130, 115); 
}
.bs-tooltip-auto[data-popper-placement^="right"] .tooltip-arrow::before,
.bs-tooltip-end .tooltip-arrow::before {
    border-right-color: rgb(140, 130, 115); 
}
.bs-tooltip-auto[data-popper-placement^="bottom"] .tooltip-arrow::before,
.bs-tooltip-bottom .tooltip-arrow::before {
    border-bottom-color: rgb(140, 130, 115); 
}
.bs-tooltip-auto[data-popper-placement^="left"] .tooltip-arrow::before,
.bs-tooltip-start .tooltip-arrow::before {
    border-left-color: rgb(140, 130, 115);
}
.tooltip-inner {
    color: rgb(232, 230, 227);
    background-color: rgb(0, 0, 0);
}
.popover {
    text-decoration-color: initial;
    text-shadow: none;
    background-color: rgb(24, 26, 27);
    border-color: rgba(140, 130, 115, 0.2); 
}
.popover .popover-arrow::after, .popover .popover-arrow::before {
    border-color: transparent; 
}
.bs-popover-auto[data-popper-placement^="top"] > .popover-arrow::before,
.bs-popover-top > .popover-arrow::before {
    border-top-color: rgba(140, 130, 115, 0.25); 
}
.bs-popover-auto[data-popper-placement^="top"] > .popover-arrow::after,
.bs-popover-top > .popover-arrow::after {
    border-top-color: rgb(48, 52, 54); 
}
.bs-popover-auto[data-popper-placement^="right"] > .popover-arrow::before,
.bs-popover-end > .popover-arrow::before {
    border-right-color: rgba(140, 130, 115, 0.25); 
}
.bs-popover-auto[data-popper-placement^="right"] > .popover-arrow::after,
.bs-popover-end > .popover-arrow::after {
    border-right-color: rgb(48, 52, 54); 
}
.bs-popover-auto[data-popper-placement^="bottom"] > .popover-arrow::before,
.bs-popover-bottom > .popover-arrow::before {
    border-bottom-color: rgba(140, 130, 115, 0.25); 
}
.bs-popover-auto[data-popper-placement^="bottom"] > .popover-arrow::after,
.bs-popover-bottom > .popover-arrow::after {
    border-bottom-color: rgb(48, 52, 54); 
}
.bs-popover-auto[data-popper-placement^="bottom"] .popover-header::before,
.bs-popover-bottom .popover-header::before {
    border-bottom-color: rgb(52, 57, 59); 
}
.bs-popover-auto[data-popper-placement^="left"] > .popover-arrow::before,
.bs-popover-start > .popover-arrow::before {
    border-left-color: rgba(140, 130, 115, 0.25); 
}
.bs-popover-auto[data-popper-placement^="left"] > .popover-arrow::after,
.bs-popover-start > .popover-arrow::after {
    border-left-color: rgb(48, 52, 54);
}
.popover-header {
    background-color: rgb(32, 35, 37);
    border-bottom-color: rgba(140, 130, 115, 0.2);
}
.popover-body {
    color: rgb(209, 205, 199);
}
.carousel-control-next,
.carousel-control-prev {
    color: rgb(232, 230, 227);
    background-image: initial;
    background-color: initial;
    border-color: initial;
}
.carousel-control-next:focus,
.carousel-control-next:hover,
.carousel-control-prev:focus,
.carousel-control-prev:hover {
    color: rgb(232, 230, 227);
    text-decoration-color: initial;
    outline-color: initial;
}
.carousel-control-prev-icon {
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23fff'%3e%3cpath d='M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z'/%3e%3c/svg%3e");
}
.carousel-control-next-icon {
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23fff'%3e%3cpath d='M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e");
}
.carousel-indicators {
    list-style-image: initial;
}
.carousel-indicators [data-bs-target] {
    background-color: rgb(24, 26, 27);
    border-right-color: initial;
    border-left-color: initial;
    border-top-color: transparent;
    border-bottom-color: transparent;
}
.carousel-caption {
    color: rgb(232, 230, 227);
}
.carousel-dark .carousel-indicators [data-bs-target] {
    background-color: rgb(0, 0, 0);
}
.carousel-dark .carousel-caption {
    color: rgb(232, 230, 227);
}
.spinner-border {
    border-color: currentcolor transparent currentcolor currentcolor;
}
.spinner-grow {
    background-color: currentcolor;
}
.offcanvas {
    background-color: rgb(24, 26, 27);
    outline-color: initial;
}
.offcanvas-start {
    border-right-color: rgba(140, 130, 115, 0.2);
}
.offcanvas-end {
    border-left-color: rgba(140, 130, 115, 0.2);
}
.offcanvas-top {
    border-bottom-color: rgba(140, 130, 115, 0.2);
}
.offcanvas-bottom {
    border-top-color: rgba(140, 130, 115, 0.2);
}
.link-primary {
    color: rgb(35, 148, 253);
}
.link-primary:focus,
.link-primary:hover {
    color: rgb(85, 169, 247);
}
.link-secondary {
    color: rgb(158, 150, 137);
}
.link-secondary:focus,
.link-secondary:hover {
    color: rgb(173, 166, 156);
}
.link-success {
    color: rgb(117, 230, 178);
}
.link-success:focus,
.link-success:hover {
    color: rgb(136, 233, 188);
}
.link-info {
    color: rgb(39, 209, 243);
}
.link-info:focus,
.link-info:hover {
    color: rgb(71, 215, 244);
}
.link-warning {
    color: rgb(255, 199, 30);
}
.link-warning:focus,
.link-warning:hover {
    color: rgb(255, 207, 65);
}
.link-danger {
    color: rgb(223, 70, 85);
}
.link-danger:focus,
.link-danger:hover {
    color: rgb(216, 91, 103);
}
.link-light {
    color: rgb(228, 226, 222);
}
.link-light:focus,
.link-light:hover {
    color: rgb(229, 227, 223);
}
.link-dark {
    color: rgb(209, 205, 199);
}
.link-dark:focus,
.link-dark:hover {
    color: rgb(213, 210, 204);
}
.ratio-1x1 {
    --bs-aspect-ratio: 100%;
}
.ratio-4x3 {
    --bs-aspect-ratio: calc(3 / 4 * 100%);
}
.ratio-16x9 {
    --bs-aspect-ratio: calc(9 / 16 * 100%);
}
.ratio-21x9 {
    --bs-aspect-ratio: calc(9 / 21 * 100%);
}
.visually-hidden,
.visually-hidden-focusable:not(:focus):not(:focus-within) {
    border-color: initial !important;
}
.shadow {
    box-shadow: rgba(0, 0, 0, 0.15) 0px 0.5rem 1rem !important;
}
.shadow-sm {
    box-shadow: rgba(0, 0, 0, 0.07) 0px 0.125rem 0.25rem !important;
}
.shadow-lg {
    box-shadow: rgba(0, 0, 0, 0.18) 0px 1rem 3rem !important;
}
.shadow-none {
    box-shadow: none !important;
}
.border {
    border-color: rgb(56, 61, 63) !important;
}
.border-0 {
    border-color: initial !important;
}
.border-top {
    border-top-color: rgb(56, 61, 63) !important;
}
.border-top-0 {
    border-top-color: initial !important;
}
.border-end {
    border-right-color: rgb(56, 61, 63) !important;
}
.border-end-0 {
    border-right-color: initial !important;
}
.border-bottom {
    border-bottom-color: rgb(56, 61, 63) !important;
}
.border-bottom-0 {
    border-bottom-color: initial !important;
}
.border-start {
    border-left-color: rgb(56, 61, 63) !important;
}
.border-start-0 {
    border-left-color: initial !important;
}
.border-primary {
    border-color: rgb(1, 71, 174) !important;
}
.border-secondary {
    border-color: rgb(102, 94, 83) !important;
}
.border-success {
    border-color: rgb(32, 175, 109) !important;
}
.border-info {
    border-color: rgb(9, 143, 170) !important;
}
.border-warning {
    border-color: rgb(176, 132, 0) !important;
}
.border-danger {
    border-color: rgb(148, 26, 37) !important;
}
.border-light {
    border-color: rgb(50, 54, 56) !important;
}
.border-dark {
    border-color: rgb(128, 119, 105) !important;
}
.border-white {
    border-color: rgb(48, 52, 54) !important;
}
.text-decoration-none {
    text-decoration-color: initial !important;
}
.text-decoration-underline {
    text-decoration-color: initial !important;
}
.text-decoration-line-through {
    text-decoration-color: initial !important;
}
.text-primary {
    color: rgb(35, 148, 253) !important;
}
.text-secondary {
    color: rgb(158, 150, 137) !important;
}
.text-success {
    color: rgb(117, 230, 178) !important;
}
.text-info {
    color: rgb(39, 209, 243) !important;
}
.text-warning {
    color: rgb(255, 199, 30) !important;
}
.text-danger {
    color: rgb(223, 70, 85) !important;
}
.text-light {
    color: rgb(228, 226, 222) !important;
}
.text-dark {
    color: rgb(209, 205, 199) !important;
}
.text-white {
    color: rgb(232, 230, 227) !important;
}
.text-body {
    color: rgb(209, 205, 199) !important;
}
.text-muted {
    color: rgb(158, 150, 137) !important;
}
.text-black-50 {
    color: rgba(232, 230, 227, 0.5) !important;
}
.text-white-50 {
    color: rgba(232, 230, 227, 0.5) !important;
}
.text-reset {
    color: inherit !important;
}
.bg-primary {
    background-color: rgb(2, 80, 196) !important;
}
.bg-secondary {
    background-color: rgb(88, 95, 99) !important;
}
.bg-success {
    background-color: rgb(20, 108, 67) !important;
}
.bg-info {
    background-color: rgb(10, 162, 192) !important;
}
.bg-warning {
    background-color: rgb(150, 112, 0) !important;
}
.bg-danger {
    background-color: rgb(165, 29, 42) !important;
}
.bg-light {
    background-color: rgb(27, 30, 31) !important;
}
.bg-dark {
    background-color: rgb(28, 30, 31) !important;
}
.bg-body {
    background-color: rgb(24, 26, 27) !important;
}
.bg-white {
    background-color: rgb(24, 26, 27) !important;
}
.bg-transparent {
    background-color: transparent !important;
}
.bg-gradient {
    background-image: var(--darkreader-bgimg--bs-gradient) !important;
}
.materialize-red {
    background-color: rgb(182, 21, 26) !important;
}
.materialize-red-text {
    color: rgb(232, 50, 57) !important;
}
.materialize-red.lighten-5 {
    background-color: rgb(59, 6, 8) !important;
}
.materialize-red-text.text-lighten-5 {
    color: rgb(249, 194, 197) !important;
}
.materialize-red.lighten-4 {
    background-color: rgb(83, 9, 12) !important;
}
.materialize-red-text.text-lighten-4 {
    color: rgb(245, 166, 169) !important;
}
.materialize-red.lighten-3 {
    background-color: rgb(107, 13, 16) !important;
}
.materialize-red-text.text-lighten-3 {
    color: rgb(241, 137, 141) !important;
}
.materialize-red.lighten-2 {
    background-color: rgb(133, 16, 20) !important;
}
.materialize-red-text.text-lighten-2 {
    color: rgb(238, 108, 113) !important;
}
.materialize-red.lighten-1 {
    background-color: rgb(157, 18, 23) !important;
}
.materialize-red-text.text-lighten-1 {
    color: rgb(235, 79, 85) !important;
}
.materialize-red.darken-1 {
    background-color: rgb(166, 19, 24) !important;
}
.materialize-red-text.text-darken-1 {
    color: rgb(233, 64, 69) !important;
}
.materialize-red.darken-2 {
    background-color: rgb(148, 17, 22) !important;
}
.materialize-red-text.text-darken-2 {
    color: rgb(235, 80, 85) !important;
}
.materialize-red.darken-3 {
    background-color: rgb(130, 15, 19) !important;
}
.materialize-red-text.text-darken-3 {
    color: rgb(236, 96, 101) !important;
}
.materialize-red.darken-4 {
    background-color: rgb(111, 13, 16) !important;
}
.materialize-red-text.text-darken-4 {
    color: rgb(239, 112, 116) !important;
}
.red {
    background-color: rgb(169, 20, 9) !important;
}
.red-text {
    color: rgb(245, 78, 66) !important;
}
.red.lighten-5 {
    background-color: rgb(63, 0, 9) !important;
}
.red-text.text-lighten-5 {
    color: rgb(255, 190, 200) !important;
}
.red.lighten-4 {
    background-color: rgb(81, 0, 8) !important;
}
.red-text.text-lighten-4 {
    color: rgb(255, 169, 178) !important;
}
.red.lighten-3 {
    background-color: rgb(105, 17, 17) !important;
}
.red-text.text-lighten-3 {
    color: rgb(237, 140, 140) !important;
}
.red.lighten-2 {
    background-color: rgb(127, 24, 24) !important;
}
.red-text.text-lighten-2 {
    color: rgb(229, 114, 114) !important;
}
.red.lighten-1 {
    background-color: rgb(152, 16, 14) !important;
}
.red-text.text-lighten-1 {
    color: rgb(240, 89, 86) !important;
}
.red.darken-1 {
    background-color: rgb(166, 25, 21) !important;
}
.red-text.text-darken-1 {
    color: rgb(231, 72, 68) !important;
}
.red.darken-2 {
    background-color: rgb(167, 35, 35) !important;
}
.red-text.text-darken-2 {
    color: rgb(215, 67, 67) !important;
}
.red.darken-3 {
    background-color: rgb(158, 32, 32) !important;
}
.red-text.text-darken-3 {
    color: rgb(218, 74, 74) !important;
}
.red.darken-4 {
    background-color: rgb(146, 22, 22) !important;
}
.red-text.text-darken-4 {
    color: rgb(229, 83, 83) !important;
}
.red.accent-1 {
    background-color: rgb(127, 10, 0) !important;
}
.red-text.text-accent-1 {
    color: rgb(255, 126, 115) !important;
}
.red.accent-2 {
    background-color: rgb(155, 0, 0) !important;
}
.red-text.text-accent-2 {
    color: rgb(255, 83, 83) !important;
}
.red.accent-3 {
    background-color: rgb(190, 0, 37) !important;
}
.red-text.text-accent-3 {
    color: rgb(255, 42, 83) !important;
}
.red.accent-4 {
    background-color: rgb(170, 0, 0) !important;
}
.red-text.text-accent-4 {
    color: rgb(255, 55, 55) !important;
}
.pink {
    background-color: rgb(181, 18, 73) !important;
}
.pink-text {
    color: rgb(235, 51, 114) !important;
}
.pink.lighten-5 {
    background-color: rgb(62, 7, 25) !important;
}
.pink-text.text-lighten-5 {
    color: rgb(248, 190, 209) !important;
}
.pink.lighten-4 {
    background-color: rgb(87, 9, 36) !important;
}
.pink-text.text-lighten-4 {
    color: rgb(245, 161, 190) !important;
}
.pink.lighten-3 {
    background-color: rgb(114, 11, 46) !important;
}
.pink-text.text-lighten-3 {
    color: rgb(243, 130, 168) !important;
}
.pink.lighten-2 {
    background-color: rgb(141, 13, 56) !important;
}
.pink-text.text-lighten-2 {
    color: rgb(240, 99, 146) !important;
}
.pink.lighten-1 {
    background-color: rgb(161, 16, 65) !important;
}
.pink-text.text-lighten-1 {
    color: rgb(237, 75, 130) !important;
}
.pink.darken-1 {
    background-color: rgb(173, 22, 77) !important;
}
.pink-text.text-darken-1 {
    color: rgb(230, 58, 121) !important;
}
.pink.darken-2 {
    background-color: rgb(155, 19, 73) !important;
}
.pink-text.text-darken-2 {
    color: rgb(233, 74, 136) !important;
}
.pink.darken-3 {
    background-color: rgb(138, 16, 70) !important;
}
.pink-text.text-darken-3 {
    color: rgb(236, 88, 153) !important;
}
.pink.darken-4 {
    background-color: rgb(109, 11, 63) !important;
}
.pink-text.text-darken-4 {
    color: rgb(240, 114, 181) !important;
}
.pink.accent-1 {
    background-color: rgb(127, 0, 43) !important;
}
.pink-text.text-accent-1 {
    color: rgb(255, 115, 162) !important;
}
.pink.accent-2 {
    background-color: rgb(166, 0, 56) !important;
}
.pink-text.text-accent-2 {
    color: rgb(255, 70, 133) !important;
}
.pink.accent-3 {
    background-color: rgb(196, 0, 70) !important;
}
.pink-text.text-accent-3 {
    color: rgb(255, 33, 112) !important;
}
.pink.accent-4 {
    background-color: rgb(158, 14, 78) !important;
}
.pink-text.text-accent-4 {
    color: rgb(239, 70, 146) !important;
}
.purple {
    background-color: rgb(125, 31, 141) !important;
}
.purple-text {
    color: rgb(200, 90, 218) !important;
}
.purple.lighten-5 {
    background-color: rgb(48, 20, 52) !important;
}
.purple-text.text-lighten-5 {
    color: rgb(230, 200, 234) !important;
}
.purple.lighten-4 {
    background-color: rgb(69, 28, 76) !important;
}
.purple-text.text-lighten-4 {
    color: rgb(217, 172, 224) !important;
}
.purple.lighten-3 {
    background-color: rgb(93, 37, 102) !important;
}
.purple-text.text-lighten-3 {
    color: rgb(204, 142, 214) !important;
}
.purple.lighten-2 {
    background-color: rgb(116, 47, 128) !important;
}
.purple-text.text-lighten-2 {
    color: rgb(190, 112, 203) !important;
}
.purple.lighten-1 {
    background-color: rgb(134, 54, 148) !important;
}
.purple-text.text-lighten-1 {
    color: rgb(179, 89, 194) !important;
}
.purple.darken-1 {
    background-color: rgb(114, 29, 136) !important;
}
.purple-text.text-darken-1 {
    color: rgb(194, 94, 221) !important;
}
.purple.darken-2 {
    background-color: rgb(98, 25, 130) !important;
}
.purple-text.text-darken-2 {
    color: rgb(188, 99, 225) !important;
}
.purple.darken-3 {
    background-color: rgb(85, 22, 123) !important;
}
.purple-text.text-darken-3 {
    color: rgb(181, 104, 228) !important;
}
.purple.darken-4 {
    background-color: rgb(59, 16, 112) !important;
}
.purple-text.text-darken-4 {
    color: rgb(167, 112, 235) !important;
}
.purple.accent-1 {
    background-color: rgb(108, 3, 126) !important;
}
.purple-text.text-accent-1 {
    color: rgb(232, 116, 252) !important;
}
.purple.accent-2 {
    background-color: rgb(141, 3, 165) !important;
}
.purple-text.text-accent-2 {
    color: rgb(225, 71, 251) !important;
}
.purple.accent-3 {
    background-color: rgb(170, 0, 199) !important;
}
.purple-text.text-accent-3 {
    color: rgb(222, 30, 255) !important;
}
.purple.accent-4 {
    background-color: rgb(136, 0, 204) !important;
}
.purple-text.text-accent-4 {
    color: rgb(179, 26, 255) !important;
}
.deep-purple {
    background-color: rgb(82, 46, 146) !important;
}
.deep-purple-text {
    color: rgb(129, 88, 202) !important;
}
.deep-purple.lighten-5 {
    background-color: rgb(33, 36, 37) !important;
}
.deep-purple-text.text-lighten-5 {
    color: rgb(215, 201, 235) !important;
}
.deep-purple.lighten-4 {
    background-color: rgb(47, 51, 53) !important;
}
.deep-purple-text.text-lighten-4 {
    color: rgb(194, 177, 226) !important;
}
.deep-purple.lighten-3 {
    background-color: rgb(57, 35, 96) !important;
}
.deep-purple-text.text-lighten-3 {
    color: rgb(173, 149, 216) !important;
}
.deep-purple.lighten-2 {
    background-color: rgb(71, 44, 120) !important;
}
.deep-purple-text.text-lighten-2 {
    color: rgb(152, 121, 206) !important;
}
.deep-purple.lighten-1 {
    background-color: rgb(82, 50, 138) !important;
}
.deep-purple-text.text-lighten-1 {
    color: rgb(136, 100, 199) !important;
}
.deep-purple.darken-1 {
    background-color: rgb(75, 42, 142) !important;
}
.deep-purple-text.text-darken-1 {
    color: rgb(130, 92, 206) !important;
}
.deep-purple.darken-2 {
    background-color: rgb(65, 36, 134) !important;
}
.deep-purple-text.text-darken-2 {
    color: rgb(131, 97, 213) !important;
}
.deep-purple.darken-3 {
    background-color: rgb(55, 31, 128) !important;
}
.deep-purple-text.text-darken-3 {
    color: rgb(131, 102, 218) !important;
}
.deep-purple.darken-4 {
    background-color: rgb(39, 22, 117) !important;
}
.deep-purple-text.text-darken-4 {
    color: rgb(132, 110, 228) !important;
}
.deep-purple.accent-1 {
    background-color: rgb(44, 0, 122) !important;
}
.deep-purple-text.text-accent-1 {
    color: rgb(169, 121, 255) !important;
}
.deep-purple.accent-2 {
    background-color: rgb(42, 0, 158) !important;
}
.deep-purple-text.text-accent-2 {
    color: rgb(126, 79, 255) !important;
}
.deep-purple.accent-3 {
    background-color: rgb(58, 0, 185) !important;
}
.deep-purple-text.text-accent-3 {
    color: rgb(112, 47, 255) !important;
}
.deep-purple.accent-4 {
    background-color: rgb(78, 0, 187) !important;
}
.deep-purple-text.text-accent-4 {
    color: rgb(130, 40, 255) !important;
}
.indigo {
    background-color: rgb(50, 65, 145) !important;
}
.indigo-text {
    color: rgb(109, 149, 204) !important;
}
.indigo.lighten-5 {
    background-color: rgb(33, 36, 37) !important;
}
.indigo-text.text-lighten-5 {
    color: rgb(202, 216, 234) !important;
}
.indigo.lighten-4 {
    background-color: rgb(47, 50, 52) !important;
}
.indigo-text.text-lighten-4 {
    color: rgb(177, 197, 226) !important;
}
.indigo.lighten-3 {
    background-color: rgb(36, 45, 94) !important;
}
.indigo-text.text-lighten-3 {
    color: rgb(151, 178, 215) !important;
}
.indigo.lighten-2 {
    background-color: rgb(45, 57, 117) !important;
}
.indigo-text.text-lighten-2 {
    color: rgb(124, 158, 204) !important;
}
.indigo.lighten-1 {
    background-color: rgb(52, 64, 135) !important;
}
.indigo-text.text-lighten-1 {
    color: rgb(104, 143, 197) !important;
}
.indigo.darken-1 {
    background-color: rgb(46, 58, 137) !important;
}
.indigo-text.text-darken-1 {
    color: rgb(114, 153, 208) !important;
}
.indigo.darken-2 {
    background-color: rgb(38, 50, 127) !important;
}
.indigo-text.text-darken-2 {
    color: rgb(120, 159, 214) !important;
}
.indigo.darken-3 {
    background-color: rgb(32, 42, 118) !important;
}
.indigo-text.text-darken-3 {
    color: rgb(127, 165, 220) !important;
}
.indigo.darken-4 {
    background-color: rgb(21, 28, 101) !important;
}
.indigo-text.text-darken-4 {
    color: rgb(137, 174, 231) !important;
}
.indigo.accent-1 {
    background-color: rgb(0, 19, 120) !important;
}
.indigo-text.text-accent-1 {
    color: rgb(124, 179, 255) !important;
}
.indigo.accent-2 {
    background-color: rgb(1, 24, 154) !important;
}
.indigo-text.text-accent-2 {
    color: rgb(84, 156, 254) !important;
}
.indigo.accent-3 {
    background-color: rgb(1, 26, 167) !important;
}
.indigo-text.text-accent-3 {
    color: rgb(68, 147, 254) !important;
}
.indigo.accent-4 {
    background-color: rgb(1, 27, 175) !important;
}
.indigo-text.text-accent-4 {
    color: rgb(59, 141, 254) !important;
}
.blue {
    background-color: rgb(10, 106, 182) !important;
}
.blue-text {
    color: rgb(51, 162, 244) !important;
}
.blue.lighten-5 {
    background-color: rgb(32, 35, 37) !important;
}
.blue-text.text-lighten-5 {
    color: rgb(188, 224, 250) !important;
}
.blue.lighten-4 {
    background-color: rgb(44, 48, 50) !important;
}
.blue-text.text-lighten-4 {
    color: rgb(159, 211, 249) !important;
}
.blue.lighten-3 {
    background-color: rgb(6, 66, 115) !important;
}
.blue-text.text-lighten-3 {
    color: rgb(129, 197, 248) !important;
}
.blue.lighten-2 {
    background-color: rgb(8, 82, 141) !important;
}
.blue-text.text-lighten-2 {
    color: rgb(98, 183, 246) !important;
}
.blue.lighten-1 {
    background-color: rgb(9, 93, 162) !important;
}
.blue-text.text-lighten-1 {
    color: rgb(74, 172, 245) !important;
}
.blue.darken-1 {
    background-color: rgb(21, 106, 181) !important;
}
.blue-text.text-darken-1 {
    color: rgb(52, 153, 232) !important;
}
.blue.darken-2 {
    background-color: rgb(20, 94, 168) !important;
}
.blue-text.text-darken-2 {
    color: rgb(83, 167, 235) !important;
}
.blue.darken-3 {
    background-color: rgb(17, 81, 154) !important;
}
.blue-text.text-darken-3 {
    color: rgb(94, 171, 237) !important;
}
.blue.darken-4 {
    background-color: rgb(10, 57, 129) !important;
}
.blue-text.text-darken-4 {
    color: rgb(111, 179, 243) !important;
}
.blue.accent-1 {
    background-color: rgb(0, 47, 126) !important;
}
.blue-text.text-accent-1 {
    color: rgb(116, 187, 255) !important;
}
.blue.accent-2 {
    background-color: rgb(0, 61, 163) !important;
}
.blue-text.text-accent-2 {
    color: rgb(73, 165, 255) !important;
}
.blue.accent-3 {
    background-color: rgb(0, 67, 179) !important;
}
.blue-text.text-accent-3 {
    color: rgb(54, 156, 255) !important;
}
.blue.accent-4 {
    background-color: rgb(0, 48, 179) !important;
}
.blue-text.text-accent-4 {
    color: rgb(54, 147, 255) !important;
}
.light-blue {
    background-color: rgb(2, 135, 195) !important;
}
.light-blue-text {
    color: rgb(34, 184, 252) !important;
}
.light-blue.lighten-5 {
    background-color: rgb(2, 47, 67) !important;
}
.light-blue-text.text-lighten-5 {
    color: rgb(185, 232, 253) !important;
}
.light-blue.lighten-4 {
    background-color: rgb(4, 66, 95) !important;
}
.light-blue-text.text-lighten-4 {
    color: rgb(153, 220, 251) !important;
}
.light-blue.lighten-3 {
    background-color: rgb(5, 87, 125) !important;
}
.light-blue-text.text-lighten-3 {
    color: rgb(118, 208, 250) !important;
}
.light-blue.lighten-2 {
    background-color: rgb(7, 109, 154) !important;
}
.light-blue-text.text-lighten-2 {
    color: rgb(83, 196, 247) !important;
}
.light-blue.lighten-1 {
    background-color: rgb(7, 124, 177) !important;
}
.light-blue-text.text-lighten-1 {
    color: rgb(56, 187, 247) !important;
}
.light-blue.darken-1 {
    background-color: rgb(2, 124, 183) !important;
}
.light-blue-text.text-darken-1 {
    color: rgb(44, 184, 252) !important;
}
.light-blue.darken-2 {
    background-color: rgb(2, 109, 167) !important;
}
.light-blue-text.text-darken-2 {
    color: rgb(58, 184, 253) !important;
}
.light-blue.darken-3 {
    background-color: rgb(2, 95, 151) !important;
}
.light-blue-text.text-darken-3 {
    color: rgb(72, 185, 253) !important;
}
.light-blue.darken-4 {
    background-color: rgb(1, 70, 124) !important;
}
.light-blue-text.text-darken-4 {
    color: rgb(111, 193, 254) !important;
}
.light-blue.accent-1 {
    background-color: rgb(0, 88, 127) !important;
}
.light-blue-text.text-accent-1 {
    color: rgb(115, 212, 255) !important;
}
.light-blue.accent-2 {
    background-color: rgb(0, 114, 166) !important;
}
.light-blue-text.text-accent-2 {
    color: rgb(70, 198, 255) !important;
}
.light-blue.accent-3 {
    background-color: rgb(0, 141, 204) !important;
}
.light-blue-text.text-accent-3 {
    color: rgb(26, 184, 255) !important;
}
.light-blue.accent-4 {
    background-color: rgb(0, 116, 187) !important;
}
.light-blue-text.text-accent-4 {
    color: rgb(40, 173, 255) !important;
}
.cyan {
    background-color: rgb(0, 150, 170) !important;
}
.cyan-text {
    color: rgb(56, 232, 255) !important;
}
.cyan.lighten-5 {
    background-color: rgb(10, 56, 63) !important;
}
.cyan-text.text-lighten-5 {
    color: rgb(189, 238, 244) !important;
}
.cyan.lighten-4 {
    background-color: rgb(15, 82, 90) !important;
}
.cyan-text.text-lighten-4 {
    color: rgb(157, 230, 239) !important;
}
.cyan.lighten-3 {
    background-color: rgb(20, 109, 120) !important;
}
.cyan-text.text-lighten-3 {
    color: rgb(122, 221, 233) !important;
}
.cyan.lighten-2 {
    background-color: rgb(25, 136, 150) !important;
}
.cyan-text.text-lighten-2 {
    color: rgb(87, 211, 227) !important;
}
.cyan.lighten-1 {
    background-color: rgb(30, 158, 174) !important;
}
.cyan-text.text-lighten-1 {
    color: rgb(60, 204, 222) !important;
}
.cyan.darken-1 {
    background-color: rgb(0, 138, 154) !important;
}
.cyan-text.text-darken-1 {
    color: rgb(69, 235, 255) !important;
}
.cyan.darken-2 {
    background-color: rgb(0, 121, 134) !important;
}
.cyan-text.text-darken-2 {
    color: rgb(87, 239, 255) !important;
}
.cyan.darken-3 {
    background-color: rgb(0, 105, 114) !important;
}
.cyan-text.text-darken-3 {
    color: rgb(104, 242, 255) !important;
}
.cyan.darken-4 {
    background-color: rgb(0, 77, 80) !important;
}
.cyan-text.text-darken-4 {
    color: rgb(200, 196, 189) !important;
}
.cyan.accent-1 {
    background-color: rgb(0, 125, 125) !important;
}
.cyan-text.text-accent-1 {
    color: rgb(118, 255, 255) !important;
}
.cyan.accent-2 {
    background-color: rgb(0, 190, 190) !important;
}
.cyan-text.text-accent-2 {
    color: rgb(42, 255, 255) !important;
}
.cyan.accent-3 {
    background-color: rgb(0, 183, 204) !important;
}
.cyan-text.text-accent-3 {
    color: rgb(26, 232, 255) !important;
}
.cyan.accent-4 {
    background-color: rgb(0, 147, 170) !important;
}
.cyan-text.text-accent-4 {
    color: rgb(56, 229, 255) !important;
}
.teal {
    background-color: rgb(0, 120, 109) !important;
}
.teal-text {
    color: rgb(99, 255, 240) !important;
}
.teal.lighten-5 {
    background-color: rgb(23, 55, 53) !important;
}
.teal-text.text-lighten-5 {
    color: rgb(197, 231, 229) !important;
}
.teal.lighten-4 {
    background-color: rgb(34, 82, 79) !important;
}
.teal-text.text-lighten-4 {
    color: rgb(165, 218, 213) !important;
}
.teal.lighten-3 {
    background-color: rgb(46, 112, 108) !important;
}
.teal-text.text-lighten-3 {
    color: rgb(130, 204, 197) !important;
}
.teal.lighten-2 {
    background-color: rgb(59, 143, 137) !important;
}
.teal-text.text-lighten-2 {
    color: rgb(94, 189, 180) !important;
}
.teal.lighten-1 {
    background-color: rgb(30, 133, 123) !important;
}
.teal-text.text-lighten-1 {
    color: rgb(97, 219, 208) !important;
}
.teal.darken-1 {
    background-color: rgb(0, 110, 98) !important;
}
.teal-text.text-darken-1 {
    color: rgb(108, 255, 240) !important;
}
.teal.darken-2 {
    background-color: rgb(0, 97, 86) !important;
}
.teal-text.text-darken-2 {
    color: rgb(119, 255, 239) !important;
}
.teal.darken-3 {
    background-color: rgb(0, 84, 74) !important;
}
.teal-text.text-darken-3 {
    color: rgb(131, 255, 240) !important;
}
.teal.darken-4 {
    background-color: rgb(0, 62, 51) !important;
}
.teal-text.text-darken-4 {
    color: rgb(208, 204, 197) !important;
}
.teal.accent-1 {
    background-color: rgb(0, 104, 86) !important;
}
.teal-text.text-accent-1 {
    color: rgb(142, 255, 229) !important;
}
.teal.accent-2 {
    background-color: rgb(0, 144, 118) !important;
}
.teal-text.text-accent-2 {
    color: rgb(96, 255, 217) !important;
}
.teal.accent-3 {
    background-color: rgb(18, 182, 151) !important;
}
.teal-text.text-accent-3 {
    color: rgb(50, 235, 189) !important;
}
.teal.accent-4 {
    background-color: rgb(0, 153, 132) !important;
}
.teal-text.text-accent-4 {
    color: rgb(70, 255, 230) !important;
}
.green {
    background-color: rgb(61, 140, 64) !important;
}
.green-text {
    color: rgb(97, 186, 101) !important;
}
.green.lighten-5 {
    background-color: rgb(21, 49, 30) !important;
}
.green-text.text-lighten-5 {
    color: rgb(203, 233, 206) !important;
}
.green.lighten-4 {
    background-color: rgb(31, 68, 41) !important;
}
.green-text.text-lighten-4 {
    color: rgb(181, 222, 183) !important;
}
.green.lighten-3 {
    background-color: rgb(41, 89, 54) !important;
}
.green-text.text-lighten-3 {
    color: rgb(157, 210, 159) !important;
}
.green.lighten-2 {
    background-color: rgb(49, 111, 67) !important;
}
.green-text.text-lighten-2 {
    color: rgb(131, 200, 134) !important;
}
.green.lighten-1 {
    background-color: rgb(56, 127, 77) !important;
}
.green-text.text-lighten-1 {
    color: rgb(113, 192, 116) !important;
}
.green.darken-1 {
    background-color: rgb(54, 128, 57) !important;
}
.green-text.text-darken-1 {
    color: rgb(107, 193, 111) !important;
}
.green.darken-2 {
    background-color: rgb(45, 114, 48) !important;
}
.green-text.text-darken-2 {
    color: rgb(119, 201, 123) !important;
}
.green.darken-3 {
    background-color: rgb(37, 100, 40) !important;
}
.green-text.text-darken-3 {
    color: rgb(130, 209, 134) !important;
}
.green.darken-4 {
    background-color: rgb(22, 75, 26) !important;
}
.green-text.text-darken-4 {
    color: rgb(150, 225, 155) !important;
}
.green.accent-1 {
    background-color: rgb(11, 87, 46) !important;
}
.green-text.text-accent-1 {
    color: rgb(161, 243, 184) !important;
}
.green.accent-2 {
    background-color: rgb(14, 136, 91) !important;
}
.green-text.text-accent-2 {
    color: rgb(104, 240, 173) !important;
}
.green.accent-3 {
    background-color: rgb(0, 184, 94) !important;
}
.green-text.text-accent-3 {
    color: rgb(43, 255, 152) !important;
}
.green.accent-4 {
    background-color: rgb(0, 160, 66) !important;
}
.green-text.text-accent-4 {
    color: rgb(64, 255, 143) !important;
}
.light-green {
    background-color: rgb(113, 147, 49) !important;
}
.light-green-text {
    color: rgb(149, 200, 90) !important;
}
.light-green.lighten-5 {
    background-color: rgb(40, 52, 17) !important;
}
.light-green-text.text-lighten-5 {
    color: rgb(221, 238, 201) !important;
}
.light-green.lighten-4 {
    background-color: rgb(55, 71, 23) !important;
}
.light-green-text.text-lighten-4 {
    color: rgb(206, 230, 178) !important;
}
.light-green.lighten-3 {
    background-color: rgb(71, 92, 31) !important;
}
.light-green-text.text-lighten-3 {
    color: rgb(190, 221, 154) !important;
}
.light-green.lighten-2 {
    background-color: rgb(87, 114, 38) !important;
}
.light-green-text.text-lighten-2 {
    color: rgb(174, 213, 129) !important;
}
.light-green.lighten-1 {
    background-color: rgb(100, 131, 43) !important;
}
.light-green-text.text-lighten-1 {
    color: rgb(161, 207, 109) !important;
}
.light-green.darken-1 {
    background-color: rgb(99, 143, 53) !important;
}
.light-green-text.text-darken-1 {
    color: rgb(145, 195, 92) !important;
}
.light-green.darken-2 {
    background-color: rgb(83, 127, 45) !important;
}
.light-green-text.text-darken-2 {
    color: rgb(151, 203, 106) !important;
}
.light-green.darken-3 {
    background-color: rgb(68, 111, 38) !important;
}
.light-green-text.text-darken-3 {
    color: rgb(157, 209, 120) !important;
}
.light-green.darken-4 {
    background-color: rgb(41, 84, 24) !important;
}
.light-green-text.text-darken-4 {
    color: rgb(164, 223, 142) !important;
}
.light-green.accent-1 {
    background-color: rgb(77, 118, 0) !important;
}
.light-green-text.text-accent-1 {
    color: rgb(196, 255, 126) !important;
}
.light-green.accent-2 {
    background-color: rgb(98, 151, 0) !important;
}
.light-green-text.text-accent-2 {
    color: rgb(177, 255, 88) !important;
}
.light-green.accent-3 {
    background-color: rgb(120, 202, 0) !important;
}
.light-green-text.text-accent-3 {
    color: rgb(131, 255, 28) !important;
}
.light-green.accent-4 {
    background-color: rgb(80, 177, 18) !important;
}
.light-green-text.text-accent-4 {
    color: rgb(124, 234, 54) !important;
}
.lime {
    background-color: rgb(115, 122, 21) !important;
}
.lime-text {
    color: rgb(209, 223, 73) !important;
}
.lime.lighten-5 {
    background-color: rgb(41, 44, 7) !important;
}
.lime-text.text-lighten-5 {
    color: rgb(240, 245, 194) !important;
}
.lime.lighten-4 {
    background-color: rgb(56, 59, 11) !important;
}
.lime-text.text-lighten-4 {
    color: rgb(234, 239, 170) !important;
}
.lime.lighten-3 {
    background-color: rgb(73, 77, 13) !important;
}
.lime-text.text-lighten-3 {
    color: rgb(227, 236, 142) !important;
}
.lime.lighten-2 {
    background-color: rgb(89, 95, 16) !important;
}
.lime-text.text-lighten-2 {
    color: rgb(219, 231, 115) !important;
}
.lime.lighten-1 {
    background-color: rgb(102, 108, 19) !important;
}
.lime-text.text-lighten-1 {
    color: rgb(214, 226, 94) !important;
}
.lime.darken-1 {
    background-color: rgb(154, 162, 41) !important;
}
.lime-text.text-darken-1 {
    color: rgb(200, 209, 73) !important;
}
.lime.darken-2 {
    background-color: rgb(140, 144, 34) !important;
}
.lime-text.text-darken-2 {
    color: rgb(210, 215, 88) !important;
}
.lime.darken-3 {
    background-color: rgb(126, 126, 29) !important;
}
.lime-text.text-darken-3 {
    color: rgb(220, 219, 103) !important;
}
.lime.darken-4 {
    background-color: rgb(104, 95, 18) !important;
}
.lime-text.text-darken-4 {
    color: rgb(231, 220, 121) !important;
}
.lime.accent-1 {
    background-color: rgb(89, 95, 0) !important;
}
.lime-text.text-accent-1 {
    color: rgb(243, 255, 116) !important;
}
.lime.accent-2 {
    background-color: rgb(115, 124, 0) !important;
}
.lime-text.text-accent-2 {
    color: rgb(239, 255, 71) !important;
}
.lime.accent-3 {
    background-color: rgb(127, 153, 0) !important;
}
.lime-text.text-accent-3 {
    color: rgb(204, 255, 26) !important;
}
.lime.accent-4 {
    background-color: rgb(139, 187, 0) !important;
}
.lime-text.text-accent-4 {
    color: rgb(200, 255, 40) !important;
}
.yellow {
    background-color: rgb(126, 114, 0) !important;
}
.yellow-text {
    color: rgb(255, 236, 67) !important;
}
.yellow.lighten-5 {
    background-color: rgb(49, 45, 0) !important;
}
.yellow-text.text-lighten-5 {
    color: rgb(255, 249, 187) !important;
}
.yellow.lighten-4 {
    background-color: rgb(65, 58, 0) !important;
}
.yellow-text.text-lighten-4 {
    color: rgb(255, 246, 163) !important;
}
.yellow.lighten-3 {
    background-color: rgb(82, 74, 0) !important;
}
.yellow-text.text-lighten-3 {
    color: rgb(255, 243, 135) !important;
}
.yellow.lighten-2 {
    background-color: rgb(100, 90, 0) !important;
}
.yellow-text.text-lighten-2 {
    color: rgb(255, 240, 108) !important;
}
.yellow.lighten-1 {
    background-color: rgb(113, 102, 0) !important;
}
.yellow-text.text-lighten-1 {
    color: rgb(255, 238, 87) !important;
}
.yellow.darken-1 {
    background-color: rgb(129, 105, 1) !important;
}
.yellow-text.text-darken-1 {
    color: rgb(253, 218, 63) !important;
}
.yellow.darken-2 {
    background-color: rgb(132, 95, 3) !important;
}
.yellow-text.text-darken-2 {
    color: rgb(251, 196, 58) !important;
}
.yellow.darken-3 {
    background-color: rgb(180, 113, 5) !important;
}
.yellow-text.text-darken-3 {
    color: rgb(249, 174, 53) !important;
}
.yellow.darken-4 {
    background-color: rgb(188, 92, 8) !important;
}
.yellow-text.text-darken-4 {
    color: rgb(246, 138, 44) !important;
}
.yellow.accent-1 {
    background-color: rgb(90, 90, 0) !important;
}
.yellow-text.text-accent-1 {
    color: rgb(255, 255, 124) !important;
}
.yellow.accent-2 {
    background-color: rgb(153, 153, 0) !important;
}
.yellow-text.text-accent-2 {
    color: rgb(255, 255, 26) !important;
}
.yellow.accent-3 {
    background-color: rgb(153, 140, 0) !important;
}
.yellow-text.text-accent-3 {
    color: rgb(255, 236, 26) !important;
}
.yellow.accent-4 {
    background-color: rgb(153, 128, 0) !important;
}
.yellow-text.text-accent-4 {
    color: rgb(255, 218, 26) !important;
}
.amber {
    background-color: rgb(150, 112, 0) !important;
}
.amber-text {
    color: rgb(255, 199, 30) !important;
}
.amber.lighten-5 {
    background-color: rgb(52, 40, 0) !important;
}
.amber-text.text-lighten-5 {
    color: rgb(255, 238, 183) !important;
}
.amber.lighten-4 {
    background-color: rgb(72, 54, 0) !important;
}
.amber-text.text-lighten-4 {
    color: rgb(255, 229, 151) !important;
}
.amber.lighten-3 {
    background-color: rgb(95, 71, 0) !important;
}
.amber-text.text-lighten-3 {
    color: rgb(255, 221, 116) !important;
}
.amber.lighten-2 {
    background-color: rgb(117, 89, 0) !important;
}
.amber-text.text-lighten-2 {
    color: rgb(255, 213, 81) !important;
}
.amber.lighten-1 {
    background-color: rgb(135, 102, 0) !important;
}
.amber-text.text-lighten-1 {
    color: rgb(255, 205, 53) !important;
}
.amber.darken-1 {
    background-color: rgb(153, 107, 0) !important;
}
.amber-text.text-darken-1 {
    color: rgb(255, 187, 26) !important;
}
.amber.darken-2 {
    background-color: rgb(204, 128, 0) !important;
}
.amber-text.text-darken-2 {
    color: rgb(255, 170, 26) !important;
}
.amber.darken-3 {
    background-color: rgb(204, 114, 0) !important;
}
.amber-text.text-darken-3 {
    color: rgb(255, 154, 26) !important;
}
.amber.darken-4 {
    background-color: rgb(204, 89, 0) !important;
}
.amber-text.text-darken-4 {
    color: rgb(255, 125, 26) !important;
}
.amber.accent-1 {
    background-color: rgb(96, 76, 0) !important;
}
.amber-text.text-accent-1 {
    color: rgb(255, 226, 114) !important;
}
.amber.accent-2 {
    background-color: rgb(124, 98, 0) !important;
}
.amber-text.text-accent-2 {
    color: rgb(255, 216, 70) !important;
}
.amber.accent-3 {
    background-color: rgb(153, 118, 0) !important;
}
.amber-text.text-accent-3 {
    color: rgb(255, 202, 26) !important;
}
.amber.accent-4 {
    background-color: rgb(153, 103, 0) !important;
}
.amber-text.text-accent-4 {
    color: rgb(255, 179, 26) !important;
}
.orange {
    background-color: rgb(204, 122, 0) !important;
}
.orange-text {
    color: rgb(255, 162, 26) !important;
}
.orange.lighten-5 {
    background-color: rgb(70, 43, 0) !important;
}
.orange-text.text-lighten-5 {
    color: rgb(255, 227, 182) !important;
}
.orange.lighten-4 {
    background-color: rgb(97, 58, 0) !important;
}
.orange-text.text-lighten-4 {
    color: rgb(255, 213, 150) !important;
}
.orange.lighten-3 {
    background-color: rgb(127, 76, 0) !important;
}
.orange-text.text-lighten-3 {
    color: rgb(255, 199, 115) !important;
}
.orange.lighten-2 {
    background-color: rgb(158, 94, 0) !important;
}
.orange-text.text-lighten-2 {
    color: rgb(255, 184, 79) !important;
}
.orange.lighten-1 {
    background-color: rgb(181, 108, 0) !important;
}
.orange-text.text-lighten-1 {
    color: rgb(255, 173, 52) !important;
}
.orange.darken-1 {
    background-color: rgb(201, 112, 0) !important;
}
.orange-text.text-darken-1 {
    color: rgb(255, 155, 28) !important;
}
.orange.darken-2 {
    background-color: rgb(196, 99, 0) !important;
}
.orange-text.text-darken-2 {
    color: rgb(255, 145, 33) !important;
}
.orange.darken-3 {
    background-color: rgb(191, 86, 0) !important;
}
.orange-text.text-darken-3 {
    color: rgb(255, 135, 37) !important;
}
.orange.darken-4 {
    background-color: rgb(184, 65, 0) !important;
}
.orange-text.text-darken-4 {
    color: rgb(255, 118, 43) !important;
}
.orange.accent-1 {
    background-color: rgb(127, 81, 0) !important;
}
.orange-text.text-accent-1 {
    color: rgb(255, 204, 115) !important;
}
.orange.accent-2 {
    background-color: rgb(166, 93, 0) !important;
}
.orange-text.text-accent-2 {
    color: rgb(255, 174, 70) !important;
}
.orange.accent-3 {
    background-color: rgb(204, 116, 0) !important;
}
.orange-text.text-accent-3 {
    color: rgb(255, 156, 26) !important;
}
.orange.accent-4 {
    background-color: rgb(204, 87, 0) !important;
}
.orange-text.text-accent-4 {
    color: rgb(255, 124, 26) !important;
}
.deep-orange {
    background-color: rgb(184, 44, 0) !important;
}
.deep-orange-text {
    color: rgb(255, 99, 49) !important;
}
.deep-orange.lighten-5 {
    background-color: rgb(58, 15, 10) !important;
}
.deep-orange-text.text-lighten-5 {
    color: rgb(245, 200, 194) !important;
}
.deep-orange.lighten-4 {
    background-color: rgb(91, 22, 0) !important;
}
.deep-orange-text.text-lighten-4 {
    color: rgb(255, 180, 157) !important;
}
.deep-orange.lighten-3 {
    background-color: rgb(117, 28, 0) !important;
}
.deep-orange-text.text-lighten-3 {
    color: rgb(255, 157, 127) !important;
}
.deep-orange.lighten-2 {
    background-color: rgb(143, 34, 0) !important;
}
.deep-orange-text.text-lighten-2 {
    color: rgb(255, 134, 96) !important;
}
.deep-orange.lighten-1 {
    background-color: rgb(164, 39, 0) !important;
}
.deep-orange-text.text-lighten-1 {
    color: rgb(255, 116, 72) !important;
}
.deep-orange.darken-1 {
    background-color: rgb(184, 51, 9) !important;
}
.deep-orange-text.text-darken-1 {
    color: rgb(245, 96, 49) !important;
}
.deep-orange.darken-2 {
    background-color: rgb(184, 59, 20) !important;
}
.deep-orange-text.text-darken-2 {
    color: rgb(233, 92, 48) !important;
}
.deep-orange.darken-3 {
    background-color: rgb(173, 54, 17) !important;
}
.deep-orange-text.text-darken-3 {
    color: rgb(236, 99, 57) !important;
}
.deep-orange.darken-4 {
    background-color: rgb(153, 43, 10) !important;
}
.deep-orange-text.text-darken-4 {
    color: rgb(244, 113, 73) !important;
}
.deep-orange.accent-1 {
    background-color: rgb(127, 30, 0) !important;
}
.deep-orange-text.text-accent-1 {
    color: rgb(255, 148, 115) !important;
}
.deep-orange.accent-2 {
    background-color: rgb(166, 40, 0) !important;
}
.deep-orange-text.text-accent-2 {
    color: rgb(255, 115, 70) !important;
}
.deep-orange.accent-3 {
    background-color: rgb(204, 49, 0) !important;
}
.deep-orange-text.text-accent-3 {
    color: rgb(255, 80, 26) !important;
}
.deep-orange.accent-4 {
    background-color: rgb(177, 35, 0) !important;
}
.deep-orange-text.text-accent-4 {
    color: rgb(255, 90, 49) !important;
}
.brown {
    background-color: rgb(97, 68, 58) !important;
}
.brown-text {
    color: rgb(186, 151, 138) !important;
}
.brown.lighten-5 {
    background-color: rgb(43, 35, 31) !important;
}
.brown-text.text-lighten-5 {
    color: rgb(220, 217, 212) !important;
}
.brown.lighten-4 {
    background-color: rgb(63, 50, 45) !important;
}
.brown-text.text-lighten-4 {
    color: rgb(202, 197, 190) !important;
}
.brown.lighten-3 {
    background-color: rgb(84, 67, 62) !important;
}
.brown-text.text-lighten-3 {
    color: rgb(182, 176, 166) !important;
}
.brown.lighten-2 {
    background-color: rgb(106, 85, 78) !important;
}
.brown-text.text-lighten-2 {
    color: rgb(162, 154, 142) !important;
}
.brown.lighten-1 {
    background-color: rgb(113, 88, 79) !important;
}
.brown-text.text-lighten-1 {
    color: rgb(156, 148, 135) !important;
}
.brown.darken-1 {
    background-color: rgb(87, 61, 52) !important;
}
.brown-text.text-darken-1 {
    color: rgb(190, 158, 147) !important;
}
.brown.darken-2 {
    background-color: rgb(74, 51, 44) !important;
}
.brown-text.text-darken-2 {
    color: rgb(198, 167, 158) !important;
}
.brown.darken-3 {
    background-color: rgb(62, 42, 37) !important;
}
.brown-text.text-darken-3 {
    color: rgb(204, 175, 168) !important;
}
.brown.darken-4 {
    background-color: rgb(50, 31, 28) !important;
}
.brown-text.text-darken-4 {
    color: rgb(201, 197, 190) !important;
}
.blue-grey {
    background-color: rgb(77, 100, 111) !important;
}
.blue-grey-text {
    color: rgb(158, 149, 137) !important;
}
.blue-grey.lighten-5 {
    background-color: rgb(33, 36, 37) !important;
}
.blue-grey-text.text-lighten-5 {
    color: rgb(222, 219, 214) !important;
}
.blue-grey.lighten-4 {
    background-color: rgb(43, 53, 58) !important;
}
.blue-grey-text.text-lighten-4 {
    color: rgb(206, 202, 195) !important;
}
.blue-grey.lighten-3 {
    background-color: rgb(56, 70, 77) !important;
}
.blue-grey-text.text-lighten-3 {
    color: rgb(189, 183, 174) !important;
}
.blue-grey.lighten-2 {
    background-color: rgb(70, 87, 96) !important;
}
.blue-grey-text.text-lighten-2 {
    color: rgb(171, 164, 153) !important;
}
.blue-grey.lighten-1 {
    background-color: rgb(81, 101, 110) !important;
}
.blue-grey-text.text-lighten-1 {
    color: rgb(158, 150, 137) !important;
}
.blue-grey.darken-1 {
    background-color: rgb(67, 88, 98) !important;
}
.blue-grey-text.text-darken-1 {
    color: rgb(167, 159, 148) !important;
}
.blue-grey.darken-2 {
    background-color: rgb(55, 72, 80) !important;
}
.blue-grey-text.text-darken-2 {
    color: rgb(179, 172, 162) !important;
}
.blue-grey.darken-3 {
    background-color: rgb(44, 57, 63) !important;
}
.blue-grey-text.text-darken-3 {
    color: rgb(190, 184, 176) !important;
}
.blue-grey.darken-4 {
    background-color: rgb(30, 40, 45) !important;
}
.blue-grey-text.text-darken-4 {
    color: rgb(202, 198, 191) !important;
}
.grey {
    background-color: rgb(79, 85, 89) !important;
}
.grey-text {
    color: rgb(171, 163, 152) !important;
}
.grey.lighten-5 {
    background-color: rgb(27, 29, 30) !important;
}
.grey-text.text-lighten-5 {
    color: rgb(229, 227, 223) !important;
}
.grey.lighten-4 {
    background-color: rgb(30, 32, 33) !important;
}
.grey-text.text-lighten-4 {
    color: rgb(226, 223, 219) !important;
}
.grey.lighten-3 {
    background-color: rgb(34, 36, 38) !important;
}
.grey-text.text-lighten-3 {
    color: rgb(221, 218, 214) !important;
}
.grey.lighten-2 {
    background-color: rgb(42, 45, 47) !important;
}
.grey-text.text-lighten-2 {
    color: rgb(212, 209, 203) !important;
}
.grey.lighten-1 {
    background-color: rgb(61, 66, 69) !important;
}
.grey-text.text-lighten-1 {
    color: rgb(190, 185, 176) !important;
}
.grey.darken-1 {
    background-color: rgb(88, 95, 99) !important;
}
.grey-text.text-darken-1 {
    color: rgb(158, 150, 137) !important;
}
.grey.darken-2 {
    background-color: rgb(73, 79, 82) !important;
}
.grey-text.text-darken-2 {
    color: rgb(171, 163, 152) !important;
}
.grey.darken-3 {
    background-color: rgb(50, 54, 56) !important;
}
.grey-text.text-darken-3 {
    color: rgb(190, 185, 176) !important;
}
.grey.darken-4 {
    background-color: rgb(25, 27, 28) !important;
}
.grey-text.text-darken-4 {
    color: rgb(211, 207, 202) !important;
}
.black {
    background-color: rgb(0, 0, 0) !important;
}
.black-text {
    color: rgb(232, 230, 227) !important;
}
.white {
    background-color: rgb(24, 26, 27) !important;
}
.white-text {
    color: rgb(232, 230, 227) !important;
}
.transparent {
    background-color: rgba(0, 0, 0, 0) !important;
}
.transparent-text {
    color: rgba(232, 230, 227, 0) !important;
}
a {
    background-color: transparent;
}
abbr[title] {
    border-bottom-color: initial;
    text-decoration-color: initial;
}
mark {
    background-color: rgb(153, 153, 0);
    color: rgb(232, 230, 227);
}
legend {
    color: inherit;
}
a {
    color: rgb(44, 184, 252);
    text-decoration-color: initial;
    -webkit-tap-highlight-color: transparent;
}
.z-depth-0 {
    box-shadow: none !important;
}
.z-depth-1,
nav,
.card-panel,
.card,
.toast,
.btn,
.btn-large,
.btn-small,
.btn-floating,
.dropdown-content,
.collapsible,
.sidenav {
    box-shadow: rgba(0, 0, 0, 0.14) 0px 2px 2px 0px,
    rgba(0, 0, 0, 0.12) 0px 3px 1px -2px,
    rgba(0, 0, 0, 0.2) 0px 1px 5px 0px;
}
.z-depth-1-half,
.btn:hover,
.btn-large:hover,
.btn-small:hover,
.btn-floating:hover {
    box-shadow: rgba(0, 0, 0, 0.14) 0px 3px 3px 0px,
    rgba(0, 0, 0, 0.12) 0px 1px 7px 0px,
    rgba(0, 0, 0, 0.2) 0px 3px 1px -1px;
}
.z-depth-2 {
    box-shadow: rgba(0, 0, 0, 0.14) 0px 4px 5px 0px,
    rgba(0, 0, 0, 0.12) 0px 1px 10px 0px,
    rgba(0, 0, 0, 0.3) 0px 2px 4px -1px;
}
.z-depth-3 {
    box-shadow: rgba(0, 0, 0, 0.14) 0px 8px 17px 2px,
    rgba(0, 0, 0, 0.12) 0px 3px 14px 2px,
    rgba(0, 0, 0, 0.2) 0px 5px 5px -3px;
}
.z-depth-4 {
    box-shadow: rgba(0, 0, 0, 0.14) 0px 16px 24px 2px,
    rgba(0, 0, 0, 0.12) 0px 6px 30px 5px,
    rgba(0, 0, 0, 0.2) 0px 8px 10px -7px;
}
.z-depth-5,
.modal {
    box-shadow: rgba(0, 0, 0, 0.14) 0px 24px 38px 3px,
    rgba(0, 0, 0, 0.12) 0px 9px 46px 8px,
    rgba(0, 0, 0, 0.2) 0px 11px 15px -7px;
}
.hoverable:hover {
    box-shadow: rgba(0, 0, 0, 0.2) 0px 8px 17px 0px,
    rgba(0, 0, 0, 0.19) 0px 6px 20px 0px;
}
.divider {
    background-color: rgb(42, 45, 47);
}
blockquote {
    border-left-color: rgb(135, 16, 20);
}
.pagination li a {
    color: rgb(189, 183, 175);
}
.pagination li.active a {
    color: rgb(232, 230, 227);
}
.pagination li.active {
    background-color: rgb(133, 16, 20);
}
.pagination li.disabled a {
    color: rgb(168, 160, 149);
}
.breadcrumb {
    color: rgba(232, 230, 227, 0.7);
}
.breadcrumb::before {
    color: rgba(232, 230, 227, 0.7);
}
.breadcrumb:last-child {
    color: rgb(232, 230, 227);
}
.page-footer {
    color: rgb(232, 230, 227);
    background-color: rgb(133, 16, 20);
}
.page-footer .footer-copyright {
    color: rgba(232, 230, 227, 0.8);
    background-color: rgba(38, 42, 43, 0.08);
}
table,
th,
td {
    border-color: initial;
}
table.striped tr {
    border-bottom-color: initial;
}
table.striped > tbody > tr:nth-child(2n+1) {
    background-color: rgba(31, 34, 35, 0.5);
}
table.highlight > tbody > tr:hover {
    background-color: rgba(31, 34, 35, 0.5);
}
tr {
    border-bottom-color: rgba(140, 130, 115, 0.12);
}
@media only screen and (max-width: 992px) {
    table.responsive-table tr {
        border-bottom-color: initial;
    }
    table.responsive-table thead {
        border-top-color: initial;
        border-bottom-color: initial;
        border-left-color: initial;
        border-right-color: rgba(140, 130, 115, 0.12);
    }
}
.collection {
    border-color: rgb(57, 61, 64);
}
.collection .collection-item {
    background-color: rgb(24, 26, 27);
    border-bottom-color: rgb(57, 61, 64);
}
.collection .collection-item.avatar i.circle {
    color: rgb(232, 230, 227);
    background-color: rgb(82, 88, 92);
}
.collection .collection-item:last-child {
    border-bottom-color: initial;
}
.collection .collection-item.active {
    background-color: rgb(30, 133, 123);
    color: rgb(199, 242, 239);
}
.collection .collection-item.active .secondary-content {
    color: rgb(232, 230, 227);
}
.collection a.collection-item {
    color: rgb(97, 219, 208);
}
.collection a.collection-item:not(.active):hover {
    background-color: rgb(43, 47, 49);
}
.collection.with-header .collection-header {
    background-color: rgb(24, 26, 27);
    border-bottom-color: rgb(57, 61, 64);
}
.secondary-content {
    color: rgb(97, 219, 208);
}
.collapsible .collection {
    border-color: initial;
}
.progress {
    background-color: rgb(21, 91, 86);
}
.progress .determinate {
    background-color: rgb(30, 133, 123);
}
.progress .indeterminate {
    background-color: rgb(30, 133, 123);
}
.progress .indeterminate::before {
    background-color: inherit;
}
.progress .indeterminate::after {
    background-color: inherit;
}
span.badge {
    color: rgb(158, 150, 137);
}
span.badge.new {
    color: rgb(232, 230, 227);
    background-color: rgb(30, 133, 123);
}
nav {
    color: rgb(232, 230, 227);
    background-color: rgb(133, 16, 20);
}
nav a {
    color: rgb(232, 230, 227);
}
nav .brand-logo {
    color: rgb(232, 230, 227);
}
nav ul li.active {
    background-color: rgba(0, 0, 0, 0.1);
}
nav ul a {
    color: rgb(232, 230, 227);
}
nav ul a:hover {
    background-color: rgba(0, 0, 0, 0.1); 
}
nav .input-field input {
    border-color: initial; 
}
nav .input-field input:focus, nav .input-field input[type="text"]:valid, nav .input-field input[type="password"]:valid, nav .input-field input[type="email"]:valid, nav .input-field input[type="url"]:valid, nav .input-field input[type="date"]:valid {
    border-color: initial;
    box-shadow: none;
}
nav .input-field label i {
    color: rgba(232, 230, 227, 0.7);
}
nav .input-field label.active i {
    color: rgb(232, 230, 227);
}
a {
    text-decoration-color: initial;
}
html {
    color: rgba(232, 230, 227, 0.87);
}
.card-panel {
    background-color: rgb(24, 26, 27);
}
.card {
    background-color: rgb(24, 26, 27);
}
.card .card-image .card-title {
    color: rgb(232, 230, 227);
}
.card .card-action {
    background-color: inherit;
    border-top-color: rgba(75, 81, 84, 0.2);
}
.card .card-action a:not(.btn):not(.btn-large):not(.btn-small):not(.btn-large):not(.btn-floating) {
    color: rgb(255, 174, 70);
}
.card .card-action a:not(.btn):not(.btn-large):not(.btn-small):not(.btn-large):not(.btn-floating):hover {
    color: rgb(255, 205, 142);
}
.card .card-reveal {
    background-color: rgb(24, 26, 27);
}
.toast {
    background-color: rgb(38, 41, 42);
    color: rgb(232, 230, 227);
}
.toast .toast-action {
    color: rgb(239, 255, 71);
}
.tabs {
    background-color: rgb(24, 26, 27);
}
.tabs.tabs-transparent {
    background-color: transparent;
}
.tabs.tabs-transparent .tab a,
.tabs.tabs-transparent .tab.disabled a,
.tabs.tabs-transparent .tab.disabled a:hover {
    color: rgba(232, 230, 227, 0.7);
}
.tabs.tabs-transparent .tab a:hover,
.tabs.tabs-transparent .tab a.active {
    color: rgb(232, 230, 227);
}
.tabs.tabs-transparent .indicator {
    background-color: rgb(24, 26, 27);
}
.tabs .tab a {
    color: rgba(238, 108, 113, 0.7);
}
.tabs .tab a:focus,
.tabs .tab a:focus.active {
    background-color: rgba(92, 11, 14, 0.2);
    outline-color: initial;
}
.tabs .tab a:hover,
.tabs .tab a.active {
    background-color: transparent;
    color: rgb(238, 108, 113);
}
.tabs .tab.disabled a,
.tabs .tab.disabled a:hover {
    color: rgba(238, 108, 113, 0.4);
}
.tabs .indicator {
    background-color: rgb(92, 11, 14);
}
.material-tooltip {
    color: rgb(232, 230, 227);
    background-color: rgb(38, 41, 42);
}
.backdrop {
    background-color: rgb(38, 41, 42);
}
.btn,
.btn-large,
.btn-small,
.btn-flat {
    border-color: initial;
    -webkit-tap-highlight-color: transparent;
}
.btn.disabled,
.disabled.btn-large,
.disabled.btn-small,
.btn-floating.disabled,
.btn-large.disabled,
.btn-small.disabled,
.btn-flat.disabled,
.btn:disabled,
.btn-large:disabled,
.btn-small:disabled,
.btn-floating:disabled,
.btn-large:disabled,
.btn-small:disabled,
.btn-flat:disabled,
.btn[disabled],
.btn-large[disabled],
.btn-small[disabled],
.btn-floating[disabled],
.btn-large[disabled],
.btn-small[disabled],
.btn-flat[disabled] {
    box-shadow: none;
    background-color: rgb(42, 46, 47) !important;
    color: rgb(171, 164, 153) !important;
}
.btn.disabled:hover,
.disabled.btn-large:hover,
.disabled.btn-small:hover,
.btn-floating.disabled:hover,
.btn-large.disabled:hover,
.btn-small.disabled:hover,
.btn-flat.disabled:hover,
.btn:disabled:hover,
.btn-large:disabled:hover,
.btn-small:disabled:hover,
.btn-floating:disabled:hover,
.btn-large:disabled:hover,
.btn-small:disabled:hover,
.btn-flat:disabled:hover,
.btn[disabled]:hover,
.btn-large[disabled]:hover,
.btn-small[disabled]:hover,
.btn-floating[disabled]:hover,
.btn-large[disabled]:hover,
.btn-small[disabled]:hover,
.btn-flat[disabled]:hover {
    background-color: rgb(42, 46, 47) !important;
    color: rgb(171, 164, 153) !important;
}
.btn,
.btn-large,
.btn-small,
.btn-floating,
.btn-large,
.btn-small,
.btn-flat {
    outline-color: initial;
}
.btn:focus,
.btn-large:focus,
.btn-small:focus,
.btn-floating:focus {
    background-color: rgb(23, 100, 93);
}
.btn,
.btn-large,
.btn-small {
    text-decoration-color: initial;
    color: rgb(232, 230, 227);
    background-color: rgb(30, 133, 123);
}
.btn:hover,
.btn-large:hover,
.btn-small:hover {
    background-color: rgb(34, 150, 138);
}
.btn-floating {
    color: rgb(232, 230, 227);
    background-color: rgb(30, 133, 123);
}
.btn-floating:hover {
    background-color: rgb(30, 133, 123);
}
.btn-floating i {
    color: rgb(232, 230, 227);
}
button.btn-floating {
    border-color: initial;
}
.fixed-action-btn.toolbar ul li a {
    background-color: transparent;
    box-shadow: none;
    color: rgb(232, 230, 227);
}
.fixed-action-btn .fab-backdrop {
    background-color: rgb(30, 133, 123);
}
.btn-flat {
    box-shadow: none;
    background-color: transparent;
    color: rgb(199, 194, 187);
}
.btn-flat:focus,
.btn-flat:hover {
    box-shadow: none;
}
.btn-flat:focus {
    background-color: rgba(0, 0, 0, 0.1);
}
.btn-flat.disabled,
.btn-flat.btn-flat[disabled] {
    background-color: transparent !important;
    color: rgb(184, 178, 168) !important;
}
.dropdown-content {
    background-color: rgb(24, 26, 27);
}
.dropdown-content:focus {
    outline-color: initial;
}
.dropdown-content li {
    color: rgba(232, 230, 227, 0.87);
}
.dropdown-content li:hover,
.dropdown-content li.active {
    background-color: rgb(34, 36, 38);
}
.dropdown-content li:focus {
    outline-color: initial;
}
.dropdown-content li > a,
.dropdown-content li > span {
    color: rgb(97, 219, 208);
}
body.keyboard-focused .dropdown-content li:focus {
    background-color: rgb(45, 49, 51);
}
.waves-effect {
    -webkit-tap-highlight-color: transparent;
}
.waves-effect .waves-ripple {
    background-image: initial;
    background-color: rgba(0, 0, 0, 0.2);
}
.waves-effect.waves-light .waves-ripple {
    background-color: rgba(24, 26, 27, 0.45);
}
.waves-effect.waves-red .waves-ripple {
    background-color: rgba(169, 20, 9, 0.7);
}
.waves-effect.waves-yellow .waves-ripple {
    background-color: rgba(126, 114, 0, 0.7);
}
.waves-effect.waves-orange .waves-ripple {
    background-color: rgba(204, 122, 0, 0.7);
}
.waves-effect.waves-purple .waves-ripple {
    background-color: rgba(125, 31, 141, 0.7);
}
.waves-effect.waves-green .waves-ripple {
    background-color: rgba(61, 140, 64, 0.7);
}
.waves-effect.waves-teal .waves-ripple {
    background-color: rgba(0, 120, 109, 0.7); 
}
.waves-effect input[type="button"], .waves-effect input[type="reset"], .waves-effect input[type="submit"] {
    border-color: initial;
    background-image: none;
    background-color: initial;
}
.modal {
    background-color: rgb(27, 29, 30);
}
.modal:focus {
    outline-color: initial;
}
.modal .modal-footer {
    background-color: rgb(27, 29, 30);
}
.modal-overlay {
    background-image: initial;
    background-color: rgb(0, 0, 0);
}
.modal.modal-fixed-footer .modal-footer {
    border-top-color: rgba(140, 130, 115, 0.1);
}
.collapsible {
    border-top-color: rgb(58, 62, 65);
    border-right-color: rgb(58, 62, 65);
    border-left-color: rgb(58, 62, 65);
}
.collapsible-header {
    -webkit-tap-highlight-color: transparent;
    background-color: rgb(24, 26, 27);
    border-bottom-color: rgb(58, 62, 65);
}
.collapsible-header:focus {
    outline-color: initial;
}
.keyboard-focused .collapsible-header:focus {
    background-color: rgb(34, 36, 38);
}
.collapsible-body {
    border-bottom-color: rgb(58, 62, 65);
}
.sidenav .collapsible,
.sidenav.fixed .collapsible {
    border-color: initial;
    box-shadow: none;
}
.sidenav .collapsible-header,
.sidenav.fixed .collapsible-header {
    background-color: transparent;
    border-color: initial;
}
.sidenav .collapsible-header:hover,
.sidenav.fixed .collapsible-header:hover {
    background-color: rgba(0, 0, 0, 0.05);
}
.sidenav .collapsible-body,
.sidenav.fixed .collapsible-body {
    border-color: initial;
    background-color: rgb(24, 26, 27);
}
.collapsible.popout {
    border-color: initial;
    box-shadow: none;
}
.collapsible.popout > li {
    box-shadow: rgba(0, 0, 0, 0.16) 0px 2px 5px 0px,
    rgba(0, 0, 0, 0.12) 0px 2px 10px 0px;
}
.collapsible.popout > li.active {
    box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
    rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
}
.chip {
    color: rgba(232, 230, 227, 0.6);
    background-color: rgb(39, 43, 44);
}
.chip:focus {
    outline-color: initial;
    background-color: rgb(30, 133, 123);
    color: rgb(232, 230, 227);
}
.chips {
    border-top-color: initial;
    border-right-color: initial;
    border-left-color: initial;
    border-bottom-color: rgb(75, 82, 85);
    box-shadow: none;
    outline-color: initial;
}
.chips.focus {
    border-bottom-color: rgb(36, 158, 146);
    box-shadow: rgb(30, 133, 123) 0px 1px 0px 0px;
}
.chips .input {
    background-image: none;
    background-color: initial;
    border-color: initial;
    color: rgba(232, 230, 227, 0.6);
    outline-color: initial;
}
.chips .input:focus {
    border-color: initial !important;
    box-shadow: none !important;
}
#materialbox-overlay {
    background-color: rgb(31, 33, 35);
}
.materialbox-caption {
    color: rgb(232, 230, 227);
}
select:focus {
    outline-color: rgb(22, 100, 92);
}
button:focus {
    outline-color: initial;
    background-color: rgb(34, 146, 135);
}
label {
    color: rgb(171, 163, 152);
}
::-webkit-input-placeholder {
    color: rgb(203, 198, 192);
}
::placeholder {
    color: rgb(203, 198, 192);
}
input:not([type]), input[type="text"]:not(.browser-default), input[type="password"]:not(.browser-default), input[type="email"]:not(.browser-default), input[type="url"]:not(.browser-default), input[type="time"]:not(.browser-default), input[type="date"]:not(.browser-default), input[type="datetime"]:not(.browser-default), input[type="datetime-local"]:not(.browser-default), input[type="tel"]:not(.browser-default), input[type="number"]:not(.browser-default), input[type="search"]:not(.browser-default),
textarea.materialize-textarea {
    background-color: transparent;
    border-top-color: initial;
    border-right-color: initial;
    border-left-color: initial;
    border-bottom-color: rgb(75, 82, 85);
    outline-color: initial;
    box-shadow: none;
}
input:not([type]):disabled,
input:not([type])[readonly="readonly"], input[type="text"]:not(.browser-default):disabled, input[type="text"]:not(.browser-default)[readonly="readonly"], input[type="password"]:not(.browser-default):disabled, input[type="password"]:not(.browser-default)[readonly="readonly"], input[type="email"]:not(.browser-default):disabled, input[type="email"]:not(.browser-default)[readonly="readonly"], input[type="url"]:not(.browser-default):disabled, input[type="url"]:not(.browser-default)[readonly="readonly"], input[type="time"]:not(.browser-default):disabled, input[type="time"]:not(.browser-default)[readonly="readonly"], input[type="date"]:not(.browser-default):disabled, input[type="date"]:not(.browser-default)[readonly="readonly"], input[type="datetime"]:not(.browser-default):disabled, input[type="datetime"]:not(.browser-default)[readonly="readonly"], input[type="datetime-local"]:not(.browser-default):disabled, input[type="datetime-local"]:not(.browser-default)[readonly="readonly"], input[type="tel"]:not(.browser-default):disabled, input[type="tel"]:not(.browser-default)[readonly="readonly"], input[type="number"]:not(.browser-default):disabled, input[type="number"]:not(.browser-default)[readonly="readonly"], input[type="search"]:not(.browser-default):disabled, input[type="search"]:not(.browser-default)[readonly="readonly"], textarea.materialize-textarea:disabled, textarea.materialize-textarea[readonly="readonly"] {
    color: rgba(232, 230, 227, 0.42);
    border-bottom-color: rgba(140, 130, 115, 0.42);
}
input:not([type]):disabled + label,
input:not([type])[readonly="readonly"] + label, input[type="text"]:not(.browser-default):disabled + label, input[type="text"]:not(.browser-default)[readonly="readonly"] + label, input[type="password"]:not(.browser-default):disabled + label, input[type="password"]:not(.browser-default)[readonly="readonly"] + label, input[type="email"]:not(.browser-default):disabled + label, input[type="email"]:not(.browser-default)[readonly="readonly"] + label, input[type="url"]:not(.browser-default):disabled + label, input[type="url"]:not(.browser-default)[readonly="readonly"] + label, input[type="time"]:not(.browser-default):disabled + label, input[type="time"]:not(.browser-default)[readonly="readonly"] + label, input[type="date"]:not(.browser-default):disabled + label, input[type="date"]:not(.browser-default)[readonly="readonly"] + label, input[type="datetime"]:not(.browser-default):disabled + label, input[type="datetime"]:not(.browser-default)[readonly="readonly"] + label, input[type="datetime-local"]:not(.browser-default):disabled + label, input[type="datetime-local"]:not(.browser-default)[readonly="readonly"] + label, input[type="tel"]:not(.browser-default):disabled + label, input[type="tel"]:not(.browser-default)[readonly="readonly"] + label, input[type="number"]:not(.browser-default):disabled + label, input[type="number"]:not(.browser-default)[readonly="readonly"] + label, input[type="search"]:not(.browser-default):disabled + label, input[type="search"]:not(.browser-default)[readonly="readonly"] + label, textarea.materialize-textarea:disabled + label, textarea.materialize-textarea[readonly="readonly"] + label {
    color: rgba(232, 230, 227, 0.42);
}
input:not([type]):focus:not([readonly]), input[type="text"]:not(.browser-default):focus:not([readonly]), input[type="password"]:not(.browser-default):focus:not([readonly]), input[type="email"]:not(.browser-default):focus:not([readonly]), input[type="url"]:not(.browser-default):focus:not([readonly]), input[type="time"]:not(.browser-default):focus:not([readonly]), input[type="date"]:not(.browser-default):focus:not([readonly]), input[type="datetime"]:not(.browser-default):focus:not([readonly]), input[type="datetime-local"]:not(.browser-default):focus:not([readonly]), input[type="tel"]:not(.browser-default):focus:not([readonly]), input[type="number"]:not(.browser-default):focus:not([readonly]), input[type="search"]:not(.browser-default):focus:not([readonly]),
textarea.materialize-textarea:focus:not([readonly]) {
    border-bottom-color: rgb(36, 158, 146);
    box-shadow: rgb(30, 133, 123) 0px 1px 0px 0px;
}
input:not([type]):focus:not([readonly]) + label, input[type="text"]:not(.browser-default):focus:not([readonly]) + label, input[type="password"]:not(.browser-default):focus:not([readonly]) + label, input[type="email"]:not(.browser-default):focus:not([readonly]) + label, input[type="url"]:not(.browser-default):focus:not([readonly]) + label, input[type="time"]:not(.browser-default):focus:not([readonly]) + label, input[type="date"]:not(.browser-default):focus:not([readonly]) + label, input[type="datetime"]:not(.browser-default):focus:not([readonly]) + label, input[type="datetime-local"]:not(.browser-default):focus:not([readonly]) + label, input[type="tel"]:not(.browser-default):focus:not([readonly]) + label, input[type="number"]:not(.browser-default):focus:not([readonly]) + label, input[type="search"]:not(.browser-default):focus:not([readonly]) + label,
textarea.materialize-textarea:focus:not([readonly]) + label {
    color: rgb(97, 219, 208);
}
input:not([type]):focus.valid ~ label, input[type="text"]:not(.browser-default):focus.valid ~ label, input[type="password"]:not(.browser-default):focus.valid ~ label, input[type="email"]:not(.browser-default):focus.valid ~ label, input[type="url"]:not(.browser-default):focus.valid ~ label, input[type="time"]:not(.browser-default):focus.valid ~ label, input[type="date"]:not(.browser-default):focus.valid ~ label, input[type="datetime"]:not(.browser-default):focus.valid ~ label, input[type="datetime-local"]:not(.browser-default):focus.valid ~ label, input[type="tel"]:not(.browser-default):focus.valid ~ label, input[type="number"]:not(.browser-default):focus.valid ~ label, input[type="search"]:not(.browser-default):focus.valid ~ label,
textarea.materialize-textarea:focus.valid ~ label {
    color: rgb(97, 186, 101);
}
input:not([type]):focus.invalid ~ label, input[type="text"]:not(.browser-default):focus.invalid ~ label, input[type="password"]:not(.browser-default):focus.invalid ~ label, input[type="email"]:not(.browser-default):focus.invalid ~ label, input[type="url"]:not(.browser-default):focus.invalid ~ label, input[type="time"]:not(.browser-default):focus.invalid ~ label, input[type="date"]:not(.browser-default):focus.invalid ~ label, input[type="datetime"]:not(.browser-default):focus.invalid ~ label, input[type="datetime-local"]:not(.browser-default):focus.invalid ~ label, input[type="tel"]:not(.browser-default):focus.invalid ~ label, input[type="number"]:not(.browser-default):focus.invalid ~ label, input[type="search"]:not(.browser-default):focus.invalid ~ label,
textarea.materialize-textarea:focus.invalid ~ label {
    color: rgb(245, 78, 66);
}
input.valid:not([type]),
input.valid:not([type]):focus, input.valid[type="text"]:not(.browser-default), input.valid[type="text"]:not(.browser-default):focus, input.valid[type="password"]:not(.browser-default), input.valid[type="password"]:not(.browser-default):focus, input.valid[type="email"]:not(.browser-default), input.valid[type="email"]:not(.browser-default):focus, input.valid[type="url"]:not(.browser-default), input.valid[type="url"]:not(.browser-default):focus, input.valid[type="time"]:not(.browser-default), input.valid[type="time"]:not(.browser-default):focus, input.valid[type="date"]:not(.browser-default), input.valid[type="date"]:not(.browser-default):focus, input.valid[type="datetime"]:not(.browser-default), input.valid[type="datetime"]:not(.browser-default):focus, input.valid[type="datetime-local"]:not(.browser-default), input.valid[type="datetime-local"]:not(.browser-default):focus, input.valid[type="tel"]:not(.browser-default), input.valid[type="tel"]:not(.browser-default):focus, input.valid[type="number"]:not(.browser-default), input.valid[type="number"]:not(.browser-default):focus, input.valid[type="search"]:not(.browser-default), input.valid[type="search"]:not(.browser-default):focus,
textarea.materialize-textarea.valid,
textarea.materialize-textarea.valid:focus,
.select-wrapper.valid > input.select-dropdown {
    border-bottom-color: rgb(54, 125, 57);
    box-shadow: rgb(61, 140, 64) 0px 1px 0px 0px;
}
input.invalid:not([type]),
input.invalid:not([type]):focus, input.invalid[type="text"]:not(.browser-default), input.invalid[type="text"]:not(.browser-default):focus, input.invalid[type="password"]:not(.browser-default), input.invalid[type="password"]:not(.browser-default):focus, input.invalid[type="email"]:not(.browser-default), input.invalid[type="email"]:not(.browser-default):focus, input.invalid[type="url"]:not(.browser-default), input.invalid[type="url"]:not(.browser-default):focus, input.invalid[type="time"]:not(.browser-default), input.invalid[type="time"]:not(.browser-default):focus, input.invalid[type="date"]:not(.browser-default), input.invalid[type="date"]:not(.browser-default):focus, input.invalid[type="datetime"]:not(.browser-default), input.invalid[type="datetime"]:not(.browser-default):focus, input.invalid[type="datetime-local"]:not(.browser-default), input.invalid[type="datetime-local"]:not(.browser-default):focus, input.invalid[type="tel"]:not(.browser-default), input.invalid[type="tel"]:not(.browser-default):focus, input.invalid[type="number"]:not(.browser-default), input.invalid[type="number"]:not(.browser-default):focus, input.invalid[type="search"]:not(.browser-default), input.invalid[type="search"]:not(.browser-default):focus,
textarea.materialize-textarea.invalid,
textarea.materialize-textarea.invalid:focus,
.select-wrapper.invalid > input.select-dropdown,
.select-wrapper.invalid > input.select-dropdown:focus {
    border-bottom-color: rgb(157, 19, 9);
    box-shadow: rgb(169, 20, 9) 0px 1px 0px 0px;
}
input:not([type]).valid ~ .helper-text[data-success],
input:not([type]):focus.valid ~ .helper-text[data-success],
input:not([type]).invalid ~ .helper-text[data-error],
input:not([type]):focus.invalid ~ .helper-text[data-error], input[type="text"]:not(.browser-default).valid ~ .helper-text[data-success], input[type="text"]:not(.browser-default):focus.valid ~ .helper-text[data-success], input[type="text"]:not(.browser-default).invalid ~ .helper-text[data-error], input[type="text"]:not(.browser-default):focus.invalid ~ .helper-text[data-error], input[type="password"]:not(.browser-default).valid ~ .helper-text[data-success], input[type="password"]:not(.browser-default):focus.valid ~ .helper-text[data-success], input[type="password"]:not(.browser-default).invalid ~ .helper-text[data-error], input[type="password"]:not(.browser-default):focus.invalid ~ .helper-text[data-error], input[type="email"]:not(.browser-default).valid ~ .helper-text[data-success], input[type="email"]:not(.browser-default):focus.valid ~ .helper-text[data-success], input[type="email"]:not(.browser-default).invalid ~ .helper-text[data-error], input[type="email"]:not(.browser-default):focus.invalid ~ .helper-text[data-error], input[type="url"]:not(.browser-default).valid ~ .helper-text[data-success], input[type="url"]:not(.browser-default):focus.valid ~ .helper-text[data-success], input[type="url"]:not(.browser-default).invalid ~ .helper-text[data-error], input[type="url"]:not(.browser-default):focus.invalid ~ .helper-text[data-error], input[type="time"]:not(.browser-default).valid ~ .helper-text[data-success], input[type="time"]:not(.browser-default):focus.valid ~ .helper-text[data-success], input[type="time"]:not(.browser-default).invalid ~ .helper-text[data-error], input[type="time"]:not(.browser-default):focus.invalid ~ .helper-text[data-error], input[type="date"]:not(.browser-default).valid ~ .helper-text[data-success], input[type="date"]:not(.browser-default):focus.valid ~ .helper-text[data-success], input[type="date"]:not(.browser-default).invalid ~ .helper-text[data-error], input[type="date"]:not(.browser-default):focus.invalid ~ .helper-text[data-error], input[type="datetime"]:not(.browser-default).valid ~ .helper-text[data-success], input[type="datetime"]:not(.browser-default):focus.valid ~ .helper-text[data-success], input[type="datetime"]:not(.browser-default).invalid ~ .helper-text[data-error], input[type="datetime"]:not(.browser-default):focus.invalid ~ .helper-text[data-error], input[type="datetime-local"]:not(.browser-default).valid ~ .helper-text[data-success], input[type="datetime-local"]:not(.browser-default):focus.valid ~ .helper-text[data-success], input[type="datetime-local"]:not(.browser-default).invalid ~ .helper-text[data-error], input[type="datetime-local"]:not(.browser-default):focus.invalid ~ .helper-text[data-error], input[type="tel"]:not(.browser-default).valid ~ .helper-text[data-success], input[type="tel"]:not(.browser-default):focus.valid ~ .helper-text[data-success], input[type="tel"]:not(.browser-default).invalid ~ .helper-text[data-error], input[type="tel"]:not(.browser-default):focus.invalid ~ .helper-text[data-error], input[type="number"]:not(.browser-default).valid ~ .helper-text[data-success], input[type="number"]:not(.browser-default):focus.valid ~ .helper-text[data-success], input[type="number"]:not(.browser-default).invalid ~ .helper-text[data-error], input[type="number"]:not(.browser-default):focus.invalid ~ .helper-text[data-error], input[type="search"]:not(.browser-default).valid ~ .helper-text[data-success], input[type="search"]:not(.browser-default):focus.valid ~ .helper-text[data-success], input[type="search"]:not(.browser-default).invalid ~ .helper-text[data-error], input[type="search"]:not(.browser-default):focus.invalid ~ .helper-text[data-error],
textarea.materialize-textarea.valid ~ .helper-text[data-success],
textarea.materialize-textarea:focus.valid ~ .helper-text[data-success],
textarea.materialize-textarea.invalid ~ .helper-text[data-error],
textarea.materialize-textarea:focus.invalid ~ .helper-text[data-error],
.select-wrapper.valid .helper-text[data-success],
.select-wrapper.invalid ~ .helper-text[data-error] {
    color: transparent;
}
input:not([type]).valid ~ .helper-text::after,
input:not([type]):focus.valid ~ .helper-text::after, input[type="text"]:not(.browser-default).valid ~ .helper-text::after, input[type="text"]:not(.browser-default):focus.valid ~ .helper-text::after, input[type="password"]:not(.browser-default).valid ~ .helper-text::after, input[type="password"]:not(.browser-default):focus.valid ~ .helper-text::after, input[type="email"]:not(.browser-default).valid ~ .helper-text::after, input[type="email"]:not(.browser-default):focus.valid ~ .helper-text::after, input[type="url"]:not(.browser-default).valid ~ .helper-text::after, input[type="url"]:not(.browser-default):focus.valid ~ .helper-text::after, input[type="time"]:not(.browser-default).valid ~ .helper-text::after, input[type="time"]:not(.browser-default):focus.valid ~ .helper-text::after, input[type="date"]:not(.browser-default).valid ~ .helper-text::after, input[type="date"]:not(.browser-default):focus.valid ~ .helper-text::after, input[type="datetime"]:not(.browser-default).valid ~ .helper-text::after, input[type="datetime"]:not(.browser-default):focus.valid ~ .helper-text::after, input[type="datetime-local"]:not(.browser-default).valid ~ .helper-text::after, input[type="datetime-local"]:not(.browser-default):focus.valid ~ .helper-text::after, input[type="tel"]:not(.browser-default).valid ~ .helper-text::after, input[type="tel"]:not(.browser-default):focus.valid ~ .helper-text::after, input[type="number"]:not(.browser-default).valid ~ .helper-text::after, input[type="number"]:not(.browser-default):focus.valid ~ .helper-text::after, input[type="search"]:not(.browser-default).valid ~ .helper-text::after, input[type="search"]:not(.browser-default):focus.valid ~ .helper-text::after,
textarea.materialize-textarea.valid ~ .helper-text::after,
textarea.materialize-textarea:focus.valid ~ .helper-text::after,
.select-wrapper.valid ~ .helper-text::after {
    color: rgb(97, 186, 101);
}
input:not([type]).invalid ~ .helper-text::after,
input:not([type]):focus.invalid ~ .helper-text::after, input[type="text"]:not(.browser-default).invalid ~ .helper-text::after, input[type="text"]:not(.browser-default):focus.invalid ~ .helper-text::after, input[type="password"]:not(.browser-default).invalid ~ .helper-text::after, input[type="password"]:not(.browser-default):focus.invalid ~ .helper-text::after, input[type="email"]:not(.browser-default).invalid ~ .helper-text::after, input[type="email"]:not(.browser-default):focus.invalid ~ .helper-text::after, input[type="url"]:not(.browser-default).invalid ~ .helper-text::after, input[type="url"]:not(.browser-default):focus.invalid ~ .helper-text::after, input[type="time"]:not(.browser-default).invalid ~ .helper-text::after, input[type="time"]:not(.browser-default):focus.invalid ~ .helper-text::after, input[type="date"]:not(.browser-default).invalid ~ .helper-text::after, input[type="date"]:not(.browser-default):focus.invalid ~ .helper-text::after, input[type="datetime"]:not(.browser-default).invalid ~ .helper-text::after, input[type="datetime"]:not(.browser-default):focus.invalid ~ .helper-text::after, input[type="datetime-local"]:not(.browser-default).invalid ~ .helper-text::after, input[type="datetime-local"]:not(.browser-default):focus.invalid ~ .helper-text::after, input[type="tel"]:not(.browser-default).invalid ~ .helper-text::after, input[type="tel"]:not(.browser-default):focus.invalid ~ .helper-text::after, input[type="number"]:not(.browser-default).invalid ~ .helper-text::after, input[type="number"]:not(.browser-default):focus.invalid ~ .helper-text::after, input[type="search"]:not(.browser-default).invalid ~ .helper-text::after, input[type="search"]:not(.browser-default):focus.invalid ~ .helper-text::after,
textarea.materialize-textarea.invalid ~ .helper-text::after,
textarea.materialize-textarea:focus.invalid ~ .helper-text::after,
.select-wrapper.invalid ~ .helper-text::after {
    color: rgb(245, 78, 66);
}
.input-field > label {
    color: rgb(171, 163, 152);
}
.input-field .helper-text {
    color: rgba(232, 230, 227, 0.54);
}
.input-field .prefix.active {
    color: rgb(97, 219, 208); 
}
.nav-wrapper .input-field input[type="search"] {
    border-color: initial; box-shadow: none; 
}
.input-field input[type="search"]:focus:not(.browser-default) {
    background-color: rgb(24, 26, 27);
    border-color: initial;
    box-shadow: none;
    color: rgb(189, 183, 175); 
}
.input-field input[type="search"]:focus:not(.browser-default) + label i, .input-field input[type="search"]:focus:not(.browser-default) ~ .mdi-navigation-close, .input-field input[type="search"]:focus:not(.browser-default) ~ .material-icons {
    color: rgb(189, 183, 175); 
}
.input-field input[type="search"] ~ .mdi-navigation-close, .input-field input[type="search"] ~ .material-icons {
    color: transparent;
}
textarea {
    background-color: transparent;
}
.autocomplete-content li .highlight {
    color: rgb(189, 183, 175); 
}
[type="radio"]:not(:checked) + span::before, [type="radio"]:not(:checked) + span::after {
    border-color: rgb(110, 102, 91); 
}
[type="radio"]:checked + span::before {
    border-color: transparent; 
}
[type="radio"]:checked + span::after, [type="radio"].with-gap:checked + span::before, [type="radio"].with-gap:checked + span::after {
    border-color: rgb(36, 158, 146); 
}
[type="radio"]:checked + span::after, [type="radio"].with-gap:checked + span::after {
    background-color: rgb(30, 133, 123); 
}
[type="radio"].tabbed:focus + span::before {
    box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 0px 10px; 
}
[type="radio"].with-gap:disabled:checked + span::before {
    border-color: rgba(140, 130, 115, 0.42); 
}
[type="radio"].with-gap:disabled:checked + span::after {
    border-color: initial;
    background-color: rgba(0, 0, 0, 0.42); 
}
[type="radio"]:disabled:not(:checked) + span::before, [type="radio"]:disabled:checked + span::before {
    background-color: transparent;
    border-color: rgba(140, 130, 115, 0.42); 
}
[type="radio"]:disabled + span {
    color: rgba(232, 230, 227, 0.42); 
}
[type="radio"]:disabled:not(:checked) + span::before {
    border-color: rgba(140, 130, 115, 0.42); 
}
[type="radio"]:disabled:checked + span::after {
    background-color: rgba(0, 0, 0, 0.42);
    border-color: rgb(78, 85, 88); 
}
[type="checkbox"] + span:not(.lever)::before, [type="checkbox"]:not(.filled-in) + span:not(.lever)::after {
    border-color: rgb(110, 102, 91); 
}
[type="checkbox"]:not(.filled-in) + span:not(.lever)::after {
    border-color: initial; 
}
[type="checkbox"]:not(:checked):disabled + span:not(.lever)::before {
    border-color: initial;
    background-color: rgba(0, 0, 0, 0.42); 
}
[type="checkbox"].tabbed:focus + span:not(.lever)::after {
    border-color: initial;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 0px 10px;
    background-color: rgba(0, 0, 0, 0.1); 
}
[type="checkbox"]:checked + span:not(.lever)::before {
    border-color: transparent rgb(36, 158, 146) rgb(36, 158, 146) transparent; 
}
[type="checkbox"]:checked:disabled + span::before {
    border-right-color: rgba(140, 130, 115, 0.42);
    border-bottom-color: rgba(140, 130, 115, 0.42); 
}
[type="checkbox"]:indeterminate + span:not(.lever)::before {
    border-top-color: initial;
    border-left-color: initial;
    border-right-color: rgb(36, 158, 146); border-bottom-color: initial; 
}
[type="checkbox"]:indeterminate:disabled + span:not(.lever)::before {
    border-right-color: rgba(140, 130, 115, 0.42); background-color: transparent; 
}
[type="checkbox"].filled-in:not(:checked) + span:not(.lever)::before {
    border-color: transparent; 
}
[type="checkbox"].filled-in:not(:checked) + span:not(.lever)::after {
    background-color: transparent;
    border-color: rgb(110, 102, 91); 
}
[type="checkbox"].filled-in:checked + span:not(.lever)::before {
    border-color: transparent rgb(48, 52, 54) rgb(48, 52, 54) transparent; 
}
[type="checkbox"].filled-in:checked + span:not(.lever)::after {
    border-color: rgb(36, 158, 146);
    background-color: rgb(30, 133, 123); 
}
[type="checkbox"].filled-in.tabbed:focus + span:not(.lever)::after {
    border-color: rgb(110, 102, 91);
    background-color: rgba(0, 0, 0, 0.1); 
}
[type="checkbox"].filled-in.tabbed:checked:focus + span:not(.lever)::after {
    background-color: rgb(30, 133, 123);
    border-color: rgb(36, 158, 146); 
}
[type="checkbox"].filled-in:disabled:not(:checked) + span:not(.lever)::before {
    background-color: transparent; border-color: transparent; 
}
[type="checkbox"].filled-in:disabled:not(:checked) + span:not(.lever)::after {
    border-color: transparent;
    background-color: rgb(84, 91, 95); 
}
[type="checkbox"].filled-in:disabled:checked + span:not(.lever)::before {
    background-color: transparent; 
}
[type="checkbox"].filled-in:disabled:checked + span:not(.lever)::after {
    background-color: rgb(84, 91, 95);
    border-color: rgb(78, 85, 88); 
}
.switch, .switch * {
    -webkit-tap-highlight-color: transparent; 
}
.switch label input[type="checkbox"]:checked + .lever {
    background-color: rgb(50, 109, 105); 
}
.switch label input[type="checkbox"]:checked + .lever::after {
    background-color: rgb(30, 133, 123);
}
.switch label .lever {
    background-color: rgba(0, 0, 0, 0.38);
}
.switch label .lever::before {
    background-color: rgba(30, 133, 123, 0.15);
}
.switch label .lever::after {
    background-color: rgb(32, 35, 36);
    box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 1px -2px,
    rgba(0, 0, 0, 0.14) 0px 2px 2px 0px,
    rgba(0, 0, 0, 0.12) 0px 1px 5px 0px; 
}
input[type="checkbox"]:checked:not(:disabled) ~ .lever:active::before, input[type="checkbox"]:checked:not(:disabled).tabbed:focus ~ .lever::before {
    background-color: rgba(30, 133, 123, 0.15); 
}
input[type="checkbox"]:not(:disabled) ~ .lever:active::before, input[type="checkbox"]:not(:disabled).tabbed:focus ~ .lever::before {
    background-color: rgba(0, 0, 0, 0.08); 
}
.switch input[type="checkbox"][disabled] + .lever {
    background-color: rgba(0, 0, 0, 0.12); 
}
.switch label input[type="checkbox"][disabled] + .lever::after, .switch label input[type="checkbox"][disabled]:checked + .lever::after {
    background-color: rgb(84, 91, 95);
}
select {
    background-color: rgba(24, 26, 27, 0.9);
    border-color: rgb(52, 56, 58);
}
.select-wrapper input.select-dropdown {
    background-color: transparent;
    border-top-color: initial;
    border-right-color: initial;
    border-left-color: initial;
    border-bottom-color: rgb(75, 82, 85);
    outline-color: initial;
}
.select-wrapper input.select-dropdown:focus {
    border-bottom-color: rgb(36, 158, 146);
}
.select-wrapper .caret {
    fill: rgba(232, 230, 227, 0.87);
}
select:disabled {
    color: rgba(232, 230, 227, 0.42);
}
.select-wrapper.disabled + label {
    color: rgba(232, 230, 227, 0.42);
}
.select-wrapper.disabled .caret {
    fill: rgba(232, 230, 227, 0.42);
}
.select-wrapper input.select-dropdown:disabled {
    color: rgba(232, 230, 227, 0.42);
}
.select-wrapper i {
    color: rgba(232, 230, 227, 0.3);
}
.select-dropdown li.disabled,
.select-dropdown li.disabled > span,
.select-dropdown li.optgroup {
    color: rgba(232, 230, 227, 0.3);
    background-color: transparent;
}
body.keyboard-focused .select-dropdown.dropdown-content li:focus {
    background-color: rgba(0, 0, 0, 0.08);
}
.select-dropdown.dropdown-content li:hover {
    background-color: rgba(0, 0, 0, 0.08);
}
.select-dropdown.dropdown-content li.selected {
    background-color: rgba(0, 0, 0, 0.03);
}
.select-dropdown li.optgroup {
    border-top-color: rgb(53, 57, 59);
}
.select-dropdown li.optgroup.selected > span {
    color: rgba(232, 230, 227, 0.7);
}
.select-dropdown li.optgroup > span {
    color: rgba(232, 230, 227, 0.4); 
}
input[type="range"] {
    background-color: transparent; border-color: initial; outline-color: initial; 
}
input[type="range"]:focus {
    outline-color: initial; 
}
input[type="range"] + .thumb {
    border-color: initial;
    background-color: rgb(30, 133, 123); 
}
input[type="range"] + .thumb .value {
    color: rgb(97, 219, 208); 
}
input[type="range"] + .thumb.active .value {
    color: rgb(232, 230, 227); 
}
input[type="range"]::-webkit-slider-runnable-track {
    background-image: initial;
    background-color: rgb(59, 64, 66); border-color: initial; 
}
input[type="range"]::-webkit-slider-thumb {
    border-color: initial;
    background-image: initial;
    background-color: rgb(30, 133, 123); 
}
.keyboard-focused input[type="range"]:focus:not(.active)::-webkit-slider-thumb {
    box-shadow: rgba(30, 133, 123, 0.26) 0px 0px 0px 10px; 
}
input[type="range"] {
    border-color: rgb(48, 52, 54);
}
.table-of-contents a {
    color: rgb(158, 150, 137);
}
.table-of-contents a:hover {
    color: rgb(177, 170, 160);
    border-left-color: rgb(135, 16, 20);
}
.table-of-contents a.active {
    border-left-color: rgb(135, 16, 20);
}
.sidenav {
    background-color: rgb(24, 26, 27);
}
.sidenav li.active {
    background-color: rgba(0, 0, 0, 0.05);
}
.sidenav li > a {
    color: rgba(232, 230, 227, 0.87);
}
.sidenav li > a:hover {
    background-color: rgba(0, 0, 0, 0.05);
}
.sidenav li > a.btn,
.sidenav li > a.btn-large,
.sidenav li > a.btn-small,
.sidenav li > a.btn-large,
.sidenav li > a.btn-floating {
    color: rgb(232, 230, 227);
}
.sidenav li > a.btn-flat {
    color: rgb(199, 194, 187);
}
.sidenav li > a.btn:hover,
.sidenav li > a.btn-large:hover,
.sidenav li > a.btn-small:hover,
.sidenav li > a.btn-large:hover {
    background-color: rgb(34, 150, 138);
}
.sidenav li > a.btn-floating:hover {
    background-color: rgb(30, 133, 123); 
}
.sidenav li > a > i, .sidenav li > a > [class^="mdi-"], .sidenav li > a li > a > [class*="mdi-"],
.sidenav li > a > i.material-icons {
    color: rgba(232, 230, 227, 0.54);
}
.sidenav .subheader {
    color: rgba(232, 230, 227, 0.54);
}
.sidenav .subheader:hover {
    background-color: transparent;
}
.sidenav .user-view > a:hover {
    background-color: transparent;
}
.sidenav .collapsible-body > ul:not(.collapsible) > li.active,
.sidenav.sidenav-fixed .collapsible-body > ul:not(.collapsible) > li.active {
    background-color: rgb(133, 16, 20);
}
.sidenav .collapsible-body > ul:not(.collapsible) > li.active a,
.sidenav.sidenav-fixed .collapsible-body > ul:not(.collapsible) > li.active a {
    color: rgb(232, 230, 227);
}
.sidenav-overlay {
    background-color: rgba(0, 0, 0, 0.5);
}
.spinner-layer {
    border-color: rgb(36, 158, 146);
}
.spinner-blue,
.spinner-blue-only {
    border-color: rgb(9, 63, 153);
}
.spinner-red,
.spinner-red-only {
    border-color: rgb(146, 36, 26);
}
.spinner-yellow,
.spinner-yellow-only {
    border-color: rgb(182, 134, 0);
}
.spinner-green,
.spinner-green-only {
    border-color: rgb(18, 186, 104);
}
.gap-patch {
    border-color: inherit;
}
.circle-clipper {
    border-color: inherit;
}
.circle-clipper .circle {
    border-top-color: inherit;
    border-right-color: inherit;
    border-left-color: inherit;
    border-bottom-color: transparent !important;
}
.circle-clipper.left .circle {
    border-right-color: transparent !important;
}
.circle-clipper.right .circle {
    border-left-color: transparent !important;
}
.slider .slides {
    background-color: rgb(79, 85, 89);
}
.slider .slides li .caption {
    color: rgb(232, 230, 227);
}
.slider .slides li .caption p {
    color: rgb(212, 209, 203);
}
.slider .indicators .indicator-item {
    background-color: rgb(42, 45, 47);
}
.slider .indicators .indicator-item.active {
    background-color: rgb(61, 140, 64);
}
.carousel .indicators .indicator-item {
    background-color: rgba(24, 26, 27, 0.5);
}
.carousel .indicators .indicator-item.active {
    background-color: rgb(24, 26, 27);
}
.tap-target {
    background-color: rgb(133, 16, 20);
    box-shadow: rgba(0, 0, 0, 0.14) 0px 20px 20px 0px,
    rgba(0, 0, 0, 0.12) 0px 10px 50px 0px,
    rgba(0, 0, 0, 0.2) 0px 30px 10px -20px;
}
.tap-target-wave::before,
.tap-target-wave::after {
    background-color: rgb(24, 26, 27);
}
.tap-target-origin:not(.btn):not(.btn-large):not(.btn-small),
.tap-target-origin:not(.btn):not(.btn-large):not(.btn-small):hover {
    background-image: none;
    background-color: initial;
}
.pulse::before {
    background-color: inherit;
}
.datepicker-controls .select-wrapper input {
    border-bottom-color: initial;
}
.datepicker-controls .select-wrapper input:focus {
    border-bottom-color: initial;
}
.month-prev,
.month-next {
    background-color: transparent;
    border-color: initial;
}
.datepicker-date-display {
    background-color: rgb(30, 133, 123);
    color: rgb(232, 230, 227);
}
.datepicker-date-display .year-text {
    color: rgba(232, 230, 227, 0.7);
}
.datepicker-table thead {
    border-bottom-color: initial;
}
.datepicker-table tr {
    border-color: initial;
}
.datepicker-table abbr {
    text-decoration-color: initial;
    color: rgb(168, 160, 149);
}
.datepicker-table td.is-today {
    color: rgb(97, 219, 208);
}
.datepicker-table td.is-selected {
    background-color: rgb(30, 133, 123);
    color: rgb(232, 230, 227);
}
.datepicker-table td.is-outside-current-month,
.datepicker-table td.is-disabled {
    color: rgba(232, 230, 227, 0.3);
}
.datepicker-day-button {
    background-color: transparent;
    border-color: initial;
    color: inherit;
}
.datepicker-day-button:focus {
    background-color: rgba(34, 129, 120, 0.25);
}
.datepicker-cancel,
.datepicker-clear,
.datepicker-today,
.datepicker-done {
    color: rgb(97, 219, 208);
}
.datepicker-clear {
    color: rgb(245, 78, 66);
}
.text-primary {
    color: rgb(232, 230, 227);
}
.timepicker-digital-display {
    background-color: rgb(30, 133, 123);
}
.timepicker-text-container {
    color: rgba(232, 230, 227, 0.6);
}
.timepicker-plate {
    background-color: rgb(34, 36, 38);
}
.timepicker-tick {
    color: rgba(232, 230, 227, 0.87);
}
.timepicker-tick.active,
.timepicker-tick:hover {
    background-color: rgba(30, 133, 123, 0.25);
}
.timepicker-canvas line {
    stroke: rgb(97, 219, 208);
}
.timepicker-canvas-bearing {
    stroke: none;
    fill: rgb(97, 219, 208);
}
.timepicker-canvas-bg {
    stroke: none;
    fill: rgb(97, 219, 208);
}
.timepicker-clear {
    color: rgb(245, 78, 66);
}
.timepicker-close {
    color: rgb(97, 219, 208);
}
:root {
    --animate-duration: 1s;
    --animate-delay: 1s;
    --animate-repeat: 1;
}
button {
    box-shadow: none;
}
button:focus,
button:active {
    box-shadow: none !important;
}
.hellow-page {
    color: rgb(232, 230, 227);
}
.hellow-page2 .card {
    background-image: initial;
    background-color: transparent;
    color: rgb(232, 230, 227);
}
.hellow-page2 .card .front,
.hellow-page2 .card .back {
    background-image: initial;
    background-color: rgb(24, 26, 27);
}
.hellow-page3 .words-count span {
    color: rgb(232, 230, 227) !important;
}
.header {
    background-color: rgb(0, 110, 98);
}
.header .logo p {
    color: rgb(232, 230, 227);
}
.header button,
.header button:hover {
    background-image: initial;
    background-color: transparent;
    outline-color: initial;
    box-shadow: none;
}
.header button:hover {
    color: rgb(201, 196, 189);
}
.name-group {
    color: rgb(152, 143, 129);
}
.categories .category {
    background-color: rgb(24, 26, 27);
}
.categories .category button,
.categories .category button:hover {
    color: rgb(232, 230, 227);
    background-image: initial;
    background-color: transparent;
    outline-color: initial;
    box-shadow: none;
}
.categories .category button:hover {
    color: rgb(183, 177, 168);
}
.categories .category table tr,
.categories .category table td {
    border-color: initial;
}
.categories .category .category-desc {
    color: rgb(158, 150, 137);
}
.home .categories .category #icon-add {
    color: rgb(255, 88, 84);
}
.home .categories .category #icon-update {
    color: rgb(253, 202, 35);
}
.home .categories .category #icon-categories {
    color: rgb(152, 143, 129);
}
.learn-block {
    background-color: rgb(24, 26, 27);
}
.learn-block .hear-btn {
    background-image: initial;
    background-color: transparent;
    box-shadow: none;
    border-color: rgb(0, 71, 179);
}
.learn-block .hear-btn span {
    color: rgb(51, 156, 255);
}
.learn-block .hear-btn:hover {
    border-color: rgb(0, 66, 163);
}
.learn-block .hear-btn:hover span {
    color: rgb(61, 161, 255);
}
.learn-block .repeat-sections .repeat-section .label {
    color: rgb(232, 230, 227);
}
.learn-block .repeat-sections .repeat-section .enter-done {
    background-image: initial;
    background-color: transparent;
    border-color: rgb(179, 143, 0);
    box-shadow: none;
}
.learn-block .repeat-sections .repeat-section .enter-done span {
    color: rgb(255, 209, 26);
}
.learn-block .repeat-btn {
    box-shadow: rgba(27, 48, 64, 0.2) 0px 0px 7px 0px;
    background-image: initial;
    background-color: transparent;
}
.learn-block .repeat-btn span {
    color: rgb(152, 143, 129);
}
.learn-block .repeat-buttons .repeat-btn:hover {
    box-shadow: rgb(153, 122, 0) 0px 0px 7px 0px !important;
}
.learn-block .repeat-buttons .repeat-btn:hover span {
    color: rgb(255, 209, 26);
}
.learn-block .repeat-total-btn {
    background-image: initial;
    background-color: rgb(31, 33, 35);
    box-shadow: none;
    color: rgb(152, 143, 129);
}
.learn-block .repeat-total-btn:hover {
    color: rgb(183, 177, 168);
}
.learn-block .repeat-total .right-btn {
    border-left-color: rgb(84, 91, 94);
}
.end-block img {
    border-color: rgb(84, 91, 94);
}
.end-block .repeat-info {
    color: rgb(152, 143, 129);
}
.categories-block .accordion-button:focus {
    background-image: initial;
    background-color: transparent;
    outline-color: initial;
    border-color: initial;
    box-shadow: none;
}
.categories-block .accordion-body p {
    color: rgb(255, 26, 26);
}
.categories-block .categories-select:hover {
    color: rgb(232, 230, 227);
}
.categories-block .categories-select:focus {
    box-shadow: none;
}
.categories-block .category-add {
    color: rgb(68, 236, 87);
}
.statistics button {
    border-color: initial;
}
.statistics .edit-icon {
    color: rgb(51, 125, 255);
}
.statistics .edit-icon:hover {
    color: rgb(79, 143, 255);
}
.statistics .period-buttons ul {
    background-color: rgb(34, 36, 38);
}
.popup-wrap {
    background-color: rgba(0, 0, 0, 0.5);
}
.popup-close {
    color: rgb(108, 255, 240);
}
.popup-count-words {
    background-color: rgb(24, 26, 27);
}
.glossary .categories .category {
    background-color: rgb(24, 26, 27);
}
.glossary .accordion-header button {
    background-color: rgb(24, 26, 27);
}
.settings button {
    border-color: initial;
}
.settings button span {
    color: rgb(51, 125, 255);
}

/* Override Style */
.vimvixen-hint {
    background-color: #7b5300 !important;
    border-color: #d8b013 !important;
    color: #f3e8c8 !important;
}
::placeholder {
    opacity: 0.5 !important;
}
#edge-translate-panel-body,
.MuiTypography-body1 {
    color: var(--darkreader-neutral-text) !important;
}
gr-main-header {
    background-color: #0f3a48 !important;
}
embed[type="application/pdf"][src="about:blank"] { filter: invert(100%) contrast(90%); }



.repeat-btn{
    background: #1d2021 !important;
}
`