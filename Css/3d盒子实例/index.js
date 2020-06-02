(function(){

    //鼠标按住
    document.addEventListener('mousedown',function(){
        //鼠标按住，终止动画
        let aniUl = document.getElementById('ani-ul')
        aniUl.classList.remove('with-animate')
        console.log(1);
        
    })

    //鼠标按住
    document.addEventListener('mouseup',function(){
        //鼠标按住，终止动画
        let aniUl = document.getElementById('ani-ul')
        aniUl.classList.add('with-animate')
        console.log(2);
        
    })
})()