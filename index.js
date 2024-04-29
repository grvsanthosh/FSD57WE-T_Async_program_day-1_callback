let h1ele = document.createElement('h1')

document.body.append(h1ele);

setTimeout(()=>{
    h1ele.innerText = "10";
    setTimeout(()=>{
        h1ele.innerText = "9";  
        setTimeout(()=>{
            h1ele.innerText = "8";
            setTimeout(()=>{
                setTimeout(()=>{
                    h1ele.innerText = "7";
                    setTimeout(()=>{
                        h1ele.innerText = "6";
                        setTimeout(()=>{
                            h1ele.innerText = "5";
                            setTimeout(()=>{
                                h1ele.innerText = "4";
                                setTimeout(()=>{
                                    h1ele.innerText = "3";
                                    setTimeout(()=>{
                                        h1ele.innerText = "2";
                                        setTimeout(()=>{
                                            h1ele.innerText = "1";
                                            setTimeout(()=>{
                                                setTimeout(()=>{
                                                    h1ele.innerText = "Happy Independence Day";

                                                },1000);
                                            },1000);
                                        },1000);
                                    },1000);
                                },1000);
                            },1000);
                        },1000);
                    },1000);
                },1000);
            },1000);
        },1000);
    },1000);
},1000);

