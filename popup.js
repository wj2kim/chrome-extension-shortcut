
/*
iframe link url : google doc - 알서포트 업무링크 라이브러리
*/
const link = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSTunQ8bnaysSFF_oFf2hHxZE0Ubfpd6-xKH9p5a2UGMBrtFRxFuyRAdNh42kb06ETZcZpG35pLvWCI/pubhtml?widget=true&amp;headers=false';

const loader = document.querySelector('.loader');
const libraryWrapper = document.querySelector('.link-library-wrapper');

const createState = (state) => {
    return new Proxy(state, {
      set(target, property, value) {
        target[property] = value; 
        render(); 
        return true;
  }
    });
  };

const state = createState({
isloading:true
});

const renderIframe = (iframe) => {
    setTimeout(() => {
        libraryWrapper.appendChild(iframe)
        const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
        if(iframeDoc.readyState === 'complete') {
            state.isloading = false;
        }
    }, 200);
}

const render = () => {
    if(state.isloading){
        var iframe = document.createElement("iframe");
        iframe.setAttribute("loading","lazy"); // page appears before loads
        iframe.src = link;
        iframe.className ="link-library";  
        renderIframe(iframe);
    }
    if(!state.isloading){
        document.querySelector('[data-binding="loader"]').style.display="none";
    }
};

render();



// var iframe = document.createElement("iframe");
// iframe.setAttribute("loading","lazy"); // page appears before loads
// iframe.src = link;
// iframe.style.display = "none";
// iframe.onload = () => {
    //   iframe.style.display = "block";  
    // };
    
// iframe.setAttribute("loading","eager"); // load, then page appears





// libraryWrapper.appendChild(iframe);



/*
test area
*/




   

