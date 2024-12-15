//Sample data for states, including CO2 emissions and corresponding images
    const data={"Andhra Pradesh": { image: "images/andhra-pradesh.jpg", co2: [0.034,0.035,0.036,0.037,0.038,0.039,0.040,0.041,0.042,0.043,0.044,0.044] },
 "Arunachal Pradesh": { image: "images/arunachal-pradesh.jpg", co2: [0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001] },
 "Assam": { image: "images/assam.jpg", co2: [0.007,0.007,0.007,0.007,0.007,0.007,0.007,0.007,0.007,0.007,0.007,0.007] },
 "Bihar": { image: "images/bihar.jpg", co2: [0.011,0.012,0.013,0.014,0.015,0.016,0.017,0.018,0.019,0.020,0.021,0.021] },
 "Chhattishgarh": { image: "images/chhattisgarh.jpg", co2: [0.021,0.022,0.023,0.024,0.025,0.026,0.027,0.028,0.029,0.03,0.031,0.031] },
 "Delhi": { image: "images/delhi.jpg", co2: [0.01,0.011,0.012,0.013,0.014,0.015,0.016,0.017,0.018,0.019,0.02,0.02] },
 "Goa": { image: "images/goa.jpg", co2: [0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001] },
 "Gujarat": { image: "images/gujarat.jpg", co2: [0.044,0.046,0.048,0.05,0.052,0.054,0.056,0.058,0.06,0.062,0.064,0.064] },
"Haryana": { image: "images/haryana.jpg", co2: [0.013,0.014,0.015,0.016,0.017,0.018,0.019,0.02,0.021,0.022,0.023,0.023] },
"Himachal Pradesh": { image: "images/himachal-pradesh.jpg", co2: [0.002,0.002,0.002,0.002,0.002,0.002,0.002,0.002,0.002,0.002,0.002,0.002] },
"Jharkhand": { image: "images/jharkhand.jpg", co2: [0.012,0.013,0.014,0.015,0.016,0.017,0.018,0.019,0.020,0.021,0.022,0.022] },
"Karnataka": { image: "images/karnataka.jpg", co2: [0.031,0.033,0.035,0.037,0.039,0.041,0.043,0.045,0.047,0.049,0.051,0.051] },
"Kerala": { image: "images/kerala.jpg", co2: [0.01,0.011,0.012,0.013,0.014,0.015,0.016,0.017,0.018,0.019,0.02,0.02] },
"Madhya Pradesh": { image: "images/madhya-pradesh.jpg", co2: [0.027,0.029,0.031,0.033,0.035,0.037,0.039,0.041,0.043,0.045,0.047,0.047] },
"Maharashtra": { image: "images/maharashtra.jpg", co2: [0.071,0.075,0.079,0.083,0.087,0.091,0.095,0.099,0.103,0.107,0.11,0.11] },
"Manipur": { image: "images/manipur.jpg", co2: [0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001] },
"Meghalaya": { image: "images/meghalaya.jpg", co2: [0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001] },
"Mizoram": { image: "images/mizoram.jpg", co2: [0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001] },
"Nagaland": { image: "images/nagaland.jpg", co2: [0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001] },
"Odisha": { image: "images/odisha.jpg", co2: [0.017,0.018,0.019,0.020,0.21,0.022,0.023,0.024,0.025,0.026,0.027,0.027] },
"Punjab": { image: "images/punjab.jpg", co2: [0.014,0.015,0.016,0.017,0.018,0.019,0.020,0.021,0.022,0.023,0.024,0.024] },
"Rajasthan": { image: "images/rajasthan.jpg", co2: [0.026,0.028,0.030,0.032,0.034,0.036,0.038,0.040,0.042,0.044,0.046,0.048] },
"Sikkim": { image: "images/sikkim.jpg", co2: [0.0001,0.0001,0.0001,0.0001,0.0001,0.0001,0.0001,0.0001,0.0001,0.0001,0.0001,0.0001] },
"Tamil Nadu": { image: "images/tamil-nadu.jpg", co2: [0.036,0.038,0.040,0.042,0.044,0.046,0.048,0.05,0.052,0.054,0.056,0.056] },
"Telangana": { image: "images/telangana.jpg", co2: [0.021,0.022,0.023,0.024,0.025,0.026,0.027,0.028,0.029,0.030,0.031,0.031] },
"Tripura": { image: "images/tripura.jpg", co2: [0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001] },
"Uttar Pradesh": { image: "images/uttar-pradesh.jpg", co2: [0.045,0.048,0.051,0.054,0.057,0.06,0.063,0.066,0.069,0.072,0.075,0.075] },
"Uttrakhand": { image: "images/uttrakhand.jpg", co2: [0.002,0.002,0.002,0.002,0.002,0.002,0.002,0.002,0.002,0.002,0.002,0.002] },
"West Bengal": { image: "images/west-bengal.jpg", co2: [0.026,0.028,0.030,0.032,0.034,0.036,0.038,0.04,0.042,0.044,0.046,0.046] },
"Andaman and Nicobar Islands": { image: "images/andaman.jpg", co2: [0.0001,0.0001,0.0001,0.0001,0.0001,0.0001,0.0001,0.0001,0.0001,0.0001,0.0001,0.0001] },
"Chandigarh": { image: "images/chandigarh.jpg", co2: [0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001] },
"Dadra and Nagar Haveli and Daman and Diu": { image: "images/daman-and-diu.jpg", co2: [0.0001,0.0001,0.0001,0.0001,0.0001,0.0001,0.0001,0.0001,0.0001,0.0001,0.0001,0.0001] },
"Jammu and Kashmir": { image: "images/jammu-and-kashmir.jpg", co2: [,0.003,0.003,0.003,0.003,0.003,0.003,0.004,0.004,0.004,0.004,0.005,0.005] },
"Ladakh": { image: "images/ladakh.jpg", co2: [0.0003,0.0003,0.0004,0.0004,0.0005,0.0005,0.0006,0.0006,0.0007,0.0007,0.0008,0.0008] },
"Lakshadweep": { image: "images/lakshadweep.jpg", co2: [0.0001,0.0001,0.0001,0.0001,0.0001,0.0001,0.0001,0.0001,0.0001,0.0001,0.0001,0.0001] },
"Puducherry": { image: "images/puducherry.jpg", co2: [0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001] } 
};
class Matrix {
constructor(rows, cols) {
// creating matrices
this.rows = rows;
this.cols = cols;
this.matrix = new Array(rows).fill(0).map(() => new Array(cols).fill(0));
}

static add(matrix1, matrix2) {
// adding matrices or singular values
let m;

if (matrix2 instanceof Matrix) {
if (matrix1.rows !== matrix2.rows || matrix1.cols !== matrix2.cols) {
throw new Error("Matrices must have the same dimensions for addition.");
}

m = new Matrix(matrix1.rows, matrix1.cols);
for (let i = 0; i < matrix1.rows; i++) {
for (let j = 0; j < matrix1.cols; j++) {
m.matrix[i][j] = matrix1.matrix[i][j] + matrix2.matrix[i][j];
}
}
} else {
m = new Matrix(matrix1.rows, matrix1.cols);

for (let i = 0; i < matrix1.rows; i++) {
for (let j = 0; j < matrix1.cols; j++) {
m.matrix[i][j] = matrix1.matrix[i][j] + matrix2;
}
}
}
return m;
}

static multiply(matrix1, matrix2) {
// multiplying matrices or singular values
let m;
if (matrix2 instanceof Matrix) {
if (matrix1.cols !== matrix2.rows) {
throw new Error("Matrices must have the same dimensions for multiplication.");
}
m = new Matrix(matrix1.rows,
matrix2.cols);
for (let i = 0;i < matrix1.rows;i++) {
for (let j = 0;j < matrix2.cols;j++) {
let sum=0;
for(let k=0;k<matrix1.cols;k++){
sum+=matrix1.matrix[i][k]*matrix2.matrix[k][j];
}
m.matrix[i][j]=sum;
}
}
}
else {
m = new Matrix(matrix1.rows, matrix1.cols);
for (let i = 0; i < matrix1.rows; i++) {
for (let j = 0; j < matrix1.cols; j++) {
m.matrix[i][j] = matrix1.matrix[i][j]*matrix2;
}
}
}

return m;
}
static subtract(matrix1, matrix2) {
// Subtracting matrices or singular values
let m;

if (matrix2 instanceof Matrix) {
if (matrix1.rows !== matrix2.rows || matrix1.cols !== matrix2.cols) {
throw new Error("Matrices must have the same dimensions for subtraction.");
}

m = new Matrix(matrix1.rows, matrix1.cols);

for (let i = 0; i < matrix1.rows; i++) {
for (let j = 0; j < matrix1.cols; j++) {
m.matrix[i][j] = matrix1.matrix[i][j] - matrix2.matrix[i][j];
}
}

} else {
m = new Matrix(matrix1.rows, matrix1.cols);

for (let i = 0; i < matrix1.rows; i++) {
for (let j = 0; j < matrix1.cols; j++) {
m.matrix[i][j] = matrix1.matrix[i][j] - matrix2;
}
}
}
return m;
}
static Transpose(matrix1){
//Transpose function for backpropogation.
let m=new Matrix(matrix1.cols,matrix1.rows);
for(let i=0;i<matrix1.rows;i++){
for(let j=0;j<matrix1.cols;j++){
m.matrix[j][i]=matrix1.matrix[i][j];
}
}
return m;
}
// Event listener for future button click
document.getElementById("future-button").addEventListener("click", function () {
const year = document.getElementById("year-input").value;
const state = document.getElementById("state-dropdown").value;
let clickCount = 0; // Initialize a variable to track the number of clicks
if (year && state) {
clickCount++;// Increment the click count with each click
let iterations = 50 * clickCount;// For example: 50, 100, 150, 200, 250
if (iterations > 250) {
iterations = 250;// Cap iterations at 250.
    if (year && state) {
        if (year == 2024) {
            // Handle training for 2024
            console.log("Training for 2024...");
            const r = trainModel(iterations);  // Example: Train for 50 iterations
            console.log(`Prediction for 2024 CO2 emissions: ${r}`);
        } else if (year == 2025) {
            // Handle training for 2025
            console.log("Training for 2025...");
            const r = trainModelFor2025(50);  // Example: Train for 50 iterations
            console.log(`Prediction for 2025 CO2 emissions: ${r}`);
        } else {
            alert("Please select a valid year (2024 or 2025).");
        }
    } else {
        alert("Please select both a state and a year.");
    }
}
}
});

// Neural network training function for 2024
function trainModel(iterations) {
    let weight = new Matrix(1, 2);
    let input = new Matrix(2, 1);
    let bias = 0.01;
    let sum = new Matrix(1, 1);
    let target;
    let m3;
    let error;
    let rates_deviation = [0.037879514, 0.036436408, 0.037157961];
    let lr = 0.05;  // learning rate
    let r;
    let d_weights = new Matrix(2, 1);
    let gradient = new Matrix(2, 1);
    let delta_weight;

    // Set input and initial weights for training
    input.matrix[0][0] = 0.082;  // Example GDP 2023
    input.matrix[1][0] = 0.072;  // Example financial growth 2023
    weight.matrix[0][0] = 0.0085;
    weight.matrix[0][1] = 0.0078;

    for (let iterationsCompleted = 0; iterationsCompleted < iterations; iterationsCompleted++) {
        // Compute gradients (derivative of tanh(x) is 1 - tanh(x)^2)
        for (let i = 0; i < input.rows; i++) {
            for (let j = 0; j < input.cols; j++) {
                gradient.matrix[i][j] = 1 - Math.pow(Math.tanh(input.matrix[i][j]), 2);  // derivative of tanh
            }
        }

        m3 = Matrix.multiply(weight, input);
        let biasMatrix = new Matrix(1, 1);
        biasMatrix.matrix[0][0] = bias;
        m3 = Matrix.add(m3, biasMatrix);  // Add bias properly

        r = Matrix.tanh(m3.matrix[0][0]);

        // Set target value based on the rates deviation
        if (r > rates_deviation[0]) {
            target = rates_deviation[0];
        } else if (r < rates_deviation[1]) {
            target = rates_deviation[1];
        } else {
            target = rates_deviation[2];
        }

        error = target - r;

        // Compute d_weights and update weight
        for (let i = 0; i < input.rows; i++) {
            for (let j = 0; j < input.cols; j++) {
                d_weights.matrix[i][j] = lr * error * input.matrix[i][j] * gradient.matrix[i][j];
            }
        }

        delta_weight = Matrix.transpose(d_weights);
        weight.matrix = Matrix.add(weight, delta_weight);
    }

    return r;
}

// Function to train the model for year 2025
function trainModelFor2025(iterations) {
    let weight = new Matrix(1, 2);
    let input = new Matrix(2, 1);
    let bias = 0.01;
    let sum = new Matrix(1, 1);
    let target;
    let m3;
    let error;
    let rates_deviation = [0.037879514, 0.036436408, 0.037157961];
    let lr = 0.05;  // learning rate
    let r;
    let d_weights = new Matrix(2, 1);
    let gradient = new Matrix(2, 1);
    let delta_weight;

    // Set input and initial weights for training 2025
    input.matrix[0][0] = 0.082;  // Example GDP 2023
    input.matrix[1][0] = 0.072;  // Example financial growth 2023
    weight.matrix[0][0] = 0.0085;
    weight.matrix[0][1] = 0.0078;

    for (let iterationsCompleted = 0; iterationsCompleted < iterations; iterationsCompleted++) {
        // Compute gradients (derivative of tanh(x) is 1 - tanh(x)^2)
        for (let i = 0; i < input.rows; i++) {
            for (let j = 0; j < input.cols; j++) {
                gradient.matrix[i][j] = 1 - Math.pow(Math.tanh(input.matrix[i][j]), 2);  // derivative of tanh
            }
        }

        m3 = Matrix.multiply(weight, input);
        let biasMatrix = new Matrix(1, 1);
        biasMatrix.matrix[0][0] = bias;
        m3 = Matrix.add(m3, biasMatrix);  // Add bias properly

        r = Matrix.tanh(m3.matrix[0][0]);

        // Set target value based on the rates deviation
        if (r > rates_deviation[0]) {
            target = rates_deviation[0];
        } else if (r < rates_deviation[1]) {
            target = rates_deviation[1];
        } else {
            target = rates_deviation[2];
        }

        error = target - r;

        // Compute d_weights and update weight
        for (let i = 0; i < input.rows; i++) {
            for (let j = 0; j < input.cols; j++) {
                d_weights.matrix[i][j] = lr * error * input.matrix[i][j] * gradient.matrix[i][j];
            }
        }

        delta_weight = Matrix.transpose(d_weights);
        weight.matrix = Matrix.add(weight, delta_weight);
    }

    return r;
}
}
let r2024=trainModel(iterations);
let r2025=trainModelFor2025(iterations);
  // Display CO2 Prediction for 2024 in the output
function displayStateDataFor2024(state, year) {
    const stateData = data[state];
    const co2Index = year - 2014;
    const pollution = [2243461160, 2260482790, 2303736300, 2434123800, 2573606310, 2541365980, 2320678660, 2528133480, 2693034100, 2903090750]; // Value holder for all yearly pollution values.
    const CO2 = pollution[9] * Math.exp(r2024);

    if (stateData && co2Index >= 0 && co2Index < stateData.co2.length) {
        document.getElementById("state-image").src = stateData.image;
        document.getElementById("state-name").textContent = state;
        document.getElementById("co2-value").textContent = `Predicted CO2 emissions: ${CO2} tons`;
    }
}
  // Display CO2 Prediction for 2025 in the output
function displayStateDataFor2025(state, year) {
    const stateData = data[state];
    const co2Index = year - 2014;
    const pollution = [2243461160, 2260482790, 2303736300, 2434123800, 2573606310, 2541365980, 1320678660, 2528133480, 2693034100, 2903090750]; // Value holder for all yearly pollution values.
    const CO2024 = pollution[9] * Math.exp(r2025);
    const CO2 = CO2024*1.002;

    if (stateData && co2Index >= 0 && co2Index < stateData.co2.length) {
        document.getElementById("state-image").src = stateData.image;
        document.getElementById("state-name").textContent = state;
        document.getElementById("co2-value").textContent = `Predicted CO2 emissions: ${CO2} tons`;
    }
}


                
