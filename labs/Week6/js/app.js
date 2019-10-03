var app = new Vue({
    el: "#app",
    data: {
        gameOver: false,
        grid: [
            [ 0,0,0,0,0,0,0 ],
            [ 0,0,0,0,0,0,0 ],
            [ 0,0,0,0,0,0,0 ],
            [ 0,0,0,0,0,0,0 ],
            [ 0,0,0,0,0,0,0 ],
            [ 0,0,0,0,0,0,0 ]
        ]
    },
    methods: {
        selectCell: function(row, col) {

            //copy grid to a temporary var
            var tempGrid = this.grid.slice(0);

            //modify the cloned version
            tempGrid[row][col] = "A";

            //replace
            this.grid = tempGrid;
        }
    }
})