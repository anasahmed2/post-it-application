var modalBox = document.getElementById("modalDseign")
var textArea = document.getElementById("textarea")
var postAdd = document.getElementById("postAdd")
var postBtn = document.getElementById("postBtn")
var postContain;
var captionTheme;


//----------modal open close function------//
function inputOpen() {
  modalBox.style.display = "flex"
}

function modalCut() {
  textArea.style.backgroundImage = "none"
  modalBox.style.display = "none"
  allBtnTheme.style.display = "none"
  textArea.value = "";

}

//----------- color theme button function----------//

var allBtnTheme = document.getElementById("allBtnTheme")
var modalColorThemeBtn = document.getElementById("modalColorThemeBtn").addEventListener("click", function () {
  allBtnTheme.style.display = "block"
})

//----------- colors theme function----------//

function colorBtn0() {
  textArea.style.backgroundImage = "none"
  textArea.style.backgroundSize = "cover"
  console.log("hello")
}


function colorBtn1() {
  textArea.style.backgroundImage = "url(images/background-1.jpg)"
  textArea.style.backgroundSize = "cover"
  captionTheme = "url(images/background-1.jpg)"

  console.log("hello")
}

function colorBtn2() {
  textArea.style.backgroundImage = "url(images/background-2.jpg)"
  textArea.style.backgroundSize = "cover"
  captionTheme = "url(images/background-2.jpg)"
  console.log("hello")
}


function colorBtn3() {
  textArea.style.backgroundImage = "url(images/background-3.jpg)"
  textArea.style.backgroundSize = "cover"
  captionTheme = "url(images/background-3.jpg)"
  console.log("hello")
}


function colorBtn4() {
  textArea.style.backgroundImage = "url(images/background-4.jpg)"
  textArea.style.backgroundSize = "cover"
  captionTheme = "url(images/background-4.jpg)"
  console.log("hello")
}


function colorBtn5() {
  textArea.style.backgroundImage = "url(images/background-5.jpg)"
  textArea.style.backgroundSize = "cover"
  captionTheme = "url(images/background-5.jpg)"
  console.log("hello")
}


function colorBtn6() {
  textArea.style.backgroundImage = "url(images/background-6.jpg)"
  textArea.style.backgroundSize = "cover"
  captionTheme = "url(images/background-6.jpg)"
  console.log("hello")
}


function colorBtn7() {
  textArea.style.backgroundImage = "url(images/background-7.jpg)"
  textArea.style.backgroundSize = "cover"
  captionTheme = "url(images/background-7.jpg)"
  console.log("hello")
}


function colorBtn8() {
  textArea.style.backgroundImage = "url(images/background-8.jpg)"
  textArea.style.backgroundSize = "cover"
  captionTheme = "url(images/background-8.jpg)"
  console.log("hello")
}


function colorBtn9() {
  textArea.style.backgroundImage = "url(images/background-9.jpg)"
  textArea.style.backgroundSize = "cover"
  captionTheme = "url(images/background-9.jpg)"
  console.log("hello")
}

function colorBtn10() {
  textArea.style.backgroundImage = "url(images/background-10.jpg)"
  textArea.style.backgroundSize = "cover"
  captionTheme = "url(images/background-10.jpg)"
  console.log("hello")

}


var file = document.getElementById("file")
postBtn.addEventListener("click", function () {

  console.log(file.files[0])
  postContain = ` <div class="post" id="posted">
        <div class="post-head">
          <div class="post-profile-head">
            <div class="post-profile-img">
              <img src="images/my-profile.jpg" alt="" width="100%">
            </div>
            <div class="post-profile-main-p">
              <p class="post-profile-p">Burak </p>
              <p class="post-profile-p-n"> Just Now</p>
            </div>
          </div>
          <div class="post-profile-dot"><button onclick="delPost()"><i class="fa-solid fa-trash"></i></button></div>
        </div>
        <!-- textarea -->
        <div class="textarea" style="background-image: ${captionTheme};">
          <p>${textArea.value}</p>
        </div>
        <!-- photo -->
        <div class="image-post">
          <img src="${URL.createObjectURL(file.files[0])}" alt="" width='100%'>
        </div>
        <!-- like-->
        <hr>
        <div class="like">
          <div class="likes">
            <div class="like-p"><a href="javascript:void(0)"><i class="fa-solid fa-thumbs-up"></i>1 Likes</a>
            </div>
            <div class="like-p"><a href="javascript:void(0)"><i class="fa-solid fa-comment"></i>2 Comment</a>
            </div>
          </div>
          <div class="shares"><a href="javascript:void(0)"><i class="fa-solid fa-share"></i> Share</a></div>
        </div>
        <hr>
    
        <!-- comment 1 -->
        <div class="comment">
          <div class="comment-img">
            <img src="images/car.jpg" alt="" width="100%">
          </div>
          <div class="comment-comment">
            <p class="comment-p">Eymen</p>
            <p class="comment-pp">Nice❤️</p>
            <div class="comment-p-p">
              <p><a href="javascript:void(0)">Like</a></p>
              <p><a href="javascript:void(0)">Replay</a></p>
              <p><a href="javascript:void(0)">Translate</a></p>
              <p class="comment-p-t">Just Now</p>
            </div>
          </div>
        </div>
    
        <!-- comment 2 -->
        <div class="comment">
          <div class="comment-img">
            <img src="images/zehra.jpeg" alt="" width="100%">
          </div>
          <div class="comment-comment">
            <p class="comment-p">Zehar</p>
            <p class="comment-pp">Cool😍</p>
            <div class="comment-p-p">
              <p><a href="javascript:void(0)">Like</a></p>
              <p><a href="javascript:void(0)">Replay</a></p>
              <p><a href="javascript:void(0)">Translate</a></p>
              <p class="comment-p-t">Just Now</p>
            </div>
          </div>
    
        </div>
    
        <div class="user-comment">
          <div class="user-input"><input type="text">
          </div>
          <div class="user-comment-btn">
            <button><i class="fa-solid fa-paper-plane"></i></button>
            <button><i class="fa-solid fa-paperclip"></i></button>
            <button><i class="fa-solid fa-face-smile"></i></button>
            <button><i class="fa-solid fa-camera"></i></button>
          </div>
        </div>
      </div>`

  
  postAdd.innerHTML = postContain + postAdd.innerHTML;
  textArea.style.backgroundImage = "none";
  modalBox.style.display = "none";
  allBtnTheme.style.display = "none";
  textArea.value = "";
  captionTheme = "none";
})


function delPost() {
  event.target.closest("#posted").remove();
}