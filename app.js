
   const digiContainer = document.querySelector(".digi-container");
   const searchInput = document.querySelector("#digi-input");
   const searchBtn = document.querySelector(".btn-search");
   
   let url = 'https://digimon-api.vercel.app/api/digimon';
    let digiCount = 209;



    const colors = {
        "In Training": "#FCF7DE",
        "Training": "#FCF7DE",
        "Rookie": "#FFBF00",
        "Champion": "#40E0D0",
        "Fresh": "#9FE2BF",
        "Ultimate": "#FF7F50",
        "Armor": "#DEFDE0",
        "Mega": "#FDDFDF"
    }




        async function getDigi(){
        const response = await fetch(url, {method: 'GET'})
        .then((response) => response.json())
        .then((data) => createDigiBox(data));
        
        }
        const createDigiBox = (digimon) =>{
            for(let i=0; digiCount>=i; i++){
                const name = digimon[i].name;
                const img = digimon[i].img;
                const level = digimon[i].level;
                const id = i+1;
                const color = colors[level];
                const digiEL = document.createElement('div');
                digiEL.classList.add('digi-box');
                digiEL.style.backgroundColor = `${color}`
                
                digiEL.innerHTML = `
                <img src="${img}" alt="${name} image">
                <h4 class="digi-name">${name}</h4>
                <p class="digi-level">${level}</p>
                <p class="digi-level">#${id}</p>
                `;
                digiContainer.appendChild(digiEL);
            }
        };


        getDigi();

        searchInput.addEventListener('input', function(e){
            const digiNames = document.querySelectorAll('.digi-name');
            const search = searchInput.value.toLowerCase();
        
            digiNames.forEach((digiName) => {
                digiName.parentElement.style.display = 'block';
        
                if(!digiName.innerHTML.toLowerCase().includes(search)) {
                    digiName.parentElement.style.display = 'none';
                }
        
        
        
        
        
            });
        
        
        
        
        
        
            
        });