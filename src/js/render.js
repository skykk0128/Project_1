const render = () => {
  console.log(`Hi, I'm rendering.`);

  const root = document.querySelector('#root');

  root.innerHTML = `
    <div>Hello World</div>
  `;
  renderHomePage();
  renderResumePage();
};

const renderHeader = () => {
  const renderLogo = () => {

  };

  const renderNav = () => {
    const renderNavItem = () => {

    };

    renderNavItem();
    renderNavItem();
    renderNavItem();
  };

  renderLogo();
  renderNav();
};

const renderHomePage = () => {

};

const renderResumePage = () => {

};



render();
