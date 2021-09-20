import logo from "./logo.svg";
import "./App.css";

function App() {
  return ( <div className="App">


<nav class="navbar navbar-expand-lg navbar-light navRose" >
  <div class="container-fluid">
   
    <a class="navbar-brand d-flex" href="#">
      <div class="logoBaGD"></div>
    </a>

    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse d-flex justify-content-between" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
      <li class="nav-item">
          <a class="nav-link nomWeb" aria-current="page" href="#">PLANTITAS</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">TODAS</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Interior</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Exterior
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="#">De Sol</a></li>
            <li><a class="dropdown-item" href="#">De Sombra</a></li>
            
          </ul>
        </li>
       
      </ul>
      <div>
        <form class="d-flex">
          <input class="form-control me-2 espacMarg" type="search" placeholder="Search" aria-label="Search"/>
          <button class="btn btnRose" type="submit">Search</button>
        </form>
      </div>
      
    </div>
  </div>
</nav>

<div class="p-5 mb-4 bg-light rounded-3">
  <h1 class="h1Pruebas">MIS PLANTAS</h1>
  <p class="pTexto1">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
  </p>
  
</div>
<section class="restoWeb">
<div class="card-group">
  <div class="card">
    <img src="..." class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    </div>
    <div class="card-footer">
      <small class="text-muted">Last updated 3 mins ago</small>
    </div>
  </div>
  <div class="card">
    <img src="..." class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
    </div>
    <div class="card-footer">
      <small class="text-muted">Last updated 3 mins ago</small>
    </div>
  </div>
  <div class="card">
    <img src="..." class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
    </div>
    <div class="card-footer">
      <small class="text-muted">Last updated 3 mins ago</small>
    </div>
  </div>
</div>
</section>



      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className="pEmpezando">empezando a usar react</p>
        
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}



    </div>
  );
}

export default App;
