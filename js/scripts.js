let btn = document.getElementById('showMob');
btn.addEventListener('click', () => {
    let state = btn.dataset.state;
    let arr = Array.from(document.querySelectorAll('.mob-invisible'));
    if(state === "invisible"){
        arr.forEach(function(item, i, arr) {
            item.style.display = 'block';
        });
        btn.dataset.state="visible";
    }else{
        arr.forEach(function(item, i, arr) {
            item.style.display = 'none';
        });
        btn.dataset.state="invisible";
    }
});
