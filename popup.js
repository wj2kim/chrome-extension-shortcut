/*
iframe link url : google doc - 알서포트 업무링크 라이브러리
*/
const link = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSTunQ8bnaysSFF_oFf2hHxZE0Ubfpd6-xKH9p5a2UGMBrtFRxFuyRAdNh42kb06ETZcZpG35pLvWCI/pubhtml?widget=true&amp;headers=false';

const initialLoadingStatus = true;

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
isloading:initialLoadingStatus
});

const render = () => {
    if(!state.isloading){
        const loaderWrapper = document.querySelector('.loader-wrapper');
        loaderWrapper.style.display="none";
    }
};

const iframe = document.createElement("iframe");
const libraryWrapper = document.querySelector('.link-library-wrapper');

iframe.style.display = "none";
libraryWrapper.appendChild(iframe);

iframe.onload = () => {
    iframe.setAttribute("loading","lazy"); // page appears before iframe loads
    iframe.className ="link-library";  
    state.isloading = false;
    iframe.style.display="block";
};

iframe.src = link;

render();



/*
test area
*/




   

