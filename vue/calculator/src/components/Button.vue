<template>
    <button class="button"
        :class="{ double, triple, operation }"
        @click="$emit('onClick', label)"
        >
        {{ label }}
    </button>
</template>

<script>
export default {
    props: {
        label: {
            type: String
        },
        
        operation: {
            type: Boolean
        },
        
        double: {
            type: Boolean
        },

        triple: {
            type: Boolean
        }
    }
}
</script>

<style>
:root {
    --bg-btn: #f0f0f0;
    --border-btn: solid 1px #888;
}

.button {
    all: unset;
    color: #000;
    font-size: 1.4em;
    background-color: var(--bg-btn);
    border-right: var(--border-btn);
    border-bottom: var(--border-btn);
}

.button:active {
    background-color: #ccc;
}

.button.double {
    grid-column: span 2;
}

.button.triple {
    grid-column: span 3;
}

.button.operation {
    background-color: #fa8231;
    color: #fff;
}

.button.operation:active {
    background-color: #fa8231cc;
}
</style>