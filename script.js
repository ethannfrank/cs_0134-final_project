const caloriesProgress = document.querySelector('#calories-progress');
const caloriesNum = document.querySelector('#calories-num');
const caloriesGoal = document.querySelector('#calories-goal');

const proteinProgress = document.querySelector('#protein-progress');
const proteinNum = document.querySelector('#protein-num');
const proteinGoal = document.querySelector('#protein-goal');

const carbsProgress = document.querySelector('#carbs-progress');
const carbsNum = document.querySelector('#carbs-num');
const carbsGoal = document.querySelector('#carbs-goal');

const fatProgress = document.querySelector('#fat-progress');
const fatNum = document.querySelector('#fat-num');
const fatGoal = document.querySelector('#fat-goal');

function updateNum(num_p, num) {
    num_p.innerHTML = num;
}

function updateGoal(goal_p, goal) {
    goal_p.innerHTML = goal;
}

function updateProgress(bar, num, total) {
    const progress = (num / total) * 100;
    bar.style.width = `${progress}%`;
    if (progress < 25) {
        bar.style.backgroundColor = 'red';
    } else if (progress < 50) {
        bar.style.backgroundColor = 'orange';
    } else if (progress < 75) {
        bar.style.backgroundColor = 'yellow';
    } else {
        bar.style.backgroundColor = 'green';
    }
}

// Add a listener for the log meal button
document.getElementById('log-meal').addEventListener('click', function (event) {
    event.preventDefault(); // Prevent form submission

    // Get meal details
    var mealName = document.getElementById('meal').value;
    var calories = document.getElementById('calories').value;
    var protein = document.getElementById('protein').value;
    var carbs = document.getElementById('carbs').value;
    var fat = document.getElementById('fat').value;

    // Validate the form
    if (!mealName || !calories || !protein || !carbs || !fat) {
        alert('Please fill out all fields');
        return;
    }

    // Create a new list item
    var listItem = document.createElement('li');

    // Create separate <p> elements for each meal detail
    var mealNamePara = document.createElement('p');
    mealNamePara.textContent = mealName;
    listItem.appendChild(mealNamePara);

    var caloriesPara = document.createElement('p');
    caloriesPara.textContent = "Calories: " + calories;
    listItem.appendChild(caloriesPara);

    var proteinPara = document.createElement('p');
    proteinPara.textContent = "Protein: " + protein + "g";
    listItem.appendChild(proteinPara);

    var carbsPara = document.createElement('p');
    carbsPara.textContent = "Carbs: " + carbs + "g";
    listItem.appendChild(carbsPara);

    var fatPara = document.createElement('p');
    fatPara.textContent = "Fat: " + fat + "g";
    listItem.appendChild(fatPara);

    // Create remove button
    var removeButton = document.createElement('button');
    removeButton.textContent = "Remove";
    removeButton.classList.add('remove-meal');

    var caloriesNum = document.getElementById('calories-num');
    var proteinNum = document.getElementById('protein-num');
    var carbsNum = document.getElementById('carbs-num');
    var fatNum = document.getElementById('fat-num');

    // Add event listener to the remove button
    removeButton.addEventListener('click', function () {
        listItem.remove();
        newCalories = parseInt(caloriesNum.textContent) - parseInt(calories);
        newProtein = parseInt(proteinNum.textContent) - parseInt(protein);
        newCarbs = parseInt(carbsNum.textContent) - parseInt(carbs);
        newFat = parseInt(fatNum.textContent) - parseInt(fat);
        updateGoal(caloriesNum, newCalories);
        updateGoal(proteinNum, newProtein);
        updateGoal(carbsNum, newCarbs);
        updateGoal(fatNum, newFat);
        updateProgress(caloriesProgress, newCalories, parseInt(caloriesGoal.textContent));
        updateProgress(proteinProgress, newProtein, parseInt(proteinGoal.textContent));
        updateProgress(carbsProgress, newCarbs, parseInt(carbsGoal.textContent));
        updateProgress(fatProgress, newFat, parseInt(fatGoal.textContent));
    });

    // Append the remove button to the list item
    listItem.appendChild(removeButton);

    // Append the new list item to the meal list
    document.getElementById('meal-list-items').appendChild(listItem);

    // Clear the form fields
    document.getElementById('meal-form').reset();

    newCalories = parseInt(caloriesNum.textContent) + parseInt(calories);
    newProtein = parseInt(proteinNum.textContent) + parseInt(protein);
    newCarbs = parseInt(carbsNum.textContent) + parseInt(carbs);
    newFat = parseInt(fatNum.textContent) + parseInt(fat);

    updateNum(caloriesNum, newCalories);
    updateNum(proteinNum, newProtein);
    updateNum(carbsNum, newCarbs);
    updateNum(fatNum, newFat);

    updateProgress(caloriesProgress, newCalories, parseInt(caloriesGoal.textContent));
    updateProgress(proteinProgress, newProtein, parseInt(proteinGoal.textContent));
    updateProgress(carbsProgress, newCarbs, parseInt(carbsGoal.textContent));
    updateProgress(fatProgress, newFat, parseInt(fatGoal.textContent));

});

document.getElementById('set-goals').addEventListener('click', function (event) {
    event.preventDefault(); // Prevent form submission

    var caloriesGoal = document.getElementById('goal-calories').value;
    var proteinGoal = document.getElementById('goal-protein').value;
    var carbsGoal = document.getElementById('goal-carbs').value;
    var fatGoal = document.getElementById('goal-fat').value;

    if (!caloriesGoal || !proteinGoal || !carbsGoal || !fatGoal) {
        alert('Please fill out all fields');
        return;
    }

    updateGoal(document.getElementById('calories-goal'), caloriesGoal);
    updateGoal(document.getElementById('protein-goal'), proteinGoal);
    updateGoal(document.getElementById('carbs-goal'), carbsGoal);
    updateGoal(document.getElementById('fat-goal'), fatGoal);

    document.getElementById('goals-form').reset();
});
