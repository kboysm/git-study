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
          { title: '', start: '2021-07-12', end: '2021-07-13 01:00:00' }, //allDay가 있으면 막대기바 , 없으면 점
          { title: '', start: '2021-07-13', end: '2021-07-14',allDay:true }, //allDay가 있으면 막대기바 , 없으면 점
          { title: '', date: '2021-07-01 12:00' },
          { title: '', date: '2021-07-01' },
          { title: '', date: '2021-07-02' },
          { title: '', date: '2021-07-02' },
          { title: '', date: '2021-07-02' },
          { title: '', date: '2021-07-02' },
        ],
				views: {
					dayGrid: {
						dayMaxEventRows: 3, // adjust to 6 only for timeGridWeek/timeGridDay 이벤트 갯수 설정
            dayMaxEvents: true // 이벤트가 늘어나도 row의 height가 늘어나지 않도록 설정
					}
				},
				buttonText: {
          today: "오늘",
        },
        nextDayThreshold: '00:00:00', // 이벤트가 다음날로 넘어가는 최소 시간
				locale: "ko",
				headerToolbar: {
          left: "title,prev,today,next",
          center: "",
          right: "",
        },
				expandRows:true,
        moreLinkContent: (arg)=> `그 외${arg.num}개...`, // more 버튼 커스텀
        expandRows: false,
        contentHeight: 610,
        displayEventTime: false
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
// .fc-event {
//   padding: 0;
//   height: 15px;
// }
.fc-daygrid-event {
  height: 10px;
  font-size: 5px;
  margin-bottom: 5px;
}
.fc-toolbar-title {
  display: inline-block;
}
.fc .fc-daygrid-day-top {
  flex-direction: row;
}
</style>