let height, firOpt, secOpt;

// Gets the height input and sets up the placeholders
document
  .getElementById("heightInput")
  .addEventListener("input", getHeightInput);

function getHeightInput(e) {
  height = e.target.value;
}

document.getElementById("firOpt").addEventListener("change", getfirOpt);

function getfirOpt(e) {
  firOpt = e.target.value; // Gets placeholder value
  document.getElementById("heightInput").placeholder =
    "Enter " + firOpt + "...";
  document.getElementById("heightName").innerHTML = firOpt + ":";
}

document.getElementById("secOpt").addEventListener("change", getsecOpt);

function getsecOpt(e) {
  secOpt = e.target.value;
  document.getElementById("convertedHeightName").innerHTML = secOpt + ":";
}

document
  .getElementById("convertButton")
  .addEventListener("click", heightConverter);


function heightConverter() {
  // Check if the input and options are valid
  if (
    !height ||
    !firOpt ||
    !secOpt ||
    firOpt === "Select an Option" ||
    secOpt === "Select"
  ) {
    alert(
      "Anjayyy, Masukkan angka dan pilih opsi satuan yang akan dikonversi terlebih dahulu."
    );
    return;
  }

  const finalOutput = document.querySelector("#finalOutput");
  let result;

  // Validates for Miles
  if (firOpt == "Miles" && secOpt == "Centimeters") {
    result = height * 160934;
  } else if (firOpt == "Miles" && secOpt == "Kilometers") {
    result = height * 1.60934;
  } else if (firOpt == "Miles" && secOpt == "Meters") {
    result = height * 1609.34;
  } else if (firOpt == "Miles" && secOpt == "Inches") {
    result = height * 63360;
  }
  // Validates for Centimeters
  else if (firOpt == "Centimeters" && secOpt == "Miles") {
    result = height / 160934;
  } else if (firOpt == "Centimeters" && secOpt == "Kilometers") {
    result = height / 100000;
  } else if (firOpt == "Centimeters" && secOpt == "Meters") {
    result = height * 0.01;
  } else if (firOpt == "Centimeters" && secOpt == "Inches") {
    result = height * 0.3937;
  }
  // Validates for Kilometers
  else if (firOpt == "Kilometers" && secOpt == "Centimeters") {
    result = height * 100000;
  } else if (firOpt == "Kilometers" && secOpt == "Miles") {
    result = height / 1.609;
  } else if (firOpt == "Kilometers" && secOpt == "Meters") {
    result = height * 1000;
  } else if (firOpt == "Kilometers" && secOpt == "Inches") {
    result = height * 39370;
  }
  // Validates for Meters
  else if (firOpt == "Meters" && secOpt == "Miles") {
    result = height / 1609;
  } else if (firOpt == "Meters" && secOpt == "Kilometers") {
    result = height / 1000;
  } else if (firOpt == "Meters" && secOpt == "Centimeters") {
    result = height * 100;
  } else if (firOpt == "Meters" && secOpt == "Inches") {
    result = height * 39.37;
  }

  // Validates for Inches
  else if (firOpt == "Inches" && secOpt == "Miles") {
    result = height / 63360;
  } else if (firOpt == "Inches" && secOpt == "Kilometers") {
    result = height / 39370;
  } else if (firOpt == "Inches" && secOpt == "Meters") {
    result = height / 39.37;
  } else if (firOpt == "Inches" && secOpt == "Centimeters") {
    result = height * 2.54;
  }
  // Validates if first option is the same as second option
  else {
    result = height;
  }

  document.getElementById("output").style.visibility = "visible";
  document.getElementById("resetButton").style.visibility = "visible";
  document.getElementById("heightOutput").innerHTML = height;
  finalOutput.innerHTML = result;

  addHistory(height, firOpt, result, secOpt);
}

function addHistory(height, firOpt, result, secOpt) {
  const historyList = document.getElementById("historyList");
  const listItem = document.createElement("li");
  listItem.className = "list-group-item";
  listItem.textContent = `${height} ${firOpt} = ${result} ${secOpt}`;
  historyList.appendChild(listItem);
}

document.getElementById("resetButton").addEventListener("click", reset);

function reset() {
  document.getElementById("mainForm").reset();
  document.getElementById("output").style.visibility = "hidden";
  document.getElementById("resetButton").style.visibility = "hidden";
  document.getElementById("historyList").innerHTML = ""; // Clear history
}
