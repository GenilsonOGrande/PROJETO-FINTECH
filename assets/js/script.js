document.addEventListener('DOMContentLoaded', function() {
          var saldoElement = document.getElementById('saldo');
          var saldo = parseFloat(saldoElement.innerText.replace('Saldo Atual: R$ ', '').replace(',', '.'));

          if (saldo < 0) {
            saldoElement.style.color = 'red';
          } else if (saldo > 0) {
            saldoElement.style.color = 'green';
          }
        });