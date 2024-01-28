const homeBtn = document.querySelector(".homeBtn");
const prePlaylists = document.querySelector(".pre-playlists");
const searchBtn = document.querySelector(".searchBtn");
const search = document.querySelector(".search");
const browsePodcasts = document.querySelector(".browsePodcasts");
const login = document.querySelector("#login");
const signup = document.querySelector(".signup");
const plus = document.querySelector(".fa-plus");
const createPlaylist = document.querySelector(".create-playlist");
const newPlaylist = document.querySelector(".new-playlist");
const spotifyBody = document.querySelector(".spotify-body");

window.addEventListener("load", () =>{
    newPlaylist.classList.add("hide");
    prePlaylists.classList.remove("hide");
    search.classList.add("hide");
});
searchBtn.addEventListener("click", () =>{
    prePlaylists.classList.add("hide");
    search.classList.remove("hide");
    newPlaylist.classList.add("hide");
});
homeBtn.addEventListener("click", () => {
    prePlaylists.classList.remove("hide");
    search.classList.add("hide");
    newPlaylist.classList.add("hide");
});

createPlaylist.addEventListener("click", () => {
    newPlaylist.classList.remove("hide");
    prePlaylists.classList.add("hide");
    search.classList.add("hide");
/*  spotifyBody.innerHTML = `
    <div class="new-playlist">
                        <div class="new-playlist-head">
                            <div class="image">
                                <img src="Images/download.jpg" height="195px" width="195px">
                            </div>
                            <div class="playlist-information">
                                <p class="small">Playlist</p>
                                <p class="large">My Playlist #1</p>
                                <p class="small">Owner Name</p>
                            </div>
                        </div>
                        <div class="new-playlist-body">
                            <div class="action-bar">
                                <button type="button" class="settings">
                                    <i class="fa-solid fa-ellipsis"></i>
                                </button>
                            </div>
                            <div class="tracklist">
                                <div class="tracklist-heading">
                                    <p>#</p>
                                    <p>Title</p>
                                    <i class="fa-regular fa-clock"></i>
                                </div>
                                <div class="tracks">
                                    <p>1</p>
                                    <p>Self Destruction Mode</p>
                                    <p>2:27</p>
                                </div>
                            </div>
                        </div>
                    </div>
    `;*/
    //let newPlaylist = document.createElement("div");
    //spotifyBody.body.appendChild(newPlaylist);
});
browsePodcasts.addEventListener("click", () =>{
    window.location.href = "https://open.spotify.com/genre/0JQ5DArNBzkmxXHCqFLx2J";
});


login.addEventListener("click", () =>{
    window.location.href = "login.html";
});

signup.addEventListener("click", () =>{
    window.location.href = "signup.html";
});

plus.addEventListener("click", () =>{
    alert("hello");
});

