import React, { useEffect, useRef, useState } from 'react'

const Modal = () => {
    const [showModal, setShowModal] = useState(false)
    const modalRef = useRef(null)

    useEffect(() => {
        if(showModal) {
            modalRef.current.showModal();
        } else {
            modalRef.current.close();
        }
    },[showModal]);

    const handleShowModal = () => {
        setShowModal(true)
    }

    const closeModal = () => {
        setShowModal(false)
    }

    return (
        <div>
            <button onClick={handleShowModal}>Show Modal</button>
            <dialog ref={modalRef}>
                <div>
                    This is a pop up...{' '}
                    <button onClick={closeModal}>Close</button>
                </div>
            </dialog>
        </div>
    )
}

export default Modal