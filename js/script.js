window.addEventListener("DOMContentLoaded", function () {

    // Slider
    //Luam elementele noastre in variabile
    let slideIndex = 1, //este variabila care raspunde de slideul ce se arata in momentul actual
        slides = document.querySelectorAll(".slider-img"), //luam divul in care se afla divul cu imagine
        prev = document.querySelector(".prev"), //navigarea in urma
        next = document.querySelector(".next"), //navigarea inainte
        dotsWrap = document.querySelector(".slider-dots"), //obiortka tocek
        dots = document.querySelectorAll(".dot"); //primim toate punctele
    //trebuie sa ne gindim la o functie care ar ascunde slideurile si ar arata doar unul
    //putem sa ne gindim mai bine si sa ne gindim la un argument cu indexul care ne-ar arata slidul pe care vrem noi
    //trebuie sa ne gindim si la puncte, caci odata ce se schimba indexul slideului si schimba si punctele
    //vom avea nevoie si de  functie raspunzatoare de schimbul slideurilor
    //avem si butoanele din parti pe care daca vom apasa trebuie sa se schimbe slideurile
    //avem nevoie si de o functie care determina slideul actual, caci cind apasam pe un punct anume trebuie sa apara slideul corespunzator

    showSlides(slideIndex); //intrucit e function declaration putem sa chemam functia inainte de declararea ei.

    function showSlides(n) {
        //este funct care primeste un argument n pentru ca atunci cind o vom chema sa ne schimbe slideurile
        //acum trebuie sa facem ca cind ajungem la ultimul slide si dam mai departe sa se mute iarasi la primul
        if (n > slides.length) {
            //daca n este mai mare decit lungimea slideurilor, atunci sa se reintoarca la primul
            slideIndex = 1; //reintoarcerea la primul
        }
        if (n < 1) {
            //daca n e mai mic decit primul slode ne ducem la ultimul
            slideIndex = slides.length; //ne ducem la ultimul
        }
        //acum vrem sa ascundem toate slideurile pentru ca apoi sa apara doar cel care vrem noi. avem doua metode:
        slides.forEach(item => (item.style.display = "none")); //luam slideurile, pentru fiecare, folosim sageata-functie, luam prin item toate slideurile si le ascundem

        // for (let i = 0; i < slides.length; i++) {//a doua metoda in loc de forEach, in caz ca ne e mai clara.e tot aceeasi doar ca forEach e mai actuala
        //     slides[i].style.display = 'none';
        // }

        //acum mai departe lucram cu punctele.vrem ca pentru fiecare punct sa ii luam clasul active si apoi il vom pune doar punctului care corespunde cu slideul nostru
        dots.forEach(item => item.classList.remove("dot-active")); //aici pentru class nu e nevoie sa punem punct

        slides[slideIndex - 1].style.display = "block"; //trebuie sa facem ca sa apara anume slideul de care noi avem nevoie
        //numaratoarea se incepe de la zero, de aceea in paranteza patrata scriem nr slideului(1) minus unu si vom avea primul slid(0)
        dots[slideIndex - 1].classList.add("dot-active"); //acelasi lucru facem cu punctele
    } //sfirsitul functiei showSlides
    //creem o functie care va mari indexul.Cind apasam pe sageata next indexul va creste.Asta noi si facem.
    function plusSlides(n) {
        showSlides((slideIndex += n)); //deodata facem ca aceasta functie sa cheme functia showSlides si ca argument cu indexul modificat
    }
    //creem o functie care sa determine slideul actual si sa il arate
    function currentSlide(n) {
        showSlides((slideIndex = n)); //indexul e egal cu n
    }

    prev.addEventListener("click", function () {
        //pentru sageataa prev , eveniment, calbackfunction fara argumente
        plusSlides(-1); //chemam functia plusSlides cu index -1 caci merge inapoi. adica de la slideul actual facem un index -1
    });

    next.addEventListener("click", function () {
        //pentru next
        plusSlides(1); //se aduna indexul cu 1
    });
    //acum trebuie de modificat punctele ca atunci cind facem click sa se schimbe slideurile
    dotsWrap.addEventListener("click", function (event) {
        //folosim delegirovanie, pentru ca chiar de se vor aduna imagini sa lucreze
        for (let i = 0; i < dots.length + 1; i++) {
            //noi nu lucram cu stilurile si de aceea folosim +1....nu cam am inteles.... luam toate butoanele,
            if (
                event.target.classList.contains("dot") &&
                event.target == dots[i - 1]
            ) {
                //verificam elementul pe care clicam la anumiti parametri si facem ceva. Daca avem elementul, daca el are clasul dot si trebuie sa stim nr acestui punct.[i-1]
                currentSlide(i);
            }
        }
    });


    //tab
    let tab = document.querySelectorAll(".menu_item_tab"), //menu elemen
        info = document.querySelector(".bar_menu_box"), // menu conteiner
        tabContent = document.querySelectorAll(".tab_content"); // conteiner with title, text, img

    function hideTabContent(a) {
        //ascundem conteinerul
        for (let i = a; i < tabContent.length; i++) {
            tabContent[i].classList.remove("show"); //dezactivam clasul show
            tabContent[i].classList.add("hide"); //activam clasul hide
        }
    }

    hideTabContent(1); //reese ca a=1, se va incepe de la primul conteiner

    function showTabContent(b) {
        if (tabContent[b].classList.contains("hide")) {
            //conditia ca daca tabContent contine clasul hide
            tabContent[b].classList.remove("hide"); // il inlaturam pe hide
            tabContent[b].classList.add("show"); //il adaugam pe show
        }
    }

    info.addEventListener("click", function (event) {
        //delegation. pentru conteinerul parinte info
        let target = event.target; //event.target este elementulpe care a avut loc evenimentul. Titlul de meniu vlojenii in conteinerul parinte.
        if (target && target.classList.contains("menu_item_tab")) {
            //verificam daca am facut click pe info-header-tab
            for (let i = 0; i < tab.length; i++) {
                //atita timp cit avem taburi. comparam valorile lui event ca sa corespunda cu valoarea lui info-header-tab pe care apasam
                if (target == tab[i]) {
                    //daca acolo unde noi am apasat(target), coincide cu un anume tab, atunci vom executa urmatoarele actiuni:
                    hideTabContent(0); //ascundem toate taburile, de aceea punem zero
                    showTabContent(i); //scoatem anume tabul numarul caruia coincide cu i. i se duce in locul lui b. si iese continutul
                    break;
                }
            }
        }
    });
//creem submeniu
    var el = document.getElementsByClassName('menu-item');
    for (var i = 0; i < el.length; i++) {
        el[i].addEventListener("mouseenter", showSub, false);
        el[i].addEventListener("mouseleave", hideSub, false);
    }

    function showSub(e) {
        if (this.children.length > 1) {
            this.children[1].style.height = "auto";
            this.children[1].style.overflow = "visible";
            this.children[1].style.opacity = "1";


        } else {
            return false;
        }
    }

    function hideSub(e) {
        if (this.children.length > 1) {
            this.children[1].style.height = "0px";
            this.children[1].style.overflow = "hidden";
            this.children[1].style.opacity = "0";

        } else {
            return false;
        }
    }

});