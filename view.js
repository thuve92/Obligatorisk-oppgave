//model
let appDiv = document.getElementById('app');

mainPageView();
function mainPageView() {
    let html = "";
    html += `
    <img id="henrikpng" src="./pictures/favicon/faviconhenrik.png">
    <input id="mainPageInput" oninput="getData(this.value)"></input>
    <button id="addButton" onclick="saveSeries()">Add!</button>
    <h1 id="mainPageH1">Welcome to himdb, this is a series page!💕</h1>
    <h2 id="mainPageH2">UPCOMMING SERIES: </h2>
    <div id="linkOne">${model.movieTrailers[0]}</div>
    <div id="linkTwo">${model.movieTrailers[1]}</div>
    <div id="linkThree">${model.movieTrailers[2]}</div>
    <button id="mainPageButton" onclick="libraryView()">Library</button>
    <div class="footer"><p>Creator: Henrik T. Andersen</p>
    <p><a href="mailto:henrikt@getacademy.no">henrikt@getacademy.no</a></p></div>

    
    
    
    
    
    `;
appDiv.innerHTML = html;
};

function libraryView() {
    let html = "";
    html += `
    <img id="henrikpng" src="./pictures/favicon/faviconhenrik.png">
    <input id="searchInput"></input>
    <button id="addButton">Search!</button>
    <button id="homeButton" onclick="homeButton()">Home</button>
    <div id="showSeriesLibrary">${showSeries()}</div>
    <div class="footer"><p>Creator: Henrik T. Andersen</p>
    <p><a href="mailto:henrikt@getacademy.no">henrikt@getacademy.no</a></p></div>

    


    
    
    
    
    `;
appDiv.innerHTML = html;
};


function seriesView(index) {
    let html = "";
    html += `
        <div id="seriesViewDiv" style="height: 100vh; width: 100vw; background-image: url('${model.series[index].image}')">
            <div id="seriesViewInfo">
                <div>Title: ${model.series[index].title}</div>
                <div>Score: ${model.series[index].score}</div>
                <div>Review: ${model.series[index].review}</div>
            </div>
            <div id="changeButtons">
                <button onclick="addSeriesView(${index})">Change Series</button><br>
                <button onclick="deleteSeries(${index})">Delete Series</button>
            </div>
            <button id="seriesViewHome" onclick="homeButton()">Home</button>
        </div>

        

        
    
    `;
    
    appDiv.innerHTML = html;
};

function addSeriesView(index) {
    let html ="";
    html += `
        <div id="addSeriesViewDiv" style="background-image: url('${model.newSeries.image}')">
            <div id="seriesViewInfo">
                <form>
                    <label for="Title">Title: </label>
                    <input type="text" id="Title" value="${model.newSeries.title}" oninput="model.newSeries.title = this.value">
                    <label for="Score">Score: </label>
                    <input type="Score" id="Score" value="${model.newSeries.score}" oninput="model.newSeries.score = this.value">
                    <label for="Review">Review: </label>
                    <input type="text" id="Review" value="${model.newSeries.review}" oninput="model.newSeries.review = this.value">
                    <label for="imageLink">Image Link: </label>
                    <input type="text" id="imageLink" value="${model.newSeries.image}" oninput="model.newSeries.image = this.value">
                </form>
                <button onclick="changeSeriesModel(${index})">Save changes</button>
            </div>
            </div>
            <button id="seriesViewHome" onclick="homeButton()">Home</button>
        </div>
    
    `;
    appDiv.innerHTML = html; 
}
