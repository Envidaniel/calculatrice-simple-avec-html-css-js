
    const ecran = document.getElementById('ecran');
    const boutons = document.querySelectorAll('.bouton');

    let operation = '';

    boutons.forEach(bouton => {
        bouton.addEventListener('click', () => {
            const valeur = bouton.dataset.valeur;

            if (valeur === 'C') {
                operation = '';
                ecran.textContent = '0';
            } else if (valeur === '=') {
                try {
                    operation = eval(operation).toString();
                    ecran.textContent = operation;
                } catch {
                    ecran.textContent = 'Erreur';
                    operation = '';
                }
            } else {
                operation += valeur;
                ecran.textContent = operation;
            }
        });
    });