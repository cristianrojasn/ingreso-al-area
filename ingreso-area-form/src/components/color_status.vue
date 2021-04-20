<template>
    <a v-if="isToggable" :class="getClass" @click.prevent="toggle">
        {{ status }}
        <i v-if="loading" class="fa fa-spinner fa-spin icon-resize-small"></i>
    </a>
    <span v-else :class="getClass">{{ status }}</span>
</template>

<script>
    export default {
        data() {
            return {
                status: '',
                loading: false
            }
        },
        mounted() {
            this.status = this.value
        },
        computed: {
            getClass() {
                const classValue = 'label ';
                const statusClass = {
                    new: "bg-green",
                    done: "bg-gray",
                    visible: "bg-blue",
                    invisible: "bg-gray",
                    pending: "bg-yellow",
                    success: "bg-green",
                    active: "bg-green",
                    inactive: "bg-red"
                };
                return classValue + statusClass[this.status];
            },
            isToggable() {
                return typeof this.toggleUrl !== 'undefined'
            }
        },
        methods: {
            toggle() {
                this.loading = true;
                axios.get(this.toggleUrl).then(response => {
                    this.status = response.data;
                    this.loading = false;
                })
            }
        },
        props: ['value', 'toggleUrl']
    }
</script>