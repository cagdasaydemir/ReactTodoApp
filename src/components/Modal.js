import React from 'react'

const Modal = () => {
  return (
    <div id='todoFormModal'className='modal show'>
    <div className='modal-body'>
        <form id='todoForm' className='todoForm'>
            <input id='id' hidden />
            <input name='title' className='form-control mb-3 input font-italic' placeholder='Title' />
            <textarea name='descript' className='form-control mb-3 textarea font-italic'
                placeholder='Description'></textarea>
            <button className='save-btn p-2 rounded-pill' type='button' >
                <img className='' src='./assets/images/checked.png' /> <span className='ms-1'>CREATE</span>
            </button>
        </form>
    </div>
</div>
  )
}

export default Modal