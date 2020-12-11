<template>
  <div id="Nav">
    <header id="header">
      <nav>
        <router-link to="/Landing">Landing Page</router-link>
        <router-link to="/Home"><img src="../public/images/website-logo-name.png" width=80%/></router-link>
        <router-link to="/AboutDev">About the Dev</router-link>
        <!-- <router-link to="/dashboard">Dash</router-link> -->
      </nav>
    </header>
    <footer id="footer">
      <p>To see the code behind this project, you can visit my <a href="https://github.com/bfrodsham/creative.benjaminfrodsham.me">
          Github repository</a></p>
    </footer>
    <div class="page my-knowmi">

      <div class="sidenav">
        <!-- <a class ="button" href="#">Dashboard</a>
        <a class ="button" href="#">Tracking</a> -->
        <a class ="button" href="#">Diet Log</a>
        <!-- <a class ="button" href="#">Report</a> -->
      </div>

      <!-- <div class="interactive-window">

        <h1>Knomi is under construction...</h1>
        <p>Come back later when it's done. You'll be glad you did!</p>

      </div> -->

      <div class="interactive-window">
        <div class="content-border knomiPanel">
          <h3>Macronutrient Totals</h3>
          <table class="knomiTable">
            <tr>
              <th>Calories</th>
              <th>Fat (g)</th>
              <th>Protein (g)</th>
              <th>Carbs (g)</th>
            </tr>
            <tr id="totalData">
              <td id="calTotal">0</td>
              <td id="fatTotal">0</td>
              <td id="protTotal">0</td>
              <td id="carbTotal">0</td>
            </tr>
          </table>
        </div>
        <div class="content-border knomiPanel">
          <h3>Diet Log</h3>
          <table class="knomiTable" id="dietLog">
            <tr>
              <th>Food Name</th>
              <th>Calories</th>
              <th>Fat (g)</th>
              <th>Protein (g)</th>
              <th>Carbs (g)</th>
            </tr>
          </table>
        </div>
        <!-- <div class="content-border knomiPanel">
          <h3>Database Search</h3>

          <form>
            <label>Enter a food or recipe to find. The more specific you are, the more likely you'll find an accurate result. </label>
            <br>
            <input id="foodInput" type="text" size="50"></input>
            <input id="foodSubmit" type="submit" value="Submit"></input>
          </form>

          <div class="results" id="results">
            <h4>Results:</h4>
            <table class="knomiTable">
              <tr>
                <th>Food Name</th>
                <th>Calories</th>
                <th>Fat (g)</th>
                <th>Protein (g)</th>
                <th>Carbs (g)</th>
              </tr>
              <tr id="foodResults">
                <td id="foodName"></td>
                <td id="foodCals"></td>
                <td id="foodFats"></td>
                <td id="foodProts"></td>
                <td id="foodCarbs"></td>
              </tr>
            </table>

            <input id='foodAdd' type='submit' value='Add to Log'></input>
          </div>

        </div> -->
      </div>

    </div>
  </div>
</template>



<style>
#Nav {
  font-family: "Century Gothic", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #000000;
}

#nav a.router-link-exact-active {
  color: #000000;
}

/* Color scheme: https://paletton.com/#uid=7040u0knHs+edG7jrvYscpiuCk2 */
/* red: #e74c3c
 * blue: #277E8E
 */
body {
  font-family: 'Work Sans', sans-serif;
  font-weight: 300;
  font-size: 13pt;
  margin: 0px 200px;
}

a {
  text-decoration-line: none;
  color: #31b6d5;
  font-weight: bold;
  width: 40%;
}

#header {
  /* Color and alignment */
  background: #e3e3e3;
  text-align: center;
  box-shadow: 0 0 0 .25em #31b6d5;
  display: flex;
  justify-content: space-around;

  padding: 20px;
}

nav {
  display: flex;
  justify-content: center;
}

h1 {
  color: #fff;
  font-size: 18px;
}

h2 {
  font-size: 12px;
}

#header .fas {
  font-size: 25px;
  color: #fff;
  width: 50px;
}

.pure-button-primary {
  background-color: #277E8E;
}

footer {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
}



</style>
