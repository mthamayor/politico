// will be added to dialog.js after implementing node
class Dialog {
  constructor() {
    this.message = '';
    this.dialog = `
            <div class = "dialog form-wrapper hidden">
                <div class="dialog-element">
                <div class ="line-separator dialog-top  form-wrapper">
                    <span id="message-container"></span>
                    </div>
                    <div class = "form-wrapper dialog-bottom">
                        <button id="close-button" class = "unstyled-btn dialog-button">close</button>
                    </div>
                </div>
            </div>
            
        `;
  }

  show(message) {
    this.message = message;
    try {
      const dialogSelector = document.querySelector('.dialog');
      const messageContainer = document.querySelector('#message-container');
      messageContainer.innerHTML = message;
      dialogSelector.classList.remove('hidden');
    }
    catch (error) {
      console.log('could not show dialog');
    }
  }

  hide() {
    this.message = '';
    try {
      const dialogSelector = document.querySelector('.dialog');
      dialogSelector.classList.add('hidden');
    }
    catch (error) {
      console.log('could not hide dialog');
      console.log(error);
    }
  }

  getDialog() {
    return this.dialog;
  }
}

// unlogged nav content
const unloggedNavBarContent = `
    <div class="navbar">
        <ul>
            <li><a href = "index.html" class="nav-brand">POLITICO</a></li>
            <span class="nav-links">
                <li><a href="sign-in.html"><span><i class="fas fa-sign-in-alt small-margin-right"></i></span>Sign In</a></li>
                <li><span></span><a href="sign-up.html"><span><i class="fas fa-user-plus small-margin-right"></i></span>Sign Up</a></li>
            </span>
        </ul>
    </div>
        
`;
// logged nav content
const loggedNavBarContent = `
    <div class="navbar">
        <ul>
            <li><a href="../index.html" class="nav-brand">POLITICO</a></li>
            <span class="nav-links">
                <li><a href="#">Sign Out</a></li>
            </span>

        </ul>
    </div>
`;

// add the logged in navbar to the navbar-logged elements
try {
  const loggedNavBar = document.querySelector('.navbar-logged');
  loggedNavBar.innerHTML = loggedNavBarContent;
} catch (error) {
  console.log('no .navbar-logged found');
  console.log(error);
}

// add the unlogged in navbar to the navbar-logged elements
try {
  const unloggedNavBar = document.querySelector('.navbar-unlogged');
  unloggedNavBar.innerHTML = unloggedNavBarContent;
} catch (error) {
  console.log('no .navbar-unlogged found');
  console.log(error);
}


// footer content
const footerContent = `
<span>© 2019  politico</span>
`;

// initialize the footer
const footerWrapper = document.querySelector('.footer');
footerWrapper.innerHTML = footerContent;

// initialize dialog
const dialog = new Dialog();

document.body.innerHTML += dialog.getDialog();
// dialog.show("hi")
this.closeButton = document.querySelector('#close-button');
this.closeButton.addEventListener('click', () => {
  dialog.hide();
});
