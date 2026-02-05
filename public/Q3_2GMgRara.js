// read from localStorage and parse safely
let signupString = localStorage.getItem('clubsignups');
let signupsList = signupString ? JSON.parse(signupString) : {};

// Initialize DOM-dependent handlers after DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('clubForm'); // get the HTML form

  if (form) {
    // event handler on submit
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      if (confirm('Sure You Want To Save Your Work?')) {
        const data = new FormData(form);
        const obj = Object.fromEntries(data.entries());

        // use studentId as the key (matches name in the form)
        const keyId = obj.studentId || obj.studentID || obj.sid;
        if (!keyId) {
          alert('Student ID is required to save.');
          return;
        }

        signupsList[keyId] = signupsList[keyId] || {};

        // map form field names to the storage shape used by viewSignUps
        signupsList[keyId].clubs = obj.preferredClub || '';
        signupsList[keyId].fname = obj.fullName || '';
        signupsList[keyId].grade = obj.gradeLevels || '';
        signupsList[keyId].semail = obj.email || '';
        signupsList[keyId].phone = obj.mobilePhone || '';
        signupsList[keyId].inex = obj.status || '';
        signupsList[keyId].birthDay = obj.birthDay || '';
        signupsList[keyId].reasonForJoining = obj.reasonForJoining || '';

        console.log(signupsList);
        signupString = JSON.stringify(signupsList);
        localStorage.setItem('clubsignups', signupString);
        // Avoid performing an actual form POST so the page works locally.
        // Redirect to the sign-ups view to show saved data instead.
        window.location.href = 'viewSignUps.html';
      }
    });

    // reset handler with confirmation
    form.addEventListener('reset', function (e) {
      if (!confirm('Sure you want to clear your data?')) {
        e.preventDefault();
      }
    });
  }

  // safe button handlers
  const showBtn = document.getElementById('show');
  const homeBtn = document.getElementById('home');
  if (showBtn) showBtn.addEventListener('click', () => { window.location.href = 'viewSignUps.html'; });
  if (homeBtn) homeBtn.addEventListener('click', () => { window.location.href = '../../index.html'; });
});

// called when user is on the input field
function changeColor(ele) {
  if (!ele) return;
  ele.style.backgroundColor = 'blue';
}

function resetColor(ele) {
  if (!ele) return;
  ele.style.backgroundColor = 'white';
  ele.style.border = '2px solid black';
  if (!ele.value || !ele.value.trim()) {
    ele.style.border = '2px solid red';
    ele.style.backgroundColor = 'lightpink';
  }
}

function blurMark(ele) {
  resetColor(ele);
}