<template>
    <v-app>
        <v-content>
            <v-container class="mt-4">
                <router-view :key="$route.path"></router-view>
            </v-container>
        </v-content>
    </v-app>
</template>

<script>
export default {
    name: 'App'
}
</script>
