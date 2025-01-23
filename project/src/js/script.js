'use strict'

document.addEventListener('DOMContentLoaded', () => {
    const mapBtn = document.querySelector('#mapBtn'),
        labBtn = document.querySelector('#labBtn');

    mapBtn.addEventListener('click', () => {
        window.location.href = '/project/index3.html'
    })
    
    labBtn.addEventListener('click', () => {
        window.location.href = '/project/index3.html'
    })

    const myModal = document.getElementById('myModal')
    const myInput = document.getElementById('myInput')

    myModal.addEventListener('shown.bs.modal', () => {
        myInput.focus()
    })
});


