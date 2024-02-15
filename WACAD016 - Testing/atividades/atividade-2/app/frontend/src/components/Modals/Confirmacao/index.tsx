import React from 'react';
import { Button, Modal } from 'react-bootstrap';

interface ConfirmationModalProps {
  isShow: boolean;
  title: string;
  message: string;
  onConfirm: () => void;
  onCancel: () => void;
}

export default function ConfirmationModal(props: ConfirmationModalProps) {
  return (
    <Modal show={props.isShow} onHide={props.onCancel}>
      <Modal.Header closeButton={true}>
        <Modal.Title>{props.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{props.message}</Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onCancel}>Cancelar</Button>
        <Button onClick={props.onConfirm}>Confirmar</Button>
      </Modal.Footer>
    </Modal>
  );
}
