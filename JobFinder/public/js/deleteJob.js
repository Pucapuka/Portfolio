document.addEventListener('DOMContentLoaded', () => {
    const deleteButtons = document.querySelectorAll('.delete');

    deleteButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            const jobId = event.target.closest('li').dataset.id;

            if (confirm('Você tem certeza que deseja deletar esta vaga?')) {
                fetch(`/jobs/delete/${jobId}`, {
                    method: 'DELETE'
                })
                .then(response => {
                    if (response.ok) {
                        event.target.closest('li').remove();
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
