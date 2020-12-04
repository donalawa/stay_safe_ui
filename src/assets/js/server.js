const crop = {
    name:'',
    image_url:['','','',''],
    market_value:'',
    progress_level:'',
    period: `${'Cultivation'||'Harvests'}`,
    description:'',
    cultivation_duration:'',
    planting_period:'',
    
}
let rawCropData = [];
const flashSlider = document.querySelector('.flash-sale-slide')


console.log('**** Fectching user data from database ******');

const fetchdata = async() =>{
    
        let data = await fetch('../assets/crops.json');
        data = await data.json();
        return data
}

(async() =>{
    let rawData = await fetchdata()
    console.log(rawData)
})()
console.log('Whats next')

fetch('../assets/crops.json')
.then(res =>{
    return  res.json()
})
.then(rawData =>{
    rawCropData = rawData;
    let flashSlideCard = document.createElement('div')
        
        flashSlideCard.classList.add("card")
        flashSlideCard.classList.add("flash-sale-card")
    const crops = rawData;

        for(let index = 0;index<crops.length;index++){

            let crop = crops[index];
            let flashSlideCard = document.createElement('div')
            
            flashSlideCard.classList.add("card")
            flashSlideCard.classList.add("flash-sale-card")
            
            flashSlideCard.innerHTML =   
                `<div class = "card-body">
                    <a href = "single-product.html">
                        <img src = "${crop.image_url[0]}" alt = ""  style="height:100px">
                        <span class = "product-title">${crop.name}</span>
                            <p class = "sale-price"><small>mkt Value</small> :${crop.market_value}</p>
                            <!-- <p class = "sale-price">$7.99</p> -->
                            <span class = "progress-title">${crop.period}</span>
                            <!-- Progress Bar-->
                            <div class = "progress">
                                <div class = "progress-bar" 
                                role = "progressbar" 
                                style = "width: ${crop.progress_level}" 
                                aria-valuenow = "90" 
                                aria-valuemin = "0" 
                                aria-valuemax = "100">
                            </div>
                            </div>
                    </a>
                </div>`
            console.log(crop.progress_level)
            flashSlider.appendChild(flashSlideCard)
        }
        
    
   
}).then(ans =>{
    console.log('finished loaging')
})
.catch(err =>{
    console.log(err)
    console.log('An error occcured')
})

// const fetchData = async(url) =>{

//     return (async(url) =>{ 
//        let response = await fetch(`${url}`)
//        let raw = await response.json();
//        return raw 
 
//     })(url)
 
//  }

//  const bringData = async(url) =>{
 
//     return (async(url) =>{
//        let data = await fetchData(`${url}`);
//        return data;
//     })(url)
 
//  }
 
//  const orderContent = async() =>{
    
//   return   (async() =>{
//        allRepos = await bringData(`../assets/crops.json`); 
//        console.log(allRepos)
//     })()
//  }
 
// const updateContent = async() =>{
//     let data = await orderContent();
//     console.log(data)
// };

// console.log( updateContent())