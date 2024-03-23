<template>
    <aside :class="`${!props.is_expanded ? 'is-expanded' : ''}`">
        <div class="logo">
            <img :src="logoURL" alt="Vue" />
        </div>

        <p class="bold uppercase">Menu</p>
        <div class="menu">
            <router-link to="/" class="button">
                <span class="material-icons">home</span>
                <span class="text">Home</span>
            </router-link>
            <router-link to="/about" class="button">
                <span class="material-icons">description</span>
                <span class="text">About</span>
            </router-link>
            <router-link to="/team" class="button">
                <span class="material-icons">group</span>
                <span class="text">Team</span>
            </router-link>
            <router-link to="/contact" class="button">
                <span class="material-icons">email</span>
                <span class="text">Contact</span>
            </router-link>
        </div>

        <div class="flex"></div>

        <div class="menu">
            <router-link to="/settings" class="button">
                <span class="material-icons">settings</span>
                <span class="text">Settings</span>
            </router-link>
        </div>
    </aside>
</template>

<script setup>
import { defineProps } from 'vue'


const props = defineProps({
    is_expanded: Boolean,
})
</script>

<style lang="scss" scoped>
aside {
    display: flex;
    flex-direction: column;

    background-color: var(--primary-color);
    color: var(--white);

    width: calc(2rem + 32px);
    overflow: hidden;
    min-height: 100vh;
    padding: 1rem;

    transition: 0.2s ease-in-out;

    .flex {
        flex: 1 1 0%;
    }

    .logo {
        margin-bottom: 1rem;

        img {
            width: 2rem;
        }
    }

    p,
    .button .text {
        opacity: 0;
        transition: opacity 0.3s ease-in-out;
    }

    .menu {
        margin: 0 -1rem;

        .button {
            display: flex;
            align-items: center;
            text-decoration: none;

            transition: 0.2s ease-in-out;
            padding: 0.5rem 1rem;

            .material-icons {
                font-size: 2rem;
                color: var(--white);
                transition: 0.2s ease-in-out;
            }

            .text {
                color: var(--white);
                transition: 0.2s ease-in-out;
            }

            &:hover {
                background-color: var(--primary-color-light);
            }

            &.router-link-exact-active {
                background-color: var(--primary-color-light);
                border-right: 5px solid red;

                .material-icons,
                .text {
                    color: var(--white);
                }
            }
        }
    }

    .footer {
        opacity: 0;
        transition: opacity 0.3s ease-in-out;

        p {
            font-size: 0.875rem;
        }
    }

    &.is-expanded {
        width: var(--sidebar-width);

        .menu-toggle-wrap {
            top: -3rem;

            .menu-toggle {
                transform: rotate(-180deg);
            }
        }

        h3,
        .button .text {
            opacity: 1;
        }

        .button {
            .material-icons {
                margin-right: 1rem;
            }
        }

        .footer {
            opacity: 0;
        }
    }

    @media (max-width: 1024px) {
        position: absolute;
        z-index: 99;
    }
}
</style>