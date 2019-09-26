Vue.component("student-card", {
    props: [ "student" ],
    template: "<div class='student'>{{ student.name }} : {{ student.skill }}</div>"
})

var app = new Vue({
    el: "#app",
    data: {
        students: [
            { name: "Sienna", skill: 2, joy: 0 },
            { name: "Cyan", skill: 0, joy: 5 },
            { name: "Magenta", skill: 3, joy: 3 }
        ],
        currentStudent: { name: "Sienna", skill: 2, joy: 0 },
        curStudentId: 0
    },
    methods: {
        arrowClicked: function() {
            this.curStudentId ++;
            this.currentStudent = this.students[this.curStudentId];

            if(this.curStudentId >= this.students.length-1) {
                this.curStudentId = -1;
            }
        }
    }
})