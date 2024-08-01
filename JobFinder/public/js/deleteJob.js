document.addEventListener('DOMContentLoaded', () => {
    const deleteForms = document.querySelectorAll('.delete-form');

    deleteForms.forEach(form => {
        button.addEventListener('submit', (event) => {
            event.preventDefault();
            
            const jobId = form.dataset.id;

            if (confirm('Você tem certeza que deseja deletar esta vaga?')) {
                fetch(`/jobs/delete/${jobId}`, {
                    method: 'DELETE'
                })
                .then(response => {
                    if (response.ok) {
                        form.closest('li').remove();
                    } else {
                        alert('Erro ao deletar a vaga');
                    }
                })
                .catch(error => {
                    console.error('Erro:', error);
                    alert('Erro ao deletar a vaga');
                });
            }
        });
    });
});
