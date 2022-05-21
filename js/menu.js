function closeSide() {
    var oneLink = document.getElementsByClassName('link-close');
    var closeButton = document.getElementById('closeSide').click();
    console.log(closeButton);

}

window.onload = function (){
    var modal = document.getElementById('myModal');
    var bodyy = document.getElementsByTagName('body')[0];
    console.log(bodyy)

    var btn = document.getElementById("myBtn");


    var span = document.getElementsByClassName("close")[0];


    btn.onclick = function() {
        modal.style.display = "block";
        bodyy.style.overflow = "hidden";
    }


    span.onclick = function() {
        modal.style.display = "none";
        bodyy.style.overflow = "auto";
    }


    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
            bodyy.style.overflow = "auto";
        }
    }


        let lablee = document.getElementsByTagName('label')[0];
        let closee = document.getElementsByClassName('close')[0];
        let modalWindow = document.getElementsByClassName('modal-inner')[0];
        let allModalWindow = document.getElementsByClassName('modal-content-two')[0];
        console.log(allModalWindow);
        document.addEventListener('click', function(e) {
            if (e.target.class != 'modal-inner') {
                modalWindow.classList.add('hide');
            }
            else {
                allModalWindow.style.display = 'none';
            }
        });

}


