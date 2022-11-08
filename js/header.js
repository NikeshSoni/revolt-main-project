
        const clickBtn = document.querySelector(".Cancel").addEventListener("click", function data(cancel) {
            
            let getClass = document.querySelector(".info").classList.add("d-none");

        })

        const change = document.querySelector(".black-bike").addEventListener("click", function main(bikeChange) {

            bikeChange.preventDefault();
            let black =   document.querySelector(".black-bike-main").classList.add("active");

            var red = document.querySelector(".red-bike").classList.add("un-active");

        });


        const changeRed = document.querySelector(".rabel-red").addEventListener("click", function main(bikeChange1) {
            bikeChange1.preventDefault();
            let black = document.querySelector(".black-bike-main").classList.add("un-activ");

            var red = document.querySelector(".red-bike").classList.add("active");
        });
       
        

    //     const slides = document.querySelectorAll(".slide-img");

    //     let counter = 0 ;

    //     slides.forEach(
    //         (slide , index ) => {
    //             slide.style.left = `${index * 100}%`
    //         }
    //     )

    //     const changeMain = document.querySelector(".main-1").addEventListener("click", function main(bikeChange1) {
              
    //         counter--
    //         mainImg();
    //     });


    //     const changeNew = document.querySelector(".main-2").addEventListener("click", function mainImg(bikeChange1) {

    //         counter++
    //         mainImg();


    //     })


        
    //     const mainImg = () => {
    //         slides.style.transfrom = `translateX(- ${counter * 100}%)`
    //    }