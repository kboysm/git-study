<template>
	<div id="test-app">
		<calendar-view 
        @click-date="test"
        >
            <calendar-view-header 
            slot="header" 
            slot-scope="{ headerProps }" 
            :header-props="headerProps" 
            
            />
        </calendar-view>
	</div>
</template>
<script>
	import { CalendarView, CalendarViewHeader } from "vue-simple-calendar"
	// import "vue-simple-calendar/dist/style.css"
	// // The next two lines are optional themes
	import "vue-simple-calendar/static/css/default.css"
	import "vue-simple-calendar/static/css/holidays-us.css"

	export default {
		name: 'test-app',
		data: function() {
			return { showDate: new Date() }
		},
		components: {
			CalendarView,
			CalendarViewHeader,
		},
		methods: {
			setShowDate(d) {
				this.showDate = d;
			},
            test( item ) {
                console.log( item )
            }
		}
	}
</script>
<style>
	#test-app {
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		color: #2c3e50;
		height: 67vh;
		width: 90vw;
		margin-left: auto;
		margin-right: auto;
	}
</style>