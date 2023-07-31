<script>
export default {
    name: "EditButton",
    methods: {
        goToEdit() {
            console.log('GoToEdit Hit');
            this.$router.push(`/edit`)

        }
    },

}
</script>

<template>
    <div class="edit-button" @click="goToEdit">
        <button>
            edit
        </button>
    </div>
</template>

<style>
.edit-button {
    text-align: right;
}

.edit-button button {
    background-color: rgb(110, 109, 109);
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 12px;
    border-radius: 12px;
}
</style>