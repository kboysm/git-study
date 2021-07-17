<template>
  <FullCalendar :options="calendarOptions" />
</template>
<script>
import '@fullcalendar/core/vdom' // solves problem with Vite
import FullCalendar from '@fullcalendar/vue'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'

export default {
  components: {
    FullCalendar // make the <FullCalendar> tag available
  },
  data() {
    return {
      calendarOptions: {
        plugins: [ dayGridPlugin, interactionPlugin ],
        initialView: 'dayGridMonth',
        dateClick: this.handleDateClick,
        events: [
          { title: 'event 1', start: '2021-07-12T10:30:00', end: '2021-07-12T11:30:00',allDay:true }, //allDay가 있으면 막대기바 , 없으면 점
          { title: 'event 1', date: '2021-07-01 12:00' },
          { title: 'event 1', date: '2021-07-01' },
          { title: 'event 1', date: '2021-07-01' },
          { title: 'event 1', date: '2021-07-01' },
          { title: 'event 2', date: '2021-07-02' }
        ],
				views: {
					dayGrid: {
						dayMaxEventRows: 3 // adjust to 6 only for timeGridWeek/timeGridDay
					}
				},
				buttonText: {
          today: "오늘",
        },
				locale: "ko",
				headerToolbar: {
          left: "title prev,today,next",
          center: "",
          right: "",
        },
				expandRows:true,
				height:'650px',
      }
    }
  },
  methods: {
    handleDateClick: function(arg) {
      alert('date click! ' + arg.dateStr)
    }
  }
}
</script>
<style lang="scss">
// /deep/ .fc .fc-toolbar.fc-header-toolbar {
// 	& > .fc-toolbar-chunk {
// 		& > .title {
// 			width: 300px;
// 		}
// 	}

// } 
</style>