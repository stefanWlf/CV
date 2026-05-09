<template>
  <article class="card margin-y-lg">
    <div class="card__accent" aria-hidden="true"></div>

    <header class="card__header">
      <div class="card__avatar" aria-hidden="true">
        <span>{{ initials }}</span>
      </div>

      <div class="card__identity">
        <p class="card__eyebrow">{{ eyebrow }}</p>
        <h2 class="card__title">{{ title }}</h2>
        <p class="card__subtitle">{{ subtitle }}</p>
      </div>
    </header>

    <div class="card__body">
      <p class="card__description">{{ description }}</p>

      <div class="card__meta">
        <slot name="meta">
          <span class="chip">Frontend</span>
          <span class="chip">Vue</span>
          <span class="chip">TypeScript</span>
        </slot>
      </div>
    </div>

    <footer class="card__footer">
      <slot name="actions">
        <a class="card__button card__button--primary" href="#projects">Projects</a>
        <a class="card__button" href="#contact">Contact</a>
      </slot>
    </footer>
  </article>
</template>

<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    title?: string;
    subtitle?: string;
    description?: string;
    eyebrow?: string;
  }>(),
  {
    title: 'Stefan Wolf',
    subtitle: 'Frontend developer',
    description:
      'Test123',
    eyebrow: 'Profile',
  },
)

const initials = props.title
  .split(' ')
  .filter(Boolean)
  .map((part) => part[0])
  .slice(0, 2)
  .join('')
  .toUpperCase()
</script>

<style scoped>
.card {
  position: relative;
  overflow: hidden;
  padding: 1.5rem;
  border: 1px solid color-mix(in srgb, var(--color-border) 72%, transparent);
  border-radius: 28px;
  background:
    radial-gradient(circle at top right, color-mix(in srgb, var(--color-primary) 18%, transparent), transparent 45%),
    linear-gradient(180deg, color-mix(in srgb, var(--card-background) 94%, white), var(--card-background));
  box-shadow:
    0 22px 60px rgba(15, 23, 42, 0.12),
    inset 0 1px 0 rgba(255, 255, 255, 0.35);
  backdrop-filter: blur(18px);
}

.card__accent {
  position: absolute;
  inset: 0 auto auto 0;
  width: 100%;
  height: 6px;
  background: linear-gradient(90deg, var(--gradient-start), var(--gradient-middle), var(--gradient-end));
}

.card__header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.25rem;
}

.card__avatar {
  display: grid;
  place-items: center;
  width: 4rem;
  height: 4rem;
  border-radius: 1.25rem;
  color: var(--vt-c-white);
  background: linear-gradient(135deg, var(--gradient-start), var(--gradient-end));
  box-shadow: 0 18px 30px color-mix(in srgb, var(--color-primary) 28%, transparent);
  font-size: 1.1rem;
  font-weight: 700;
  letter-spacing: 0.08em;
}

.card__identity {
  min-width: 0;
}

.card__eyebrow {
  margin-bottom: 0.25rem;
  color: var(--color-primary);
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
}

.card__title {
  color: var(--color-heading);
  font-size: 1.55rem;
  line-height: 1.15;
  font-weight: 700;
}

.card__subtitle {
  margin-top: 0.3rem;
  color: var(--color-text);
}

.card__body {
  display: grid;
  gap: 1rem;
}

.card__description {
  max-width: 42ch;
  color: var(--color-text);
  font-size: 0.98rem;
}

.card__meta {
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
}

.chip {
  display: inline-flex;
  align-items: center;
  padding: 0.45rem 0.8rem;
  border: 1px solid color-mix(in srgb, var(--color-border) 80%, transparent);
  border-radius: 999px;
  background: color-mix(in srgb, var(--card-background) 72%, transparent);
  color: var(--color-heading);
  font-size: 0.82rem;
  font-weight: 600;
}

.card__footer {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-top: 1.5rem;
}

.card__button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 2.75rem;
  padding: 0.75rem 1.15rem;
  border: 1px solid color-mix(in srgb, var(--color-border) 70%, transparent);
  border-radius: 999px;
  color: var(--color-heading);
  text-decoration: none;
  background: color-mix(in srgb, var(--card-background) 75%, transparent);
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease,
    border-color 0.2s ease,
    background 0.2s ease;
}

.card__button:hover {
  transform: translateY(-1px);
  border-color: color-mix(in srgb, var(--color-primary) 40%, var(--color-border));
  box-shadow: 0 14px 30px rgba(15, 23, 42, 0.1);
}

.card__button--primary {
  border-color: transparent;
  color: var(--vt-c-white);
  background: linear-gradient(135deg, var(--gradient-start), var(--gradient-middle));
}

.card__button--primary:hover {
  background: linear-gradient(135deg, var(--gradient-middle), var(--gradient-end));
}

@media (max-width: 640px) {
  .card {
    padding: 1.25rem;
    border-radius: 24px;
  }

  .card__header {
    align-items: flex-start;
  }

  .card__avatar {
    width: 3.5rem;
    height: 3.5rem;
    border-radius: 1rem;
  }

  .card__title {
    font-size: 1.3rem;
  }
}
</style>
