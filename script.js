        const produtos = {
            batataInglesa: 5.00,
            batataBaroa: 7.00,
            batataDoce: 4.00,
            pimentao: 1.00,
            alho: 10.00,
            cebola: 3.00,
            cebolaRoxa: 6.00,
            cebolinha: 1.50,
            alface: 1.50,
            agriao: 3.50,
            rucula: 2.50,
            espinafre: 3.00,
            couve: 1.50,
            couveFlor: 5.00,
            inhame: 4.50,
            aipim: 3.50,
            tomate: 6.00,
            pepino: 4.50,
            chuchu: 5.50,
            abobora: 7.00,
            abobrinha: 3.00
        };

        document.querySelectorAll('input[type="number"]').forEach(input => {
            input.addEventListener('input', calcularTotal);
        });

        function calcularTotal() {
            let total = 0;

            for (const produto in produtos) {
                const quantidade = document.getElementById(produto).value;
                total += quantidade * produtos[produto];
            }

            document.getElementById('total').innerText = total.toFixed(2);

            const valorPago = parseFloat(document.getElementById('valorPago').value);
            const troco = valorPago - total;
            document.getElementById('troco').innerText = troco.toFixed(2);
        }
