<template>
    <div class="layout-shell">
        <header class="site-header">
            <RouterLink class="brand" to="/home">
                <span class="brand-mark">CV</span>
                <span class="brand-text">Portfolio</span>
            </RouterLink>

            <nav class="site-nav" aria-label="Primary">
                <RouterLink to="/home">Home</RouterLink>
                <RouterLink to="/about">About</RouterLink>
                <RouterLink to="/cv">CV</RouterLink>
                <RouterLink to="/projects">Projects</RouterLink>
            </nav>
        </header>

        <main class="page-content">
            <RouterView />
        </main>

        <footer class="site-footer">
            <RouterLink class="footer-link" to="/impressum">Impressum</RouterLink>
            <p class="footer-copy">© 2026 Stefan Wolf</p>
        </footer>
    </div>
</template>

<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<style scoped>
.layout-shell {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    padding: 1.5rem;
    color: var(--color-heading);
}

.site-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1.5rem;
    padding: 1rem 1.25rem;
    border: 1px solid rgba(148, 163, 184, 0.2);
    border-radius: 1.35rem;
    background:
        linear-gradient(135deg, rgba(15, 23, 42, 0.92), rgba(30, 41, 59, 0.88));
    box-shadow:
        0 18px 40px rgba(15, 23, 42, 0.28),
        inset 0 1px 0 rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(18px);
}

.brand {
    display: inline-flex;
    align-items: center;
    gap: 0.75rem;
    text-decoration: none;
    color: inherit;
}

.brand-mark {
    display: inline-grid;
    place-items: center;
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 0.9rem;
    background: linear-gradient(135deg, var(--indigo-600), var(--pink-500));
    color: #ffffff;
    font-weight: 700;
    letter-spacing: 0.04em;
}

.brand-text {
    font-size: 1.1rem;
    font-weight: 700;
    color: var(--color-heading);
}

.site-nav {
    display: flex;
    flex-wrap: wrap;
    gap: 0.75rem;
}

.site-nav a {
    padding: 0.55rem 0.9rem;
    border-radius: 9999px;
    text-decoration: none;
    color: var(--color-text);
    background: rgba(148, 163, 184, 0.08);
    border: 1px solid rgba(148, 163, 184, 0.08);
    transition:
        background-color 0.2s ease,
        color 0.2s ease,
        border-color 0.2s ease,
        transform 0.2s ease;
}

.site-nav a:hover,
.site-nav a.router-link-active {
    background: linear-gradient(135deg, var(--indigo-600), var(--purple-600));
    color: #ffffff;
    border-color: transparent;
    transform: translateY(-1px);
}

.page-content {
    flex: 1;
    padding-top: 1.5rem;
}

.site-footer {
    margin-top: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    margin-top: 1.5rem;
    padding: 1rem 1.25rem;
    border: 1px solid rgba(148, 163, 184, 0.16);
    border-radius: 1.1rem;
    background: rgba(15, 23, 42, 0.72);
    color: var(--color-text);
}

.footer-link {
    color: var(--gradient-middle);
    text-decoration: none;
    font-weight: 600;
}

.footer-link:hover {
    color: var(--gradient-end);
}

.footer-copy {
    color: var(--color-text);
}

@media (max-width: 640px) {
    .site-header {
        flex-direction: column;
        align-items: flex-start;
    }

    .site-nav {
        width: 100%;
    }

    .site-footer {
        flex-direction: column;
        align-items: flex-start;
    }
}
</style>
