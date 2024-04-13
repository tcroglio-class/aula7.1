function switchMode() {

    var backgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--background-primary-color');

    if (backgroundColor == 'white') { /* TRANSFORMA EM PRETO */
        /* dark mode all */
        document.documentElement.style.setProperty('--background-primary-color', 'rgb(65, 63, 63)');  /* cinza escuro background */
        document.documentElement.style.setProperty('--font-primary-color', 'white'); /* branco do texto */
        document.documentElement.style.setProperty('--font-secundary-color', 'gold'); /* dourado dos títulos */

        /* dark mode header and footer */
        document.documentElement.style.setProperty('--background-both-primary-color', '#232222'); /* cinza escuro do header e do footer de baixo */
        document.documentElement.style.setProperty('--background-both-secundary-color', 'rgb(50, 50, 50)'); /* cinza mais claro do footer de cima */
        document.documentElement.style.setProperty('--font-both-primary-color', 'white'); /* branco do texto */

        let p = document.getElementById('darkorlight');
        p.innerHTML = "LIGHT MODE"

    } else { /* TRANSFORMA EM PRETO */

        /* white mode all */
        document.documentElement.style.setProperty('--background-primary-color', 'white');
        document.documentElement.style.setProperty('--font-primary-color', 'black');
        document.documentElement.style.setProperty('--font-secundary-color', 'black');

        /* white mode all */
        document.documentElement.style.setProperty('--background-both-primary-color', 'grey');
        document.documentElement.style.setProperty('--background-both-secundary-color', 'lightgrey');
        document.documentElement.style.setProperty('--font-both-primary-color', 'black');
        let p = document.getElementById('darkorlight');
        p.innerHTML = "DARK MODE"
    }
}