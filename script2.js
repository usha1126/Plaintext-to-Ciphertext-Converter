function show() {
    let msg = document.getElementById("pt").value;
    let alphabets = [] ;
    for(let i=65;i<=90;i++){
        alphabets.push(String.fromCharCode(i));
    }
    for(let i=97;i<=122;i++){
        alphabets.push(String.fromCharCode(i));
    }
    // let alphabets = [ 'A','B','C','D','E','F','G','H','I','J','K','L','M'
    //     ,'N','O','P','Q','R','S','T','U','V','W','X','Y','Z','a','b','c',
    //     'd','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s',
    //     't','u','v','w','x','y','z' ];
    let pt = Array.from(msg);
    let ct = [];
    let i=0;
    while(i<pt.length) {
        for(let j=0;j<alphabets.length;j++){
            if(pt[i] === alphabets[j]){
                ct.push(alphabets[j+3]);
                break;
            }
        }
        i++;
    }
     
    let hidden = ct.join("");
    document.getElementById("output").innerText = hidden;

}
