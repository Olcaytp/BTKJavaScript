        const numbersOne = [1, 2, 3];
        const numbersTwo = [4, 5, 6];
        const numbersCombined = [...numbersOne, ...numbersTwo];
        document.write(numbersCombined);

        const points = [40, 100, 1, 5, 25, 10];
        document.getElementById("demo").innerHTML = points;

        function myFunction1() {
            points.sort();
            document.getElementById("demo").innerHTML = points;
        }

        function myFunction2() {
            points.sort(function (a, b) { return a - b });
            document.getElementById("demo").innerHTML = points;
        }

        function myFunction3() {
            // Get the value of the input field with id="numb"
            let x = document.getElementById("numb").value;
            // If x is Not a Number or less than one or greater than 10
            let text;
            if (isNaN(x) || x < 1 || x > 10) {
                text = "Input not valid";
            } else {
                text = "Input OK";
            }
            document.getElementById("demo").innerHTML = text;
        }


        function validateForm() {
            let x = document.forms["myForm"]["fname"].value;
            if (x == "") {
                alert("Name must be filled out");
                return false;
            }
        }