// Matrix class representing a 2D array of numbers
class Matrix {
  private _rows: number;
  private _columns: number;
  private _elements: number[][];

  constructor(rows: number, columns: number, elements: number[][]) {
    this._rows = rows;
    this._columns = columns;
    this._elements = elements;
  }

  // Getter method for the number of rows
  get Rows(): number {
    return this._rows;
  }

  // Getter method for the number of columns
  get Columns(): number {
    return this._columns;
  }

  // Getter method for the elements of the matrix
  get Elements(): number[][] {
    return this._elements;
  }

  // Setter method to set the elemetns of the matrix at the position (i,j)
  setElements(i: number, j: number, value: number): void {
    // Checks if the given row and column index (i, j) is a valid index for the matrix.
    if (i < 0 || i >= this._rows || j < 0 || j >= this._columns) {
      // Throws an error if the index is out of bounds.
      throw new Error(`Invalid position (${i}, ${j})`);
    }
    this._elements[i][j] = value;
  }

  // Method to add two matrices
  add(otherMatrix: Matrix): Matrix {
    // Check if matrices are not of the same size
    if (
      this._rows !== otherMatrix._rows ||
      this._columns !== otherMatrix._columns
    ) {
      // If not log "NOOP" and return the "this" object
      console.log("NOOP");
      return this;
    }

    // Create a new 2D array to hold the result of the addition
    const resultElements: number[][] = [];

    // Loop through each element of the matrix and add the corresponding element of the other matrix
    for (let i = 0; i < this._rows; i++) {
      resultElements.push([]);
      for (let j = 0; j < this._columns; j++) {
        resultElements[i][j] =
          this._elements[i][j] + otherMatrix._elements[i][j];
      }
    }
    // Create a new matrix with the result of the addition and return it
    return new Matrix(this._rows, this._columns, resultElements);
  }

  // Method to multiply two matrices
  multiply(otherMatrix: Matrix): any {
    // Check if the number of columns in the first matrix matches the number of rows in the second matrix
    if (this._columns !== otherMatrix._rows) {
      // If not log "NOOP" and return the "this" object
      console.log("NOOP");
      // Return a falsy value
      return 0;
    }

    // Create a new 2D array to hold the result of the multiplication
    const resultElements: number[][] = [];

    // Loop through each element of the result matrix and calculate its value by multiplying...
    //  the corresponding elements from the two matrices
    for (let i = 0; i < this._rows; i++) {
      resultElements.push([]);
      for (let j = 0; j < otherMatrix._columns; j++) {
        let sum: number = 0;

        for (let k = 0; k < this._columns; k++) {
          sum += this._elements[i][k] * otherMatrix._elements[k][j];
        }
        resultElements[i][j] = sum;
      }
    }

    // Create a new matrix with the result of the multiplication and return it
    return new Matrix(this._rows, otherMatrix._columns, resultElements);
  }
}

const test = new Matrix(2, 3, [
  [1, 2, 3],
  [4, 5, 6],
]);
const test2 = new Matrix(3, 3, [
  [7, 8, 4],
  [9, 10, 6],
  [11, 12, 4],
]);
// let resultado = test.add(test2);
let resultado2 = test.multiply(test2);

console.table(resultado2.Elements);
