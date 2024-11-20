const navbar = document.getElementById('navbar');
const bubble = document.querySelector('.bubble');

// script.js
const hamburger = document.querySelector('.hamburger');
const extraMenu = document.getElementById('extra-menu');

hamburger.addEventListener('click', () => {
  extraMenu.classList.toggle('active'); // Adiciona ou remove a classe 'active'
});



window.onscroll = function() {
    if (window.scrollY > 1) {
        navbar.classList.add('fixed'); // Adiciona a classe 'fixed' se a rolagem for maior que fixedHeight
    } else {
        navbar.classList.remove('fixed'); // Remove a classe 'fixed' caso contrário
    }
};



document.querySelectorAll('.bubble').forEach((bubble) => {
    bubble.style.animationDuration = `${Math.random() * 2 + 3}s`;
    bubble.style.animationTimingFunction = 'ease-in-out';
});



function expandCard(button) {
    // Recolhe todos os outros cards antes de expandir o card atual
    document.querySelectorAll('.slide-card').forEach(c => {
        c.classList.remove('expanded-card');
        const paragraph = c.querySelector('p');
        if (paragraph) {
            paragraph.textContent = ""; // Limpa o texto dos outros <p>
        }
    });
    
    // Expande apenas o card que contém o botão clicado
    const card = button.closest('.slide-card');
    card.classList.add('expanded-card');

    // Encontra o elemento <p> dentro do card e adiciona o texto do atributo data-text
    const paragraph = card.querySelector('p');
    const text = card.querySelector('div').getAttribute('data-text'); // Busca o data-text do div interno
    if (paragraph) {
        paragraph.textContent = text; // Define o texto específico
    }
}

function shrinkCard(card) {
    // Remove a classe expanded quando o mouse sai do card
    card.classList.remove('expanded-card');

    // Limpa o texto do elemento <p> ao encolher o card
    const paragraph = card.querySelector('p');
    if (paragraph) {
        paragraph.textContent = ""; // Limpa o texto
    }
}


const btn = document.querySelector('#submit');

btn.addEventListener("click", function(e){
    if (!document.querySelector('#email').value == "" && !document.querySelector('#name').value == "" && !document.querySelector('#message').value == ""){        
        Swal.fire({
            title: 'Seu Email foi enviado com sucesso!',
            icon: 'success',
            iconColor: '#1F2A5C',
            showClass: {
                popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
                popup: 'animate__animated animate__fadeOutUp'
            },
            color: '#1F2A5C',
            showConfirmButton: false

            
        }).then((result) => {
        document.querySelector('contactForm').submit();
    })};
}) 




