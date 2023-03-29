// Matrix class representing a 2D array of numbers
class Matrix {
  private rows: number;
  private columns: number;
  private elements: number[][];

  constructor(rows: number, columns: number, elements: number[][]) {
    this.rows = rows;
    this.columns = columns;
    this.elements = elements;
  }

  // Getter method for the number of rows
  get Rows(): number {
    return this.rows;
  }

  // Getter method for the number of columns
  get Columns(): number {
    return this.columns;
  }

  // Getter method for the elements of the matrix
  get Elements(): number[][] {
    return this.elements;
  }

  // Setter method to set the elemetns of the matrix at the position (i,j)
  setElements(i: number, j: number, value: number): void {
    // Checks if the given row and column index (i, j) is a valid index for the matrix.
    if (i < 0 || i >= this.rows || j < 0 || j >= this.columns) {
      // Throws an error if the index is out of bounds.
      throw new Error(`Invalid position (${i}, ${j})`);
    }
    this.elements[i][j] = value;
  }

  // Method to add two matrices
  add(otherMatrix: Matrix): Matrix {
    // Check if matrices are not of the same size
    if (
      this.rows !== otherMatrix.rows ||
      this.columns !== otherMatrix.columns
    ) {
      // If not log "NOOP" and return the "this" object
      console.log("NOOP");
      return this;
    }

    // Create a new 2D array to hold the result of the addition
    const resultElements: number[][] = [];

    // Loop through each element of the matrix and add the corresponding element of the other matrix
    for (let i = 0; i < this.rows; i++) {
      resultElements.push([]);
      for (let j = 0; j < this.columns; j++) {
        resultElements[i][j] = this.elements[i][j] + otherMatrix.elements[i][j];
      }
    }
    // Create a new matrix with the result of the addition and return it
    return new Matrix(this.rows, this.columns, resultElements);
  }

  // Method to multiply two matrices
  multiply(otherMatrix: Matrix): Matrix {
    // Check if the number of columns in the first matrix matches the number of rows in the second matrix
    if (this.columns !== otherMatrix.rows) {
      // If not log "NOOP" and return the "this" object
      console.log("NOOP");
      return this;
    }

    // Create a new 2D array to hold the result of the multiplication
    const resultElements: number[][] = [];

    // Loop through each element of the result matrix and calculate its value by multiplying...
    //  the corresponding elements from the two matrices
    for (let i = 0; i < this.rows; i++) {
      resultElements.push([]);
      for (let j = 0; j < otherMatrix.columns; j++) {
        let sum: number = 0;

        for (let k = 0; k < this.columns; k++) {
          sum += this.elements[i][k] * otherMatrix.elements[k][j];
        }
        resultElements[i][j] = sum;
      }
    }

    // Create a new matrix with the result of the multiplication and return it
    return new Matrix(this.rows, otherMatrix.columns, resultElements);
  }
}
