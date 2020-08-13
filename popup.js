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
        loaderWrapper.parentElement.firstElementChild.remove();
        // loaderWrapper.style.display="none"; // display: none might hold up it's resources?
    }
};

// render();

const iframe = document.createElement("iframe");
iframe.className ="link-library";  
iframe.style.display = "none";

const libraryWrapper = document.querySelector('.link-library-wrapper');
libraryWrapper.appendChild(iframe);

iframe.onload = () => {
    iframe.setAttribute("loading","lazy"); // page appears before iframe loads
    state.isloading = false;
};

iframe.src = link;
iframe.style.display="block";




/*
test area
*/




   

