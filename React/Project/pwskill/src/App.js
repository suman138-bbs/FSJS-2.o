

const Header = () => {
  return(
    <div className =  'F_nav'>

      <ul>
        <li className = 'logo'><img src='https://pwskills.com/images/PWSkills-main.png' alt='logo' /></li>
        <li className='nav_input'><img src='https://pwskills.com/images/search-icon.svg' alt='logo' /> <input type="search" placeholder="what do you want to learn?" className="outLine" size='70'></input></li>
        <li className = 'nav_button'><button>Log/Register</button></li>
      </ul>
    </div>
  )
};

function App() {
  return (
      <div className='Food'>
          <Header/>
          {/* <Body />
          <Footer/> */}
        
   </div>
      
  );
}

export default App;
