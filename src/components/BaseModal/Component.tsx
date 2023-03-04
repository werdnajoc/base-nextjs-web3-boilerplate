import React from 'react'

import Modal from 'react-bootstrap/Modal'

const Component: React.FC<any> = ({
  handleClose = () => {},
  show = false,
  title,
  children,
  hideDefaultHeader,
  classNameTitle,
  size,
  hideCloseButton,
}) => {
  return (
    <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false} size={size}>
      {!hideDefaultHeader && (
        <Modal.Header closeButton={!hideCloseButton}>
          {title && <Modal.Title className={classNameTitle}>{title}</Modal.Title>}
        </Modal.Header>
      )}

      {children && <Modal.Body>{children}</Modal.Body>}
    </Modal>
  )
}

export { Component }
