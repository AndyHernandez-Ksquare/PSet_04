// Matrix class representing a 2D array of numbers
var Matrix = /** @class */ (function () {
    function Matrix(rows, columns, elements) {
        this.rows = rows;
        this.columns = columns;
        this.elements = elements;
    }
    Object.defineProperty(Matrix.prototype, "Rows", {
        // Getter method for the number of rows
        get: function () {
            return this.rows;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Matrix.prototype, "Columns", {
        // Getter method for the number of columns
        get: function () {
            return this.columns;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Matrix.prototype, "Elements", {
        // Getter method for the elements of the matrix
        get: function () {
            return this.elements;
        },
        enumerable: false,
        configurable: true
    });
    // Setter method to set the elemetns of the matrix at the position (i,j)
    Matrix.prototype.setElements = function (i, j, value) {
        // Checks if the given row and column index (i, j) is a valid index for the matrix.
        if (i < 0 || i >= this.rows || j < 0 || j >= this.columns) {
            // Throws an error if the index is out of bounds.
            throw new Error("Invalid position (".concat(i, ", ").concat(j, ")"));
        }
        this.elements[i][j] = value;
    };
    // Method to add two matrices
    Matrix.prototype.add = function (otherMatrix) {
        // Check if matrices are not of the same size
        if (this.rows !== otherMatrix.rows ||
            this.columns !== otherMatrix.columns) {
            // If not log "NOOP" and return the "this" object
            console.log("NOOP");
            return this;
        }
        // Create a new 2D array to hold the result of the addition
        var resultElements = [];
        // Loop through each element of the matrix and add the corresponding element of the other matrix
        for (var i = 0; i < this.rows; i++) {
            resultElements.push([]);
            for (var j = 0; j < this.columns; j++) {
                resultElements[i][j] = this.elements[i][j] + otherMatrix.elements[i][j];
            }
        }
        // Create a new matrix with the result of the addition and return it
        return new Matrix(this.rows, this.columns, resultElements);
    };
    // Method to multiply two matrices
    Matrix.prototype.multiply = function (otherMatrix) {
        // Check if the number of columns in the first matrix matches the number of rows in the second matrix
        if (this.columns !== otherMatrix.rows) {
            // If not log "NOOP" and return the "this" object
            console.log("NOOP");
            return this;
        }
        // Create a new 2D array to hold the result of the multiplication
        var resultElements = [];
        // Loop through each element of the result matrix and calculate its value by multiplying...
        //  the corresponding elements from the two matrices
        for (var i = 0; i < this.rows; i++) {
            resultElements.push([]);
            for (var j = 0; j < otherMatrix.columns; j++) {
                var sum = 0;
                for (var k = 0; k < this.columns; k++) {
                    sum += this.elements[i][k] * otherMatrix.elements[k][j];
                }
                resultElements[i][j] = sum;
            }
        }
        // Create a new matrix with the result of the multiplication and return it
        return new Matrix(this.rows, otherMatrix.columns, resultElements);
    };
    return Matrix;
}());
