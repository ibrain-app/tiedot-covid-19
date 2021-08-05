<template>
    <v-data-table
        :headers="headers"
        :items="countries"
        :search="search"
        mobile-breakpoint="0"
        @click:row="handleClick"
    >
        <template v-slot:item.country="{ item }">
            <v-avatar size="18" class="mr-1">
                <img :src="item.countryInfo.flag">
            </v-avatar>
            {{ item.country }}
        </template>
        <template v-slot:item.cases="{ item }">
            <span class="text-center">
                {{ item.cases | formatNumber }}
            </span>
        </template>
        <template v-slot:item.critical="{ item }">
            <span class="text-center">
                {{ item.critical | formatNumber }}
            </span>
        </template>
        <template v-slot:item.recovered="{ item }">
            <span class="text-center">
                {{ item.recovered | formatNumber }}
            </span>
        </template>
        <template v-slot:item.deaths="{ item }">
            <span class="text-center">
                {{ item.deaths | formatNumber }}
            </span>
        </template>
        <template v-slot:item.tests="{ item }">
            <span class="text-center">
                {{ item.tests | formatNumber }}
            </span>
        </template>
    </v-data-table>
</template>

<script>
export default {
    name: 'CountriesDataTable',

    props: ['countries', 'search'],

    data: function () {
        return {
            headers: [
                { text: 'Country', value: 'country', sortable: false, align: 'center' },
                { text: 'Cases', value: 'cases', align: 'center' },
                { text: 'Critical', value: 'critical', align: 'center' },
                { text: 'Recovered', value: 'recovered', align: 'center' },
                { text: 'Gone', value: 'deaths', align: 'center' },
                { text: 'Tests', value: 'tests', align: 'center' },
            ]
        }
    },

    methods: {
        handleClick: function (value) {
            this.$emit('click-row', value.countryInfo.iso2);
        }
    }
}
</script>
